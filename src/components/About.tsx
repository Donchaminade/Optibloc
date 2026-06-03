import { motion } from 'motion/react';
import { Sparkles, Calendar, User, Eye, ShieldCheck, Linkedin, Twitter, Mail, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0a0a0a] text-zinc-900 dark:text-white border-t border-zinc-200 dark:border-white/10 transition-colors duration-300 relative overflow-hidden">
      {/* Dynamic background element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: TEXT CONTENT & HISTORY */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-3.5 py-1.5 rounded-full"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
              <span className="text-[10px] font-mono font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                L'Origine d'OptiBloc
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl italic text-zinc-900 dark:text-white leading-[1.1]"
            >
              Plus qu'un verre de confort, <br />
              <span className="not-italic font-sans font-black text-blue-500 dark:text-[#00bcff] tracking-tight uppercase text-2xl sm:text-3xl block mt-2">
                UNE RÉSISTANCE VISUELLE.
              </span>
            </motion.h2>

            {/* Founder Profile Card with interactive social networks on hover */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative w-full max-w-[360px] h-64 rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 group shadow-lg cursor-pointer my-6"
            >
              {/* Profile Image of Anaelle AFI (professional West African business woman look) */}
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                alt="Anaelle AFI — Fondatrice & Directrice d'OptiBloc"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Shaded bottom overlay gradient for superior readability - gets more dark & protective on hover */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/95 via-black/55 to-transparent transition-all duration-300 group-hover:h-2/3" />

              {/* Card information */}
              <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end text-white z-20">
                <span className="text-[9px] font-mono tracking-widest text-[#00bcff] uppercase">Fondatrice & Directrice d&apos;OptiBloc</span>
                <h3 className="font-serif text-lg italic mt-0.5 font-semibold text-white">Anaelle AFI</h3>
                
                {/* Social links (Slide/Fade on Hover list) */}
                <div className="mt-2.5 pt-2.5 border-t border-white/10 flex items-center justify-between transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-[9px] font-mono text-zinc-300 uppercase tracking-wider">Réseaux Sociaux :</span>
                  <div className="flex items-center space-x-3.5">
                    <motion.a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.25, color: '#00bcff' }}
                      className="text-zinc-300 hover:text-white transition-colors cursor-pointer"
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.a>
                    <motion.a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.25, color: '#00bcff' }}
                      className="text-zinc-300 hover:text-white transition-colors cursor-pointer"
                    >
                      <Twitter className="w-4 h-4" />
                    </motion.a>
                    <motion.a 
                      href="mailto:chaminade.dondah.adjolou@gmail.com"
                      whileHover={{ scale: 1.25, color: '#00bcff' }}
                      className="text-zinc-300 hover:text-white transition-colors cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                    </motion.a>
                    <motion.a 
                      href="https://optibloc.club" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.25, color: '#00bcff' }}
                      className="text-zinc-300 hover:text-white transition-colors cursor-pointer"
                    >
                      <Globe className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-4 font-sans text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Fondée à Lomé, au Togo, par l'entrepreneuse engagée <strong>Anaelle AFI</strong>, OptiBloc est née d'un constat frappant en 2024. Face au boom du travail à distance, de la programmation informatique et de l'usage intensif de nos smartphones, la fatigue oculaire est passée d'un simple désagrément passager à un enjeu de santé publique majeur pour les actifs d'Afrique de l'Ouest.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Poussé par la volonté de concevoir des équipements haut de gamme certifiés, le créateur a collaboré étroitement avec des experts en optométrie pour introduire des verres dotés d'un filtrage sélectif par dépôt sous vide moléculaire. En réfléchissant la fraction nocive du spectre bleu des écrans (380-450nm) tout en restant neutres et cristallins, les verres OptiBloc garantissent une immunité visuelle d'exception sans altérer le style.
              </motion.p>
            </div>

            {/* FOUNDER BRAND STATS */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-200 dark:border-white/10 w-full max-w-md text-xs"
            >
              <div className="space-y-1">
                <div className="flex items-center space-x-1 text-zinc-900 dark:text-white font-mono font-bold">
                  <User className="w-3.5 h-3.5 text-blue-500" />
                  <span>A. AFI</span>
                </div>
                <span className="block text-[9px] font-mono uppercase tracking-wider text-zinc-405 dark:text-zinc-500">Autrice & Fondatrice</span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center space-x-1 text-zinc-900 dark:text-white font-mono font-bold">
                  <Calendar className="w-3.5 h-3.5 text-blue-500" />
                  <span>Lomé, 2024</span>
                </div>
                <span className="block text-[9px] font-mono uppercase tracking-wider text-zinc-405 dark:text-zinc-500">Naissance de la Marque</span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center space-x-1 text-zinc-900 dark:text-white font-mono font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00bcff]" />
                  <span>100% Certifié</span>
                </div>
                <span className="block text-[9px] font-mono uppercase tracking-wider text-zinc-405 dark:text-zinc-500">Filtre Labellisé</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: INTERACTIVE OVERLAPPING DOUBLE TILTED CARDS */}
          <div className="lg:col-span-5 flex justify-center items-center relative h-[420px] sm:h-[500px]">
            {/* CARD 1 (Bottom, tilted left) */}
            <motion.div
              style={{ rotate: -8, x: -30, y: -20 }}
              whileHover={{ 
                rotate: -12, 
                scale: 1.05, 
                x: -55,
                y: -30,
                zIndex: 30,
                boxShadow: "0 25px 50px -12px rgba(0, 188, 255, 0.25)" 
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              initial={{ opacity: 0, x: -90, rotate: -20 }}
              whileInView={{ opacity: 1, x: -30, rotate: -8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="absolute left-[15%] sm:left-[20%] w-[200px] h-[270px] sm:w-[260px] sm:h-[350px] bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
            >
              {/* Overlay with subtle light gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-50" />
              <img
                src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=600&auto=format&fit=crop"
                alt="Monture Artisanale OptiBloc"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-5 left-5 right-5 z-20">
                <span className="text-[9px] font-mono tracking-widest text-[#00bcff] uppercase">Prestige</span>
                <p className="font-serif text-base italic text-white mt-1">L&apos;Exigence Technique</p>
              </div>
            </motion.div>

            {/* CARD 2 (Top, tilted right) */}
            <motion.div
              style={{ rotate: 12, x: 50, y: 30 }}
              whileHover={{ 
                rotate: 6, 
                scale: 1.05, 
                x: 75,
                y: 45,
                zIndex: 30,
                boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              initial={{ opacity: 0, x: 90, rotate: 20 }}
              whileInView={{ opacity: 1, x: 50, rotate: 12 }}
              viewport={{ once: true, margin: "-100px" }}
              className="absolute left-[15%] sm:left-[20%] w-[200px] h-[270px] sm:w-[260px] sm:h-[350px] bg-white border border-zinc-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group z-20"
            >
              {/* Overlay with subtle visual balance */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-50" />
              <img
                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=600&auto=format&fit=crop"
                alt="Verres Photochromiques OptiBloc"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-5 left-5 right-5 z-20">
                <span className="text-[9px] font-mono tracking-widest text-indigo-400 uppercase">Protection</span>
                <p className="font-serif text-base italic text-white mt-1">Confort Quotidien</p>
              </div>
            </motion.div>

            {/* Dynamic visual connection lines/glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 blur-3xl rounded-full scale-75 pointer-events-none" />

            {/* Optical Line Waves Decoration - Floats directly below the tilted cards */}
            <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-28 overflow-hidden pointer-events-none z-10">
              <svg 
                className="w-full h-full opacity-50 dark:opacity-75" 
                viewBox="0 0 1440 120" 
                preserveAspectRatio="none"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="optiWaveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                    <stop offset="25%" stopColor="rgba(59, 130, 246, 0.2)" />
                    <stop offset="50%" stopColor="rgba(16, 185, 129, 0.35)" />
                    <stop offset="75%" stopColor="rgba(99, 102, 241, 0.2)" />
                    <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
                  </linearGradient>
                  <linearGradient id="optiWaveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(99, 102, 241, 0)" />
                    <stop offset="30%" stopColor="rgba(14, 165, 233, 0.12)" />
                    <stop offset="50%" stopColor="rgba(59, 130, 246, 0.25)" />
                    <stop offset="70%" stopColor="rgba(16, 185, 129, 0.12)" />
                    <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
                  </linearGradient>
                  <linearGradient id="optiWaveGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(244, 63, 94, 0)" />
                    <stop offset="45%" stopColor="rgba(244, 63, 94, 0.04)" />
                    <stop offset="50%" stopColor="rgba(239, 68, 68, 0.08)" />
                    <stop offset="55%" stopColor="rgba(244, 63, 94, 0.04)" />
                    <stop offset="100%" stopColor="rgba(244, 63, 94, 0)" />
                  </linearGradient>
                </defs>

                {/* Wave 1: Calm Ocular Comfort (Green/Blue high frequency) */}
                <motion.path
                  d="M 0 60 C 120 20, 240 100, 360 60 C 480 20, 600 100, 720 60 C 840 20, 960 100, 1080 60 C 1200 20, 1320 100, 1440 60"
                  stroke="url(#optiWaveGrad1)"
                  strokeWidth="1.75"
                  animate={{
                    d: [
                      "M 0 60 C 120 20, 240 100, 360 60 C 480 20, 600 100, 720 60 C 840 20, 960 100, 1080 60 C 1200 20, 1320 100, 1440 60",
                      "M 0 60 C 120 100, 240 20, 360 60 C 480 100, 600 20, 720 60 C 840 100, 960 20, 1080 60 C 1200 100, 1320 20, 1440 60",
                      "M 0 60 C 120 20, 240 100, 360 60 C 480 20, 600 100, 720 60 C 840 20, 960 100, 1080 60 C 1200 20, 1320 100, 1440 60"
                    ]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "easeInOut"
                  }}
                />

                {/* Wave 2: Slower harmonics (Blue/Slate) */}
                <motion.path
                  d="M 0 60 C 180 90, 360 30, 540 60 C 720 90, 900 30, 1080 60 C 1260 90, 1440 60, 1440 60"
                  stroke="url(#optiWaveGrad2)"
                  strokeWidth="1.25"
                  strokeDasharray="4 4"
                  animate={{
                    d: [
                      "M 0 60 C 180 90, 360 30, 540 60 C 720 90, 900 30, 1080 60 C 1260 90, 1440 60, 1440 60",
                      "M 0 60 C 180 30, 360 90, 540 60 C 720 30, 900 90, 1080 60 C 1260 30, 1440 60, 1440 60",
                      "M 0 60 C 180 90, 360 30, 540 60 C 720 90, 900 30, 1080 60 C 1260 90, 1440 60, 1440 60"
                    ]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 12,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />

                {/* Wave 3: The filtered harmful blue/violet rays (deflected and attenuated) */}
                <motion.path
                  d="M 0 60 C 60 75, 120 45, 180 60 C 240 75, 300 45, 360 60 C 420 75, 480 45, 540 60 C 600 75, 660 45, 720 60 C 780 75, 840 45, 900 60 C 960 75, 1020 45, 1080 60 C 1140 75, 1200 45, 1260 60 C 1320 75, 1380 45, 1440 60"
                  stroke="url(#optiWaveGrad3)"
                  strokeWidth="1"
                  animate={{
                    d: [
                      "M 0 60 C 60 75, 120 45, 180 60 C 240 75, 300 45, 360 60 C 420 75, 480 45, 540 60 C 600 75, 660 45, 720 60 C 780 75, 840 45, 900 60 C 960 75, 1020 45, 1080 60 C 1140 75, 1200 45, 1260 60 C 1320 75, 1380 45, 1440 60",
                      "M 0 60 C 60 45, 120 75, 180 60 C 240 45, 300 75, 360 60 C 420 45, 480 75, 540 60 C 600 45, 660 75, 720 60 C 780 45, 840 75, 900 60 C 960 45, 1020 75, 1080 60 C 1140 45, 1200 75, 1260 60 C 1320 45, 1380 75, 1440 60",
                      "M 0 60 C 60 75, 120 45, 180 60 C 240 75, 300 45, 360 60 C 420 75, 480 45, 540 60 C 600 75, 660 45, 720 60 C 780 75, 840 45, 900 60 C 960 75, 1020 45, 1080 60 C 1140 75, 1200 45, 1260 60 C 1320 75, 1380 45, 1440 60"
                    ]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut"
                  }}
                />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
