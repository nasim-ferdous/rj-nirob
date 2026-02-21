import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 sm:py-12 md:py-14 text-center border-t border-white/10 text-gray-500 px-4 sm:px-6">
      <p className="text-sm sm:text-base md:text-base">
        © {new Date().getFullYear()} RJ Nirob. All rights reserved.
      </p>

      <p className="mt-2 text-xs sm:text-sm md:text-base text-purple-500 leading-relaxed">
        "The Voice You Know. The Guidance You Trust."
      </p>

      <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base text-purple-500 text-right sm:text-right md:text-right">
        <span className="text-gray-500">Developed by</span> <br />
        <a
          href="https://nasim-ferdous.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline transition duration-300"
        >
          Nasim Ferdous
        </a>
      </p>
    </footer>
  );
};

export default Footer;
