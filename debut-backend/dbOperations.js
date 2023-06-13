/* eslint-disable no-console,no-underscore-dangle */
// 1. Import MongoDB driver
const { MongoClient } = require('mongodb');

// 2. Connect to the DB and return the connection object
const connect = async (url) => {
  try {
    const conn = (await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })).db();
    console.log(`Connected to the database: ${conn.databaseName}`);
    return conn;
  } catch (err) {
    console.error(err);
    throw new Error('could not connect to the db');
  }
};

async function addUser(db, user, password) {
  try {
    // retrieve all the players with the same name
    const users = await db.collection('users')
      .find({ name: user })
      .toArray();

    // then the player do not exist yet
    if (users.length === 0) {
      const id = await db.collection('users')
        .insertOne({
          name: user,
          password,
          lastFailed: [],
          locked: false,
        });

      return {
        id: id.insertedId.toString(),
        statusCode: 201,
      };
    }

    return {
      statusCode: 403,
    };
  } catch (err) {
    console.error(err);
    throw new Error('could not insert user');
  }
}

async function getUser(db, user) {
  try {
    // retrieve all the players with the same name
    const users = await db.collection('users')
      .find({ name: user })
      .toArray();

    if (users.length === 0) {
      return {
        user: undefined,
        statusCode: 404,
      };
    }

    return {
      user: users[0],
      statusCode: 200,
    };
  } catch (err) {
    console.error(err);
    throw new Error('could not get user by the name');
  }
}

async function updateUser(db, id, lastFailed, locked) {
  try {
    const users = await db.collection('users')
      .find({ _id: id })
      .toArray();

    if (users.length !== 0) {
      const result = await db.collection('users')
        .updateOne({ _id: id }, {
          $set: {
            lastFailed,
            locked,
          },
        });

      if (result.acknowledged !== true || result.matchedCount !== 1 || result.modifiedCount !== 1) {
        return { statusCode: 500 };
      }

      return { statusCode: 200 };
    }

    return { statusCode: 404 };
  } catch (e) {
    throw new Error('could not update the user, database error');
  }
}

async function updatePassword(db, username, newPassword) {
  try {
    const users = await db.collection('users')
      .find({ name: username })
      .toArray();

    if (users.length !== 0) {
      const result = await db.collection('users')
        .updateOne({ name: username }, {
          $set: {
            password: newPassword,
          },
        });

      if (result.acknowledged !== true || result.matchedCount !== 1 || result.modifiedCount !== 1) {
        return { statusCode: 500 };
      }

      return { statusCode: 200 };
    }

    return { statusCode: 404 };
  } catch (e) {
    throw new Error('could not update the user, database error');
  }
}

module.exports = {
  connect,
  addUser,
  getUser,
  updateUser,
  updatePassword,
  // postPhotos,
};
