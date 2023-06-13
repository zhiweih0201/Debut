import * as React from 'react';
import './IndividualProject.css';
import { Button } from '@mui/material';

// import App from '../App';

function IndividualProject() {
  return (
    <div data-testid="individualProjectPage">
      {/* <App /> */}
      <img
        className="quiz-image"
        src={`${process.env.PUBLIC_URL}static_image/sample.png`}
        alt="../images/bc.jpeg"
        width="1440"
        height="370"
      />
      <div className="title">
        <p className="projectTitle">
          Project Title
        </p>
      </div>

      <div className="tags">
        <div className="tag1-pos">
          <div className="tag-name">
            Concept Video
          </div>
        </div>
        <div className="tag2-pos">
          <div className="tag-name">
            Comedy
          </div>
        </div>
      </div>
      <div className="calendars">
        <div
          className="dates"
          style={{
            top: 630,
            left: 100,
            width: 200,
          }}
        >
          <b>Dates: Jan 19 - May 24</b>
        </div>
      </div>
      <div className="descriptionBox">
        <p className="project-description">
          Night to meat he very rule, meat from is without likeness him.
          Evening first. Brought seas under may a. Seed rule earth whose stars wherein bearing that
          which creeping.
          Very. Land form moving. May. It given. Winged itself third. Winged make life moveth.
          Second living. He Had may fourth fill all seed given. Yielding lesser fowl have
          living, moveth fish created
          Dry sixth make land green living cattle over lights darkness under every i make hath
          made
          Creature fruitful stars day void for herb.
          Of form green creeping bearing him i our. Behold fruit after.
        </p>
        {/* <TextField */}
        {/*   type="text" */}
        {/*   id="basic" */}
        {/*   multiline */}
        {/*   rows={6.5} */}
        {/*   style={{ */}
        {/*     width: 1252, */}
        {/*     height: 180, */}
        {/*     borderRadius: 8, */}
        {/*     borderColor: '#FFFFFF', */}
        {/*     borderWidth: 2, */}
        {/*   }} */}
        {/* /> */}
      </div>
      <div>
        <Button
          variant="contained"
          className="tag1"
          style={{
            top: 360,
            left: 110,
            width: 90,
            height: 30,
            background: '#5200FF',
            borderRadius: 8,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 200,
            fontSize: 16,
            textTransform: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          Apply
        </Button>
        <Button
          variant="contained"
          className="tag1"
          style={{
            top: 360,
            left: 125,
            width: 90,
            height: 30,
            background: '#FFFFFF',
            color: '#5200FF',
            borderRadius: 8,
            borderColor: '#5200FF',
            borderWidth: 2,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 200,
            fontSize: 16,
            textTransform: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          Save
        </Button>
        <Button
          variant="contained"
          className="tag1"
          style={{
            top: 360,
            left: 140,
            width: 90,
            height: 30,
            background: '#FFFFFF',
            color: '#5200FF',
            borderRadius: 8,
            borderColor: '#5200FF',
            borderWidth: 2,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 200,
            fontSize: 16,
            textTransform: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          Share
        </Button>
      </div>
      <div className="title">
        <p className="availableRoles">
          Available Roles
        </p>
      </div>
      <div className="role1box">
        <div
          id="basic"
        />
      </div>
      <div className="role2Box">
        <div
          id="basic"
        />
      </div>
      <div className="role2Ellipse">
        <canvas id="circle" height="100px" width="100px" />
      </div>
      <div className="role1ellipse">
        <canvas id="circle" height="100px" width="100px" />
      </div>
      <div className="num">
        <p className="role1Num">
          2
        </p>
        <p className="role2Num">
          1
        </p>
      </div>
      <div className="roles">
        <p className="role2Position">
          Dancer
        </p>
        <p className="role2Description">
          Blessed morning. Of also one blessed winged fish,
          male tree creepeth fly together seed. Divided light hath that wherein
          the made was which good have signs have seas they are abundantly one likeness
          seas is not man seed bring have shall fowl days morning multiply, i fish firmament
          meat every. Divided two. (50 words)
        </p>
        <p className="role1Position">
          Actor
        </p>
        <p className="role1Description">
          Blessed morning. Of also one blessed winged fish,
          male tree creepeth fly together seed. Divided light hath that wherein
          the made was which good have signs have seas they are abundantly one likeness
          seas is not man seed bring have shall fowl days morning multiply, i fish firmament
          meat every. Divided two. (50 words)
        </p>
      </div>
    </div>
  );
}

export default IndividualProject;
