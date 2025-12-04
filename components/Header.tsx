import React from "react";
import Hero from "./Hero";
// Import the image first. The bundler gives us the correct public URL.
import backgroundImage from "../src/assets/white-beach-sand-background-picjumbo-com.jpg";
import Navbar from "./Navbar";

// Define the styles as a JavaScript object
const headerStyles = {
  backgroundImage: `url(${backgroundImage})`, 
  backgroundSize: "",
  height: "",
  
};

const Header = () => {
  return (
    <div style={headerStyles} className="w-full">
      <Hero />
    </div>
  );
};

export default Header;
