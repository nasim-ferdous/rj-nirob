import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";

const Media = () => {
  const mediaLinks = [
    {
      title: "RJ Nirob — Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/Rj.Nirob.1bd",
    },
    {
      title: "RJ Comedy Show — Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/RjComedyShow1",
    },
    {
      title: "RJ Nirob — YouTube",
      icon: <FaYoutube />,
      link: "https://www.youtube.com/@RjNirob1/",
    },
    {
      title: "RJ Comedy Show — YouTube",
      icon: <FaYoutube />,
      link: "https://www.youtube.com/@RjComedyShow1",
    },
    {
      title: "RJ Nirob — TikTok",
      icon: <FaTiktok />,
      link: "https://www.tiktok.com/@rj.nirob1",
    },
    {
      title: "RJ Comedy Show — TikTok",
      icon: <FaTiktok />,
      link: "https://www.tiktok.com/@rjcomedyshow00",
    },
    {
      title: "RJ Nirob — Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/rjnirob1",
    },
    {
      title: "RJ Comedy Show — Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/rjcomedyshow1",
    },
    {
      title: "Nk Entertainment bd — Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/NkEntertainment1bd",
    },
    {
      title: "Nk Entertainment bd — YouTube",
      icon: <FaYoutube />,
      link: "https://www.youtube.com/@NkEntertainment1bd",
    },
  ];

  return (
    <section id="media" className="py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Media & Social Presence
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {mediaLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                className="flex items-center gap-6 p-6 rounded-2xl border border-white/10 hover:border-purple-600 transition bg-black/40 backdrop-blur-md"
              >
                <div className="text-3xl text-purple-500">{item.icon}</div>
                <p className="text-lg text-gray-300">{item.title}</p>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Media;
