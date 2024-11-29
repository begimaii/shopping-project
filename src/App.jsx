import "./App.css";
import Home from "./components/Home";
// import BrowserRouter from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router";
import Register from "./components/Register";
import NavbarComp from "./components/NavbarComp";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* <Route path="" element={<NavbarComp />} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
