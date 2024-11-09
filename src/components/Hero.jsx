import React from "react";

const Hero = () => (
  <section className="flex flex-col md:flex-row items-center py-20 bg-darkNavy text-offWhite">
    <div className="w-full md:w-1/2">
      {/* Replace with an image or illustration */}
      <img src="/path-to-photo.jpg" alt="Profile" className="w-80 h-80 rounded-full mx-auto md:mx-0" />
    </div>
    <div className="w-full md:w-1/2 md:pl-10 mt-8 md:mt-0 text-center md:text-left">
      <h2 className="text-4xl md:text-5xl font-serif text-oliveGreen mb-4">Hi, I'm Shraddha Bhaskar</h2>
      <p className="text-xl font-light text-lightGray">Web Developer & Data Scientist</p>
      <div className="mt-8">
        <a href="#projects" className="text-offWhite bg-oliveGreen px-6 py-3 rounded-md mr-4 hover:bg-mutedGray">View Projects</a>
        <a href="#contact" className="text-oliveGreen border border-oliveGreen px-6 py-3 rounded-md hover:bg-oliveGreen hover:text-offWhite">Get in Touch</a>
      </div>
    </div>
  </section>
);

export default Hero;
