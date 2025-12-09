"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_m6ve5dr",
        "template_u4uvxda",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          name: formData.name,
          email: formData.email,
        },
        "W5742PSk1SsMbvFG0"
      );

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              Contacto
            </h1>
            <p className="text-[#a3a3a3] text-lg max-w-2xl">
              ¿Tienes un proyecto en mente? Nos encantaría conocer tu visión y 
              explorar cómo podemos colaborar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div>
                <h2 className="headline text-2xl md:text-3xl text-[#1d1d1b] mb-8">
                  Información de Contacto
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#4699d4]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#1d1d1b] mb-1">Dirección</h3>
                      <p className="text-[#a3a3a3]">
                        Av. Paseo de la Reforma 250<br />
                        Col. Juárez, Ciudad de México<br />
                        CP 06600, México
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#4699d4]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#1d1d1b] mb-1">Teléfono</h3>
                      <p className="text-[#a3a3a3]">+52 55 1234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#4699d4]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#1d1d1b] mb-1">Email</h3>
                      <p className="text-[#a3a3a3]">contacto@curva.mx</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div>
                <h3 className="font-medium text-[#1d1d1b] mb-4">Horario de Atención</h3>
                <div className="space-y-2 text-[#a3a3a3]">
                  <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                  <p>Sábado: 10:00 AM - 2:00 PM</p>
                  <p>Domingo: Cerrado</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-50 p-8 md:p-12">
                <h2 className="headline text-2xl md:text-3xl text-[#1d1d1b] mb-8">
                  Envíanos un mensaje
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-[#4699d4] mb-4" />
                    <h3 className="text-xl font-light text-[#1d1d1b] mb-2">
                      ¡Mensaje enviado!
                    </h3>
                    <p className="text-[#a3a3a3]">
                      Nos pondremos en contacto contigo pronto.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#1d1d1b] mb-2"
                      >
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[#4699d4] focus:outline-none transition-colors"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#1d1d1b] mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[#4699d4] focus:outline-none transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#1d1d1b] mb-2"
                      >
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[#4699d4] focus:outline-none transition-colors resize-none"
                        placeholder="Cuéntanos sobre tu proyecto..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          Enviando...
                          <Loader2 className="w-4 h-4 animate-spin" />
                        </>
                      ) : (
                        <>
                          Enviar mensaje
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

