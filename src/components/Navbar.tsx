/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Menu, X, Sparkles, MessageCircle, Sun, Moon, Camera, Wifi, WifiOff } from 'lucide-react';

interface NavbarProps {
  onNavigate: (section: 'home' | 'about' | 'catalog' | 'advice' | 'diagnostic' | 'contact') => void;
  activeSection: string;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onStartTryOn: () => void;
}

export default function Navbar({ onNavigate, activeSection, theme, onToggleTheme, onStartTryOn }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);
  const [isSWActive, setIsSWActive] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
      if (navigator.serviceWorker.controller) {
        setIsSWActive(true);
      } else {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          if (registrations.length > 0) {
            setIsSWActive(true);
          }
        });
      }
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À Propos' },
    { id: 'catalog', label: 'Catalogue' },
    { id: 'advice', label: 'Espace Conseil' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (sectionId: 'home' | 'about' | 'catalog' | 'advice' | 'diagnostic' | 'contact') => {
    onNavigate(sectionId);
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#fafafc]/85 dark:bg-[#0a0a0a]/80 border-b border-zinc-200 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand matching design with responsive Wi-Fi offline indicator */}
          <div className="flex items-center space-x-3.5 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="w-8 h-8 border-2 border-zinc-900 dark:border-white flex items-center justify-center rotate-45 bg-zinc-950 transition-transform hover:rotate-135 duration-700">
              <div className="w-3 h-3 bg-blue-400"></div>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-display text-xl font-black tracking-tighter uppercase text-zinc-900 dark:text-white transition-colors">
                  Opti<span className="text-blue-500 dark:text-blue-400">Bloc</span>
                </span>
                <span className="flex items-center" title={isOnline ? "Catalogue en ligne - Cache hors-ligne actif (Service Worker)" : "Catalogue hors-ligne actif"}>
                  {isOnline ? (
                    <Wifi className="w-3.5 h-3.5 text-emerald-500 animate-pulse shrink-0" />
                  ) : (
                    <WifiOff className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  )}
                </span>
              </div>
              <span className="block text-[8px] font-mono tracking-[0.25em] text-zinc-500 dark:text-zinc-400 uppercase leading-none mt-0.5 transition-colors">
                IMMUNITÉ DIGITALE
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id as any)}
                  className={`relative font-sans text-xs font-semibold uppercase tracking-[0.18em] transition-all py-1 px-0.5 cursor-pointer ${
                    activeSection === item.id
                      ? 'text-zinc-955 dark:text-white'
                      : 'text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-zinc-900 dark:bg-white"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Theme Toggle Switcher */}
            <button
              onClick={onToggleTheme}
              className="p-2 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-all cursor-pointer rounded-full"
              title={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            {/* CTA Diagnostic matching design style */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavClick('diagnostic')}
              className="px-4 py-2 bg-zinc-900 text-white dark:bg-white dark:text-black text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-200 cursor-pointer"
            >
              Contact Expert
            </motion.button>
          </div>

          {/* Mobile navigation header elements */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-2 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-all cursor-pointer rounded-full"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-450" /> : <Moon className="w-4 h-4 text-indigo-650" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white focus:outline-none cursor-pointer transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-zinc-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a]/95 backdrop-blur-md overflow-hidden transition-colors"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id as any)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-sans text-xs uppercase tracking-widest font-bold transition-all ${
                    activeSection === item.id
                      ? 'bg-zinc-100 dark:bg-white/5 text-zinc-900 dark:text-white'
                      : 'text-zinc-500 hover:bg-zinc-50 dark:hover:bg-white/5 dark:text-zinc-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 border-t border-zinc-200 dark:border-white/10 space-y-2">
                <button
                  onClick={() => handleNavClick('diagnostic')}
                  className="flex items-center justify-center w-full px-4 py-3.5 bg-zinc-900 text-white dark:bg-white dark:text-black font-sans text-xs font-bold uppercase tracking-[0.2em] transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 mr-2" />
                  <span>Contact Expert / Diagnostic</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
