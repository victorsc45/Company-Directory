import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
// ^ import statements for routing, nav bar and wrapper. Router wraps the entire application
// only one path necessary for this application home path
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/company-directory" component={Home} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
