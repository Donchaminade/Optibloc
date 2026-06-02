/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { adviceArticles, advisorQuestions, getSmartRecommendation } from '../data';
import { AdviceArticle, Product } from '../types';
import { 
  Sparkles, 
  HelpCircle, 
  BookOpen, 
  ArrowLeft, 
  ArrowRight, 
  RefreshCw, 
  ShoppingBag, 
  CheckCircle,
  Smartphone,
  Laptop,
  EyeOff,
  Activity,
  Sun,
  ShieldAlert,
  Home,
  Car,
  Briefcase,
  Heart,
  Zap,
  Clock
} from 'lucide-react';

const TECHNICAL_TERMS: Record<string, { term: string; definition: string }> = {
  "lumière bleue": {
    term: "Lumière bleue",
    definition: "Partie du spectre de lumière visible (380-500 nm) émise par les écrans. Une exposition excessive fatigue les yeux et perturbe la production de mélatonine."
  },
  "photochromique": {
    term: "Photochromique",
    definition: "Technologie de verres intelligents qui s'assombrissent automatiquement sous l'effet des rayons UV du soleil, puis s'éclaircissent rapidement en intérieur."
  },
  "photochromiques": {
    term: "Verres photochromiques",
    definition: "Technologie de verres intelligents qui s'assombrissent automatiquement sous l'effet des rayons UV du soleil, puis s'éclaircissent rapidement en intérieur."
  },
  "mélatonine": {
    term: "Mélatonine",
    definition: "L'hormone régulatrice du sommeil. Sa sécrétion par le cerveau est réprimée en présence de lumière bleue émise par les écrans la nuit."
  },
  "glandes lacrymales": {
    term: "Glandes lacrymales",
    definition: "Glandes oculaires chargées de la sécrétion des larmes pour lubrifier la cornée et prévenir la sécheresse ou les sensations de brûlure."
  },
  "ciliaires": {
    term: "Muscles ciliaires",
    definition: "Muscles de l'œil qui ajustent la forme du cristallin pour l'accommodation visuelle. Ils se fatiguent rapidement lors de la mise au point continue de près."
  },
  "uva": {
    term: "Rayons UVA",
    definition: "Rayonnements ultraviolets solaires de grande longueur d'onde. Très pénétrants, ils participent au vieillissement accéléré des tissus oculaires."
  },
  "uvb": {
    term: "Rayons UVB",
    definition: "Rayonnements ultraviolets solaires de moyenne longueur d'onde. Très énergétiques, ils sont principalement absorbés par la couche externe de l'œil."
  },
  "fatigue oculaire": {
    term: "Fatigue oculaire",
    definition: "Ensemble de symptômes (yeux secs, maux de tête, flou passager) causé par la concentration oculaire prolongée sur des supports numériques."
  },
  "médicale": {
    term: "Paire médicale",
    definition: "Lunettes correctrices prescrites cliniquement. OptiBloc conçoit ses filtres pour s'adapter ou s'additionner harmonieusement à vos verres de vue."
  }
};

interface TooltipProps {
  term: string;
  title: string;
  definition: string;
}

function Tooltip({ term, title, definition }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const [position, setPosition] = useState<'top' | 'bottom'>('top');

  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const spaceAbove = rect.top;
      if (spaceAbove < 160) {
        setPosition('bottom');
      } else {
        setPosition('top');
      }
    }
  }, [isVisible]);

  return (
    <span 
      ref={triggerRef}
      className="relative inline-block z-10"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onTouchStart={(e) => {
        e.stopPropagation();
        setIsVisible(!isVisible);
      }}
    >
      <span className="font-semibold text-blue-600 dark:text-[#00bcff] underline decoration-dotted decoration-blue-500/60 hover:decoration-blue-500 hover:text-blue-700 dark:hover:text-blue-300 cursor-help transition-all duration-200">
        {term}
      </span>
      
      <AnimatePresence>
        {isVisible && (
          <motion.span
            initial={{ opacity: 0, y: position === 'top' ? 6 : -6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: position === 'top' ? 6 : -6, scale: 0.95 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            className={`absolute left-1/2 -translate-x-1/2 w-64 p-3.5 rounded-xl bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 shadow-xl border border-zinc-200 dark:border-white/10 ${
              position === 'top' ? 'bottom-full mb-2.5' : 'top-full mt-2.5'
            } block text-left font-normal normal-case tracking-normal whitespace-normal`}
            style={{ pointerEvents: 'auto', zIndex: 9999 }}
          >
            {/* Tooltip Header */}
            <span className="flex items-center space-x-2 border-b border-zinc-100 dark:border-white/5 pb-1.5 mb-1.5 font-sans">
              <HelpCircle className="w-3.5 h-3.5 text-blue-500 dark:text-[#00bcff] shrink-0" />
              <span className="font-serif text-xs italic font-bold tracking-tight text-zinc-900 dark:text-white">
                {title}
              </span>
            </span>
            {/* Tooltip content */}
            <span className="block text-[11px] font-sans leading-normal text-zinc-600 dark:text-zinc-300">
              {definition}
            </span>
            {/* Custom vector down/up arrow */}
            <span 
              className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-white dark:bg-zinc-900 border-r border-b border-zinc-200 dark:border-white/10 rotate-45 ${
                position === 'top' ? 'top-full -mt-1' : 'bottom-full -mb-1 border-t border-l border-r-0 border-b-0'
              }`}
            />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

function renderKeywords(text: string): React.ReactNode {
  const pattern = /(glandes lacrymales|lumière bleue|fatigue oculaire|photochromiques|photochromique|mélatonine|ciliaires|médicale|UVA|UVB)/gi;
  const tokens = text.split(pattern);
  return (
    <>
      {tokens.map((token, index) => {
        const lowercaseToken = token.toLowerCase();
        const definitionObj = TECHNICAL_TERMS[lowercaseToken];
        if (definitionObj) {
          return (
            <span key={index}>
              <Tooltip 
                term={token} 
                title={definitionObj.term} 
                definition={definitionObj.definition} 
              />
            </span>
          );
        }
        return token;
      })}
    </>
  );
}

function parseInlineContent(text: string): React.ReactNode {
  const boldParts = text.split(/(\*\*.*?\*\*)/g);
  
  return (
    <>
      {boldParts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          const boldText = part.slice(2, -2);
          return (
            <strong key={index} className="font-bold text-zinc-900 dark:text-white">
              {renderKeywords(boldText)}
            </strong>
          );
        }
        return <span key={index}>{renderKeywords(part)}</span>;
      })}
    </>
  );
}

function renderArticleContent(content: string): React.ReactNode {
  const blocks = content.split('\n\n');
  return (
    <div className="space-y-6">
      {blocks.map((block, idx) => {
        if (block.startsWith('### ')) {
          const title = block.replace('### ', '');
          return (
            <h3 
              key={idx} 
              className="font-serif text-lg sm:text-xl italic text-zinc-900 dark:text-white mt-8 mb-4 pt-4 first:mt-0 first:pt-0 border-t border-zinc-150 dark:border-white/5 first:border-none"
            >
              {title}
            </h3>
          );
        }
        
        if (block.match(/^\d+\.\s/m)) {
          const lines = block.split('\n');
          return (
            <ol key={idx} className="space-y-3.5 my-4 ps-4 list-decimal list-inside text-zinc-700 dark:text-zinc-300 font-sans">
              {lines.map((line, lIdx) => {
                const cleanedLine = line.replace(/^\d+\.\s+/, '');
                return (
                  <li key={lIdx} className="leading-relaxed text-xs sm:text-sm pl-2">
                    {parseInlineContent(cleanedLine)}
                  </li>
                );
              })}
            </ol>
          );
        }

        return (
          <p key={idx} className="text-xs sm:text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed font-sans mb-4">
            {parseInlineContent(block)}
          </p>
        );
      })}
    </div>
  );
}

interface AdvisorProps {
  onOrder: (product: Product) => void;
}

export default function Advisor({ onOrder }: AdvisorProps) {
  // Navigation: "list" (articles), "diagnostic" (stepper modal), "result" (stepper outcome)
  const [activeTab, setActiveTab] = useState<'articles' | 'diagnostic'>('articles');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recommendedProduct, setRecommendedProduct] = useState<Product | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<AdviceArticle | null>(null);

  // Map icons to components for dynamic rendering
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
      case 'Laptop': return <Laptop className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
      case 'EyeOff': return <EyeOff className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
      case 'Sun': return <Sun className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
      case 'Home': return <Home className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
      case 'Car': return <Car className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
      case 'Heart': return <Heart className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
      default: return <HelpCircle className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
    }
  };

  const handleOptionSelect = (questionId: string, optionValue: string) => {
    const updatedAnswers = { ...answers, [questionId]: optionValue };
    setAnswers(updatedAnswers);

    // If there is a next step, auto transition after 250ms
    setTimeout(() => {
      if (currentStep < advisorQuestions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        // Last step - run analysis animation
        setIsAnalyzing(true);
        setTimeout(() => {
          const rec = getSmartRecommendation(updatedAnswers);
          setRecommendedProduct(rec);
          setIsAnalyzing(false);
        }, 1500);
      }
    }, 250);
  };

  const handleResetDiagnostic = () => {
    setAnswers({});
    setCurrentStep(0);
    setRecommendedProduct(null);
    setIsAnalyzing(false);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' F CFA';
  };

  return (
    <section id="advice" className="py-24 bg-white dark:bg-[#0a0a0a] border-t border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white transition-colors duration-350">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 border border-blue-500/50 text-blue-500 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded-full">
            Espace Prévention & Conseils
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl italic text-zinc-900 dark:text-white mt-4 mb-4">
            Prenez Soin de Votre Capital Visuel
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-sans max-w-xl mx-auto">
            Apprenez à identifier les agressions lumineuses, explorez des routines d&apos;hygiène oculaire et trouvez l&apos;OptiBloc idéal grâce à notre diagnostic expert.
          </p>
        </div>

        {/* Content Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-zinc-100 dark:bg-[#121111] border border-zinc-200 dark:border-white/10 rounded-sm">
            <button
              onClick={() => {
                setActiveTab('articles');
                setSelectedArticle(null);
              }}
              className={`flex items-center space-x-2.5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'articles'
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-black'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Articles & Guides de Santé</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('diagnostic');
                handleResetDiagnostic();
              }}
              className={`flex items-center space-x-2.5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'diagnostic'
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-black'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Faire mon Diagnostic Visuel</span>
            </button>
          </div>
        </div>

        {/* Dynamic Display Area */}
        <div className="relative">
          {/* TAB 1: ARTICLES */}
          {activeTab === 'articles' && (
            <div>
              <AnimatePresence mode="wait">
                {!selectedArticle ? (
                  /* Articles Grid List */
                  <motion.div
                    key="articles-grid"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                  >
                    {adviceArticles.map((article) => (
                      <div
                        key={article.id}
                        onClick={() => setSelectedArticle(article)}
                        className="group flex flex-col justify-between bg-white dark:bg-[#0d0d0d] rounded-2xl p-6 border border-zinc-200 dark:border-white/10 hover:bg-zinc-50 dark:hover:bg-[#121212] transition-colors duration-305 cursor-pointer shadow-sm hover:shadow-md"
                      >
                        <div>
                          <div className="flex items-center justify-between text-[9px] font-mono uppercase mb-4">
                            <span className="text-blue-500 dark:text-blue-400 font-bold tracking-widest">{article.category}</span>
                            <span className="flex items-center space-x-1 text-zinc-500">
                              <Clock className="w-3.5 h-3.5" />
                              <span>{article.readTime}</span>
                            </span>
                          </div>
                          
                          <h3 className="font-serif text-lg italic text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-3 transition-colors">
                            {article.title}
                          </h3>
                          
                          <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed line-clamp-3">
                            {article.summary}
                          </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                          <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors bg-clip-text">Lire la suite</span>
                          <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  /* Single Article Detail View */
                  <motion.div
                    key="article-detail"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="max-w-3xl mx-auto bg-white dark:bg-[#0d0d0d] rounded-2xl border border-zinc-200 dark:border-white/10 p-6 sm:p-10 shadow-lg"
                  >
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-blue-500 dark:text-[#00bcff] mb-8 cursor-pointer hover:underline"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Retourner aux conseils</span>
                    </button>

                    <div className="flex items-center space-x-3 text-[10px] font-mono text-blue-500 dark:text-blue-400 uppercase font-semibold mb-3">
                      <span>{selectedArticle.category}</span>
                      <span>•</span>
                      <span className="text-zinc-500 font-normal">{selectedArticle.readTime}</span>
                    </div>

                    <h1 className="font-serif text-2xl sm:text-3xl italic text-zinc-900 dark:text-white leading-tight mb-6">
                      {selectedArticle.title}
                    </h1>

                    <div className="border-t border-zinc-205 dark:border-white/10 pt-6">
                      {renderArticleContent(selectedArticle.content)}
                    </div>

                    {/* Metadata tags */}
                    <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-white/10 flex flex-wrap gap-2">
                      {selectedArticle.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-mono font-bold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-3 py-1.5 rounded-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* TAB 2: DIAGNOSTIC STEPPER */}
          {activeTab === 'diagnostic' && (
            <div className="max-w-2xl mx-auto">
              <AnimatePresence mode="wait">
                
                {/* STATE A: CURRENT STEP QUESTIONNAIRE */}
                {!recommendedProduct && !isAnalyzing && (
                  <motion.div
                    key="diagnostic-step"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white dark:bg-[#0d0d0d] p-6 sm:p-10 rounded-2xl border border-zinc-200 dark:border-white/10 shadow-xl"
                  >
                    {/* Stepper progress indicator */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-[10px] font-mono font-medium text-zinc-500 uppercase tracking-widest">
                        Question {currentStep + 1} de {advisorQuestions.length}
                      </span>
                      {/* Step Bubbles */}
                      <div className="flex items-center space-x-1.5">
                        {advisorQuestions.map((_, idx) => (
                          <div
                            key={idx}
                            className={`h-[3px] rounded-full transition-all duration-300 ${
                              idx === currentStep
                                ? 'w-8 bg-zinc-900 dark:bg-white'
                                : idx < currentStep
                                ? 'w-4 bg-blue-500 dark:bg-blue-400'
                                : 'w-2 bg-zinc-200 dark:bg-white/10'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Question text */}
                    <h3 className="font-serif text-xl sm:text-2xl text-zinc-900 dark:text-white italic leading-tight mb-8">
                      {advisorQuestions[currentStep].text}
                    </h3>

                    {/* Options Stack */}
                    <div className="space-y-4">
                      {advisorQuestions[currentStep].options.map((option) => {
                        const isSelected = answers[advisorQuestions[currentStep].id] === option.value;
                        return (
                          <button
                            key={option.value}
                            onClick={() => handleOptionSelect(advisorQuestions[currentStep].id, option.value)}
                            className={`flex items-start text-left w-full p-4 border transition-all cursor-pointer rounded-xl ${
                              isSelected
                                ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-500/5 shadow-md text-zinc-900 dark:text-white'
                                : 'border-zinc-205 dark:border-white/10 hover:border-zinc-400 dark:hover:border-white/30 bg-zinc-50 dark:bg-black/40 text-zinc-700 dark:text-zinc-300'
                            }`}
                          >
                            <div className="bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 p-3 rounded-xl shrink-0 mr-4">
                              {getIcon(option.icon)}
                            </div>
                            <div className="mt-0.5">
                              <span className="block font-sans text-sm sm:text-base font-semibold text-zinc-900 dark:text-white">
                                {option.label}
                              </span>
                              {option.description && (
                                <span className="block text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-snug">
                                  {option.description}
                                </span>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Footer Nav Controls */}
                    {currentStep > 0 && (
                      <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-white/5 flex items-center">
                        <button
                          onClick={() => setCurrentStep(currentStep - 1)}
                          className="flex items-center space-x-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white cursor-pointer"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Question précédente</span>
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* STATE B: LOADING / ANALYSIS ANIMATION */}
                {isAnalyzing && (
                  <motion.div
                    key="diagnostic-analyzing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-16 bg-white dark:bg-[#0d0d0d] p-10 rounded-2xl border border-zinc-200 dark:border-white/10 shadow-xl"
                  >
                    <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                        className="absolute inset-0 border-4 border-zinc-100 dark:border-white/5 border-t-blue-500 dark:border-t-blue-400 rounded-full"
                      />
                      <Sparkles className="w-8 h-8 text-blue-500 dark:text-blue-400 animate-pulse" />
                    </div>
                    
                    <span className="font-serif text-xl italic text-zinc-900 dark:text-white">
                      Analyse de votre immunité digitale
                    </span>
                    <span className="text-xs font-mono text-zinc-500 mt-1 pb-4 uppercase tracking-wider">
                      Recherche des meilleures montures adaptées...
                    </span>
 
                    <div className="w-full max-w-xs bg-zinc-100 dark:bg-white/5 h-[2px] mt-4">
                      <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                        className="bg-blue-500 dark:bg-blue-400 w-1/2 h-full"
                      />
                    </div>
                  </motion.div>
                )}
 
                {/* STATE C: RECOMMENDATION DISCLOSED RESULT */}
                {recommendedProduct && !isAnalyzing && (
                  <motion.div
                    key="diagnostic-results"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-white dark:bg-[#0d0d0d] p-6 sm:p-10 rounded-2xl border border-zinc-200 dark:border-white/10 shadow-2xl"
                  >
                    <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-8">
                      <div className="p-3 bg-blue-500/10 border border-blue-500/35 text-blue-500 dark:text-blue-400 rounded-full mb-4 animate-bounce">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      
                      <h4 className="font-serif text-2xl italic text-zinc-900 dark:text-white">
                        Diagnostic Terminé avec Succès !
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 mt-2 font-sans max-w-md mx-auto">
                        Nos conseillers-visuels ont analysé votre profil quotidien. Voici l&apos;association idéale pour votre bien-être oculaire :
                      </p>
                    </div>
 
                    {/* Result Product Box layout */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 rounded-xl bg-zinc-50 dark:bg-black/40 border border-zinc-200 dark:border-white/10 mb-8">
                      <div className="md:col-span-5 rounded-lg overflow-hidden bg-zinc-100 dark:bg-black/50 border border-zinc-200 dark:border-white/5">
                        <img
                          src={recommendedProduct.image}
                          alt={recommendedProduct.name}
                          className="w-full h-auto object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
 
                      <div className="md:col-span-7 flex flex-col justify-between">
                        <div>
                          <span className="text-[9px] font-mono uppercase bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 px-2.5 py-1 font-bold">
                            Recommandation Idéale à 99%
                          </span>
                          <h5 className="font-serif text-lg italic text-zinc-900 dark:text-white mt-3 mb-1">
                            {recommendedProduct.name}
                          </h5>
                          <span className="block text-[8px] font-mono text-zinc-500 mb-3 uppercase tracking-widest">
                            Type : {recommendedProduct.type_label} | {recommendedProduct.frame_material}
                          </span>
                          <p className="text-xs text-zinc-650 dark:text-zinc-400 leading-relaxed font-sans mb-4">
                            {recommendedProduct.description}
                          </p>
                        </div>
 
                        <div className="flex items-center justify-between border-t border-zinc-200 dark:border-white/5 pt-4 mt-2">
                          <div>
                            <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest">Tarif direct</span>
                            <span className="text-lg font-serif italic text-zinc-900 dark:text-white font-bold">
                              {formatPrice(recommendedProduct.price)}
                            </span>
                          </div>
 
                          <button
                            onClick={() => onOrder(recommendedProduct)}
                            className="flex items-center space-x-1.5 bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-black text-[10px] uppercase font-bold tracking-widest px-4.5 py-3 transition-colors cursor-pointer"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Commander</span>
                          </button>
                        </div>
                      </div>
                    </div>
 
                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-2">
                      <button
                        onClick={handleResetDiagnostic}
                        className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white cursor-pointer py-2 px-4 transition-colors"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Recommencer le diagnostic</span>
                      </button>
                      
                      <button
                        onClick={() => {
                          setActiveTab('articles');
                          setSelectedArticle(null);
                        }}
                        className="text-[10px] font-bold uppercase tracking-widest text-blue-500 dark:text-[#00bcff] hover:text-blue-600 dark:hover:text-white cursor-pointer py-2 px-4 transition-colors"
                      >
                        Voir les guides de prévention
                      </button>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
