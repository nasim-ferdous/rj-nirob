import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <div className="max-w-4xl lg:max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16 leading-tight">
            A Journey of Voice, Trust, and Transformation
          </h2>

          <div className="space-y-8 sm:space-y-10 md:space-y-12 border-l border-purple-600 text-left pl-5 sm:pl-6 md:pl-8">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-500">
                Legendary Radio Personality
              </h3>
              <p className="text-gray-400 mt-2 text-sm sm:text-base md:text-lg leading-relaxed">
                Built a massive listener base through heartfelt storytelling and
                emotional connection, becoming known as “The Voice That Connects
                Hearts.”
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-500">
                Trusted Relationship Consultant
              </h3>
              <p className="text-gray-400 mt-2 text-sm sm:text-base md:text-lg leading-relaxed">
                Transitioned from storytelling to active listening — helping
                couples and families resolve conflicts and rebuild trust.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-500">
                Life Coach & Mental Well-being Advocate
              </h3>
              <p className="text-gray-400 mt-2 text-sm sm:text-base md:text-lg leading-relaxed">
                Guiding individuals to overcome emotional struggles, build
                resilience, and find clarity in life’s most difficult phases.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-500">
                Digital Content Creator & Mentor
              </h3>
              <p className="text-gray-400 mt-2 text-sm sm:text-base md:text-lg leading-relaxed">
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
