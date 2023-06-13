import * as React from 'react';
import { useState } from 'react';
import './Home.css';

import Grid from '@mui/material/Grid';
import SearchBar from './SearchBar/SearchBar';
import SearchCard from './ProjectCard/SearchCard';
import IndividualProject from './IndividualProject';
import Search from './Search';

function Home() {
  const [proj1, goProj1] = useState(false);
  const [searchKey, setSearchKey] = useState('');
  const [handleSearch, setHandleSearch] = useState(false);

  if (handleSearch) {
    return (
      <Search searchKey={searchKey} />
    );
  }

  if (proj1) {
    return (
      <IndividualProject />
    );
  }
  return (
    <div data-testid="homePage">
      <SearchBar
        data-testid="search"
        setSearchKey={setSearchKey}
        setHandleSearch={setHandleSearch}
      />
      <p
        className="label-all-projects"
      >
        All Projects(1)
      </p>
      <div className="cards-display-home">
        <div className="blank" />
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start"
          spacing={8}
        >

          <Grid item>
            <SearchCard clicked={goProj1} />
          </Grid>

          <Grid item>
            <SearchCard clicked={goProj1} />
          </Grid>
          <Grid item>
            <SearchCard clicked={goProj1} />
          </Grid>
        </Grid>

      </div>
    </div>
  );
}

export default Home;
