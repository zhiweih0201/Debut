import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import './UserCard.css';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function UserCard() {
  return (
    <div data-testid="userCardComponent">
      <Paper
        className="display"
        sx={{
          margin: 'auto',
          width: 366,
          flexGrow: 1,
          borderRadius: '8px 8px 8px 8px',
          padding: 1,
          // border: 1,
          // borderColor: '#999999',
        }}
      >
        <Grid
          container
          direction="row"
          spacing={2}
        >
          <Grid item>
            <Img
              alt="user"
              src={`${process.env.PUBLIC_URL}static_image/user.png`}
              className="user"
              width="125"
              height="125"
            />
          </Grid>
          <Grid
            container
            direction="column"
            spacing={0}
            sx={{
              width: 210,
            }}
          >
            <Grid item>
              <p className="user-name">
                Donald Trump Jr
              </p>
            </Grid>
            <Grid
              container
              direction="column"
              spacing={0.3}
              sx={{
                position: 'relative',
                width: 210,
                top: 25,
                left: 2,
              }}
            >
              <Grid item>
                <div className="tag-background">
                  <p className="tag-name">
                    Fight Choreographer
                  </p>
                </div>
              </Grid>
              <Grid item>
                <div className="tag-background">
                  <p className="tag-name">
                    Assistant Stage Manager
                  </p>
                </div>
              </Grid>
              <Grid item>
                <div className="tag-background">
                  <p className="tag-name">
                    Model
                  </p>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>

  );
}

export default UserCard;
