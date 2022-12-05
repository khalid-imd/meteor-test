import "./App.css";
import Navbartable from "./atoms/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import BookDetail from "./pages/bookDetail";

function App() {
  return (
    <div>
      <Navbartable />
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/book" element={<BookDetail />} />
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
