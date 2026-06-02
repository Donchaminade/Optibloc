/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Zap, ArrowRight, Eye, ShieldCheck, HelpCircle, Camera } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onDiagnostic: () => void;
  onStartTryOn: () => void;
}

export default function Hero({ onExplore, onDiagnostic, onStartTryOn }: HeroProps) {
  const [protectionActive, setProtectionActive] = useState(true);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/4 -left-36 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-36 w-96 h-96 bg-zinc-400/10 dark:bg-zinc-800/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content Block */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-blue-500/30 px-3.5 py-1.5 rounded-full"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-mono font-medium uppercase tracking-widest text-[#00bcff] dark:text-blue-400">
                Innovation d&apos;immunité digitale 2024
              </span>
            </motion.div>

            {/* Main Catchy Title with Sophisticated Dark serif style */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.95] italic text-zinc-900 dark:text-white"
            >
              Vision <br />
              <span className="not-italic font-sans font-black text-zinc-400 dark:text-zinc-500 tracking-tighter uppercase text-4xl sm:text-5xl lg:text-6xl block mt-2">
                PROTECTRICE.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-zinc-650 dark:text-zinc-400 max-w-xl leading-relaxed font-sans"
            >
              La technologie photochromique alliée au filtrage de lumière bleue. Un confort visuel absolu pour le bureau comme pour l&apos;extérieur. OptiBloc façonne des montures haut de gamme pour l'Afrique de l'Ouest.
            </motion.p>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row w-full sm:w-auto gap-3.5 pt-4"
            >
              <button
                onClick={onExplore}
                className="px-6 py-4 bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-black text-xs font-bold uppercase tracking-[0.2em] dark:hover:bg-zinc-200 transition-all cursor-pointer shadow-lg hover:shadow-xl shrink-0"
              >
                Collection
              </button>
              <button
                onClick={onDiagnostic}
                className="px-6 py-4 border border-zinc-200 dark:border-white/10 text-zinc-700 hover:text-zinc-950 dark:text-white dark:hover:text-zinc-300 hover:border-zinc-400 dark:hover:border-white text-xs font-bold uppercase tracking-[0.2em] transition-all cursor-pointer bg-white dark:bg-zinc-950/20 shrink-0"
              >
                Diagnostic
              </button>
              <button
                onClick={onStartTryOn}
                className="px-5 py-4 border border-blue-500/80 hover:bg-blue-500/10 text-blue-500 dark:text-blue-400 text-xs font-bold uppercase tracking-[0.2em] transition-all cursor-pointer bg-blue-500/5 flex items-center justify-center space-x-2 shrink-0 shadow-sm"
              >
                <Camera className="w-4 h-4" />
                <span>Essai virtuel</span>
              </button>
            </motion.div>

            {/* Quick stats / bullet points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-250 dark:border-white/10 w-full max-w-lg"
            >
              <div>
                <span className="block font-serif text-3xl italic text-zinc-900 dark:text-white">92%</span>
                <span className="block text-[10px] font-mono uppercase tracking-wider text-zinc-500 mt-1">Bleu Bloqué</span>
              </div>
              <div>
                <span className="block font-serif text-3xl italic text-zinc-900 dark:text-white">&lt;60s</span>
                <span className="block text-[10px] font-mono uppercase tracking-wider text-zinc-500 mt-1">Photochromique</span>
              </div>
              <div>
                <span className="block font-serif text-3xl italic text-zinc-900 dark:text-white">14g</span>
                <span className="block text-[10px] font-mono uppercase tracking-wider text-zinc-500 mt-1">Poids Plume</span>
              </div>
            </motion.div>
          </div>

          {/* Interactive Simulation Block ("Choc Factor") */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-sm rounded-2xl p-6 bg-white dark:bg-[#151515] border border-zinc-200 dark:border-white/10 shadow-2xl relative overflow-hidden flex flex-col items-center transition-colors duration-300"
            >
              {/* Outer light sheen */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

              {/* Header inside simulated screen block */}
              <div className="flex items-center justify-between w-full pb-4 mb-6 border-b border-zinc-200 dark:border-white/10">
                <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse" />
                  <span>Démystificateur OptiBloc</span>
                </span>
                <button
                  onClick={() => setProtectionActive(!protectionActive)}
                  className={`text-[9px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-sm border transition-all cursor-pointer ${
                    protectionActive
                      ? 'bg-blue-500/10 text-blue-500 dark:text-blue-400 border-blue-500/30'
                      : 'bg-rose-500/10 text-rose-500 border-rose-500/30'
                  }`}
                >
                  {protectionActive ? 'Active' : 'Inactif'}
                </button>
              </div>

              {/* Graphic visual: Blue Light vs. Eyes behind glasses */}
              <div className="relative w-full h-56 bg-zinc-900 dark:bg-black/60 rounded-xl flex items-center justify-between px-6 border border-zinc-800 dark:border-white/5 overflow-hidden mb-6">
                
                {/* Simulated Monitor Screen emitting light */}
                <div className="flex flex-col items-center z-10">
                  <div className="w-2.5 h-14 rounded-r-lg bg-gradient-to-b from-blue-500 via-indigo-400 to-indigo-600 flex items-center justify-center relative">
                    {/* Ring glow around simulated screen emission */}
                    <div className="absolute -inset-2 bg-indigo-500/10 rounded-full blur-md" />
                  </div>
                  <span className="text-[9px] font-mono text-slate-400 mt-2">Écran LED</span>
                </div>

                {/* Simulated Lens of OptiBloc Glasses placed in the center */}
                <div className="relative flex flex-col items-center z-20">
                  {/* The Glass Lens circle */}
                  <motion.div
                    animate={{
                      borderColor: protectionActive ? '#6366f1' : '#475569',
                      boxShadow: protectionActive 
                        ? '0 0 15px rgba(99, 102, 241, 0.4), inset 0 0 10px rgba(99, 102, 241, 0.2)' 
                        : 'none'
                    }}
                    transition={{ duration: 0.4 }}
                    className="w-8 h-24 rounded-full border-2 bg-white/5 backdrop-blur-[1px] flex items-center justify-center relative origin-center"
                  >
                    {/* Lens reflections */}
                    <div className="absolute left-[30%] top-2 w-[1.5px] h-4 bg-white/20 rounded-full" />
                    
                    {/* Glare effect when blue light hits */}
                    {protectionActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.3, 0.7, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-y-0 -left-1 w-2 bg-indigo-400/40 rounded-full blur-xs"
                      />
                    )}
                  </motion.div>
                  <span className="text-[9px] font-mono text-slate-400 mt-2">Verre OptiBloc</span>
                </div>

                {/* Simulated Eye / Retina to the right */}
                <div className="flex flex-col items-center z-10 relative">
                  <motion.div
                    animate={{
                      borderColor: protectionActive ? '#10b981' : '#f43f5e',
                      backgroundColor: protectionActive ? 'rgba(16, 185, 129, 0.08)' : 'rgba(244, 63, 94, 0.1)',
                      boxShadow: protectionActive 
                        ? '0 0 20px rgba(16, 185, 129, 0.25), inset 0 0 10px rgba(16, 185, 129, 0.1)' 
                        : '0 0 20px rgba(244, 63, 94, 0.3), inset 0 0 10px rgba(244, 63, 94, 0.1)',
                    }}
                    transition={{ duration: 0.4 }}
                    className="w-16 h-16 rounded-full border-2 flex items-center justify-center relative cursor-pointer overflow-visible"
                    onClick={() => setProtectionActive(!protectionActive)}
                  >
                    {/* SVG detail overlays (bloodshot veins or green calm elements) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 64 64">
                      {/* Bloodshot veins if inactive */}
                      {!protectionActive && (
                        <>
                          <path d="M4 32 Q16 16 32 32" stroke="rgba(239, 68, 68, 0.6)" strokeWidth="0.75" fill="none" />
                          <path d="M60 32 Q48 48 32 32" stroke="rgba(239, 68, 68, 0.6)" strokeWidth="0.75" fill="none" />
                          <path d="M8 24 Q18 28 22 20" stroke="rgba(239, 68, 68, 0.4)" strokeWidth="0.5" fill="none" />
                          <path d="M56 24 Q46 28 42 20" stroke="rgba(239, 68, 68, 0.4)" strokeWidth="0.5" fill="none" />
                        </>
                      )}
                      
                      {/* Radiant positive waves if active */}
                      {protectionActive && (
                        <motion.circle 
                          cx="32" 
                          cy="32" 
                          r="28" 
                          stroke="rgba(16, 185, 129, 0.3)" 
                          strokeWidth="1" 
                          fill="none"
                          animate={{ scale: [0.9, 1.15], opacity: [0.8, 0] }}
                          transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                        />
                      )}
                    </svg>

                    {/* Eye iris and pupil with trembling motion under stress */}
                    <motion.div 
                      animate={protectionActive ? {
                        scale: 1.0,
                        rotate: 0,
                      } : {
                        scale: [0.85, 0.95, 0.85],
                        rotate: [-2, 2, -1, 1, -2],
                      }}
                      transition={protectionActive ? { duration: 0.4 } : { repeat: Infinity, duration: 0.8 }}
                      className="w-9 h-9 rounded-full border border-slate-750 dark:border-slate-800 bg-slate-950 flex items-center justify-center relative overflow-hidden"
                    >
                      {/* Iris background color shift */}
                      <motion.div
                        animate={{
                          backgroundColor: protectionActive ? '#059669' : '#b91c1c',
                        }}
                        className="absolute inset-0 opacity-40"
                      />

                      {/* Small shining pupil */}
                      <motion.div
                        animate={{
                          backgroundColor: protectionActive ? '#10b981' : '#f43f5e',
                          scale: protectionActive ? 1.0 : 1.35
                        }}
                        className="w-5 h-5 rounded-full relative flex items-center justify-center"
                      >
                        {/* Pupil center */}
                        <div className="w-2.5 h-2.5 bg-black rounded-full" />
                        {/* Eye glare reflection highlight */}
                        <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-white rounded-full opacity-80" />
                      </motion.div>
                    </motion.div>

                    {/* Dynamic eyelids for zen or stress expression */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 64 64">
                      {protectionActive ? (
                        /* Zen smiling eyelid (closed state or calm look) */
                        <motion.path 
                          d="M 12 36 Q 32 46 52 36" 
                          stroke="#10b981" 
                          strokeWidth="2.5" 
                          strokeLinecap="round" 
                          fill="none" 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.85 }}
                        />
                      ) : (
                        /* Stressed wide-opened red eyelashes styling */
                        <motion.path 
                          d="M 12 24 Q 32 10 52 24" 
                          stroke="#ef4444" 
                          strokeWidth="1.5" 
                          fill="none" 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.7 }}
                        />
                      )}
                    </svg>

                    {/* Stress red warning indicator / Comfort indicator */}
                    {!protectionActive && (
                      <motion.span
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                        className="absolute -top-3.5 bg-rose-500/20 text-rose-400 border border-rose-500/40 text-[7px] font-mono px-1 rounded-sm uppercase tracking-wider font-bold whitespace-nowrap"
                      >
                        Stress Visuel 😭
                      </motion.span>
                    )}

                    {protectionActive && (
                      <span className="absolute -top-3.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[7px] font-mono px-1 rounded-sm uppercase tracking-wider font-bold whitespace-nowrap">
                        Repos Oculaire 😌
                      </span>
                    )}

                    {/* Sparkles of comfort floating upward (Activated filter) */}
                    {protectionActive && (
                      <>
                        <motion.span
                          initial={{ scale: 0, opacity: 0, y: 10, x: 12 }}
                          animate={{ scale: [0, 1.3, 0], opacity: [0, 1, 0], y: [-10, -35], x: [12, 28] }}
                          transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                          className="absolute text-[11px] select-none text-emerald-450 pointer-events-none"
                        >
                          ✨
                        </motion.span>
                        <motion.span
                          initial={{ scale: 0, opacity: 0, y: 15, x: -12 }}
                          animate={{ scale: [0, 1.1, 0], opacity: [0, 1, 0], y: [-5, -30], x: [-12, -26] }}
                          transition={{ repeat: Infinity, duration: 1.8, ease: "easeOut", delay: 0.4 }}
                          className="absolute text-[10px] select-none text-emerald-400 pointer-events-none"
                        >
                          ✨
                        </motion.span>
                        <motion.span
                          initial={{ scale: 0, opacity: 0, y: 20, x: 0 }}
                          animate={{ scale: [0, 1.2, 0], opacity: [0, 0.8, 0], y: [0, -25], x: [0, -10] }}
                          transition={{ repeat: Infinity, duration: 2.2, ease: "easeOut", delay: 0.8 }}
                          className="absolute text-[9px] select-none text-emerald-300 pointer-events-none"
                        >
                          💚
                        </motion.span>
                      </>
                    )}

                    {/* Teardrops falling down (Deactivated filter) */}
                    {!protectionActive && (
                      <>
                        {/* Tear 1 is left tear */}
                        <motion.div
                          initial={{ y: 16, opacity: 0, x: -14, scale: 0.4 }}
                          animate={{ 
                            y: [16, 45], 
                            opacity: [0, 1, 1, 0],
                            scale: [0.4, 0.9, 0.9, 0.6] 
                          }}
                          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut", delay: 0 }}
                          className="absolute w-2 h-3 bg-blue-400 rounded-b-full rounded-tl-full -rotate-45 shadow-sm pointer-events-none"
                        />
                        {/* Tear 2 is right tear */}
                        <motion.div
                          initial={{ y: 16, opacity: 0, x: 14, scale: 0.4 }}
                          animate={{ 
                            y: [16, 48], 
                            opacity: [0, 1, 1, 0],
                            scale: [0.4, 0.9, 0.9, 0.6] 
                          }}
                          transition={{ repeat: Infinity, duration: 2.0, ease: "easeInOut", delay: 0.85 }}
                          className="absolute w-2 h-3 bg-blue-400 rounded-b-full rounded-tr-full rotate-45 shadow-sm pointer-events-none"
                        />
                        {/* Red visual sparks from head or irritation */}
                        <motion.span
                          initial={{ scale: 0, opacity: 0, y: -10, x: 22 }}
                          animate={{ scale: [0, 1, 0], opacity: [0, 0.8, 0], y: [-10, -20] }}
                          transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
                          className="absolute text-[10px] select-none text-red-500 pointer-events-none"
                        >
                          ⚡
                        </motion.span>
                        <motion.span
                          initial={{ scale: 0, opacity: 0, y: -12, x: -22 }}
                          animate={{ scale: [0, 1, 0], opacity: [0, 0.8, 0], y: [-12, -22] }}
                          transition={{ repeat: Infinity, duration: 1.6, delay: 0.7 }}
                          className="absolute text-[10px] select-none text-red-500 pointer-events-none"
                        >
                          ⚡
                        </motion.span>
                      </>
                    )}
                  </motion.div>
                  <span className="text-[9px] font-mono text-slate-400 mt-2">Votre Œil</span>
                </div>

                {/* Light Ray Stream Simulation */}
                {/* 1. Raw Blue/Violet screen light coming from screen heading to glass */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-15" xmlns="http://www.w3.org/2000/svg">
                  {/* Left part: Always active screen emission rays */}
                  <line x1="42" y1="112" x2="160" y2="112" stroke="#6366f1" strokeWidth="2.5" strokeDasharray="5,5" className="animate-[dash_10s_linear_infinite]" />
                  <line x1="42" y1="102" x2="160" y2="102" stroke="#4f46e5" strokeWidth="1.5" strokeDasharray="3,3" className="animate-[dash_8s_linear_infinite]" />
                  <line x1="42" y1="122" x2="160" y2="122" stroke="#4f46e5" strokeWidth="1.5" strokeDasharray="3,3" className="animate-[dash_8s_linear_infinite]" />

                  {/* Right part: Rays behind the lens */}
                  {protectionActive ? (
                    <>
                      {/* Blocked and reflected rays leftwards */}
                      <path d="M152,102 Q130,70 100,60" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="2,2" strokeLinecap="round" opacity="0.6" />
                      <path d="M152,112 Q130,130 90,140" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="2,2" strokeLinecap="round" opacity="0.6" />
                      
                      {/* Harmless amber/warm light passing to protect eye */}
                      <line x1="168" y1="112" x2="274" y2="112" stroke="#fbbf24" strokeWidth="1" strokeDasharray="4,4" className="animate-[dash_20s_linear_infinite]" opacity="0.5" />
                    </>
                  ) : (
                    <>
                      {/* Dangerous screen blue rays entering eye directly */}
                      <line x1="168" y1="112" x2="274" y2="112" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="5,5" className="animate-[dash_5s_linear_infinite]" />
                      <line x1="168" y1="102" x2="274" y2="102" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,3" className="animate-[dash_4s_linear_infinite]" />
                      <line x1="168" y1="122" x2="274" y2="122" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,3" className="animate-[dash_4s_linear_infinite]" />
                    </>
                  )}
                </svg>

              </div>

              {/* Simulator Actionable Toggle block */}
              <div className="w-full flex flex-col space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-sans text-zinc-500 dark:text-zinc-400 font-medium">Bénéfice :</span>
                  <span className="text-xs font-semibold text-zinc-900 dark:text-white transition-all">
                    {protectionActive ? 'Insomnies & maux de tête éliminés' : 'Agression lumineuse directe'}
                  </span>
                </div>
                <button
                  onClick={() => setProtectionActive(!protectionActive)}
                  className={`w-full py-3.5 font-sans text-[10px] font-bold tracking-widest transition-all uppercase cursor-pointer ${
                    protectionActive
                      ? 'bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 border border-transparent'
                      : 'bg-rose-500/10 text-rose-400 border border-rose-500/30 hover:bg-rose-500/20'
                  }`}
                >
                  {protectionActive ? 'Retirer la protection' : 'Activer le filtre OptiBloc'}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
    </section>
  );
}
