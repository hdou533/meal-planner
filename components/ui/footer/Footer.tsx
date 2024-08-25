import React from "react";

const year = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="bottom-5 w-full text-xs fixed">
      <p className="text-center">© {year}</p>
    </footer>
  );
};

export default Footer;
