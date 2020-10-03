import React from "react";
import "./style.css";



const SearchForm = (props) => {



  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search">Search Directory</label>
        <input
          type="text"
          value={props.searchInput}
          onChange={props.handleSearchInput}
          className="form-control"
          placeholder="Search name or Date of Birth"
          id="searchform"
        />
      </div>
    </form>
  );
}


export default SearchForm;
