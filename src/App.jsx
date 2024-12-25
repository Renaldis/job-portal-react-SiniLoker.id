import Navbarr from "./Components/navbar/Navbarr";
import Home from "./Pages/Home";
import Footer from "./Components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbarr className="sticky top-0 z-50 bg-white shadow-sm" />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
