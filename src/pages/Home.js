import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchForm from "../components/SearchForm";
function Home() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/2j0QfWL.jpeg">
        <h1>COMPANY DIRECTORY</h1>
        <h2>Creative Brands Employee Directory</h2>
        <SearchForm />
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h3 className="text-center">Great Day to be a Creative Brands Technology Employee!</h3>
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

export default Home;
