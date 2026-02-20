import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 text-center border-t border-white/10 text-gray-500">
      <p>© {new Date().getFullYear()} RJ Nirob. All rights reserved.</p>
      <p className="mt-2 text-sm text-purple-500">
        "The Voice You Know. The Guidance You Trust."
      </p>
      <p className="mt-6 mr-2 text-sm text-right text-purple-500">
        <span className="text-gray-500">Developed by</span> <br />
        <a
          href="https://nasim-ferdous.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nasim Ferdous
        </a>
      </p>
    </footer>
  );
};

export default Footer;
