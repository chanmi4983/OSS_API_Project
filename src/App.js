import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import { Header } from "./components/Header";

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
