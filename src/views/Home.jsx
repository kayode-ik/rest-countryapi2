import axios from "axios";
import React, { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/globalStyles";
import { lightTheme, darkTheme } from "../components/Themes";
import "../components/Navbar/navbar.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function Home({countryData}) {
 
  const [query , setQuery]  = useState("")

  const [filterQuery , setFilterQuery] = useState("All")

  console.log(query , 'line 17')
  const handleChange = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setQuery(lowerCase)
  }

  const handleFilter = (e) => {
    setFilterQuery(e.target.value)
  }

  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };



  console.log(countryData, "line 32");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        {/* <  Nav Bar */}
        <GlobalStyles />

        <div className="navbar__container">
          <div className="navbar__content">
            <h2>Where in the world?</h2>

            {/* DarkMode */}
            <div className="darkmode" onClick={themeToggler}>
              <span>
                <DarkModeIcon />
              </span>
              <span className="darkText">Dark Mode</span>
            </div>
          </div>
        </div>
        {/* Search and filter */}
        <Search setQuery={setQuery} query={query} handleChange={handleChange} handleFilter={handleFilter} filterQuery={filterQuery}/>
        {/* Home Card */}
        <CountryCard  countryData={countryData} query={query} filterQuery={filterQuery}/>
      </>
    </ThemeProvider>
  );
}

export default Home;
