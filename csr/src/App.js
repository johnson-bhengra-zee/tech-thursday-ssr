import React from "react";
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          {/* <hr />
      <Breadcrumbs routes={routes} />
      <hr /> */}
          <Routes>

            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>;
    </>
  );
}

export default App;