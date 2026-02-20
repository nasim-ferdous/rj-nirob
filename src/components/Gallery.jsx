import React from "react";
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Gallery = () => {
  const images = [
    "/gallery/rj_1.jpg",
    "/gallery/rj_2.jpg",
    "/gallery/rj_3.jpg",
    "/gallery/rj_4.jpg",
    "/gallery/rj_5.jpg",
    "/gallery/rj_6.jpg",
  ];

  return (
    <section id="gallery" className="py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          Moments & Media Highlights
        </h2>

        <PhotoProvider>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <PhotoView src={img}>
                  <img
                    src={img}
                    alt="RJ Nirob"
                    className="w-full h-60 object-cover rounded-2xl cursor-pointer hover:scale-105 transition duration-500 border border-white/10"
                  />
                </PhotoView>
              </SwiperSlide>
            ))}
          </Swiper>
        </PhotoProvider>
      </motion.div>
    </section>
  );
};

export default Gallery;
