import React from 'react';

const FSearchBar = (props) => {

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

export default FSearchBar;
