import React from "react";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <div className="max-w-4xl sm:max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
            Connect with RJ Nirob
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
            Whether you are seeking guidance or want to collaborate, RJ Nirob is
            here to listen and lead.
          </p>

          <div className="text-base sm:text-lg md:text-xl flex flex-col font-semibold text-purple-500 mb-6 space-y-3 sm:space-y-4 break-words">
            <a
              href="https://wa.me/8801605566132?text=Hello%20RJ%20Nirob,%20I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              title="Book a consultation with RJ Nirob on WhatsApp"
              className="hover:text-green-400 transition duration-300"
            >
              Consultancy Contact: +8801605566132 (WhatsApp)
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=neerobss@gmail.com&su=Booking%20consultation&body=Hi%20RJ%20Nirob,%0A%0AI%20am%20interested%20in%20booking%20a%20consultation.%20Please%20let%20me%20know%20your%20availability.%0A%0AThank%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500 transition duration-300"
            >
              Email: neerobss@gmail.com
            </a>
          </div>

          <div className="flex justify-center gap-6 sm:gap-8 text-2xl sm:text-3xl md:text-4xl mt-6">
            <a
              href="https://youtube.com/@RjNirob1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition duration-300"
            >
              <FaYoutube />
            </a>

            <a
              href="https://www.facebook.com/Rj.Nirob.1bd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition duration-300"
            >
              <FaFacebook />
            </a>

            <a
              href="https://wa.me/8801605566132?text=Hello%20RJ%20Nirob,%20I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition duration-300"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
