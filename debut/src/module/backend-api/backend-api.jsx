/* eslint-disable no-console */
import axios from 'axios';

const { createHash } = require('crypto');

export const login = async (username, password) => {
  try {
    if (username.length > 0) {
      const data = {
        user: username,
        password: createHash('sha256')
          .update(password)
          .digest('hex'),
      };
      const res = await axios.post('http://localhost:8080/users', data);
      return res.data.token;
    }
    return undefined;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const verifyToken = async (userToken) => {
  try {
    if (userToken.length > 0) {
      const data = `token=${userToken}`;
      const res = await axios.post('http://localhost:8080/verify', data);
      return res.status;
    }
    return 302;
  } catch (err) {
    console.log(err);
    return 302;
  }
};

export const sendMessage = async (sender, receiver, content) => {
  const res = await axios.post('http://localhost:8080/message', {
    from: sender,
    to: receiver,
    message: content,
  });

  return res.data.message;
};

export const leave = async (sender) => {
  const res = await axios.post('http://localhost:8080/leave', {
    username: sender,
  });

  return res.data.message;
};

export const register = async (username, password) => {
  const res = await axios.post('http://localhost:8080/login', {
    user: username,
    password: createHash('sha256')
      .update(password)
      .digest('hex'),
  });

  return res.status;
};
