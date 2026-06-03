/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Catalog from './components/Catalog';
import Advisor from './components/Advisor';
import Faq from './components/Faq';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import OrderModal from './components/OrderModal';
import VirtualTryOn from './components/VirtualTryOn';
import Footer from './components/Footer';
import { Product } from './types';
import { ShieldCheck, Eye, Moon, Monitor, Sun } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<'home' | 'about' | 'catalog' | 'advice' | 'diagnostic' | 'contact'>('home');
  const [orderedProduct, setOrderedProduct] = useState<Product | null>(null);
  const [tryOnProduct, setTryOnProduct] = useState<Product | null>(null);
  const [isTryOnOpen, setIsTryOnOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  });

  // Loading screen automatic timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  // Theme observer to toggle dark class on document element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Scroll visibility observer to determine active tab on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      const home = document.getElementById('home');
      const about = document.getElementById('about');
      const catalog = document.getElementById('catalog');
      const advice = document.getElementById('advice');
      const contact = document.getElementById('contact');

      if (home && scrollPosition >= home.offsetTop && scrollPosition < (about ? about.offsetTop : Infinity)) {
        setActiveSection('home');
      } else if (about && scrollPosition >= about.offsetTop && scrollPosition < (catalog ? catalog.offsetTop : Infinity)) {
        setActiveSection('about');
      } else if (catalog && scrollPosition >= catalog.offsetTop && scrollPosition < (advice ? advice.offsetTop : Infinity)) {
        setActiveSection('catalog');
      } else if (advice && scrollPosition >= advice.offsetTop && scrollPosition < (contact ? contact.offsetTop : Infinity)) {
        setActiveSection('advice');
      } else if (contact && scrollPosition >= contact.offsetTop) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: 'home' | 'about' | 'catalog' | 'advice' | 'diagnostic' | 'contact') => {
    setActiveSection(sectionId);
    
    if (sectionId === 'diagnostic') {
      const element = document.getElementById('advice');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleOrderTrigger = (product: Product) => {
    setOrderedProduct(product);
  };

  const handleCloseOrder = () => {
    setOrderedProduct(null);
  };

  const handleStartTryOn = (product?: Product | null) => {
    if (product) {
      setTryOnProduct(product);
    } else {
      setTryOnProduct(null);
    }
    setIsTryOnOpen(true);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="global-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
            className="fixed inset-0 bg-[#060606] z-50 flex flex-col items-center justify-center text-white"
          >
            <div className="flex flex-col items-center relative gap-6">
              {/* Subtle rotating glow shield */}
              <div className="relative flex items-center justify-center w-20 h-20">
                <motion.div
                  initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
                  animate={{ rotate: 360, scale: 1, opacity: 1 }}
                  transition={{ 
                    rotate: { repeat: Infinity, duration: 3, ease: "linear" },
                    scale: { duration: 1, ease: "easeOut" },
                    opacity: { duration: 0.8 }
                  }}
                  className="absolute inset-0 border border-t-[#00bcff] border-r-transparent border-b-transparent border-l-transparent rounded-full"
                />
                
                <motion.div
                  initial={{ rotate: 180, scale: 0.9, opacity: 0 }}
                  animate={{ rotate: -180, scale: 1.1, opacity: 0.3 }}
                  transition={{ 
                    rotate: { repeat: Infinity, duration: 4, ease: "linear" },
                    scale: { duration: 1.2, ease: "easeOut" },
                    opacity: { duration: 1 }
                  }}
                  className="absolute inset-[-6px] border border-b-blue-500 border-t-transparent border-r-transparent border-l-transparent rounded-full blur-[2px]"
                />

                {/* Central shield logo */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 flex items-center justify-center w-14 h-14 bg-white/5 border border-white/10 rounded-full"
                >
                  <ShieldCheck className="w-6 h-6 text-blue-400" />
                </motion.div>
              </div>

              {/* Brand typographic reveal */}
              <div className="text-center">
                <motion.h1
                  initial={{ opacity: 0, letterSpacing: "0.1em" }}
                  animate={{ opacity: 1, letterSpacing: "0.45em" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="font-serif text-xl sm:text-2xl font-bold uppercase text-white pl-[0.45em]"
                >
                  Opti<span className="text-blue-400">Bloc</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                  className="text-[9px] font-mono tracking-[0.25em] text-zinc-500 uppercase mt-2 font-bold"
                >
                  Immunité Digitale • Lomé, Togo
                </motion.p>
              </div>

              {/* Elegant premium progress bar */}
              <div className="w-32 h-[1px] bg-white/5 mt-4 relative overflow-hidden">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-[#00bcff] to-transparent"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-zinc-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-white font-sans selection:bg-zinc-950 selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      
      {/* 1. Sleek Navbar */}
      <Navbar 
        onNavigate={handleNavigate} 
        activeSection={activeSection} 
        theme={theme} 
        onToggleTheme={toggleTheme} 
        onStartTryOn={() => handleStartTryOn()} 
      />

      {/* 2. Page Content Stack */}
      <main className="relative">
        
        {/* HOME / HERO MODULE */}
        <div id="home">
          <Hero 
            onExplore={() => handleNavigate('catalog')} 
            onDiagnostic={() => handleNavigate('diagnostic')} 
            onStartTryOn={() => handleStartTryOn()}
          />
        </div>

        {/* EYE PATHOLOGIES / PREVENTIVE INFORMATION STRIP */}
        <section className="bg-gradient-to-r from-zinc-100 to-zinc-50 dark:from-[#111] dark:to-[#0d0d0d] py-12 text-zinc-900 dark:text-white overflow-hidden relative border-t border-b border-zinc-200 dark:border-white/10 transition-colors duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
              
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
                <div className="p-3.5 bg-zinc-200/50 border border-zinc-300 dark:bg-white/5 dark:border-white/10 rounded-2xl text-blue-500 dark:text-blue-400">
                  <Monitor className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base tracking-tight text-zinc-900 dark:text-white">Fatigue Numérique</h4>
                  <p className="text-zinc-650 dark:text-zinc-400 text-xs mt-1 leading-relaxed">
                    Le scintillement des LED provoque maux de tête et picotements. OptiBloc redonne à vos yeux leur repos d&apos;origine.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 border-t md:border-t-0 md:border-l md:border-r border-zinc-200 dark:border-white/10 pt-6 md:pt-0 md:px-6">
                <div className="p-3.5 bg-zinc-200/50 border border-zinc-300 dark:bg-white/5 dark:border-white/10 rounded-2xl text-blue-600 dark:text-blue-450">
                  <Moon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base tracking-tight text-zinc-900 dark:text-white">Cycles de Sommeil</h4>
                  <p className="text-zinc-650 dark:text-zinc-400 text-xs mt-1 leading-relaxed">
                    La lumière bleue stoppe la production de mélatonine. Dormez profondément grâce à nos verres protecteurs.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 border-t md:border-t-0 border-zinc-200 dark:border-zinc-200 pt-6 md:pt-0">
                <div className="p-3.5 bg-zinc-200/50 border border-zinc-300 dark:bg-white/5 dark:border-white/10 rounded-2xl text-amber-500 dark:text-amber-400">
                  <Sun className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base tracking-tight text-zinc-900 dark:text-white">Adaptation Solaire</h4>
                  <p className="text-zinc-650 dark:text-zinc-400 text-xs mt-1 leading-relaxed">
                    La technologie photochromique assombrit vos verres automatiquement en extérieur pour filtrer 100% de la réverbération oculaire.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* REVOLUTIONARY HERITAGE / BRAND STORY SECTION */}
        <div id="about">
          <About />
        </div>

        {/* PRODUCT CATALOG MODULE */}
        <Catalog onOrder={handleOrderTrigger} onTryOn={handleStartTryOn} />

        {/* HEALTH RECOMMENDATIONS & DIAGNOSTICS MODULE */}
        <Advisor onOrder={handleOrderTrigger} />

        {/* INTERACTIVE FAQ SECTION MODULE */}
        <Faq />

        {/* SECURE DIRECT CONTACT FORM MODULE */}
        <Contact />

        {/* SATISFACTION BANNER PRO */}
        <section className="py-24 bg-gradient-to-b from-zinc-100 to-zinc-50 dark:from-[#0a0a0a] dark:to-[#121212] border-t border-zinc-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
          {/* Decorative geometric patterns */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="p-4 bg-zinc-200/50 dark:bg-white/5 text-zinc-900 dark:text-white border border-zinc-300 dark:border-white/10 rounded-2xl mb-6 flex items-center justify-center transition-colors duration-300"
            >
              <ShieldCheck className="w-7 h-7 text-blue-500 dark:text-blue-400" />
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="font-serif text-3xl sm:text-4xl italic text-zinc-900 dark:text-white tracking-tight mb-4 leading-tight"
            >
              Rejoignez plus de 15,000 Membres<br />
              <span className="font-sans not-italic font-black text-zinc-500 dark:text-zinc-400 text-2xl uppercase tracking-widest block mt-2">de la résistance oculaire</span>
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl font-sans mb-8 leading-relaxed"
            >
              Chaque seconde passée sans protection use votre capital visuel de façon irréversible. Commandez votre paire OptiBloc aujourd&apos;hui et bénéficiez d&apos;une livraison sécurisée et rapide sur Lomé avec notre étui prestige inclus.
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              onClick={() => handleNavigate('catalog')}
              className="px-8 py-4 bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-sans text-xs font-bold uppercase tracking-[0.2em] shadow-lg transition-all cursor-pointer"
            >
              Parcourir tous les verres
            </motion.button>
          </div>
        </section>

      </main>

      {/* 3. Global Footer coordinates references */}
      <Footer onNavigate={handleNavigate} />

      {/* 4. Sliding Order validation drawer panel on WhatsApp */}
      <OrderModal product={orderedProduct} onClose={handleCloseOrder} />

      {/* Virtual Try-On AR Modal layout */}
      <AnimatePresence>
        {isTryOnOpen && (
          <VirtualTryOn
            initialProduct={tryOnProduct || undefined}
            onClose={() => {
              setIsTryOnOpen(false);
              setTryOnProduct(null);
            }}
          />
        )}
      </AnimatePresence>

      {/* 5. Floating interactive brand chat button */}
      <FloatingWhatsApp />

    </div>
    </>
  );
}
