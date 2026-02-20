import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 ">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            RJ Nirob: Empowering Lives through Voice and Vision
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg mb-6">
            Known widely as{" "}
            <span className="text-purple-500">
              "The Voice That Connects Hearts,"
            </span>
            RJ Nirob (Md. Humayun Kabir) has transitioned from a legendary radio
            personality to a transformative Life Coach, Relationship Consultant,
            and Digital Content Creator.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg mb-6">
            With over a decade of experience in the media industry, he has
            cultivated a unique space where storytelling meets mental well-being
            — helping individuals and families navigate emotional challenges
            with empathy and practical wisdom.
          </p>

          <p className="italic text-purple-400 mt-10 text-xl">
            "Being a reason for people's trust and confidence is my greatest
            opportunity."
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
