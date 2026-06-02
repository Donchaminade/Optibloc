/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: 'home' | 'catalog' | 'advice' | 'diagnostic' | 'contact') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (sectionId: 'home' | 'catalog' | 'advice' | 'diagnostic' | 'contact') => {
    onNavigate(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#050505] text-zinc-500 border-t border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info Block */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => handleNavClick('home')}>
              <div className="relative flex items-center justify-center w-10 h-10 bg-white/5 border border-white/10 text-white">
                <Shield className="w-5 h-5 text-blue-450" />
              </div>
              <div>
                <span className="font-serif text-lg italic text-white">
                  Opti<span className="text-blue-400">Bloc</span>
                </span>
                <span className="block text-[7px] font-mono tracking-[0.25em] text-zinc-500 uppercase leading-none mt-1">
                  Immunité Digitale
                </span>
              </div>
            </div>
            
            <p className="text-xs text-zinc-500 max-w-sm leading-relaxed font-sans">
              Première marque de lunettes de confort visuel haut de gamme à Lomé, Togo. OptiBloc combat la fatigue oculaire liée aux écrans bleus et favorise un sommeil d&apos;exception.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              <a 
                href="https://facebook.com/Optibloc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Facebook OptiBloc"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/optibloc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Instagram OptiBloc"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links Block */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-mono font-medium tracking-widest text-[#00bcff] uppercase">
              Ressources
            </h4>
            <div className="flex flex-col space-y-3 text-xs font-sans">
              <button 
                onClick={() => handleNavClick('home')} 
                className="hover:text-white text-left transition-colors cursor-pointer text-zinc-400"
              >
                Accueil & Démo
              </button>
              <button 
                onClick={() => handleNavClick('catalog')} 
                className="hover:text-white text-left transition-colors cursor-pointer text-zinc-400"
              >
                Catalogue Lunettes
              </button>
              <button 
                onClick={() => handleNavClick('advice')} 
                className="hover:text-white text-left transition-colors cursor-pointer text-zinc-400"
              >
                Guides de Prévention
              </button>
              <button 
                onClick={() => handleNavClick('contact')} 
                className="hover:text-white text-left transition-colors cursor-pointer text-zinc-400"
              >
                Contactez-nous
              </button>
              <button 
                onClick={() => handleNavClick('diagnostic')} 
                className="text-left transition-colors cursor-pointer text-blue-400 font-bold uppercase tracking-wider text-[10px]"
              >
                Faire mon Diagnostic
              </button>
            </div>
          </div>

          {/* Business Credentials Block */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[10px] font-mono font-medium tracking-widest text-zinc-450 uppercase">
              Coordonnées de l&apos;Atelier
            </h4>
            <div className="space-y-3.5 text-xs font-sans text-zinc-400">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4.5 h-4.5 text-blue-400 shrink-0 mt-0.5" />
                <span>Atelier Principal, Lomé, Togo</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4.5 h-4.5 text-blue-400 shrink-0 mt-0.5" />
                <span>+228 97138772</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4.5 h-4.5 text-blue-400 shrink-0 mt-0.5" />
                <span className="break-all text-zinc-400">optibloc1@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4.5 h-4.5 text-blue-400 shrink-0 mt-0.5" />
                <div className="leading-tight">
                  <span className="block text-zinc-300">Lundi - Dimanche : 24h / 24</span>
                  <span className="text-[9px] text-zinc-600 tracking-wider block uppercase mt-1">Support oculaire non-stop</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Rights details */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-zinc-600 uppercase tracking-widest font-bold">
          <span>&copy; {currentYear} OptiBloc. Tous droits réservés. Lome, Togo.</span>
          <span className="hover:text-white transition-colors cursor-pointer text-[9px]">
            Immunité Digitale • Protection Haute Définition
          </span>
        </div>

      </div>
    </footer>
  );
}
