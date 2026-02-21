import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 md:pb-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1], // smooth cinematic easing
          }}
        >
          <h2 className="text-purple-500 text-2xl font-bold mb-4 tracking-widest">
            The Voice You Know. The Guidance You Trust.
          </h2>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            RJ Nirob
          </h1>

          <p className="text-gray-400 text-justify text-lg leading-relaxed mb-8">
            Empowering lives through voice, vision, and empathy. From a
            legendary radio personality to a trusted Life Coach and Relationship
            Consultant, RJ Nirob helps people navigate life’s most complex
            emotional journeys.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto text-center bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white transition duration-300"
            >
              Book a Session
            </a>

            <a
              href="#about"
              className="w-full sm:w-auto text-center border border-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-full transition duration-300"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}
          className="flex justify-center"
        >
          <img
            src="/gallery/nirob.jpg"
            alt="RJ Nirob"
            className="rounded-3xl shadow-2xl w-92 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
