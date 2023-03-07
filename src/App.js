import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import CountryList from "./Components/CoyntryList";

const App = () => {
  return (
    <Router>
      <Link to={"/"}>countries</Link>
      <Link to={"/info"}>info</Link>

      <Routes>
        <Route path="/" element={<CountryList />} />
      </Routes>
    </Router>
  );
};

export default App;
