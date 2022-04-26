import React from 'react'
import "./searchbar.css";
import data from "./SampleData.json";


const SearchBar = () => {
  return (
    <div className="container1">
      <input id="SearchBar" type="text" placeholder="Search by Name, Email or Role..." />
      <button id="Searchbtn">Search</button>
    </div>
  )
}

export default SearchBar
