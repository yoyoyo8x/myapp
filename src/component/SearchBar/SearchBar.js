import React from "react";
import "./SearchBar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const SearchBar = () => {
  return (
    <>
      <div className="search-bar">
        <div className="search-icon">
          <AiOutlineSearch />
        </div>
        <input
          type="search"
          className="search"
          placeholder="Search users"
        />
      </div>
    </>
  );
};

export default SearchBar;
