/* eslint-disable no-console */

function connectToSocket(token) {
  if (token === null) {
    return;
  }

  const socket = new WebSocket('ws://localhost:8085', token);

  // Connection opened
  socket.addEventListener('open', () => {
    socket.send('Hello Server!');
  });

  // Listener for messages from the websocket server
  socket.addEventListener('message', (event) => {
    // parse message to json
    const pushMessage = JSON.parse(event.data);
    // new user
    if (pushMessage.type === 'new user') {
      console.log(`user ${pushMessage.user}`);
    }
    // message delivered
    if (pushMessage.type === 'delivered') {
      console.log(`sent(${pushMessage.to}): ${pushMessage.text}`);
    }

    if (pushMessage.type === 'buffered') {
      console.log(`buffer(${pushMessage.to}): ${pushMessage.text}`);
    }
    // new message received
    if (pushMessage.type === 'new message') {
      console.log(`${pushMessage.data.from}: ${pushMessage.data.message}`);
    }
  });

  // Connection closed
  socket.addEventListener('close', (_event) => {
    console.log('Connection closed bye bye! ');
  });
}

module.exports = {
  connectToSocket,
};
