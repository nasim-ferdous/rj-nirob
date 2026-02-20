import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Personalized Services for a Better Life
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-zinc-900 p-8 rounded-2xl border border-white/10 hover:border-purple-600 transition">
              <h3 className="text-2xl font-semibold mb-4 text-purple-500">
                Relationship & Family Consultancy
              </h3>
              <ul className="text-gray-400 space-y-3 text-sm">
                <li>• Conflict Resolution between partners</li>
                <li>• Strengthening family bonds</li>
                <li>• Pre-Marital Counseling</li>
                <li>• Healing after breakup or divorce</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-900 p-8 rounded-2xl border border-white/10 hover:border-purple-600 transition">
              <h3 className="text-2xl font-semibold mb-4 text-purple-500">
                Life Coaching & Mental Well-being
              </h3>
              <ul className="text-gray-400 space-y-3 text-sm">
                <li>• Managing stress and anxiety</li>
                <li>• Confidence Building</li>
                <li>• Personal Growth & Goal Setting</li>
                <li>• Emotional Resilience</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-900 p-8 rounded-2xl border border-white/10 hover:border-purple-600 transition">
              <h3 className="text-2xl font-semibold mb-4 text-purple-500">
                Creative Media & Brand Consultancy
              </h3>
              <ul className="text-gray-400 space-y-3 text-sm">
                <li>• Content Strategy for creators</li>
                <li>• Video Advertise & Narrative Services</li>
                <li>• Podcast & Documentary Consultancy</li>
                <li>• Public Speaking & Communication</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
