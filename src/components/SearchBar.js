import React from "react";
import "./SearchBar.css";

function SearchBar({ searchQuery, onSearch }) {
  return (
    <input
      type="text"
      placeholder="검색어를 입력하세요"
      value={searchQuery}
      onChange={(e) => onSearch(e.target.value)}
      className="search-input"
    />
  );
}

export default SearchBar;



