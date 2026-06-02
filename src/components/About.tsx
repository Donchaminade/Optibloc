import { motion } from 'motion/react';
import { Sparkles, Calendar, User, Eye, ShieldCheck } from 'lucide-react';

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

            <div className="space-y-4 font-sans text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Fondée à Lomé, au Togo, par l'entrepreneur engagé <strong>Chaminade Adjolou</strong>, OptiBloc est née d'un constat frappant en 2024. Face au boom du travail à distance, de la programmation informatique et de l'usage intensif de nos smartphones, la fatigue oculaire est passée d'un simple désagrément passager à un enjeu de santé publique majeur pour les actifs d'Afrique de l'Ouest.
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
                  <span>C. Adjolou</span>
                </div>
                <span className="block text-[9px] font-mono uppercase tracking-wider text-zinc-405 dark:text-zinc-500">Auteur & Fondateur</span>
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
          <div className="lg:col-span-5 flex justify-center items-center relative h-[380px] sm:h-[450px]">
            {/* CARD 1 (Bottom, tilted left) */}
            <motion.div
              style={{ rotate: -8, x: -25, y: -15 }}
              whileHover={{ 
                rotate: -12, 
                scale: 1.05, 
                x: -45,
                y: -25,
                zIndex: 30,
                boxShadow: "0 25px 50px -12px rgba(0, 188, 255, 0.25)" 
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              initial={{ opacity: 0, x: -80, rotate: -20 }}
              whileInView={{ opacity: 1, x: -25, rotate: -8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="absolute left-1/4 w-[180px] h-[240px] sm:w-[220px] sm:h-[300px] bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
            >
              {/* Overlay with subtle light gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-50" />
              <img
                src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=600&auto=format&fit=crop"
                alt="Monture Artisanale OptiBloc"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <span className="text-[8px] font-mono tracking-widest text-[#00bcff] uppercase">Prestige</span>
                <p className="font-serif text-sm italic text-white mt-1">L'Exigence Technique</p>
              </div>
            </motion.div>

            {/* CARD 2 (Top, tilted right) */}
            <motion.div
              style={{ rotate: 12, x: 45, y: 25 }}
              whileHover={{ 
                rotate: 6, 
                scale: 1.05, 
                x: 65,
                y: 35,
                zIndex: 30,
                boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              initial={{ opacity: 0, x: 80, rotate: 20 }}
              whileInView={{ opacity: 1, x: 45, rotate: 12 }}
              viewport={{ once: true, margin: "-100px" }}
              className="absolute left-1/4 w-[180px] h-[240px] sm:w-[220px] sm:h-[300px] bg-white border border-zinc-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group z-20"
            >
              {/* Overlay with subtle visual balance */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-50" />
              <img
                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=600&auto=format&fit=crop"
                alt="Verres Photochromiques OptiBloc"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <span className="text-[8px] font-mono tracking-widest text-indigo-400 uppercase">Protection</span>
                <p className="font-serif text-sm italic text-white mt-1">Confort Quotidien</p>
              </div>
            </motion.div>

            {/* Dynamic visual connection lines/glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 blur-3xl rounded-full scale-75 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
