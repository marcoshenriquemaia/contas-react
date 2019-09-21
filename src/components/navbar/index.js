import React, { useState } from "react"
import "./style.css";

const Navbar = prop => {
    const [number, setNumber] = useState(0) 
 
    const addNumber = () =>{
        setNumber(number + 1)
        prop.setNumber(prop.number + 2)
        console.log(number)
    }
  return (
    <>
    
    </>
  );
};


export default Navbar;
