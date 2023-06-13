import * as React from 'react';
import './Settings.css';
import { Button, TextField } from '@mui/material';
import { useRef, useState } from 'react';

// eslint-disable-next-line react/prop-types
function Settings({ username }) {
  const [errorMessage, setErrorMessage] = useState('');
  const oldPassword = useRef('');
  const newPassword = useRef('');
  const confirmPassword = useRef('');
  function handelTextChange(event) {
    if (event.target.name === 'old') {
      oldPassword.current = event.target.value;
    } else if (event.target.name === 'new') {
      newPassword.current = event.target.value;
    } else if (event.target.name === 'confirm') {
      confirmPassword.current = event.target.value;
    }
  }
  function handleChange() {
    if (newPassword.current !== confirmPassword.current) {
      setErrorMessage('Passwords do not match');
    } else {
      const list = JSON.parse(localStorage.getItem('user'));
      const user = list.filter((item) => item.name === username)[0];
      const ind = list.indexOf(user);
      list[ind].password = newPassword.current;
      localStorage.setItem('user', JSON.stringify(list));
      setErrorMessage('Password changed.');
    }
  }
  return (
    <div data-testid="settingsPage">
      <div className="password">
        <p className="password-prompt">
          Change Password
        </p>
      </div>

      <div className="old-password">
        <p className="old-password-prompt">
          Old Password
        </p>
        <div className="old-password-field">
          <TextField
            placeholder="Old"
            id="basic"
            type="text"
            name="old"
            className="old-password-text-field"
            style={{
              width: 645,
              height: 50,
              backgroundColor: '#FFFFFF',
              borderColor: '#000000',
              borderWidth: 1,
              boxSizing: 'border-box',
              borderRadius: 8,
              borderLeftWidth: 6,
              padding: '4px !important', // override inline-style
            }}
            onChange={(event) => handelTextChange(event)}
          />
        </div>
      </div>

      <div className="new-password">
        <p className="new-password-prompt">
          New password
        </p>
        <div className="new-password-field">
          <TextField
            placeholder="New"
            id="basic"
            type="text"
            name="new"
            className="new-password-text-field"
            style={{
              width: 645,
              height: 50,
              backgroundColor: '#FFFFFF',
              borderColor: '#000000',
              borderWidth: 1,
              boxSizing: 'border-box',
              borderRadius: 8,
              borderLeftWidth: 6,
              padding: '4px !important', // override inline-style
            }}
            onChange={(event) => handelTextChange(event)}
          />
        </div>
      </div>

      <div className="confirm-new-password">
        <p className="confirm-new-password-prompt">
          Confirm new password
        </p>
        <div className="confirm-new-password-field">
          <TextField
            placeholder="Confirm"
            id="basic"
            type="text"
            name="confirm"
            className="confirm-new-password-text-field"
            style={{
              width: 645,
              height: 50,
              backgroundColor: '#FFFFFF',
              borderColor: '#000000',
              borderWidth: 1,
              boxSizing: 'border-box',
              borderRadius: 8,
              borderLeftWidth: 6,
              padding: '4px !important', // override inline-style
            }}
            onChange={(event) => handelTextChange(event)}
          />
        </div>
      </div>

      <div className="update">
        <Button
          variant="outlined"
          className="update-button"
          style={{
            width: 198,
            height: 60,
            background: '#5200FF',
            color: '#FFFFFF',
            borderRadius: 8,
            borderColor: '#5200FF',
            borderWidth: 2,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 24,
            textTransform: 'none',
            padding: 0,
            margin: 0,
          }}
          onClick={() => {
            handleChange();
          }}
        >
          Update
        </Button>
      </div>
      <div>
        <p id="errorMsg">{errorMessage}</p>
      </div>

      <div className="delete-account">
        <p className="delete-title">
          Delete Account
        </p>

        <p className="delete-prompt">
          Once you delete your account, all data
          associated with this account will be removed blah blah
        </p>

        <div className="delete">
          <Button
            variant="outlined"
            className="delete-button"
            style={{
              width: 374,
              height: 60,
              background: '#DD2E44',
              color: '#FFFFFF',
              borderRadius: 8,
              borderColor: '#DD2E44',
              borderWidth: 2,
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: 24,
              textTransform: 'none',
              padding: 0,
              margin: 0,
            }}
          >
            Yes, Delete My Account
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
