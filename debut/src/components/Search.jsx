import Grid from '@mui/material/Grid';
import * as React from 'react';
// import App from '../App';
import SearchBar from './SearchBar/SearchBar';
import SearchCard from './ProjectCard/SearchCard';
import UserCard from './UserCard/UserCard';
import './Search.css';

// eslint-disable-next-line react/prop-types
function Search({ searchKey }) {
  return (
    <div data-testid="searchPage">
      {/* <App /> */}
      <SearchBar />
      <p
        className="users-found-label"
      >
        Found 5
        {' "'}
        {searchKey}
        {'" '}
        users:
      </p>
      <div className="user-display">
        <div className="blank" />
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start"
          spacing={8}
        >
          <Grid item>
            <UserCard />
          </Grid>
          <Grid item>
            <UserCard />
          </Grid>
          <Grid item>
            <UserCard />
          </Grid>
        </Grid>
      </div>
      <p className="projects-found-label">
        Found 16
        {' "'}
        {searchKey}
        {'" '}
        projects:
      </p>
      <div className="cards-display-search">
        <div className="blank" />
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start"
          spacing={8}
        >
          <Grid item>
            <SearchCard />
          </Grid>
          <Grid item>
            <SearchCard />
          </Grid>
          <Grid item>
            <SearchCard />
          </Grid>
        </Grid>
      </div>

    </div>
  );
}

export default Search;
