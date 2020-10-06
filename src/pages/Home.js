import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchForm from "../components/SearchForm";
import DataTable from "../components/DataTable";
import API from "../utils/API";
import Footer from "../components/Footer";

class Home extends Component {
  state = {
    employee: [],
    value: '',
    activeSearch: true,
    searchInput: '',
    filtered: '',
    empFilter: [],
  };
  componentDidMount() {
    API.getRandomUsers().then((res) => {
      console.log(res.data.results.length)
      this.setState({ employee: res.data.results });
      this.setState({ empFilter: res.data.results });
    }).catch((err) => console.log(err));
  }
  handleSearchInput = (event) => {


    let { value } = event.target;
    let filtered = this.state.employee.filter((emp) => {
      return (
        emp.name.first
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        emp.name.last
          .toLowerCase()
          .includes(value.toLowerCase()) || emp.dob.date.includes(value)
      );
    });

    this.setState({

      empFilter: filtered,

    });
    console.log({
      empFilter: filtered
    })

  }


  render() {

    return (
      <div>
        <Hero backgroundImage="https://i.imgur.com/2j0QfWL.jpeg">
          <h1>COMPANY DIRECTORY</h1>
          <h2>Creative Brands Employee Directory</h2>
          <SearchForm handleSearchInput={this.handleSearchInput} />
        </Hero>
        <Container style={{ marginTop: 30 }}>
          <h5>Click the table headers to sort ascending and descending!</h5>
          <Row>
            <Col size="md-12">
              <DataTable currentState={this.state} />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div >
    );
  }
};
export default Home;
