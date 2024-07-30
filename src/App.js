import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Activities from "./Pages/Activities";
import Footer from "./Components/Footer";
import Activity from "./Pages/Activity";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities/:query" element={<Activities />} />
        <Route path="/activity/:id" element={<Activity />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
