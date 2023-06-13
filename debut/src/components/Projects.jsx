import * as React from 'react';
import { useRef, useState } from 'react';
import './Projects.css';
import { Button, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Roles from './Roles/Roles';
import NavMenu from './Navbar/NavMenu';
import Home from './Home';
import Dashboard from './DataDashboard';
import Messages from './Messages';
import Chat from './Chat';
import Settings from './Settings';
import Profile from './Profile';

function Project() {
  const navigate = useNavigate();
  const [published, setPublished] = useState(false);
  const [numRoles] = useState(1);
  const title = useRef('');
  const startDate = useRef('');
  const endDate = useRef('');
  const description = useRef('');
  const roleTitle = useRef('');
  const roleNum = useRef(0);

  function getDate() {
    const local = new Date();
    local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
    return local.toISOString()
      .slice(0, 10);
  }
  function handleFieldChange(event) {
    if (event.target.name === 'title') {
      title.current = event.target.value;
    } else if (event.target.name === 'startDate') {
      startDate.current = event.target.value;
    } else if (event.target.name === 'endDate') {
      endDate.current = event.target.value;
    } else if (event.target.name === 'description') {
      description.current = event.target.value;
    }
  }
  function handleChange() {
    setPublished(true);
    navigate('/home');
    // TODO: pass down the args to Home Page
  }

  if (published) {
    return (
      <div>
        <Routes>
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </div>
    );
  }

  return (
    <div data-testid="projectPage">
      <img
        className="quiz-image"
        src={`${process.env.PUBLIC_URL}static_image/sample.png`}
        alt="../images/bc.jpeg"
        width="1440"
        height="370"
      />

      <div className="change-background">
        <Button
          variant="contained"
          className="background-button"
          style={{
            width: 277,
            height: 60,
            background: '#5200FF',
            borderRadius: 8,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 24,
            textTransform: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          Edit Cover Picture
        </Button>
      </div>

      <div className="information-basic">
        <p className="info-deck">
          Basic Information
        </p>
        <div className="project-information">

          <p className="project-title-prompt">
            *Project Title
          </p>
          <div className="project-title-field">
            <TextField
              placeholder="title"
              name="title"
              id="basic"
              type="text"
              className="project-title-text-field"
              style={{
                width: 830,
                height: 50,
                backgroundColor: '#FFFFFF',
                borderColor: '#000000',
                borderWidth: 1,
                boxSizing: 'border-box',
                borderRadius: 8,
                borderLeftWidth: 6,
                padding: '4px !important', // override inline-style
              }}
              onChange={(event) => handleFieldChange(event)}
            />
          </div>

          <p className="start-date-prompt">
            *Start Date
          </p>
          <div className="start-date-field">
            <TextField
              placeholder="startDate"
              name="startDate"
              id="date"
              type="date"
              className="start-date-text-field"
              defaultValue={getDate()}
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
              style={{
                width: 374,
                height: 50,
              }}
              onChange={(event) => handleFieldChange(event)}
            />
          </div>

          <p className="end-date-prompt">
            *End Date
          </p>
          <div className="end-date-field">
            <TextField
              placeholder="endDate"
              name="endDate"
              id="date"
              type="date"
              className="end-date-text-field"
              defaultValue={getDate()}
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
              style={{
                width: 374,
                height: 50,
              }}
              onChange={(event) => handleFieldChange(event)}
            />
          </div>

          <p className="project-category-prompt">
            *Project Category
          </p>
          <div className="project-category-field">
            <FormControl fullWidth>
              {/* <InputLabel>Age</InputLabel> */}
              <Select>
                <MenuItem value="Short Film">Short Film</MenuItem>
                <MenuItem value="Music Video">Music Video</MenuItem>
                <MenuItem value="Concept Video">Concept Video</MenuItem>

                <MenuItem value="Musical">Musical</MenuItem>
                <MenuItem value="Table Read">Table Read</MenuItem>
                <MenuItem value="Play">Play</MenuItem>

                <MenuItem value="Dance">Dance</MenuItem>
                <MenuItem value="Spoken Word">Spoken Word</MenuItem>
                <MenuItem value="Song">Song</MenuItem>

                <MenuItem value="Comedy">Comedy</MenuItem>
                <MenuItem value="Improv">Improv</MenuItem>
                <MenuItem value="Photo Shoot">Photo Shoot</MenuItem>

                <MenuItem value="Screenplay">Screenplay</MenuItem>
                <MenuItem value="Writing Group">Writing Group</MenuItem>
                <MenuItem value="A Cappella">A Cappella</MenuItem>

                <MenuItem value="Podcast">Podcast</MenuItem>
              </Select>
            </FormControl>
          </div>

          <p className="description-prompt">
            *Description
          </p>
          <div className="description-field">
            <TextField
              name="description"
              id="basic"
              type="text"
              multiline
              rows={4}
              placeholder="Describe your project here: content,
            purpose, trigger warnings, club affiliations, etc. "
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
              onChange={(event) => handleFieldChange(event)}
            />
          </div>

        </div>

        <div className="roles-list">
          <Roles number={numRoles} roleTitle={roleTitle} roleNum={roleNum} />

        </div>

        <p className="add-role">
          + Add Another Role
        </p>

        <div className="cancel">
          <Button
            variant="outlined"
            className="cancel-button"
            style={{
              width: 261,
              height: 60,
              background: '#FFFFFF',
              color: '#5200FF',
              borderRadius: 8,
              borderColor: '#5200FF',
              borderWidth: 2,
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: 24,
              textTransform: 'none',
            }}
          >
            Cancel
          </Button>
        </div>

        <div className="submit">
          <Button
            variant="contained"
            className="submit-button"
            style={{
              width: 261,
              height: 60,
              background: '#5200FF',
              borderRadius: 8,
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: 24,
              textTransform: 'none',
            }}
            onClick={() => {
              handleChange();
            }}
          >
            Publish
          </Button>
          <div className="blank-bottom" />
        </div>
      </div>
    </div>
  );
}

export default Project;
