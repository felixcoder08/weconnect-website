"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Parallax, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <Swiper
        modules={[Autoplay, EffectFade, Parallax, Navigation, Pagination]}
        effect="fade"
        speed={1200}
        parallax={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        navigation={true}
        loop={true}
        className="h-full w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-center relative"
            style={{ backgroundImage: "url('/assets/images/accueil/slide1.jpeg')" }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 
                className="text-4xl md:text-6xl font-bold text-white mb-4 transform transition-all duration-1000"
                data-swiper-parallax="-300"
                data-swiper-parallax-duration="600"
              >
                Notre vision 
              </h1>
              <p 
                className="text-xl md:text-2xl text-white max-w-2xl mb-8 transform transition-all duration-1000"
                data-swiper-parallax="-200"
                data-swiper-parallax-duration="800"
              >
                Construire une communauté riche en opportunités
              </p>
              <button 
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                data-swiper-parallax="-100"
                data-swiper-parallax-duration="1000"
              >
                Découvrir
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-center relative"
            style={{ backgroundImage: "url('/assets/images/accueil/slide2.jpeg')" }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h2 
                className="text-3xl md:text-5xl font-bold text-white mb-4 transform transition-all duration-1000"
                data-swiper-parallax="-300"
                data-swiper-parallax-duration="600"
              >
                Notre objectif
              </h2>
              <p 
                className="text-xl md:text-2xl text-white max-w-2xl mb-8 transform transition-all duration-1000"
                data-swiper-parallax="-200"
                data-swiper-parallax-duration="800"
              >
                Créer des opportunités pour tous
              </p>
              <button 
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                data-swiper-parallax="-100"
                data-swiper-parallax-duration="1000"
              >
                Voir les événements
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 - Optionnel */}
        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-center relative"
            style={{ backgroundImage: "url('/assets/images/accueil/slide3.jpeg')" }}
          >
            <div className="absolute inset-0 bg-blue-900/50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h2 
                className="text-3xl md:text-5xl font-bold text-white mb-4 transform transition-all duration-1000"
                data-swiper-parallax="-300"
                data-swiper-parallax-duration="600"
              >
                    Notre mission
              </h2>
              <p 
                className="text-xl md:text-2xl text-white max-w-2xl mb-8 transform transition-all duration-1000"
                data-swiper-parallax="-200"
                data-swiper-parallax-duration="800"
              >
                Rendre ce que nous avons réçu gratuitement
              </p>
              <button 
                className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                data-swiper-parallax="-100"
                data-swiper-parallax-duration="1000"
              >
                Voir les actualités
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Défilement indicateur */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-white text-sm mb-2">Découvrir</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}