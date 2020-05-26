import React from 'react';

const SearchBar = (props) => {

  const handleWhichInfoToPassUp = (evt) => {
    props.handleSearchTerm(evt.target.value);
  }

  return (
    <div className="search-box">
      <input
        type="text"
        name="searchTerm"
        value={props.searchTerm}
        onChange={handleWhichInfoToPassUp}
      />
    </div>
  )
};

export default SearchBar;
