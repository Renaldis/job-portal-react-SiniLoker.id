import Navbarr from "./Components/navbar/Navbarr";
import Home from "./Pages/Home";
import Footer from "./Components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobVacancies from "./Pages/JobVacancies";
import About from "./Pages/About";
import GlobalJobProvider from "./context/GlobalJobProvider";
import ErrNotFound from "./Pages/ErrNotFound";

function App() {
  return (
    <Router>
      <GlobalJobProvider>
        <Navbarr className="sticky top-0 z-50 bg-white shadow-sm" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-vacancies" element={<JobVacancies />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrNotFound />} />
        </Routes>
        <Footer />
      </GlobalJobProvider>
    </Router>
  );
}

export default App;
