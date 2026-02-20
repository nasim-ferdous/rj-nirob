import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      q: "Is my information kept confidential?",
      a: "Absolutely. Privacy is the foundation of RJ Nirob’s consultancy. Every conversation is strictly confidential. Your story is safe here.",
    },
    {
      q: "I know him from the radio; is he the same person in sessions?",
      a: "You’ll recognize the same iconic voice and warmth, but sessions are focused entirely on you. He shifts from storyteller to active listener.",
    },
    {
      q: "What kind of relationship issues can he help with?",
      a: "Communication breakdowns, trust issues, family disputes, and emotional recovery after breakup or separation.",
    },
    {
      q: "How many sessions will I need?",
      a: "Every situation is unique. Some find clarity in 1–2 sessions, others prefer ongoing support over months.",
    },
    {
      q: "Can I book a session from outside Dhaka or abroad?",
      a: "Yes! Virtual sessions are available via Zoom, Google Meet, or WhatsApp worldwide.",
    },
    {
      q: "Can I share my Life Story for his podcast?",
      a: "Yes. Submit a summary of your story through the contact section for consideration.",
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-32 px-6 ">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-xl p-6 cursor-pointer"
                onClick={() => setOpen(open === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-purple-500">
                  {item.q}
                </h3>
                {open === index && (
                  <p className="text-gray-400 mt-4">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
