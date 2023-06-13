/* eslint-disable no-console */
// noinspection DuplicatedCode

const WebSocket = require('ws');

const jwt = require('jsonwebtoken');

// web socket
const wss = new WebSocket.Server({
  port: 8085,
  clientTracking: true,
});

// Map of connected clients (user - client id) pairs
const connectedUsers = new Map();
const cloudMessageBuffer = new Map();

function sendBuffer(msg, newMessage, dest, source) {
  cloudMessageBuffer.get(dest)
    .push(JSON.stringify(newMessage));
  // send update to sender

  console.log('buffering message \n');
  console.log(cloudMessageBuffer);
  const update = {
    type: 'buffered',
    to: dest,
    text: msg.data.message,
  };
  connectedUsers.get(source)
    .send(JSON.stringify(update));
}

// connection event
wss.on('connection', (ws, req) => {
  let client = '';
  let token;
  // client authentication get the JWT (token)
  // the webserver
  if (req.headers.token !== '') {
    token = req.headers.token;
  }
  if (ws.protocol !== '') { // the user's token
    token = ws.protocol;
    console.log('protocol', ws.protocol);
  }

  // verify the user - retrieve the username from the token
  jwt.verify(token, 'this_is_a_secret', undefined, (err, decoded) => {
    if (err) {
      console.log(`Error: ${err}`);
      return;
    }
    client = decoded.name;
    console.log(`New connection from user ${client}`);
    if (client !== 'webserver') {
      // add client to map of clients
      // key is the username, value is the ws address
      connectedUsers.set(String(client), ws);
      if (!cloudMessageBuffer.has(String(client))) {
        cloudMessageBuffer.set(String(client), []);
      } else {
        const username = client;

        console.log(`got here and the username is: ${username}`);

        if (cloudMessageBuffer.has(username)) {
          const socket = connectedUsers.get(username);
          cloudMessageBuffer.get(username)
            .forEach((v) => {
              console.log(v);
              socket.send(v);
            });
          cloudMessageBuffer.set(username, []);
        }
      }
    }
  });

  // message event: sent by the webserver
  ws.on('message', (message) => {
    console.log(`Received message ${message} from user ${client}`);
    if (client === 'webserver') {
      // convert the message to JSON
      const msg = JSON.parse(message);

      if (msg.type === 'message') {
        const dest = msg.data.to;
        const source = msg.data.from;

        console.log(msg);

        if (connectedUsers.has(source)) {
          const newMessage = {
            type: 'new message',
            data: {
              from: msg.data.from,
              message: msg.data.message,
            },
          };

          if (connectedUsers.has(dest)) {
            connectedUsers.get(dest)
              .send(JSON.stringify(newMessage));

            const update = {
              type: 'delivered',
              to: dest,
              text: msg.data.message,
            };
            connectedUsers.get(source)
              .send(JSON.stringify(update));
          } else {
            sendBuffer(msg, newMessage, dest, source);
          }
        }
      }

      if (msg.type === 'new user') {
        const username = msg.data;

        console.log(`got here and the username is: ${username}`);

        if (cloudMessageBuffer.has(username)) {
          const socket = connectedUsers.get(username);
          cloudMessageBuffer.get(username)
            .forEach((v) => {
              console.log(v);
              socket.send(v);
            });
          cloudMessageBuffer.set(username, []);
        }
      }

      if (msg.type === 'leave') {
        if (client === 'webserver') {
          connectedUsers.delete(JSON.parse(message).data.username);
          console.log(`${JSON.parse(message).data.username} left`);
        }
      }
    }
  });

  // welcome message to connected clients
  const greet = { type: 'welcome' };
  ws.send(JSON.stringify(greet));
});
