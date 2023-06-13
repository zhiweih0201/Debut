import * as React from 'react';
import './Messages.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// should use a for loop to go through each user and if message exists
// and undread then purple, else if read then gray (box2 vs box1)

function Messages() {
  const navigate = useNavigate();
  function onButtonClick(path) {
    navigate(path);
  }

  // handles redirecting to "/question"
  const startChat = () => {
    onButtonClick('/chat');
  };

  return (
    <div data-testid="messagePage">
      <div
        className="box2"
        style={{
          top: 150,
        }}
      />
      <Button
        className="name"
        onClick={() => startChat()}
        style={{
          top: 90,
          left: 50,
        }}
      >
        Donald Trump
      </Button>
      <textarea
        className="textbox"
        style={{
          top: 210,
          paddingTop: 5,
          paddingLeft: 30,
          paddingRight: 30,
          left: 240,
        }}
        readOnly
      >
        Hello there, my name is Donald Trump and I would
        like to contact you about this upcoming position!
      </textarea>
      <div
        className="box1"
        style={{
          top: 350,
        }}
      />
      <textarea
        className="textbox"
        style={{
          top: 410,
          paddingTop: 5,
          paddingLeft: 30,
          paddingRight: 30,
          left: 240,
        }}
        readOnly
      >
        Hello there, my name is Joe Biden and I would
        like to contact you about this upcoming position!
      </textarea>
      <Button
        className="name2"
        onClick={() => startChat()}
        style={{
          top: 290,
          left: -450,
        }}
      >
        Joe Biden
      </Button>
    </div>
  );
}

export default Messages;
