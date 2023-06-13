import * as React from 'react';
import './Chat.css';
import { Button } from '@mui/material';

// text should over flow automatically and dynamically add text fields

function Chat() {
  const handleSend = () => {
    const text = document.getElementById('sendbox');
    const txtfield = document.getElementById('sender');
    console.log(text.value) // eslint-disable-line
    txtfield.value = text.value;
    txtfield.hidden = text.removeAttribute('hiden');
    text.value = '';
  };

  return (
    <div>
      <div />
      <div
        className="title"
      >
        Conversation
      </div>
      <div className="Convo" id="conversation">
        <textarea
          className="textbox"
          style={{
            top: 210,
            paddingTop: 5,
            paddingLeft: 30,
            paddingRight: 30,
          }}
          readOnly
        >
          Hello, nice to meet you. Welcome to my project!
        </textarea>
        <textarea
          className="textbox2"
          style={{
            top: 280,
            paddingTop: 5,
            paddingLeft: 30,
            paddingRight: 30,
          }}
          readOnly
        >
          Hi, thanks for reaching out!
        </textarea>
        <textarea
          className="send-text-box"
          style={{
            paddingTop: 5,
            paddingLeft: 30,
            paddingRight: 30,
          }}
          id="sendbox"
        />
        <textarea
          className="textbox2"
          id="sender"
          style={{
            top: 350,
            paddingTop: 5,
            paddingLeft: 30,
            paddingRight: 30,
          }}
          readOnly
          hidden="hidden"
        />
      </div>
      <Button
        className="send"
        style={{
          background: '#5200FF',
          color: '#FFFFFF',
        }}
        onClick={() => handleSend()}
      >
        SEND
      </Button>
      <Button
        className="media"
        style={{
          background: '#5200FF',
          color: '#FFFFFF',
        }}
      >
        FILE
      </Button>
    </div>
  );
}

export default Chat;
