import "./App.css";
import Home from "./components/Home";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS including Popper.js
import 'jquery/dist/jquery.min.js'; // jQuery (optional)
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lessons from "./components/Lessons";
import Progress from "./components/Progress";
import Tests from "./components/Tests";
import BottomNav from "./components/BottomNav";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <BottomNav/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Lessons" element={<Lessons />} />
          <Route exact path="/Progress" element={<Progress />} />
          <Route exact path="/Tests" element={<Tests />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
