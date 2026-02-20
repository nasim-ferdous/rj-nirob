import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 ">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            A Journey of Voice, Trust, and Transformation
          </h2>

          <div className="space-y-12 border-l border-purple-600 text-left pl-8">
            <div>
              <h3 className="text-2xl font-semibold text-purple-500">
                Legendary Radio Personality
              </h3>
              <p className="text-gray-400 mt-2">
                Built a massive listener base through heartfelt storytelling and
                emotional connection, becoming known as “The Voice That Connects
                Hearts.”
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-purple-500">
                Trusted Relationship Consultant
              </h3>
              <p className="text-gray-400 mt-2">
                Transitioned from storytelling to active listening — helping
                couples and families resolve conflicts and rebuild trust.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-purple-500">
                Life Coach & Mental Well-being Advocate
              </h3>
              <p className="text-gray-400 mt-2">
                Guiding individuals to overcome emotional struggles, build
                resilience, and find clarity in life’s most difficult phases.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-purple-500">
                Digital Content Creator & Mentor
              </h3>
              <p className="text-gray-400 mt-2">
                Through podcasts, Life Story series, and judging national
                competitions, inspiring millions and mentoring the next
                generation of creators.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
