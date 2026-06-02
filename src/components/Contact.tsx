/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Anti-Bleue',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format the WhatsApp message nicely with elegant line breaks and layout
    const formattedMessage = `Bonjour OptiBloc ! 🛡️👓\n\n` +
      `*Nouveau message de contact :*\n` +
      `• *Nom :* ${formData.name}\n` +
      `• *Téléphone :* ${formData.phone}\n` +
      `• *Email :* ${formData.email || 'Non renseigné'}\n` +
      `• *Intérêt :* ${formData.subject}\n\n` +
      `*Message :*\n"${formData.message}"\n\n` +
      `_Envoyé depuis le site OptiBloc Togo._`;

    const whatsappNumber = '22897138772';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-[#fafafc] dark:bg-[#0a0a0a] text-zinc-900 dark:text-white border-t border-zinc-200 dark:border-white/10 transition-colors duration-300 relative overflow-hidden">
      {/* Background radial soft light sheens */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: BRAND INFO & BENEFITS */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 px-3.5 py-1.5 rounded-full"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-500 dark:text-blue-450 animate-pulse" />
                <span className="text-[10px] font-mono font-medium uppercase tracking-widest text-[#00bcff]">
                  Écrivez-nous en quelques clics
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif text-3xl sm:text-4xl italic text-zinc-900 dark:text-white leading-tight"
              >
                Des Questions ? <br />
                <span className="not-italic font-sans font-black text-zinc-400 dark:text-zinc-500 tracking-tighter uppercase text-2xl sm:text-3xl block mt-1">
                  CONTACTEZ NOS CONSEILLERS.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans"
              >
                Notre équipe à Lomé est à votre entière disposition pour vous guider dans le choix de votre équipement d'immunité visuelle. Remplissez ce formulaire et votre message sera directement acheminé vers notre service client via WhatsApp pour une prise en charge immédiate.
              </motion.p>
            </div>

            {/* Direct Coordinates card lists */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/5 shadow-sm transition-colors duration-300">
                <div className="p-3 bg-blue-500/10 text-blue-500 dark:text-blue-400 rounded-xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[8px] font-mono text-zinc-400 uppercase tracking-widest">Par Téléphone / WhatsApp</span>
                  <a href="tel:+22897138772" className="text-sm font-sans font-semibold text-zinc-850 dark:text-zinc-250 hover:text-blue-500 dark:hover:text-blue-400 mt-1 block transition-colors">
                    +228 97 13 87 72
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/5 shadow-sm transition-colors duration-300">
                <div className="p-3 bg-blue-500/10 text-blue-500 dark:text-blue-400 rounded-xl shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[8px] font-mono text-zinc-400 uppercase tracking-widest">Par Email</span>
                  <a href="mailto:info@optibloc.com" className="text-sm font-sans font-semibold text-zinc-850 dark:text-zinc-250 hover:text-blue-500 dark:hover:text-blue-400 mt-1 block transition-colors">
                    info@optibloc.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/5 shadow-sm transition-colors duration-300">
                <div className="p-3 bg-amber-500/10 text-amber-500 dark:text-amber-400 rounded-xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[8px] font-mono text-zinc-400 uppercase tracking-widest">Adresse Physique</span>
                  <span className="text-sm font-sans font-semibold text-zinc-850 dark:text-zinc-250 mt-1 block">
                    Quartier Novissi, Boulevard du 13 Janvier, Lomé - Togo
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM CARD */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-[#0d0d0d] p-6 sm:p-10 rounded-2xl border border-zinc-200 dark:border-white/10 shadow-xl transition-colors duration-300"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="font-serif text-2xl italic text-zinc-900 dark:text-white mb-3">
                    Message Préparé !
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 font-sans max-w-sm mx-auto mb-8">
                    Le formulaire a été traité avec succès. WhatsApp a été ouvert pour envoyer automatiquement le message structuré à nos conseillers OptiBloc.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', subject: 'Anti-Bleue', message: '' });
                    }}
                    className="px-6 py-3 border border-zinc-200 dark:border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-all cursor-pointer hover:bg-zinc-50 dark:hover:bg-white/5"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Nom Complet */}
                    <div>
                      <label htmlFor="name" className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest mb-2 font-bold">
                        Votre Nom Complet <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ex: Koffi Mensah"
                        className="w-full bg-zinc-50 dark:bg-black/35 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white rounded-xl px-4 py-3.5 text-xs sm:text-sm font-sans focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-400"
                      />
                    </div>

                    {/* Téléphone WhatsApp */}
                    <div>
                      <label htmlFor="phone" className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest mb-2 font-bold">
                        Téléphone WhatsApp <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Ex: +228 90 00 00 00"
                        className="w-full bg-zinc-50 dark:bg-black/35 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white rounded-xl px-4 py-3.5 text-xs sm:text-sm font-sans focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Adresse Email (Optionnel) */}
                    <div>
                      <label htmlFor="email" className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest mb-2 font-bold">
                        Adresse Email <span className="text-zinc-400">(Optionnelle)</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ex: koffi.mensah@gmail.com"
                        className="w-full bg-zinc-50 dark:bg-black/35 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white rounded-xl px-4 py-3.5 text-xs sm:text-sm font-sans focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-400"
                      />
                    </div>

                    {/* Sujet d'intérêt */}
                    <div>
                      <label htmlFor="subject" className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest mb-2 font-bold">
                        Objet ou Intérêt <span className="text-blue-500">*</span>
                      </label>
                      <select
                        name="subject"
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-zinc-50 dark:bg-[#121212] border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white rounded-xl px-4 py-3.5 text-xs sm:text-sm font-sans focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="Anti-Bleue">Lunettes Anti-Bleue de repos</option>
                        <option value="Photochromique">Lunettes Photochromiques d&apos;adaptation</option>
                        <option value="Diagnostic">Besoin d&apos;un Diagnostic Visuel</option>
                        <option value="Partenariat">Proposition de Collaboration</option>
                        <option value="Autre">Autre demande générale</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest mb-2 font-bold">
                      Votre Message <span className="text-blue-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Comment pouvons-nous vous aider ? Renseignez vos questions ou vos préférences..."
                      className="w-full bg-zinc-50 dark:bg-black/35 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white rounded-xl px-4 py-3.5 text-xs sm:text-sm font-sans focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-400 resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit Trigger block */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2.5 bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-black dark:hover:bg-zinc-100 font-sans text-xs font-bold uppercase tracking-[0.2em] p-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg select-none cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-zinc-500 border-t-white dark:border-zinc-300 dark:border-t-black rounded-full animate-spin" />
                          <span>Préparation en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Envoyer sur WhatsApp</span>
                        </>
                      )}
                    </button>
                    <span className="block text-center text-[9px] font-mono text-zinc-500 mt-3 uppercase tracking-wider">
                      🛡️ Transmission directe 100% sécurisée & chiffrée
                    </span>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
