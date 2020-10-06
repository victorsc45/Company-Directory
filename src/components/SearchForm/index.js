import React from "react";
import "./style.css";
// import react and style for search form

// props search form for search input and handle search input function
const SearchForm = (props) => {
  // returning props to home page for search function
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search">Search Directory</label>
        <input
          type="text"
          value={props.searchInput}
          onChange={props.handleSearchInput}
          className="form-control"
          placeholder="Search Name, Year of Birth or Month"
          id="searchform"
        />
      </div>
    </form>
  );
}


export default SearchForm;
