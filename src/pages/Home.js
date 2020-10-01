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

  };
  componentDidMount() {
    API.getRandomUsers().then((res) => {
      this.setState({ employee: res.data.results });


    }).catch((err) => console.log(err));
  }
  onUserInput = (emps) => {
    this.setState({ employee: emps });
  };
  render() {
    return (
      <div>
        <Hero backgroundImage="https://i.imgur.com/2j0QfWL.jpeg">
          <h1>COMPANY DIRECTORY</h1>
          <h2>Creative Brands Employee Directory</h2>
          <SearchForm currentState={this.state} onSearch={this.onUserInput} />
        </Hero>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <DataTable currentState={this.state} onSort={this.onUserInput} />
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <p className="text-center">
                Discover Page will sort employees by last name. The Search Page allows you to search for specific employees.
            </p>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};
export default Home;
