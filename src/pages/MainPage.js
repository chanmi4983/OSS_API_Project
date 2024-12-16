import React, { useState } from "react";
import Restaurants from "../components/Restaurants";
import SearchBar from "../components/SearchBar";

function MainPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <h1>GalleryNest</h1>
      <SearchBar value={searchQuery} onChange={handleSearchChange} />
      <Restaurants searchQuery={searchQuery} />
    </div>
  );
}

export default MainPage;
