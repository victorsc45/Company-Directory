import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchForm from "../components/SearchForm";
import DataTable from "../components/DataTable";
import API from "../utils/API";


class Home extends Component {
  state = {
    employee: [],
    value: '',
    employeeObject: {},
    searchInput: '',
    filtered: '',
    empFilter: [],
  };
  componentDidMount() {
    API.getRandomUsers().then((res) => {
      this.setState({ employee: res.data.results });
      this.setState({ empFilter: res.data.results })
    }).catch((err) => console.log(err));
  }
  handleSearchInput = (event) => {
    let { value } = event.target;
    this.setState({ searchInput: value });
    console.log({ searchInput: value })
    let filtered = this.state.employee.filter((emp) => {
      return (
        emp.name.first
          .toLowerCase()
          .includes(this.state.searchInput.toLowerCase()) ||
        emp.name.last
          .toLowerCase()
          .includes(this.state.searchInput.toLowerCase())
      );
    });
    console.log(filtered)
    this.setState({ empFilter: filtered });
    console.log({ empFilter: filtered })

  };

  onUserInput = (emps) => {
    this.setState({ employee: emps });

  };
  render() {

    return (
      <div>
        <Hero backgroundImage="https://i.imgur.com/2j0QfWL.jpeg">
          <h1>COMPANY DIRECTORY</h1>
          <h2>Creative Brands Employee Directory</h2>
          <SearchForm handleSearchInput={this.handleSearchInput} />
        </Hero>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <DataTable currentState={this.state} onSortName={this.onUserInput} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};
export default Home;
