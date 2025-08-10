import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import SubmitComplaint from "./pages/SubmitComplaint";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-[calc(100vh-64px)] bg-gray-50 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit-complaint" element={<SubmitComplaint />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}
