"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function NosotrosPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="headline text-4xl md:text-5xl lg:text-6xl text-[#1d1d1b] mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-[#a3a3a3] text-lg max-w-2xl">
              Conoce la visión y filosofía detrás de CURVA Arquitectura.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src="/photos/FACHADA INTERIOR 1.png"
                alt="CURVA Arquitectura Studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="headline text-3xl md:text-4xl text-[#1d1d1b] mb-6">
                  Nuestra Historia
                </h2>
                <div className="space-y-4 text-[#1d1d1b] leading-relaxed">
                  <p>
                    CURVA Arquitectura nació de la pasión por crear espacios que trascienden 
                    lo convencional. Fundado con la visión de fusionar la arquitectura 
                    contemporánea con las necesidades únicas de cada cliente.
                  </p>
                  <p>
                    Nuestro enfoque se centra en la claridad, la precisión y el diseño 
                    atemporal. Cada proyecto es una oportunidad para explorar las 
                    posibilidades del espacio y crear arquitectura que perdure en el tiempo.
                  </p>
                  <p>
                    Creemos que la arquitectura tiene el poder de transformar vidas. 
                    Por eso, cada diseño que creamos está pensado para inspirar, 
                    funcionar y emocionar a quienes lo habitan.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Button href="/contacto" variant="secondary">
                  Trabajemos juntos
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="headline text-3xl md:text-4xl text-[#1d1d1b] mb-4">
              Nuestra Filosofía
            </h2>
            <p className="text-[#a3a3a3] max-w-2xl mx-auto">
              Los principios que guían cada uno de nuestros proyectos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Claridad",
                description:
                  "Diseños limpios y espacios que comunican con simplicidad. La claridad en la arquitectura permite que los espacios respiren y fluyan naturalmente.",
              },
              {
                title: "Precisión",
                description:
                  "Atención meticulosa a cada detalle, desde la concepción hasta la ejecución. Cada línea, cada material, cada acabado tiene un propósito definido.",
              },
              {
                title: "Atemporalidad",
                description:
                  "Creamos arquitectura que trasciende las tendencias. Nuestros diseños están pensados para perdurar y seguir inspirando generación tras generación.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-px bg-[#4699d4] mx-auto mb-6" />
                <h3 className="text-xl font-light text-[#1d1d1b] mb-4">{item.title}</h3>
                <p className="text-[#a3a3a3] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1d1d1b] leading-relaxed"
          >
            &ldquo;Traducimos la arquitectura en espacios que perduran.&rdquo;
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-[#4699d4] nav-text text-sm"
          >
            CURVA Arquitectura
          </motion.p>
        </div>
      </section>

      <Footer />
    </>
  );
}

