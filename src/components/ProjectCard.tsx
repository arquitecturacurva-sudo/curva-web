"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  slug: string;
  image: string;
  location?: string;
  year?: string;
}

export default function ProjectCard({ title, slug, image, location, year }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/proyectos/${slug}`} className="group block">
        <div className="image-zoom relative aspect-[4/3] overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-[#1d1d1b]/0 group-hover:bg-[#1d1d1b]/40 transition-all duration-500 flex items-end">
            <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-white text-xl font-light tracking-wide">{title}</h3>
              {(location || year) && (
                <p className="text-white/80 text-sm mt-1">
                  {location}{location && year && " · "}{year}
                </p>
              )}
            </div>
          </div>
        </div>
        {/* Title below image (visible by default) */}
        <div className="mt-4">
          <h3 className="text-[#1d1d1b] text-lg font-light tracking-wide group-hover:text-[#4699d4] transition-colors">
            {title}
          </h3>
          {(location || year) && (
            <p className="text-[#a3a3a3] text-sm mt-1">
              {location}{location && year && " · "}{year}
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}

