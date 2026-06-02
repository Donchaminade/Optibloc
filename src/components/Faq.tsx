import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FaqItem[] = [
    {
      question: "Quel est l'effet de la lumière bleue sur le capital visuel ?",
      answer: "La lumière bleue à haute énergie (visible entre 380 et 450nm) émise par les écrans traverse le cristallin pour agresser directement la rétine. À court terme, elle induit picotements, maux de tête et sécheresse. À long terme, elle altère la qualité du sommeil en bloquant la sécrétion de mélatonine et accélère le vieillissement cellulaire oculaire."
    },
    {
      question: "En quoi les verres OptiBloc diffèrent-ils des lunettes bas de gamme ?",
      answer: "Les verres OptiBloc intègrent un traitement moléculaire de pointe par dépôt sous vide, plutôt qu'un simple vernis réflecteur de surface. Ils filtrent sélectivement le spectre nocif de la lumière bleue tout en laissant passer la lumière turquoise bénéfique, évitant ainsi toute déformation désagréable des couleurs."
    },
    {
      question: "La technologie photochromique est-elle utile si je ne travaille qu'en intérieur ?",
      answer: "Pour un usage exclusivement sédentaire devant les écrans, la collection Anti-lumière bleue pure est idéale. Cependant, la technologie photochromique offre une polyvalence d'exception si vous alternez avec des déplacements en extérieur : vos verres se teintent de manière fluide au soleil pour bloquer 100% des rayons UV nocifs."
    },
    {
      question: "Comment nettoyer et entretenir mes lunettes OptiBloc ?",
      answer: "Pour entretenir durablement vos verres de précision, utilisez exclusivement le chiffon microfibre antistatique fourni dans votre étui premium. Évitez les nettoyages à sec ou l'utilisation de détergents agressifs. En cas de traces persistantes, un léger rinçage à l'eau tiède avec un savon doux neutre est préconisé."
    },
    {
      question: "Comment se déroule la commande et la livraison à Lomé ?",
      answer: "Le processus est entièrement simplifié : vous sélectionnez votre monture sur notre catalogue, validez vos coordonnées, et notre système préparent votre commande pour un envoi sécurisé sur WhatsApp. Nos livreurs partenaires de confiance vous remettent votre coffret sur votre lieu de travail ou à domicile partout à Lomé sous 24 heures."
    }
  ];

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-[#fafafc] dark:bg-[#0a0a0a] border-t border-zinc-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-500/[0.02] rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-block px-3 py-1 border border-zinc-250 dark:border-white/10 text-zinc-500 dark:text-zinc-400 text-[10px] font-mono tracking-widest uppercase rounded-full"
          >
            Foire Aux Questions
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl italic text-zinc-900 dark:text-white mt-4 mb-4"
          >
            Questions Fréquentes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-450 font-sans max-w-lg mx-auto leading-relaxed"
          >
            Tout ce qu&apos;il faut savoir pour protéger durablement vos yeux face aux écrans et entretenir votre monture d&apos;exception.
          </motion.p>
        </div>

        {/* FAQ List Accordions */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="border border-zinc-200 dark:border-white/5 bg-white dark:bg-[#0d0d0d] hover:border-zinc-305 dark:hover:border-white/10 transition-colors duration-300 rounded-sm overflow-hidden shadow-xs hover:shadow-sm"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-sans font-medium text-zinc-700 group-hover:text-zinc-955 dark:text-zinc-200 dark:group-hover:text-white transition-colors pr-4">
                    {item.question}
                  </span>
                  <div className={`p-1.5 border border-zinc-205 dark:border-white/5 bg-zinc-50 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-all transform duration-300 ${isOpen ? 'rotate-180 bg-zinc-150 dark:bg-white/10 text-blue-500 dark:text-blue-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed font-sans border-t border-zinc-150 dark:border-white/5 pt-4 flex gap-3 bg-zinc-50/50 dark:bg-transparent">
                        <CheckCircle2 className="w-4 h-4 text-[#00bcff] shrink-0 mt-0.5" />
                        <span>{item.answer}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
