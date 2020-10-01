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
    const emps = this.props.currentState.employee.filter((emp) => {
      return (
        emp.name.first.toLowerCase().includes(this.state.searchInput) || emp.name.last.toLowerCase().includes(this.state.searchInput) || Date(emp.dob.date).toLocaleDateString()
      );
    });
    this.props.onSearch(emps);
  };

  render() {
    return (
      <form className="search">
        <div className="form-group">
          <label htmlFor="search">Search Directory</label>
          <input
            value={this.state.searchInput}
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
