/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { products } from '../data';
import { Product } from '../types';
import { Eye, Check, ShoppingBag, ArrowRight, ShieldCheck, Star, Camera } from 'lucide-react';

interface CatalogProps {
  onOrder: (product: Product) => void;
  onTryOn: (product: Product) => void;
}

export default function Catalog({ onOrder, onTryOn }: CatalogProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'blue_light' | 'photochromic'>('all');
  const [activeUsage, setActiveUsage] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products based on Category and Usage
  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesUsage = activeUsage === 'all' || product.usage.includes(activeUsage as any);
    return matchesCategory && matchesUsage;
  });

  const categories = [
    { id: 'all', label: 'Tous les modèles' },
    { id: 'blue_light', label: 'Anti-Lumière Bleue' },
    { id: 'photochromic', label: 'Photochromiques 2-en-1' },
  ];

  const usages = [
    { id: 'all', label: 'Tous usages' },
    { id: 'office', label: 'Bureau & Code 💻' },
    { id: 'gaming', label: 'Gaming & High-FPS 🎮' },
    { id: 'outdoor', label: 'Plein Soleil & UV ☀️' },
    { id: 'reading', label: 'Lecture & Mobiles 📱' }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' F CFA';
  };

  return (
    <>
      <section id="catalog" className="py-24 bg-white dark:bg-[#0a0a0a] text-zinc-900 dark:text-white border-t border-zinc-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 border border-blue-500/50 text-blue-500 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded-full">
            Collection OptiBloc
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl italic text-zinc-900 dark:text-white mt-4 mb-4">
            Optez pour une Immunité Oculaire d&apos;Élite
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-sans max-w-xl mx-auto">
            Sélectionnez la monture adaptée à votre style de vie digital. Verres minéraux à haute neutralisation, montures ajustées et matériaux de précision.
          </p>
        </motion.div>

        {/* Categories Tabs & Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="flex flex-col items-center space-y-6 mb-16"
        >
          {/* Main Category Selector */}
          <div className="flex flex-wrap gap-2 justify-center p-1.5 bg-zinc-100 dark:bg-[#121212] border border-zinc-200 dark:border-white/10 rounded-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-black'
                    : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-450 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Usage Filter Pills */}
          <div className="flex flex-wrap gap-2 justify-center max-w-3xl">
            {usages.map((usage) => (
              <button
                key={usage.id}
                onClick={() => setActiveUsage(usage.id)}
                className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all cursor-pointer ${
                  activeUsage === usage.id
                    ? 'border-blue-500 text-blue-500 dark:text-blue-400 bg-blue-500/10'
                    : 'border-zinc-200 dark:border-white/10 text-zinc-500 hover:border-zinc-350 dark:hover:border-white/30 hover:text-zinc-905 dark:hover:text-white bg-white dark:bg-zinc-950/40'
                }`}
              >
                {usage.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Catalog Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.16, 1, 0.3, 1], // Custom premium cubic-bezier ease
                  delay: (index % 3) * 0.08 // Stagger delay based on grid column
                }}
                className="group relative flex flex-col bg-white dark:bg-[#0d0d0d] rounded-2xl border border-zinc-200 dark:border-white/10 overflow-hidden hover:bg-zinc-50 dark:hover:bg-[#121212] transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                {/* Badge Tag */}
                <span className="absolute top-4 left-4 z-10 bg-zinc-900/90 dark:bg-black/80 text-[9px] font-mono uppercase tracking-widest text-blue-400 px-3 py-1.5 rounded-full border border-blue-500/30">
                  {product.type_label}
                </span>

                {/* Images Container */}
                <div 
                  className="relative h-64 overflow-hidden bg-zinc-50 dark:bg-[#151515] flex items-center justify-center cursor-pointer border-b border-zinc-100 dark:border-white/10"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <button className="flex items-center space-x-2 bg-white text-black px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Fiche Produit</span>
                    </button>
                  </div>
                </div>

                {/* Info Block */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono tracking-widest font-semibold uppercase text-zinc-500">
                      Lunettes {product.category === 'photochromic' ? 'Photochromique' : 'Anti-Bleue'}
                    </span>
                    <div className="flex items-center space-x-1.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400 dark:fill-zinc-400 dark:stroke-zinc-400" />
                      <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{product.rating}</span>
                    </div>
                  </div>

                  <h3 
                    className="font-serif text-xl italic text-zinc-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    {product.name}
                  </h3>
                  
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans mt-2 mb-4 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between gap-4">
                    <div>
                      <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest">Prix direct</span>
                      <span className="text-lg font-serif italic text-zinc-900 dark:text-white">{formatPrice(product.price)}</span>
                    </div>

                    <div className="flex space-x-1.5 shrink-0">
                      <button
                        onClick={() => onTryOn(product)}
                        className="flex items-center space-x-1 border border-blue-500 hover:bg-blue-500/10 text-blue-500 dark:text-blue-400 px-3 py-2.5 text-[9px] font-bold uppercase tracking-widest transition-all cursor-pointer"
                        title="Essai Virtuel AR"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Essayer</span>
                      </button>

                      <button
                        onClick={() => onOrder(product)}
                        className="flex items-center space-x-1.5 bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-black px-3.5 py-2.5 text-[9px] font-bold uppercase tracking-widest transition-all cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Acheter</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>

      {/* Product Details Dialog Overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            {/* Backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative w-full max-w-4xl bg-white dark:bg-[#0d0d0d] border border-zinc-200 dark:border-white/10 p-6 md:p-8 max-h-[90vh] overflow-y-auto shadow-2xl z-20 flex flex-col rounded-2xl"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2.5 rounded-xl text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer text-sm"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Product Image Frame */}
                <div className="overflow-hidden bg-zinc-50 dark:bg-black/40 border border-zinc-200 dark:border-white/10 rounded-xl">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Detailed Specifications */}
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-medium text-blue-500 dark:text-blue-400 uppercase tracking-widest block mb-1">
                      {selectedProduct.type_label}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl italic text-zinc-900 dark:text-white mb-3">
                      {selectedProduct.name}
                    </h2>
                    
                    <div className="flex items-center space-x-3 my-4">
                      <span className="text-xl sm:text-2xl font-serif italic text-zinc-900 dark:text-white">
                        {formatPrice(selectedProduct.price)}
                      </span>
                      <span className="text-[10px] font-mono text-blue-500 dark:text-blue-400 bg-blue-500/10 border border-blue-500/30 px-3 py-1 uppercase font-semibold rounded-sm">
                        Garantie 6 Mois
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed mb-6">
                      {selectedProduct.description}
                    </p>

                    {/* Specifications List */}
                    <div className="grid grid-cols-2 gap-4 mb-6 text-xs sm:text-sm font-sans border-t border-b border-zinc-200 dark:border-white/10 py-4">
                      <div>
                        <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest">Monture</span>
                        <span className="font-semibold text-zinc-800 dark:text-zinc-300 mt-1 block">{selectedProduct.frame_material}</span>
                      </div>
                      <div>
                        <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest">Forme</span>
                        <span className="font-semibold text-zinc-800 dark:text-zinc-300 mt-1 block">{selectedProduct.frame_shape}</span>
                      </div>
                      <div>
                        <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest">Audience</span>
                        <span className="font-semibold text-zinc-800 dark:text-zinc-300 mt-1 block capitalize">{selectedProduct.gender}</span>
                      </div>
                      <div>
                        <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest">Verres protecteurs</span>
                        <span className="font-semibold text-[#00bcff] mt-1 block">Anti-reflet premium</span>
                      </div>
                    </div>

                    {/* Features checklist */}
                    <div className="space-y-2.5 mb-8">
                      <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Avantages Techniques</span>
                      {selectedProduct.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-zinc-600 dark:text-zinc-303 leading-relaxed">
                          <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order Call to Action block */}
                  <div className="pt-5 border-t border-zinc-200 dark:border-white/10 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => {
                        onTryOn(selectedProduct);
                        setSelectedProduct(null);
                      }}
                      className="flex-1 flex items-center justify-center space-x-2 border border-blue-500 hover:bg-blue-500/10 text-blue-500 font-sans text-xs font-bold uppercase tracking-[0.2em] p-4 transition-all cursor-pointer"
                    >
                      <Camera className="w-4 h-4" />
                      <span>Essai Virtuel 🤳</span>
                    </button>
                    <button
                      onClick={() => {
                        onOrder(selectedProduct);
                        setSelectedProduct(null);
                      }}
                      className="flex-1 flex items-center justify-center space-x-2 bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-sans text-xs font-bold uppercase tracking-[0.2em] p-4 transition-all cursor-pointer"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Commander</span>
                    </button>
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="sm:px-5 py-4 border border-zinc-200 dark:border-white/10 text-zinc-650 dark:text-zinc-400 text-xs font-bold uppercase tracking-[0.15em] hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-white bg-zinc-100 dark:bg-[#101010] transition-colors cursor-pointer"
                    >
                      Retour
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
