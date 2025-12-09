"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <HeroSlider />

      {/* Intro Section */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-[#1d1d1b]"
          >
            <span className="text-[#4699d4]">CURVA Arquitectura</span> es un estudio 
            contemporáneo definido por la claridad, precisión y diseño atemporal. 
            Traducimos la arquitectura en espacios que perduran.
          </motion.p>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
          >
            <div>
              <h2 className="headline text-3xl md:text-4xl lg:text-5xl text-[#1d1d1b] mb-4">
                Proyectos Destacados
              </h2>
              <p className="text-[#a3a3a3] max-w-xl">
                Exploramos las posibilidades del espacio para crear arquitectura que trasciende.
              </p>
            </div>
            <Button href="/proyectos" variant="secondary" className="mt-6 md:mt-0">
              Ver todos
            </Button>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                slug={project.slug}
                image={project.image}
                location={project.location}
                year={project.year}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="headline text-3xl md:text-4xl lg:text-5xl text-[#1d1d1b] mb-6">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-[#a3a3a3] text-lg mb-10 max-w-2xl mx-auto">
              Nos encantaría conocer tu visión y ayudarte a crear espacios que inspiren. 
              Conversemos sobre cómo podemos colaborar.
            </p>
            <Button href="/contacto" variant="primary" className="inline-flex items-center gap-2">
              Contáctanos
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
