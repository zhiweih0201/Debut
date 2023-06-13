import * as React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function NavMenu({ setStarted }) {
  const navigate = useNavigate();

  function onButtonClick(path) {
    navigate(path);
  }

  function handleHome() {
    onButtonClick('/home');
  }

  function handleNewProject() {
    onButtonClick('/projects');
  }

  function handleDashboard() {
    onButtonClick('/dashboard');
  }

  function handleMessage() {
    onButtonClick('/message');
  }

  function handleSettings() {
    onButtonClick('/settings');
  }

  function handleProfile() {
    onButtonClick('/profile');
  }

  function handleLogout() {
    setStarted(false);
    onButtonClick('/');
  }

  return (
    <div>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        height: 80,
      }}
      >
        <Button
          data-testid="home"
          id="basic-button"
          onClick={() => {
            handleHome();
          }}
        >
          Home
        </Button>
        <Button
          data-testid="project"
          id="basic-button"
          onClick={() => {
            handleNewProject();
          }}
        >
          Project
        </Button>
        <Button
          data-testid="dashboard"
          id="basic-button"
          onClick={() => {
            handleDashboard();
          }}
        >
          Dashboard
        </Button>
        <Button
          data-testid="message"
          id="basic-button"
          onClick={() => {
            handleMessage();
          }}
        >
          Message
        </Button>
        <Button
          data-testid="settings"
          id="basic-button"
          onClick={() => {
            handleSettings();
          }}
        >
          Settings
        </Button>
        <Button
          data-testid="profile"
          id="basic-button"
          onClick={() => {
            handleProfile();
          }}
        >
          Profile
        </Button>
        <Button
          data-testid="logout"
          id="basic-button"
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </Button>
      </Box>
    </div>
  );
}

export default NavMenu;
