"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Maximize } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProjectBySlug, getAdjacentProjects } from "@/data/projects";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);
  const { prev, next } = getAdjacentProjects(slug);

  if (!project) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-light mb-4">Proyecto no encontrado</h1>
            <Link href="/proyectos" className="text-[#4699d4] hover:underline">
              Volver a proyectos
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      {/* Hero Image */}
      <section className="relative h-[70vh] md:h-[80vh] w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="headline text-4xl md:text-5xl lg:text-6xl text-white mb-4"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
                  <MapPin className="w-5 h-5 text-[#4699d4]" />
                  <div>
                    <p className="text-[#a3a3a3] text-sm">Ubicación</p>
                    <p className="text-[#1d1d1b]">{project.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
                  <Calendar className="w-5 h-5 text-[#4699d4]" />
                  <div>
                    <p className="text-[#a3a3a3] text-sm">Año</p>
                    <p className="text-[#1d1d1b]">{project.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
                  <Maximize className="w-5 h-5 text-[#4699d4]" />
                  <div>
                    <p className="text-[#a3a3a3] text-sm">Área</p>
                    <p className="text-[#1d1d1b]">{project.area}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="space-y-6">
                {project.description.map((paragraph, index) => (
                  <p key={index} className="text-[#1d1d1b] text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="py-16 px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="headline text-2xl md:text-3xl text-[#1d1d1b] mb-8">
              Galería
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Imagen ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-16 px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {prev ? (
              <Link
                href={`/proyectos/${prev.slug}`}
                className="group flex items-center gap-4 text-[#1d1d1b] hover:text-[#4699d4] transition-colors"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
                <div>
                  <p className="text-[#a3a3a3] text-sm">Anterior</p>
                  <p className="font-light">{prev.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            
            {next ? (
              <Link
                href={`/proyectos/${next.slug}`}
                className="group flex items-center gap-4 text-right text-[#1d1d1b] hover:text-[#4699d4] transition-colors"
              >
                <div>
                  <p className="text-[#a3a3a3] text-sm">Siguiente</p>
                  <p className="font-light">{next.title}</p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

