import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <div className="max-w-4xl lg:max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
            RJ Nirob: Empowering Lives through Voice and Vision
          </h2>

          <p className="text-gray-400 leading-relaxed text-justify sm:text-center text-base sm:text-lg md:text-xl mb-5 sm:mb-6">
            Known widely as{" "}
            <span className="text-purple-500">
              "The Voice That Connects Hearts,"
            </span>
            RJ Nirob (Md. Humayun Kabir) has transitioned from a legendary radio
            personality to a transformative Life Coach, Relationship Consultant,
            and Digital Content Creator.
          </p>

          <p className="text-gray-400 leading-relaxed text-justify sm:text-center text-base sm:text-lg md:text-xl mb-5 sm:mb-6">
            With over a decade of experience in the media industry, he has
            cultivated a unique space where storytelling meets mental well-being
            — helping individuals and families navigate emotional challenges
            with empathy and practical wisdom.
          </p>

          <p className="italic text-purple-400 mt-8 sm:mt-10 text-lg sm:text-xl md:text-2xl">
            "Being a reason for people's trust and confidence is my greatest
            opportunity."
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
