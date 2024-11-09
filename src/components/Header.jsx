import React from "react";

const Header = () => (
  <header className="flex justify-between items-center py-5 px-8 bg-darkNavy shadow-lg">
    <h1 className="text-2xl font-serif text-offWhite">Shraddha Bhaskar</h1>
    <nav className="flex space-x-8 text-oliveGreen">
      <a href="#about" className="hover:underline">About</a>
      <a href="#projects" className="hover:underline">Projects</a>
      <a href="#skills" className="hover:underline">Skills</a>
      <a href="#contact" className="hover:underline">Contact</a>
    </nav>
  </header>
);

export default Header;
