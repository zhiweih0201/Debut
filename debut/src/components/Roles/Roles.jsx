/* eslint-disable react/prop-types */
import * as React from 'react';
import { TextField } from '@mui/material';
import './Roles.css';

// eslint-disable-next-line react/prop-types
function Roles({ number, roleTitle, roleNum }) {
  function handleRoleChange(event) {
    if (event.target.name === 'roleTitle') {
      // eslint-disable-next-line no-param-reassign
      roleTitle.current = event.target.value;
    } else if (event.target.name === 'roleNum') {
      // eslint-disable-next-line no-param-reassign
      roleNum.current = event.target.value;
    }
  }
  const actual = number > 1 ? number - 1 : 0;
  const head = (
    <div>
      <p className="role-1">
        Role 1
      </p>

      <p className="role-title-1">
        *Role Title
      </p>

      <div className="role-title-prompt">
        <TextField
          placeholder="roleTitle"
          name="roleTitle"
          id="basic"
          type="text"
          className="project-title-text-field"
          style={{
            width: 374,
            height: 50,
            backgroundColor: '#FFFFFF',
            borderColor: '#000000',
            borderWidth: 1,
            boxSizing: 'border-box',
            borderRadius: 8,
            borderLeftWidth: 6,
            padding: '4px !important', // override inline-style
          }}
          onChange={(event) => handleRoleChange(event)}
        />
      </div>

      <p className="role-number-1">
        *Number of Artists Needed
      </p>

      <div className="role-number-prompt">
        <TextField
          placeholder="roleNum"
          id="basic"
          type="number"
          className="project-number-text-field"
          style={{
            width: 374,
            height: 50,
            backgroundColor: '#FFFFFF',
            borderColor: '#000000',
            borderWidth: 1,
            boxSizing: 'border-box',
            borderRadius: 8,
            borderLeftWidth: 6,
            padding: '4px !important', // override inline-style
          }}
          onChange={(event) => handleRoleChange(event)}
        />
      </div>

      <p className="role-prompt-1">
        *Role Description
      </p>
      <div className="role-description-field-1">
        <TextField
          id="basic"
          type="text"
          multiline
          rows={4}
          placeholder="Describe the role here:
          time commitment, skill level, demographic preferences, etc. "
          // variant="standard"
          className="description-text-field"
          style={{
            width: 830,
            height: 102,
            backgroundColor: '#FFFFFF',
            borderColor: '#000000',
            borderWidth: 1,
            boxSizing: 'border-box',
            borderRadius: 8,
            borderLeftWidth: 6,
            padding: '4px !important', // override inline-style
          }}
        />
      </div>
    </div>
  );

  const others = (
    <div>
      <p className="role">
        Role 1
      </p>

      <p className="role-title">
        *Role Title
      </p>

      <p className="role-title-prompt">
        <TextField
          id="basic"
          type="text"
          className="role-title-text-field"
          style={{
            width: 374,
            height: 50,
            backgroundColor: '#FFFFFF',
            borderColor: '#000000',
            borderWidth: 1,
            boxSizing: 'border-box',
            borderRadius: 8,
            borderLeftWidth: 6,
            padding: '4px !important', // override inline-style
          }}
        />
      </p>
    </div>
  );

  const ret = [head];

  for (let i = 0; i < actual; i += 1) {
    ret.push(others);
  }
  return (
    <div className="roles">
      {ret}
    </div>
  );
}

export default Roles;
