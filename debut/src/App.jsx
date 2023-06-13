// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useRef, useState } from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/DataDashboard';
import Projects from './components/Projects';
import Messages from './components/Messages';
import Profile from './components/Profile';
import Settings from './components/Settings';
import NavMenu from './components/Navbar/NavMenu';
import Chat from './components/Chat';

function App() {
  const [started, setStarted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const validName = useRef(false);
  const [register, setRegister] = useState(false);
  const navigate = useNavigate();

  function isValidUser(name) {
    return name.match(/^[0-9a-zA-Z]+$/);
  }
  function handleRegister() {
    setRegister(!register);
  }

  function handleStart() {
    validName.current = isValidUser(username) != null;
    if (localStorage.getItem('user') === null) {
      localStorage.setItem('user', JSON.stringify([]));
    }
    const list = JSON.parse(localStorage.getItem('user'));
    if (validName.current) {
      if (!register) {
        if (list.filter((item) => item.name === username).length === 0) {
          if (password === '') {
            setErrorMessage('Password cannot be empty. Please try again');
          } else {
            list.push({
              name: username,
              password,
            });
            localStorage.setItem('user', JSON.stringify(list));
            setErrorMessage('Registration successful.');
          }
        } else {
          setErrorMessage('Username exists. Please login.');
        }
      } else {
      // login - check correctness, if succeed route to home
        // eslint-disable-next-line no-lonely-if
        if (list.filter((item) => item.name === username).length === 0) {
          setErrorMessage('Username does not exist. Please register');
        } else {
          const correctPassword = list.filter((item) => item.name === username)[0].password;
          if (correctPassword !== password) {
            setErrorMessage('Username and password do not match');
          } else {
            setStarted(true);
            navigate('/home');
          }
        }
      }
    } else {
      setErrorMessage('Entered username is invalid. Please enter alphanumeric names only.');
    }
  }

  if (!started) {
    return (
      <div className="app-login" data-testid="loginPage">
        <div className="header">
          <div className="header-container">
            <div className="header-text">
              DEBUT
            </div>
          </div>
        </div>
        <div className="background">
          {/* This is where the triangles in the background go */}
        </div>
        { /* <div className="signIn"> */ }
        { /*  <div className="signIn-box" /> */ }
        { /*  <div className="signIn-text">SIGN IN</div> */ }
        { /* </div> */ }
        <div className="register">
          <div className="register-box" />
          <button
            type="button"
            className="register-text"
            onClick={handleRegister}
            style={
                    {
                      background: 'none',
                      border: 'none',
                    }
                  }
          >
            {register ? 'REGISTER' : 'LOGIN'}
          </button>
        </div>
        <div className="line">
          <div className="line-left" />
          <div className="line-text">OR</div>
          <div className="line-right" />
        </div>
        <form id="loginForm" className="row g-3 align-items-center mb-5">
          <div className="email">
            <div className="email-text">
              Email address
            </div>
            <input
              type="text"
              className="email-box"
              placeholder="abc@gmail.com"
              name="username"
              id="username-input"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>
          <div className="password">
            <div className="password-text">
              Password
            </div>
            <input
              type="text"
              className="password-box"
              placeholder="xxxxxx"
              name="password"
              id="password-input"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="start">
            <button
              type="button"
              className="start-box"
              onClick={handleStart}
              id="submitButton"
            >
              {register ? 'Start' : 'Register'}
            </button>
          </div>
        </form>
        <div className="error">
          <p id="errorMsg">{errorMessage}</p>
        </div>
        <div className="forgot">
          {register ? 'forgot your password?' : ''}
        </div>
      </div>
    );
  }
  return (
    <div>
      <NavMenu setStarted={setStarted} />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/message" element={<Messages />} />
        <Route exact path="/message/chat" element={<Chat />} />
        <Route exact path="/settings" element={<Settings username={username} />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
