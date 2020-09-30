import React, { Component } from "react";
import "./style.css";


// Using the datalist element we can create autofill suggestions based on the props.breeds array
class SearchForm extends Component {
  state = {
    searchInput: '',

  }
  handleSearchInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    const employeeSearch = this.props.userState.emps.filter((emp) => {
      return (
        emp.name.first.toLowerCase() || emp.name.last.toLowerCase() || Date(emp.dob.date).toLocaleDateString()
      );
    });
    this.props.onSearch(employeeSearch);
  };

  render() {
    return (
      <form className="search">
        <div className="form-group">
          <label htmlFor="search">Search Directory</label>
          <input
            // value={this.search}
            onChange={this.handleSearchInput}

            type="text"
            className="form-control"
            placeholder="Search name or Date of Birth"
            id="searchform"
          />
        </div>
      </form>
    );
  }
}

export default SearchForm;
