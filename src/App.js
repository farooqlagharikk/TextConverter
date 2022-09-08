import React, { useState } from "react";
// import { render } from "react-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Textfrom from "./components/Textfrom";
import Footer from "./components/footer";

export default function App() {
  const [mode, setmode] = useState("light");
  const darkmode = () => {
    if (mode === "light") {
      setmode("dark");
    } else {
      setmode("light");
    }
  };

  return (
    <div className={`App ${mode}`}>
      <Navbar />
      <button class="btn btn-primary text-center " onClick={darkmode}>MODE</button>

      <Textfrom heading="Enter your Text Here" />
      <Footer />
    </div>
  );
}
