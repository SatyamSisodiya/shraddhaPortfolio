import React from "react";

const Contact = () => (
  <section className="py-20 bg-darkNavy text-offWhite" id="contact">
    <h3 className="text-3xl font-serif text-center text-oliveGreen mb-8">Get in Touch</h3>
    <form className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
      <label className="block mb-4">
        <span className="text-mutedGray">Name</span>
        <input className="mt-1 block w-full bg-darkNavy border border-gray-700 rounded-md p-2 text-offWhite" type="text" />
      </label>
      <label className="block mb-4">
        <span className="text-mutedGray">Email</span>
        <input className="mt-1 block w-full bg-darkNavy border border-gray-700 rounded-md p-2 text-offWhite" type="email" />
      </label>
      <label className="block mb-4">
        <span className="text-mutedGray">Message</span>
        <textarea className="mt-1 block w-full bg-darkNavy border border-gray-700 rounded-md p-2 text-offWhite"></textarea>
      </label>
      <button type="submit" className="w-full bg-oliveGreen p-2 rounded-md text-darkNavy font-semibold hover:bg-mutedGray">
        Send Message
      </button>
    </form>
  </section>
);

export default Contact;
