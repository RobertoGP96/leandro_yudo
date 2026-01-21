import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronRight,
  Phone,
  Mail,
  Star,
  Home,
  Users,
  Calendar,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";
import { AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <span className="font-[Hiromisake] text-4xl tracking-tight text-judo-blue-600">
                DOJO RYU SUI
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a
                href="#home"
                className="flex items-center gap-2 text-gray-600 hover:text-judo-blue-600 transition-colors font-medium"
              >
                <Home size={18} /> Inicio
              </a>
              <a
                href="#about"
                className="flex items-center gap-2 text-gray-600 hover:text-judo-blue-600 transition-colors font-medium"
              >
                <Users size={18} /> Nosotros
              </a>
              <a
                href="#classes"
                className="flex items-center gap-2 text-gray-600 hover:text-judo-blue-600 transition-colors font-medium"
              >
                <Calendar size={18} /> Clases
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                <a
                  href="#home"
                  className="flex items-center gap-3 px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg"
                >
                  <Home size={20} className="text-judo-blue-600" /> Inicio
                </a>
                <a
                  href="#about"
                  className="flex items-center gap-3 px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg"
                >
                  <Users size={20} className="text-judo-blue-600" /> Nosotros
                </a>
                <a
                  href="#classes"
                  className="flex items-center gap-3 px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg"
                >
                  <Calendar size={20} className="text-judo-blue-600" /> Clases
                </a>
                <a
                  href="#contact"
                  className="flex items-center gap-3 px-3 py-2 text-base text-judo-blue-600 font-bold hover:bg-gray-50 rounded-lg"
                >
                  <Mail size={20} /> Contacto
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden"
      >
        {/* Background Image & Gradient Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/4.jpeg')" }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/80 to-white/20 sm:to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur-sm border border-judo-blue-100 text-judo-blue-700 rounded-full text-sm font-semibold mb-6 shadow-sm">
                <span className="w-2 h-2 bg-judo-blue-600 rounded-full animate-pulse"></span>
                Inscripciones Abiertas 2026
              </div>
              <h1 className="text-4xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
                Descubre el camino <br />
                del <span className="text-judo-blue-600">Judo</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
                Formamos campeones dentro y fuera del tatami. Únete a la
                academia líder en enseñanza de Judo, donde la disciplina se
                encuentra con la pasión.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                
                <a href="#horarios" className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 border-2 border-gray-200 rounded-xl font-bold text-lg hover:border-gray-300 hover:bg-white transition-all flex items-center justify-center gap-2">
                  Ver Horarios
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Olympic Inspirations Section */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-judo-blue-400 font-bold tracking-wider uppercase text-sm mb-2 block">
              Inspiración
            </span>
            <h2 className="text-4xl font-extrabold mb-4">Grandeza Olímpica</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              La excelencia técnica y el espíritu indomable de los campeones
              mundiales que inspiran a nuestra nueva generación.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src="/judo-throw.png"
                alt="Olympic Throw High Amplitude"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">Técnica Perfecta</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    La búsqueda del ippon definitivo, inspirada en leyendas como
                    Shohei Ono.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer md:-mt-8"
            >
              <img
                src="/judo-celebration.png"
                alt="Gold Medal Celebration"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">Gloria Olímpica</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    El momento cumbre de años de sacrificio, al estilo de
                    Clarisse Agbegnenou.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src="/judo-grip.png"
                alt="Heavyweight Grip Fight"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">Poder Absoluto</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Dominio y fuerza mental en la categoría máxima, el legado de
                    Teddy Riner.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-judo-blue-50/50 skew-x-12 translate-x-32 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-judo-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">
                Filosofía
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                El Camino de la{" "}
                <span className="text-judo-blue-600">Suavidad</span>
              </h2>
              <div className="prose prose-lg text-gray-600 text-lg leading-relaxed mb-8">
                <p className="mb-4">
                  El <strong className="text-gray-900">Judo</strong> (柔道) es
                  más que un sistema de combate; es una poderosa herramienta
                  educativa creada por Jigoro Kano en 1882. Su nombre significa
                  "camino de la suavidad", y se basa en el principio de usar la
                  fuerza del oponente en su contra, maximizando la eficiencia
                  con el mínimo esfuerzo (
                  <em className="italic">Seiryoku Zenyo</em>).
                </p>
                <p>
                  En nuestra academia, enseñamos el Judo no solo como un deporte
                  olímpico, sino como una escuela de vida que transforma a las
                  personas, fomentando valores inquebrantables.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Desarrollo físico integral",
                  "Confianza y autoestima",
                  "Respeto y etiqueta",
                  "Control emocional",
                  "Defensa personal real",
                  "Mejora la concentración",
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 lg:mt-0 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/jigoro-kano.png"
                  alt="Jigoro Kano"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-8">
                  <p className="text-white font-medium italic text-lg">
                    "Lo importante no es ser mejor que otros, sino ser mejor que
                    ayer." - Jigoro Kano
                  </p>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-judo-blue-100 rounded-full blur-3xl opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features/Values Section - Updated for Flow */}
      <section id="clases" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pilares de Nuestra Enseñanza
            </h2>
            <p className="text-gray-600">
              Mejora la coordinación motriz, el equilibrio y la agilidad
              infantil, a través de la práctica del judo. Optimizaa la capacidad
              de tomar decisiones, controlar el estrés y ansiedad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Disciplina",
                desc: "Forja tu carácter a través de la constancia y el respeto.",
                color: "bg-blue-50 text-blue-600",
              },
              {
                title: "Defensa Personal",
                desc: "Aprende técnicas efectivas para tu seguridad y confianza.",
                color: "bg-judo-red text-white",
              },
              {
                title: "Comunidad",
                desc: "Entrena en un ambiente familiar y de apoyo mutuo.",
                color: "bg-gray-50 text-gray-600",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all"
              >
                <div
                  className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-6 shadow-sm`}
                >
                  <Star size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Galería</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Momentos inolvidables en nuestro dojo. Entrenamientos, torneos y
              eventos especiales que marcan nuestro camino en el Judo.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <EmblaCarouselWithAutoScroll />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="horarios" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="col-span-1 md:col-span-1 space-y-2">
              <span className="font-[Hiromisake] text-2xl font-bold tracking-tight mb-4 block">
                DOJO RYU SUI
              </span>
              <p className="text-gray-400 text-sm">
                Cultivamos principios, actitudes y aptitudes, mediante la
                enseñanza y la práctica del Judo.
              </p>
            </div>

            <div className="space-y-2">
              <h2>Horarios</h2>
              <p className="text-gray-400 text-sm">
                Lunes, Miércoles y Viernes
              </p>
              <ul>
                <li className="text-gray-400 text-sm">- 6:00-7:00 pm niños</li>
                <li className="text-gray-400 text-sm">
                  - 7:00-8:00 pm jóvenes
                </li>
                <li className="text-gray-400 text-sm">
                  - 8:00-9:00 pm adultos y jóvenes
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#clases" className="hover:text-white transition-colors">
                    Clases
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={16} /> +52 998 396 8878
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} /> e361259@gmail.com
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/1HQqVthzTw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>

                <a
                  href="https://youtube.com/shorts/buMGq1HzFoI?feature=shared"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-600 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            2026 DOJO RYU SUI. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

import {  useRef } from "react";

function EmblaCarouselWithAutoScroll() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const videoRefs = useRef({});
  const autoScrollRef = useRef(null);

  const scrollTo = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const pauseAllVideos = useCallback(() => {
    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        video.pause();
      }
    });
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    pauseAllVideos();
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, pauseAllVideos]);

  useEffect(() => {
    if (!emblaApi) return;

    // Auto-scroll every 5 seconds
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollTo(0);
        }
      }, 5000);
    };

    const stopAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
    };

    // Initialize
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    startAutoScroll();

    // Event listeners
    emblaApi.on("select", onSelect);
    emblaApi.on("pointerDown", stopAutoScroll);
    emblaApi.on("pointerUp", startAutoScroll);

    // Cleanup
    return () => {
      stopAutoScroll();
      emblaApi.off("select", onSelect);
      emblaApi.off("pointerDown", stopAutoScroll);
      emblaApi.off("pointerUp", startAutoScroll);
    };
  }, [emblaApi, onSelect]);

  const slides = [
    {
      type: "image",
      src: "/images/2.jpeg",
      alt: "Entrenamiento de Judo",
      title: "Entrenamiento de Judo",
    },
    {
      type: "image",
      src: "/images/3.jpeg",
      alt: "Clase de Judo",
      title: "Clase de Judo",
    },
    {
      type: "image",
      src: "/images/4.jpeg",
      alt: "Competencia de Judo",
      title: "Competencia de Judo",
    },
    {
      type: "image",
      src: "/images/7.jpeg",
      alt: "Dojo",
      title: "Entrenamiento en el Dojo",
    },
    {
      type: "image",
      src: "/images/8.jpeg",
      alt: "Dojo",
      title: "Entrenamiento en el Dojo",
    },
    {
      type: "image",
      src: "/images/9.jpeg",
      alt: "Dojo",
      title: "Entrenamiento en el Dojo",
    },
    {
      type: "image",
      src: "/images/10.jpeg",
      alt: "Dojo",
      title: "Dojo",
    },
  ];

  const handleVideoClick = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        pauseAllVideos();
        video.play();
      } else {
        video.pause();
      }
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <div className="relative h-96 mx-2 overflow-hidden rounded-lg bg-black shadow-lg">
                  {slide.type === "image" ? (
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      className="relative w-full h-full cursor-pointer group"
                      onClick={() => handleVideoClick(index)}
                    >
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        className="w-full h-full object-cover"
                        poster={slide.poster}
                        preload="metadata"
                        playsInline
                      >
                        <source src={slide.src} type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all duration-300 pointer-events-none">
                        <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                          <svg
                            className="w-10 h-10 text-blue-600 ml-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 via-black/50 to-transparent p-4">
                    <p className="text-white text-lg font-semibold drop-shadow-lg">
                      {slide.title}
                    </p>
                    {slide.type === "video" && (
                      <div className="flex items-center mt-1">
                        <svg
                          className="w-4 h-4 text-white mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                        <span className="text-sm text-white/90 drop-shadow">
                          Click para reproducir
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-blue-600 w-8"
                  : "bg-gray-300 hover:bg-blue-400 w-3"
              }`}
              type="button"
              onClick={() => scrollTo(index)}
              aria-label={`Ir a la diapositiva ${index + 1}`}
            />
          ))}
        </div>

        <style jsx global>{`
          .embla {
            overflow: hidden;
            position: relative;
          }
          .embla__viewport {
            overflow: hidden;
            width: 100%;
          }
          .embla__viewport.is-draggable {
            cursor: move;
            cursor: grab;
          }
          .embla__viewport.is-dragging {
            cursor: grabbing;
          }
          .embla__container {
            display: flex;
            user-select: none;
            -webkit-touch-callout: none;
            -khtml-user-select: none;
            -webkit-tap-highlight-color: transparent;
            padding: 10px 0;
          }
          .embla__slide {
            position: relative;
            flex: 0 0 90%;
            min-width: 0;
            margin: 0 8px;
            transition: transform 0.3s ease;
          }
          @media (min-width: 640px) {
            .embla__slide {
              flex: 0 0 60%;
            }
          }
          @media (min-width: 768px) {
            .embla__slide {
              flex: 0 0 45%;
            }
          }
          @media (min-width: 1024px) {
            .embla__slide {
              flex: 0 0 32%;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export default App;
