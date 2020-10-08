import React from "react";


import Home from "./pages/Home";

import Navbar from "./components/Navbar";

import Wrapper from "./components/Wrapper";

function App() {
  return (

    <div>
      <Navbar />
      <Wrapper >
        <Home />
      </Wrapper>
    </div>

  );
}

export default App;
