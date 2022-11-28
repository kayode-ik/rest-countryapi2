import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import BorderPage from "./components/Border";
import CountryCard from "./components/CountryCard";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import SinglePage from "./components/SinglePage";
import Home from "./views/Home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/details/:alpha2Code" element={<SinglePage />} />
          <Route
            path="/:country/border/:name"
            exact
            component={(props) => (
              <BorderPage {...props} key={window.location.pathname} />
            )}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
