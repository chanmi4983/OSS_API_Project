// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MainPage from "./pages/MainPage";
// import DetailPage from "./pages/DetailPage";
// import { Header } from "./components/Header";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<MainPage />} />
//         <Route path="/detail/:id" element={<DetailPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ArtworksList from "./pages/ListPage";
// import ArtworkDetail from "./pages/DetailPage";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/artworks" element={<ArtworksList />} />
//         <Route path="/artworks/:id" element={<ArtworkDetail />} />
//         {/* 기본 경로를 작품 목록 페이지로 설정 */}
//         <Route path="/" element={<ArtworksList />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
