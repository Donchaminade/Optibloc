/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Show a helpful greeting bubble after 4 seconds
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppRedirect = () => {
    const whatsappNumber = '22897138772';
    const message = "Bonjour OptiBloc ! J'aimerais en savoir plus sur vos lunettes de protection.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-none">
      {/* Dynamic Pop-up bubble helper */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3.5 mr-1 max-w-[240px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 p-3.5 rounded-2xl shadow-xl pointer-events-auto relative text-left"
          >
            {/* Close button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowBubble(false);
              }}
              className="absolute top-2.5 right-2.5 text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-3 h-3" />
            </button>
            
            {/* Bubble avatar / intro */}
            <div className="flex items-center space-x-2 mb-1.5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest">Conseiller en Ligne</span>
            </div>

            {/* Bubble prompt text */}
            <p className="text-[11px] text-zinc-600 dark:text-zinc-300 font-sans leading-relaxed pr-2">
              Une question ? Discutez en direct avec nous sur WhatsApp pour un conseil personnalisé.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulsing Outer Circle Container for interactive impact */}
      <motion.button
        onClick={handleWhatsAppRedirect}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-all cursor-pointer group focus:outline-none"
        style={{ touchAction: 'manipulation' }}
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500/25 dark:bg-emerald-600/25 animate-ping opacity-60 scale-125" />
        
        {/* Custom Handcrafted SVG for the official WhatsApp visual representing its actual brand logo */}
        <svg 
          viewBox="0 0 24 24" 
          className="w-7 h-7 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.012 2A9.971 9.971 0 0 0 2.13 11.956c.003 1.765.467 3.493 1.348 5.02L2 22l5.12-1.341a9.972 9.972 0 0 0 4.892 1.28h.004c5.441 0 9.873-4.43 9.877-9.877A9.917 9.917 0 0 0 12.012 2zm5.787 13.067c-.317.9-.54 1.21-.926 1.579-.49.467-1.077.727-2.127.31-.699-.277-2.614-1.09-4.832-3.076-1.782-1.593-2.91-3.414-3.21-3.928-.3-.513-.03-.792.228-1.05.234-.233.513-.6.77-.9.256-.3.342-.513.513-.855.172-.342.086-.642-.043-.9-.128-.256-1.155-2.775-1.583-3.805-.418-1.002-.843-.865-1.154-.881-.29-.016-.628-.018-.962-.018a1.85 1.85 0 0 0-1.342.628c-.462.513-1.766 1.728-1.766 4.212s1.8 4.88 2.052 5.222c.253.342 3.513 5.362 8.563 7.545 1.2.52 2.137.83 2.871 1.063 1.21.385 2.31.33 3.18.2.97-.145 2.127-.87 2.427-1.71.3-.84.3-1.558.213-1.71-.085-.152-.317-.233-.633-.393z"/>
        </svg>

        {/* Custom Text Tooltip shown on Hover */}
        <span className="absolute right-16 scale-0 origin-right transition-all duration-200 group-hover:scale-100 bg-zinc-900 text-white dark:bg-white dark:text-black py-1.5 px-3 rounded-lg text-[10px] font-bold uppercase tracking-wider font-sans whitespace-nowrap shadow-lg">
          Discuter sur WhatsApp
        </span>
      </motion.button>
    </div>
  );
}
