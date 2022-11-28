import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./search.css";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function Search({query , handleChange , filterQuery, handleFilter }) {
  // const options = [
  //   { id: 1, region: "Africa" },
  //   { id: 2, region: "America" },
  //   { id: 2, region: "Asia" },
  //   { id: 2, region: "Europe" },
  //   { id: 2, region: "Oceania" },
  // ];

  console.log(filterQuery , 'line 15')
  return (
    <div className="search__container">
      {/* searchBar */}
      <div className="searchBar">
        <SearchIcon />
        <input type="text" placeholder="Search for a country..." value={query} onChange={handleChange}/>
      </div>

      {/* filter By Region */}
      <Box sx={{ minWidth: 120 }}>
      <FormControl className="filter__search">
        <InputLabel id="demo-simple-select-label">Filter by Region</InputLabel>
      <Select
        placeholder="Filter by Region"
        labelId="Filter by Region"
        id="demo-simple-select"
        value={filterQuery}
        label="Filter by Region"
        onChange={handleFilter}
      >
        <MenuItem value={'All'}>All Countries</MenuItem>
        <MenuItem value={'africa'}>Africa</MenuItem>
        <MenuItem value={'americas'}>America</MenuItem>
        <MenuItem value={'asia'}>Asia</MenuItem>
        <MenuItem value={'europe'}>Europe</MenuItem>
        <MenuItem value={'oceania'}>Oceania</MenuItem>
      </Select>
      </FormControl>
    </Box>
    </div>
  );
}

export default Search;
