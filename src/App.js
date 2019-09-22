import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Routes from './routes'

import "./assets/styles/reset.css";


function App() {
  const [number, setNumber] = useState(0);
  return (
    <section className='container'>
    <Routes/>
      {/* <Navbar nome="Sabrina" nameClasse="testando" number={number} setNumber={setNumber}></Navbar> */}
    </section>
  );
}

export default App;



