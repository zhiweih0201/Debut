/* eslint-disable no-console,no-underscore-dangle */
// import express
const express = require('express');

// create our express app
const webapp = express();

const cors = require('cors');

// configure the app to handle JSON and to parse request body
webapp.use(express.json());
webapp.use(express.urlencoded({
  extended: true,
}));

// tell express to use cors
webapp.use(cors({
  credentials: true,
  origin: true,
}));

// security feature. JSON web token - https://jwt.io
const jwt = require('jsonwebtoken');

// Websocket configuration
// JSON web token creation
const serverToken = jwt.sign({
  name: 'webserver',
}, 'this_is_a_secret', undefined, undefined);

// web socket
const WebSocket = require('ws');

// websocket server url
const url = 'ws://localhost:8085/';

const dbLib = require('./dbOperations');

const uri = 'mongodb+srv://350debut:350debut@cluster0.itb3d.mongodb.net/debut?retryWrites=true&w=majority';

let db;

// websocket connection with jwt
const connection = new WebSocket(url, {
  headers: { token: serverToken },
});

connection.onopen = () => {
  connection.send('["webserver"]');
};

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`);
};

connection.onmessage = (e) => {
  console.log(e.data);
};

// login endpoint - returns the user's jwt
// adds the user to the set of users if first time
webapp.post('/users/', async (req, res) => {
  if (!req.body.user || !req.body.password) {
    res.status(400)
      .json({ error: 'missing username or password' });
    return;
  }

  const result = await dbLib.getUser(db, req.body.user);
  const lastFailed = result.user.lastFailed.filter((val) => val > Date.now() - 86400);

  if (lastFailed.length === 0) {
    result.user.locked = false;
  }

  if (!result.user.locked) {
    if (result.user.password === req.body.password) {
      const userToken = jwt.sign({
        name: req.body.user,
      }, 'this_is_a_secret', { expiresIn: '1h' });

      // Notify WS Server to update all connected clients
      const msg = {
        type: 'new user',
        data: req.body.user,
      };

      console.log(msg);
      connection.send(JSON.stringify(msg));
      res.status(200)
        .json({ token: userToken });
    } else {
      if (lastFailed.length === 3) {
        await dbLib.updateUser(db, result.user._id, lastFailed, true);
      }

      if (lastFailed.length < 3) {
        lastFailed.push(Date.now());
      } else {
        const min = Math.min(...lastFailed);

        const index = lastFailed.indexOf(min);
        lastFailed[index] = Date.now();
      }

      res.status(401)
        .json({ error: 'password incorrect' });
    }
  } else {
    res.status(401)
      .json({ error: 'account is locked' });
  }

  await dbLib.updateUser(db, result.user._id, lastFailed, result.user.locked);

  // create and send JWT to a user
});

webapp.post('/login/', async (req, res) => {
  if (
    !req.body.user
    || !req.body.password
  ) {
    res.status(400)
      .json({ error: 'missing some field for the project' });
    return;
  }

  try {
    const result = await dbLib.addUser(db, req.body.user, req.body.password);
    res.status(result.statusCode)
      .json(result);
  } catch (e) {
    res.status(500)
      .json({ error: 'Database is dead for now' });
  }
});

webapp.put('/login/', async (req, res) => {
  if (
    !req.body.user
    || !req.body.token
    || !req.body.new
  ) {
    res.status(400)
      .json({ error: 'missing some field for the project' });
    return;
  }

  jwt.verify(req.body.token, 'this_is_a_secret_key', async (err) => {
    if (err) {
      // check if the error is an expiration error
      if (err.name === 'TokenExpiredError') {
        res.status(302)
          .json({ error: 'session expired' });
        return;
      }
    }

    try {
      const result = await dbLib.updatePassword(db, req.body.user, req.body.new);
      res.status(result.statusCode)
        .json(result);
    } catch (e) {
      res.status(500)
        .json({ error: 'Database is dead for now' });
    }
  });
});

// verify session
webapp.post('/verify', (req, res) => {
  console.log('verify session user');
  if (!req.body.token) {
    res.status(400)
      .json({ error: 'missing token' });
    return;
  }
  // verify the user token
  jwt.verify(req.body.token, 'this_is_a_secret_key', (err) => {
    if (err) {
      // check if the error is an expiration error
      if (err.name === 'TokenExpiredError') {
        res.status(302)
          .json({ error: 'session expired' });
        return;
      }
    }
    res.json({ message: 'session valid' });
  });
});

// new message endpoint
webapp.post('/message/', (req, res) => {
  if (!req.body.to || !req.body.from || !req.body.message) {
    res.status(400)
      .json({ error: 'missing to or from or message' });
    return;
  }
  // create message for the WS server
  const msg = {
    type: 'message',
    data: {
      to: req.body.to,
      from: req.body.from,
      message: req.body.message,
    },
  };

  console.log(msg);
  // Notify the ws Server
  connection.send(JSON.stringify(msg));
  res.json({
    message: 'message received',
  });
});

// new message endpoint
webapp.post('/leave/', (req, res) => {
  if (!req.body.username) {
    res.status(400)
      .json({ error: 'missing username to be logged out from' });
    return;
  }
  // create message for the WS server
  const msg = {
    type: 'leave',
    data: {
      username: req.body.username,
    },
  };
  // Notify the ws Server
  connection.send(JSON.stringify(msg));
  res.json({
    message: 'leave confirmed',
  });
});

webapp.use((_req, res) => {
  res.status(404);
});

// Server port
const port = 8080;
// Start web server
webapp.listen(port, async () => {
  db = await dbLib.connect(uri);
  console.log(`Server running on port:${port}`);
});

module.exports = webapp;
