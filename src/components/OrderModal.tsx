/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { ShoppingBag, ChevronRight, MessageSquare, PhoneCall, Gift, Check } from 'lucide-react';

interface OrderModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function OrderModal({ product, onClose }: OrderModalProps) {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset internal states on product modification
  useEffect(() => {
    if (product) {
      setUserName('');
      setUserPhone('');
      setQuantity(1);
      setIsSuccess(false);
      setIsSubmitting(false);
    }
  }, [product]);

  if (!product) return null;

  const handleQuantityChange = (type: 'inc' | 'dec') => {
    if (type === 'inc') {
      setQuantity(quantity + 1);
    } else if (type === 'dec' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = product.price * quantity;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' F CFA';
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!userName.trim() || !userPhone.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Build WhatsApp message
    const whatsappNumber = '+22897138772';
    const message = `Bonjour *OptiBloc*, je souhaite commander le modèle suivant :

*DÉTAILS COMMANDE*
━━━━━━━━━━━━━━━━━━━━
• *Modèle* : ${product.name}
• *Référence* : ${product.id.toUpperCase()}
• *Catégorie* : ${product.type_label}
• *Quantité* : ${quantity}
• *Prix unitaire* : ${formatPrice(product.price)}
• *Montant total* : ${formatPrice(totalPrice)}

*COORDONNÉES CLIENT*
━━━━━━━━━━━━━━━━━━━━
• *Nom complet* : ${userName.trim()}
• *Téléphone* : ${userPhone.trim()}

En attente de votre confirmation pour la livraison. Merci !`;

    // URI Encode message
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`;

    // Show beautiful local success transition first, then trigger redirect
    setTimeout(() => {
      setIsSuccess(true);
      setIsSubmitting(false);
      
      // Delay redirection for high-fidelity confirmation screen
      setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        onClose();
      }, 1000);
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Sliding Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 26, stiffness: 220 }}
          className="relative w-full max-w-md h-full bg-[#0a0a0a] border-l border-white/10 shadow-2xl z-20 flex flex-col justify-between text-white"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 border border-white/10 bg-white/5 text-blue-400 rounded-none">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg italic text-white leading-none">
                  Votre Commande
                </h3>
                <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest mt-1.5 block">
                  Étape finale • Validation WhatsApp
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-none text-zinc-550 hover:text-white transition-colors cursor-pointer font-mono"
            >
              ✕
            </button>
          </div>

          {/* Scrollable Form Content */}
          <div className="p-6 flex-1 overflow-y-auto">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form-fields"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {/* Selected Product Summary Box */}
                  <div className="flex items-center space-x-4 p-4 rounded-none bg-black/40 border border-white/10">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-none object-cover bg-black border border-white/5"
                    />
                    <div>
                      <span className="text-[8px] font-mono font-medium text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-none tracking-widest">
                        {product.type_label}
                      </span>
                      <h4 className="font-serif text-sm text-white mt-2.5 italic">
                        {product.name}
                      </h4>
                      <span className="block font-mono text-xs text-zinc-500 mt-1 uppercase tracking-wider">
                        Unitaire : {formatPrice(product.price)}
                      </span>
                    </div>
                  </div>

                  {/* Form Submission */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Customer Name */}
                    <div>
                      <label className="block text-[9px] font-mono text-zinc-550 uppercase tracking-widest mb-1.5">
                        Votre Nom Complet *
                      </label>
                      <input
                        type="text"
                        required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Ex: Jean Koffi Lomé"
                        className="w-full font-sans text-sm p-3.5 rounded-none border border-white/10 focus:border-blue-400 bg-black/30 text-white outline-none transition-colors placeholder-zinc-700"
                      />
                    </div>

                    {/* Customer Phone */}
                    <div>
                      <label className="block text-[9px] font-mono text-zinc-550 uppercase tracking-widest mb-1.5">
                        Téléphone WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
                        placeholder="Ex: +228 90 00 00 00"
                        className="w-full font-sans text-sm p-3.5 rounded-none border border-white/10 focus:border-blue-400 bg-black/30 text-white outline-none transition-colors placeholder-zinc-700"
                      />
                    </div>

                    {/* Quantity selectors */}
                    <div>
                      <label className="block text-[9px] font-mono text-zinc-550 uppercase tracking-widest mb-2">
                        Quantité souhaitée
                      </label>
                      <div className="flex items-center justify-between p-3 border border-white/10 bg-black/50 max-w-[140px]">
                        <button
                          type="button"
                          onClick={() => handleQuantityChange('dec')}
                          className="w-8 h-8 rounded-none border border-white/10 bg-white/5 hover:bg-white/10 text-white font-mono flex items-center justify-center transition-all cursor-pointer"
                        >
                          -
                        </button>
                        <span className="font-mono font-bold text-white text-base">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleQuantityChange('inc')}
                          className="w-8 h-8 rounded-none border border-white/10 bg-white/5 hover:bg-white/10 text-white font-mono flex items-center justify-center transition-all cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Promo gift block */}
                    <div className="p-4 border border-white/10 bg-black/60 flex items-start space-x-3 text-xs text-zinc-400">
                      <Gift className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-serif italic text-white block">Inclus dans votre colis :</span>
                        <span className="block text-zinc-500 mt-1 leading-relaxed">
                          Chaque monture OptiBloc est livrée prête à l&apos;emploi avec son étui rigide renforcé haut de gamme et son chiffon microfibre antistatique.
                        </span>
                      </div>
                    </div>
                  </form>
                </motion.div>
              ) : (
                /* Success Animated Overlay */
                <motion.div
                  key="form-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center h-full"
                >
                  <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/35 text-blue-400 rounded-full flex items-center justify-center mb-6 animate-pulse">
                    <Check className="w-8 h-8 font-bold" />
                  </div>
                  <h4 className="font-serif text-xl italic text-white mb-2">
                    Envoi vers WhatsApp...
                  </h4>
                  <p className="text-xs text-zinc-500 font-sans leading-relaxed max-w-sm">
                    Votre commande pour *{product.name}* ({quantity}x) a été formatée. WhatsApp va s&apos;ouvrir pour finaliser l&apos;envoi d&apos;un clic gratuit !
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Pricing & Send Button footer section */}
          {!isSuccess && (
            <div className="p-6 border-t border-white/10 bg-[#050505]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Montant global</span>
                <span className="text-xl font-serif italic text-white font-bold">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!userName.trim() || !userPhone.trim() || isSubmitting}
                className={`w-full flex items-center justify-center space-x-2.5 p-4 rounded-none font-sans text-xs uppercase font-bold tracking-widest transition-all cursor-pointer ${
                  !userName.trim() || !userPhone.trim() || isSubmitting
                    ? 'bg-neutral-900 border border-white/5 text-zinc-650 cursor-not-allowed'
                    : 'bg-[#00bcff] hover:bg-blue-400 text-black shadow-none'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isSubmitting ? 'Préparation...' : 'Confirmer via WhatsApp'}</span>
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
