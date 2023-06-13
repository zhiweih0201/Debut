import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import './SearchCard.css';
import { IconButton } from '@mui/material';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

// eslint-disable-next-line react/prop-types
function SearchCard({ clicked }) {
  function handleClickThisProj() {
    clicked(true);
  }

  return (
    <div data-testid="searchCardComponent">
      <Paper
        className="display"
        data-testid="projTile"
        sx={{
          // p: 2,
          margin: 'auto',
          maxWidth: 366,
          flexGrow: 1,
          borderRadius: '8px 8px 8px 8px',
        }}
      >
        <Grid container spacing={0}>
          <Grid
            container
            sx={{
              width: 366,
              height: 94,
            }}
          >
            <Img
              alt="project image"
              src={`${process.env.PUBLIC_URL}static_image/sample.png`}
              width="1400"
              height="370"
              data-testid="projImg"
            />
          </Grid>
          <Grid container>
            <Grid
              container
              // xs={12}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={10}>
                <button
                  type="button"
                  className="project-name"
                  data-testid="projName"
                  style={
                    {
                      background: 'none',
                      border: 'none',
                    }
                  }
                  onClick={handleClickThisProj}
                >
                  Project Name
                </button>
              </Grid>
              <IconButton aria-label="bookmark">
                <BookmarkBorderOutlinedIcon />
              </IconButton>
            </Grid>
            <Grid
              container
              // xs={12}
              justifyContent="flex-start"
              direction="row"
              alignItems="center"
            >
              <Grid item xs="auto">
                <Img
                  alt="avatar"
                  src={`${process.env.PUBLIC_URL}static_image/avatar.png`}
                  className="avatar"
                  data-testid="projManagerAvatar"
                />
              </Grid>
              <Grid item xs={10}>
                <p className="creator-name" data-testid="projManagerName">
                  with Manager Name
                </p>
              </Grid>
            </Grid>
            <Grid item xs="auto">
              <p className="date" data-testid="projDate">
                03/01/2022 - 03/25/2022
              </p>
            </Grid>
            <Grid
              container
              // xs={12}
              direction="row"
              alignItems="center"
            >
              <Grid item data-testid="projTag">
                <div className="tag-background">
                  <div className="tag-name">
                    Concept Video
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            // xs={12}
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            sx={{
              position: 'relative',
              top: 20,
              width: 366,
              height: 50,
              backgroundColor: '#5200FF',
              color: '#FFFFFF',
              borderRadius: '0px 0px 8px 8px',
            }}
          >

            <Grid
              container
              // xs={12}
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              data-testid="projPeopleReq"
            >
              <Grid item xs="auto">
                <div className="number-position-bg">
                  <p className="number-position">
                    1
                  </p>
                </div>
              </Grid>
              <Grid item xs="auto">
                <p className="position">
                  Choreographer
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default SearchCard;
