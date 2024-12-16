// import React, { useState } from "react";
// import ListPage from "./ListPage";
// // import SearchBar from "../components/SearchBar";

// function MainPage() {
//   const [searchQuery, setSearchQuery] = useState("");

//   // const handleSearchChange = (query) => {
//   //   setSearchQuery(query);
//   // };

//   return (
//     <div>
//       <h1>GalleryNest</h1>
//       {/* <SearchBar value={searchQuery} onChange={handleSearchChange} /> */}
//       {/* <ListPage searchQuery={searchQuery} /> */}
//     </div>
//   );
// }

// export default MainPage;

import React from "react";
import ListPage from "./ListPage";

function MainPage() {
  const searchQuery = ""; // setSearchQuery 제거

  return (
    <div>
      <h1>GalleryNest</h1>
      <ListPage searchQuery={searchQuery} />
    </div>
  );
}

export default MainPage;
