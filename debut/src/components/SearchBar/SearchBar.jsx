import * as React from 'react';
import { TextField } from '@mui/material';
import './SearchBar.css';

function SearchBar({
  // eslint-disable-next-line react/prop-types
  setSearchKey,
  // eslint-disable-next-line react/prop-types
  setHandleSearch,
}) {
  function handleEnter(event) {
    if (event.key === 'Enter') setHandleSearch(true);
  }

  return (
    <div className="search-bar-bar">
      <TextField
        id="outlined-basic"
        label="Search"
        placeholder="Search a project or a username"
        type="text"
        className="search-bar"
        onChange={(event) => {
          setSearchKey(event.target.value);
        }}
        onKeyPress={(event) => {
          handleEnter(event);
        }}
        style={{
          width: 1036,
          height: 50,
          borderRadius: 8,
          padding: 0,
          margin: 0,
          borderWidth: 1,
          borderColor: '#000000',
          fontFamily: 'Roboto',
        }}

      />
    </div>
  );
}

export default SearchBar;
