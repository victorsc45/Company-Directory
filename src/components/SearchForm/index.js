import React, { Component } from "react";
import "./style.css";


// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  // state = {
  //   searchInput: '',

  // }
  // handleSearchInput = (event) => {
  // const { value } = event.target;
  // this.setState({ searchInput: value });
  // console.log(this.props.currentState);
  // const emps = this.props.currentState.employee.filter((emp) => {
  //   return (
  //     emp.name.first.toLowerCase().includes(this.state.searchInput) || emp.name.last.toLowerCase().includes(this.state.searchInput)
  //   );
  // });
  // this.props.currentState(emps);

  // };


  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search">Search Directory</label>
        <input
          value={props.searchInput}
          onChange={props.handleSearchInput}
          type="text"
          className="form-control"
          placeholder="Search name or Date of Birth"
          id="searchform"
        />
      </div>
    </form>
  );
}


export default SearchForm;
