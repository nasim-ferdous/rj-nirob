import React from "react";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Connect with RJ Nirob</h2>

          <p className="text-gray-400 text-lg mb-8">
            Whether you are seeking guidance or want to collaborate, RJ Nirob is
            here to listen and lead.
          </p>

          <div className="text-2xl flex flex-col font-semibold text-purple-500 mb-6">
            <a
              href="https://wa.me/8801605566132?text=Hello%20RJ%20Nirob,%20I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              title="Book a consultation with RJ Nirob on WhatsApp"
            >
              Consultancy Contact: +8801605566132 (WhatsApp)
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=neerobss@gmail.com&su=Booking%20consultation&body=Hi%20RJ%20Nirob,%0A%0AI%20am%20interested%20in%20booking%20a%20consultation.%20Please%20let%20me%20know%20your%20availability.%0A%0AThank%20you!"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email: neerobss@gmail.com
            </a>
          </div>

          <div
            tool-tip="Connect with RJ Nirob on social media"
            className="flex justify-center gap-8 text-3xl mt-6"
          >
            <a
              href="https://youtube.com/@RjNirob1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition"
            >
              <FaYoutube />
            </a>

            <a
              href="https://www.facebook.com/Rj.Nirob.1bd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition"
            >
              <FaFacebook />
            </a>

            <a
              href="https://wa.me/8801605566132?text=Hello%20RJ%20Nirob,%20I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
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
