import * as React from 'react';
import './Home.css';
import './Profile.css';
import { Button, TextField } from '@mui/material';
import Select from 'react-select';

function Profile() {
  const skillSet = [
    { label: 'Fight choreographer', value: 54 },
    { label: 'Model', value: 43 },
    { label: 'Assistant Stage Manager', value: 61 },
    { label: 'Product Manager', value: 965 },
    { label: 'Artist', value: 46 }];

  return (
    <div data-testid="profilePage">
      <p className="name">
        *Name
      </p>
      <p className="email">
        *Email
      </p>
      <p className="year">
        Year
      </p>
      <p className="phone-num">
        Phone Number
      </p>
      <p className="bio">
        Bio
      </p>
      <p className="bio-text">
        Introduce yourself here:
        special interests, on campus groups, prior experience, links to
        portfolio/reel/social media, etc.
      </p>
      <p className="expertise">
        Expertise/Skills
      </p>
      <p className="expertist-skill">
        Add a skill from the dropdown. You can order the skills shown on your profile.
        Only the top 3 skills will be displayed on the minimal view of your profile.
      </p>
      <div>
        <TextField
          id="basic"
          type="text"
          className="text-box-1"
          style={{
            width: 343,
            height: 45,
            backgroundColor: '#FFFFFF',
            borderColor: '#000000',
            borderWidth: 1,
            boxSizing: 'border-box',
            borderRadius: 8,
            borderLeftWidth: 6,
          }}
        />
      </div>
      <div>
        <TextField
          id="basic"
          type="text"
          className="text-box-2"
          style={{
            width: 343,
            height: 45,
            backgroundColor: '#FFFFFF',
            borderColor: '#000000',
            borderWidth: 1,
            boxSizing: 'border-box',
            borderRadius: 8,
            borderLeftWidth: 6,
          }}
        />
      </div>
      <div>
        <TextField
          id="basic"
          type="text"
          className="text-box-3"
          style={{
            width: 343,
            height: 45,
            backgroundColor: '#FFFFFF',
            borderColor: '#000000',
            borderWidth: 1,
            boxSizing: 'border-box',
            borderRadius: 8,
            borderLeftWidth: 6,
          }}
        />
      </div>
      <div>
        <TextField
          id="basic"
          type="text"
          className="text-box-4"
          style={{
            width: 343,
            height: 45,
            backgroundColor: '#FFFFFF',
            borderColor: '#000000',
            borderWidth: 1,
            boxSizing: 'border-box',
            borderRadius: 8,
            borderLeftWidth: 6,
          }}
        />
      </div>
      <div>
        <TextField
          id="basic"
          type="text"
          InputProps={{
            className: 'text-box-5',
          }}
        />
      </div>
      <div>
        <Button
          variant="contained"
          className="cancel"
          style={{
            width: 261,
            height: 60,
            left: 450,
            top: 700,
            position: 'absolute',
            background: '#FFFFFF',
            color: '#5200FF',
            borderRadius: 8,
            borderColor: '#5200FF',
            borderWidth: 2,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: 24,
            textTransform: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          className="publish"
          style={{
            width: 261,
            height: 60,
            left: 750,
            top: 700,
            position: 'absolute',
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
        >
          Publish
        </Button>
      </div>
      <div className="select-options">
        <Select options={skillSet} />
      </div>
      <div className="text-box-6">
        <TextField
          id="basic"
          type="text"
          InputProps={{
            className: 'text-box-6-text',
          }}
        />
      </div>
    </div>
  );
}

export default Profile;
