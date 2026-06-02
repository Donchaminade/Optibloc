/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  RotateCcw, 
  Download, 
  Sliders, 
  HelpCircle, 
  Maximize2, 
  Check, 
  RefreshCw,
  Sparkles,
  Smile,
  X,
  Smartphone,
  Eye,
  FlipHorizontal
} from 'lucide-react';
import { products } from '../data';
import { Product } from '../types';

interface VirtualTryOnProps {
  initialProduct?: Product | null;
  onClose: () => void;
}

// Handcrafted SVG vector graphics for our fine glasses frames.
// This guarantees crisp resolution of lines & reflections overlaying any lighting conditions.
const GlassFrameSVG = ({ id, colorTheme = 'dark' }: { id: string; colorTheme: string }) => {
  switch (id) {
    case 'optibloc-aura': // Cat-Eye / Papillon Doré Chic
      return (
        <svg viewBox="0 0 500 160" width="100%" height="100%" className="drop-shadow-lg opacity-90 transition-all duration-350" xmlns="http://www.w3.org/2000/svg">
          {/* Left Lens Glass reflection */}
          <path d="M 45 45 C 90 25, 205 30, 220 85 C 220 130, 100 150, 45 110 C 25 90, 25 60, 45 45 Z" fill="rgba(0, 188, 255, 0.08)" stroke="rgba(212, 175, 55, 0.95)" strokeWidth="4" />
          <path d="M 55 55 Q 120 40 180 60" fill="none" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="2" strokeLinecap="round" />
          {/* Right Lens Glass reflection */}
          <path d="M 455 45 C 410 25, 295 30, 280 85 C 280 130, 400 150, 455 110 C 475 90, 475 60, 455 45 Z" fill="rgba(0, 188, 255, 0.08)" stroke="rgba(212, 175, 55, 0.95)" strokeWidth="4" />
          <path d="M 445 55 Q 380 40 320 60" fill="none" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="2" strokeLinecap="round" />
          {/* Bridge */}
          <path d="M 220 70 Q 250 55 280 70" fill="none" stroke="rgba(212, 175, 55, 0.95)" strokeWidth="5.5" strokeLinecap="round" />
          {/* Outer cat ears accents */}
          <path d="M 45 45 L 25 35 L 50 60" fill="none" stroke="rgba(212, 175, 55, 0.95)" strokeWidth="4" strokeLinecap="round" />
          <path d="M 455 45 L 475 35 L 450 60" fill="none" stroke="rgba(212, 175, 55, 0.95)" strokeWidth="4" strokeLinecap="round" />
          {/* Temples bits */}
          <path d="M 25 35 Q 10 35 2 45" fill="none" stroke="rgba(212, 175, 55, 0.7)" strokeWidth="3" />
          <path d="M 475 35 Q 490 35 498 45" fill="none" stroke="rgba(212, 175, 55, 0.7)" strokeWidth="3" />
          {/* Subtle Anti-reflection shine */}
          <path d="M 120 120 L 140 100" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" strokeLinecap="round" />
          <path d="M 125 125 L 145 105" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" strokeLinecap="round" />
          <path d="M 360 120 L 380 100" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'optibloc-chronos': // Ronde Minimaliste Argenté Teinte Photochromique
      return (
        <svg viewBox="0 0 500 160" width="100%" height="100%" className="drop-shadow-lg opacity-85 transition-all duration-350" xmlns="http://www.w3.org/2000/svg">
          {/* Left lens (darker tint simulating outdoor photochromism transition) */}
          <circle cx="130" cy="80" r="55" fill="rgba(30, 30, 30, 0.28)" stroke="rgba(192, 192, 192, 0.95)" strokeWidth="4.5" />
          <path d="M 90 50 A 55 55 0 0 1 170 50" fill="none" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="2" />
          {/* Right lens */}
          <circle cx="370" cy="80" r="55" fill="rgba(30, 30, 30, 0.28)" stroke="rgba(192, 192, 192, 0.95)" strokeWidth="4.5" />
          <path d="M 330 50 A 55 55 0 0 1 410 50" fill="none" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="2" />
          {/* Bridge */}
          <path d="M 185 80 Q 250 68 315 80" fill="none" stroke="rgba(192, 192, 192, 0.95)" strokeWidth="4.5" strokeLinecap="round" />
          {/* Metal Hinges */}
          <path d="M 75 80 L 60 78" fill="none" stroke="rgba(192, 192, 192, 0.95)" strokeWidth="4" />
          <path d="M 425 80 L 440 78" fill="none" stroke="rgba(192, 192, 192, 0.95)" strokeWidth="4" />
          {/* Reflection Highlights */}
          <path d="M 105 105 L 120 90" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 345 105 L 360 90" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'optibloc-executive': // Rectangulaire Noir Classique
      return (
        <svg viewBox="0 0 500 160" width="100%" height="100%" className="drop-shadow-lg opacity-95 transition-all duration-350" xmlns="http://www.w3.org/2000/svg">
          {/* Left Lens with solid thick premium acetates */}
          <rect x="55" y="40" width="150" height="85" rx="20" fill="rgba(0, 188, 255, 0.05)" stroke="rgba(15, 15, 15, 0.98)" strokeWidth="9" />
          <path d="M 65 50 Q 130 45 195 50" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="2" />
          {/* Right Lens */}
          <rect x="295" y="40" width="150" height="85" rx="20" fill="rgba(0, 188, 255, 0.05)" stroke="rgba(15, 15, 15, 0.98)" strokeWidth="9" />
          <path d="M 305 50 Q 370 45 435 50" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="2" />
          {/* Bridge connection */}
          <path d="M 205 75 Q 250 63 295 75" fill="none" stroke="rgba(15, 15, 15, 0.98)" strokeWidth="10.5" strokeLinecap="round" />
          {/* Mini metal rivets on the temples standard for luxury glasses */}
          <circle cx="70" cy="55" r="2.5" fill="rgba(230, 230, 230, 0.9)" />
          <circle cx="78" cy="55" r="2.5" fill="rgba(230, 230, 230, 0.9)" />
          <circle cx="430" cy="55" r="2.5" fill="rgba(230, 230, 230, 0.9)" />
          <circle cx="422" cy="55" r="2.5" fill="rgba(230, 230, 230, 0.9)" />
          {/* Reflection shines */}
          <path d="M 85 105 L 115 75" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="2" strokeLinecap="round" />
          <path d="M 325 105 L 355 75" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'optibloc-horizon': // Transparent Crystalline
      return (
        <svg viewBox="0 0 500 160" width="100%" height="100%" className="drop-shadow-lg opacity-80 transition-all duration-350" xmlns="http://www.w3.org/2000/svg">
          {/* Left Lens with translucent glowing border */}
          <rect x="60" y="36" width="145" height="90" rx="25" fill="rgba(0, 188, 255, 0.07)" stroke="rgba(230, 245, 255, 0.7)" strokeWidth="8" />
          {/* Core metallic structural inner wire visible through clear transparent frame */}
          <rect x="63" y="39" width="139" height="84" rx="22" fill="none" stroke="rgba(180, 195, 210, 0.35)" strokeWidth="1.5" />
          {/* Right Lens */}
          <rect x="295" y="36" width="145" height="90" rx="25" fill="rgba(0, 188, 255, 0.07)" stroke="rgba(230, 245, 255, 0.7)" strokeWidth="8" />
          <rect x="298" y="39" width="139" height="84" rx="22" fill="none" stroke="rgba(180, 195, 210, 0.35)" strokeWidth="1.5" />
          {/* Bridge */}
          <path d="M 205 74 Q 250 63 295 74" fill="none" stroke="rgba(230, 245, 255, 0.75)" strokeWidth="9.5" strokeLinecap="round" />
          <path d="M 205 74 Q 250 63 295 74" fill="none" stroke="rgba(180, 195, 210, 0.4)" strokeWidth="2.5" strokeLinecap="round" />
          {/* Glare effect */}
          <path d="M 90 55 C 130 55, 170 85, 180 100" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="3" strokeLinecap="round" />
          <path d="M 325 55 C 365 55, 405 85, 415 100" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'optibloc-titan': // Ronde Fine Or Rose Luxe
      return (
        <svg viewBox="0 0 500 160" width="100%" height="100%" className="drop-shadow-lg opacity-90 transition-all duration-350" xmlns="http://www.w3.org/2000/svg">
          {/* Left round frame */}
          <circle cx="130" cy="80" r="55" fill="rgba(255, 180, 180, 0.08)" stroke="rgba(180, 105, 115, 0.9)" strokeWidth="3.5" />
          <circle cx="130" cy="80" r="53" fill="none" stroke="rgba(255, 140, 150, 0.4)" strokeWidth="1" />
          {/* Right round frame */}
          <circle cx="370" cy="80" r="55" fill="rgba(255, 180, 180, 0.08)" stroke="rgba(180, 105, 115, 0.9)" strokeWidth="3.5" />
          <circle cx="370" cy="80" r="53" fill="none" stroke="rgba(255, 140, 150, 0.4)" strokeWidth="1" />
          {/* Fine bridge connection */}
          <path d="M 185 80 Q 250 66 315 80" fill="none" stroke="rgba(180, 105, 115, 0.9)" strokeWidth="4" strokeLinecap="round" />
          {/* Anti-reflective blue reflection */}
          <path d="M 100 110 L 115 95" stroke="rgba(0, 188, 255, 0.35)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 105 115 L 120 100" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1" strokeLinecap="round" />
          <path d="M 340 110 L 355 95" stroke="rgba(0, 188, 255, 0.35)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'optibloc-prism': // Pantos Translucide Noir Fumé
      return (
        <svg viewBox="0 0 500 160" width="100%" height="100%" className="drop-shadow-lg opacity-85 transition-all duration-350" xmlns="http://www.w3.org/2000/svg">
          {/* Pantos Left Lens with nice keyhole bridge framing */}
          <path d="M 60 50 C 60 30, 200 30, 205 60 C 205 105, 145 130, 115 130 C 85 130, 60 105, 60 50 Z" fill="rgba(0, 188, 255, 0.05)" stroke="rgba(50, 50, 52, 0.85)" strokeWidth="7.5" />
          {/* Right Lens */}
          <path d="M 440 50 C 440 30, 300 30, 295 60 C 295 105, 355 130, 385 130 C 415 130, 440 105, 440 50 Z" fill="rgba(0, 188, 255, 0.05)" stroke="rgba(50, 50, 52, 0.85)" strokeWidth="7.5" />
          {/* Keyhole Bridge */}
          <path d="M 205 60 C 220 50, 230 45, 250 45 C 270 45, 280 50, 295 60 C 285 75, 280 80, 280 80 C 280 80, 265 72, 250 72 C 235 72, 220 80, 220 80 Z" fill="rgba(50, 50, 52, 0.85)" stroke="none" />
          {/* Highlights */}
          <path d="M 85 55 L 105 35" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="2" strokeLinecap="round" />
          <path d="M 320 55 L 340 35" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default: // Standard fallback rectangle
      return (
        <svg viewBox="0 0 500 160" width="100%" height="100%" className="drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="45" width="140" height="75" rx="15" fill="none" stroke="rgba(30, 30, 30, 0.9)" strokeWidth="6" />
          <rect x="310" y="45" width="140" height="75" rx="15" fill="none" stroke="rgba(30, 30, 30, 0.9)" strokeWidth="6" />
          <path d="M 190 75 Q 250 60 310 75" fill="none" stroke="rgba(30, 30, 30, 0.9)" strokeWidth="7" />
        </svg>
      );
  }
};

export default function VirtualTryOn({ initialProduct, onClose }: VirtualTryOnProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product>(() => {
    if (initialProduct) return initialProduct;
    // Default to the first product (Aura)
    return products[0];
  });

  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false);
  const [isMirror, setIsMirror] = useState<boolean>(true);
  const [showGuide, setShowGuide] = useState<boolean>(true);
  const [useRealPhoto, setUseRealPhoto] = useState<boolean>(true);

  // Position control sliders
  const [offsetY, setOffsetY] = useState<number>(0); // Vertical offset in %
  const [offsetX, setOffsetX] = useState<number>(0); // Horizontal offset in %
  const [scale, setScale] = useState<number>(100); // Scale multiplier in %
  const [rotation, setRotation] = useState<number>(0); // Rotation degrees
  
  // States related to snapshot capturing
  const [isCapturing, setIsCapturing] = useState<boolean>(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Stop camera helper
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsCameraActive(false);
  };

  // Start camera helper
  const startCamera = async () => {
    try {
      setHasCameraPermission(null);
      // Ensure any existing streams are cleared
      if (streamRef.current) {
        stopCamera();
      }

      const constraints = {
        video: {
          facingMode: 'user',
          width: { ideal: 850 },
          height: { ideal: 640 }
        }
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play().catch(err => console.error("Video play failed:", err));
        };
      }
      setHasCameraPermission(true);
      setIsCameraActive(true);
    } catch (error) {
      console.error('Error acquiring web camera stream:', error);
      setHasCameraPermission(false);
      setIsCameraActive(false);
    }
  };

  // Automatically start camera on mount, clean up on unmount
  useEffect(() => {
    startCamera();
    return () => {
      stopCamera();
    };
  }, []);

  const handleResetAlignment = () => {
    setOffsetX(0);
    setOffsetY(0);
    setScale(115);
    setRotation(0);
  };

  // Set default initial parameters based on frame characteristics
  useEffect(() => {
    if (selectedProduct) {
      // Dynamic scaling presets depend on shape structure for absolute rendering
      if (selectedProduct.id === 'optibloc-executive') {
        setScale(118);
      } else if (selectedProduct.id === 'optibloc-aura') {
        setScale(115);
      } else {
        setScale(112);
      }
      setOffsetY(-6); // Nice default height aligned to average eyes
      setOffsetX(0);
      setRotation(0);
    }
  }, [selectedProduct]);

  // Capture virtual try-on and blend into canvas
  const handleCaptureSnapshot = () => {
    if (!videoRef.current || !canvasRef.current) return;
    setIsCapturing(true);

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Matches sizes
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Reset transformations
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    // Draw the camera video frame
    if (isMirror) {
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      // Restore mirroring for drawing glasses over the captured mirrored frames
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
    } else {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    }

    // Now convert the glasses layout into a real vector/photo draw on the canvas
    let glassesWidth = (canvas.width * (scale / 100)) * 0.44; 
    let glassesHeight = glassesWidth * (160 / 500); // Proportional height ratio of specs

    const xPos = (canvas.width / 2) + ((offsetX / 100) * canvas.width) - (glassesWidth / 2);
    const yPos = (canvas.height / 2) + ((offsetY / 100) * canvas.height) - (glassesHeight / 2);

    ctx.save();
    // Move to center of glasses coordinate space
    ctx.translate(xPos + glassesWidth / 2, yPos + glassesHeight / 2);
    // Apply rotation
    ctx.rotate((rotation * Math.PI) / 180);

    // Helper functions for final export
    const exportResult = () => {
      try {
        const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
        setCapturedImage(dataUrl);
      } catch (err) {
        console.error("Error exporting canvas snapshot:", err);
      } finally {
        setIsCapturing(false);
      }
    };

    const drawSVG = () => {
      const rootEl = document.getElementById('tryon-glasses-overlay-renderer');
      const svgEl = rootEl ? (rootEl.tagName.toLowerCase() === 'svg' ? rootEl : rootEl.querySelector('svg')) : null;
      
      if (svgEl) {
        if (!svgEl.getAttribute('xmlns')) {
          svgEl.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        }
        
        let svgString = new XMLSerializer().serializeToString(svgEl);
        if (!svgString.includes('xmlns="http://www.w3.org/2000/svg"')) {
          svgString = svgString.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
        }

        const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
        const img = new Image();
        const url = URL.createObjectURL(svgBlob);
        
        img.onload = () => {
          try {
            ctx.drawImage(img, -glassesWidth / 2, -glassesHeight / 2, glassesWidth, glassesHeight);
            ctx.restore();
            exportResult();
          } catch (err) {
            console.error("Error drawing vector SVG into canvas: ", err);
            ctx.restore();
            exportResult();
          } finally {
            URL.revokeObjectURL(url);
          }
        };
        
        img.onerror = () => {
          console.error("Vector rendering conversion failed inside image stream builder, falling back to basic stream");
          ctx.restore();
          exportResult();
          URL.revokeObjectURL(url);
        };
        
        img.src = url;
      } else {
        ctx.restore();
        exportResult();
      }
    };

    if (useRealPhoto && selectedProduct.image) {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      img.onload = () => {
        try {
          if (img.naturalWidth && img.naturalHeight) {
            glassesHeight = glassesWidth * (img.naturalHeight / img.naturalWidth);
          }
          // Draw centered real photo glass frames
          ctx.drawImage(img, -glassesWidth / 2, -glassesHeight / 2, glassesWidth, glassesHeight);
          ctx.restore();
          exportResult();
        } catch (err) {
          console.error("Error drawing real glass photo on canvas:", err);
          // Try to fallback to SVG style just in case of canvas issues
          drawSVG();
        }
      };

      img.onerror = () => {
        console.warn("Could not load real photo for canvas draw, falling back to SVG");
        drawSVG();
      };

      img.src = selectedProduct.image;
    } else {
      drawSVG();
    }
  };

  const handleDownloadSnapshot = () => {
    if (!capturedImage) return;
    const link = document.createElement('a');
    link.download = `OptiBloc-TryOn-${selectedProduct.id}.jpg`;
    link.href = capturedImage;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/90 backdrop-blur-md p-3 sm:p-6 overflow-y-auto w-full h-full font-sans text-white">
      {/* Absolute Header close marker */}
      <div className="absolute top-4 right-4 z-[110] flex items-center space-x-3">
        <button
          onClick={onClose}
          className="p-3 bg-white/5 border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white rounded-full transition-all cursor-pointer backdrop-blur"
          title="Fermer la cabine d'essais"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="relative w-full max-w-5xl bg-zinc-900 border border-white/5 shadow-2xl rounded-2xl overflow-hidden flex flex-col my-auto max-h-[96vh] lg:max-h-[90vh]">
        {/* TOP BANNER */}
        <div className="bg-[#0c0c0e] border-b border-white/5 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500/10 border border-blue-500/25 rounded-xl text-blue-400">
              <Camera className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="font-serif text-lg italic text-white flex items-center gap-2">
                Cabine d&apos;Essai Virtuel
                <span className="not-italic text-[8px] font-mono font-bold bg-blue-500/15 border border-blue-500/30 text-[#00bcff] px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Moteur AR Live
                </span>
              </h2>
              <p className="text-[10px] text-zinc-400 font-mono tracking-wide">
                Ajustez en temps réel l&apos;ergonomie de votre équipement d&apos;immunité physique.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 flex-grow overflow-y-auto">
          
          {/* CAMERA FEED VIEWPORT AREA (COL-SPAN 7) */}
          <div className="lg:col-span-7 bg-black flex flex-col items-center justify-center p-4 relative min-h-[360px] sm:min-h-[460px]">
            <AnimatePresence mode="wait">
              {capturedImage ? (
                // SNAPSHOT STATIC PREVIEW
                <motion.div 
                  key="snapshot-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative w-full h-full max-w-md bg-zinc-900/40 rounded-xl overflow-hidden border border-white/15 flex flex-col items-center"
                >
                  <img src={capturedImage} alt="Votre capture d'essai" className="w-full h-auto object-contain max-h-[380px] sm:max-h-[420px]" />
                  
                  {/* Photo captured controls footer overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center justify-between">
                    <button
                      onClick={() => setCapturedImage(null)}
                      className="px-4 py-2 border border-white/10 rounded-lg text-xs font-bold uppercase tracking-wider text-zinc-350 hover:text-white transition-all hover:bg-white/5 cursor-pointer flex items-center space-x-1.5"
                    >
                      <RefreshCw className="w-3.5 h-3.5 animate-spin-once" />
                      <span>Reprendre</span>
                    </button>
                    
                    <button
                      onClick={handleDownloadSnapshot}
                      className="px-4.5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center space-x-1.5"
                    >
                      {saveSuccess ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Enregistré !</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5" />
                          <span>Enregistrer</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              ) : (
                // LIVE STREAM AR VIEWPORT
                <motion.div 
                  key="live-tryon-camera"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative w-full h-full max-w-md bg-zinc-950 rounded-xl overflow-hidden border border-white/5 flex items-center justify-center shadow-inner"
                >
                  {/* Standard Hidden Canvas used for photo blending transformations */}
                  <canvas ref={canvasRef} className="hidden" />

                  {isCameraActive ? (
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                      {/* Live Camera Stream Video Component */}
                      <video
                        ref={videoRef}
                        playsInline
                        muted
                        autoPlay
                        className={`w-full h-full object-cover max-h-[380px] sm:max-h-[420px] ${
                          isMirror ? 'scale-x-[-1]' : ''
                        }`}
                      />

                      {/* GLASSES OVERLAY: Positioned absolute based on user sliders input coordinates */}
                      <div 
                        className="absolute pointer-events-none transition-transform duration-75 select-none"
                        style={{
                          top: `${50 + offsetY}%`,
                          left: `${50 + offsetX}%`,
                          width: `${scale * 0.44}%`,
                          maxWidth: '290px',
                          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                          zIndex: 30,
                        }}
                      >
                        {useRealPhoto ? (
                          <img 
                            src={selectedProduct.image} 
                            alt={selectedProduct.name} 
                            className="w-full h-auto drop-shadow-xl object-contain select-none pointer-events-none"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          /* Custom visual SVG rendering anchor identifier for blending captures */
                          <div id="tryon-glasses-overlay-renderer" className="w-full h-auto">
                            <GlassFrameSVG id={selectedProduct.id} colorTheme="dark" />
                          </div>
                        )}
                      </div>

                      {/* Calibrate / Center dashed overlay helper */}
                      {showGuide && (
                        <div className="absolute inset-0 pointer-events-none border border-dashed border-blue-500/20 m-6 rounded-2xl flex items-center justify-center">
                          {/* Face contour overlay marker */}
                          <div className="w-56 h-72 border-2 border-dashed border-white/20 rounded-full flex flex-col items-center justify-center opacity-65">
                            <span className="text-[8px] font-mono text-zinc-400 bg-black/60 px-2.5 py-1 rounded-sm uppercase tracking-widest mt-16">
                              Ajustez vos yeux ici
                            </span>
                            {/* Symmetric cross guides */}
                            <div className="w-full h-[1px] bg-white/10 mt-6" />
                          </div>
                        </div>
                      )}

                      {/* Live camera mini control buttons on top-left of feed viewport */}
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1.5 rounded-lg border border-white/5 flex items-center space-x-2.5 z-40">
                        <button
                          onClick={() => setIsMirror(!isMirror)}
                          className="p-1 px-2 text-[9px] font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer flex items-center space-x-1"
                          title="Inverser le mode miroir"
                        >
                          <FlipHorizontal className="w-3 h-3" />
                          <span className="hidden sm:inline">Miroir ({isMirror ? "On" : "Off"})</span>
                        </button>
                        <span className="text-zinc-600">|</span>
                        <button
                          onClick={() => setShowGuide(!showGuide)}
                          className="p-1 px-2 text-[9px] font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer flex items-center space-x-1"
                          title="Masquer/Afficher le guide de centrage"
                        >
                          <Smile className="w-3 h-3" />
                          <span className="hidden sm:inline">{showGuide ? "Masquer Guide" : "Afficher Guide"}</span>
                        </button>
                        <span className="text-zinc-600">|</span>
                        <button
                          onClick={() => setUseRealPhoto(!useRealPhoto)}
                          className={`p-1 px-2 text-[9px] font-mono rounded cursor-pointer flex items-center space-x-1 transition-all ${
                            useRealPhoto 
                              ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20 font-bold' 
                              : 'text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent'
                          }`}
                          title="Basculer entre la photo réelle du produit ou le tracé vectoriel"
                        >
                          <Sparkles className="w-3 h-3 text-blue-400" />
                          <span>Rendu : {useRealPhoto ? "Photo 📸" : "Tracé 📐"}</span>
                        </button>
                      </div>

                      {/* Camera capture execution overlay bar */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-40">
                        <motion.button
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.95 }}
                          disabled={isCapturing}
                          onClick={handleCaptureSnapshot}
                          className="w-12 h-12 bg-white text-black border-4 border-zinc-900 rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:bg-neutral-150 transition-colors disabled:opacity-50"
                          title="Prendre une photo de mon essai"
                        >
                          {isCapturing ? (
                            <div className="w-5 h-5 border-2 border-zinc-700 border-t-black rounded-full animate-spin" />
                          ) : (
                            <Camera className="w-5 h-5" />
                          )}
                        </motion.button>
                      </div>
                    </div>
                  ) : (
                    // STREAM NOT ACTIVE OR PERMISSION BLOCKED WARNING
                    <div className="text-center p-8 max-w-sm flex flex-col items-center">
                      {hasCameraPermission === false ? (
                        <>
                          <div className="w-12 h-12 bg-rose-500/10 border border-rose-500/20 text-rose-450 flex items-center justify-center rounded-full mb-4">
                            <X className="w-6 h-6" />
                          </div>
                          <span className="font-serif text-base italic text-white mb-2">Accès Caméra Bloqué</span>
                          <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-6">
                            OptiBloc requiert l&apos;accès à votre appareil photo pour superposer les lunettes de vue. Veuillez autoriser la caméra dans les paramètres de votre navigateur ou de l&apos;Iframe.
                          </p>
                        </>
                      ) : (
                        <>
                          <div className="w-10 h-10 border-2 border-zinc-700 border-t-[#00bcff] rounded-full animate-spin mb-4" />
                          <span className="font-serif text-sm italic text-zinc-350">Initialisation de la caméra autonome...</span>
                          <p className="text-[10px] text-zinc-500 mt-2 font-mono">
                            Veuillez autoriser les permissions d&apos;accès si demandées.
                          </p>
                        </>
                      )}
                      
                      <button
                        onClick={startCamera}
                        className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                      >
                        Réessayer l&apos;activation
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CONTROL SECTION AREA / MODEL SELECTION (COL-SPAN 5) */}
          <div className="lg:col-span-5 bg-[#0e0e11] border-t lg:border-t-0 lg:border-l border-white/5 p-6 flex flex-col justify-between max-h-[500px] lg:max-h-none overflow-y-auto">
            
            {/* STEP A: OPTIBLOC MODELS LINEUP CAROUSEL LIST */}
            <div className="space-y-6">
              <div>
                <span className="block text-[8px] font-mono tracking-widest text-[#00bcff] uppercase mb-2 font-bold">
                  Étape 1 : Choisissez votre Monture
                </span>
                
                <div className="grid grid-cols-2 gap-2.5 max-h-[160px] overflow-y-auto pr-1">
                  {products.map((p) => {
                    const isSelected = p.id === selectedProduct.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => setSelectedProduct(p)}
                        className={`text-left p-2.5 border rounded-xl select-none cursor-pointer transition-all duration-250 flex flex-col justify-between h-[68px] ${
                          isSelected
                            ? 'bg-blue-600/10 border-blue-500/70 shadow-md'
                            : 'bg-zinc-950/40 border-white/5 hover:border-white/15'
                        }`}
                      >
                        <span className="block text-[10px] font-semibold text-white truncate w-full">
                          {p.name.replace('OptiBloc ', '')}
                        </span>
                        
                        <div className="flex items-center justify-between w-full mt-2">
                          <span className="text-[8px] font-mono text-zinc-455 uppercase tracking-wider block truncate max-w-[80px]">
                            {p.frame_shape.split(' ')[0]}
                          </span>
                          
                          {isSelected && (
                            <span className="flex h-3.5 w-3.5 items-center justify-center bg-blue-500 rounded-full text-[8px] font-bold text-white shrink-0">
                              ✓
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* STEP B: CALIBRATION SLIDERS */}
              <div className="border-t border-white/5 pt-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="block text-[8px] font-mono tracking-widest text-zinc-400 uppercase font-bold flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-blue-500" />
                    Étape 2 : Ajustement de l&apos;Écartement (AR Calibrate)
                  </span>
                  
                  <button
                    onClick={handleResetAlignment}
                    className="flex items-center space-x-1 text-[9px] font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    title="Réinitialiser le centrage"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>RàZ</span>
                  </button>
                </div>

                <div className="space-y-4 bg-zinc-950/30 p-3.5 rounded-xl border border-white/5">
                  {/* Slider: VERTICAL ALIGNMENT (HEIGHT) */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                      <span>Hauteur (Haut / Bas)</span>
                      <span className="text-blue-400 font-bold">{offsetY}%</span>
                    </div>
                    <input
                      type="range"
                      min={-30}
                      max={30}
                      value={offsetY}
                      onChange={(e) => setOffsetY(Number(e.target.value))}
                      className="w-full accent-blue-500 cursor-pointer h-1.5 rounded-lg bg-zinc-800"
                    />
                  </div>

                  {/* Slider: HORIZONTAL ALIGNMENT (SIDEWAYS) */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                      <span>Décalage Horizontal</span>
                      <span className="text-blue-400 font-bold">{offsetX}%</span>
                    </div>
                    <input
                      type="range"
                      min={-20}
                      max={20}
                      value={offsetX}
                      onChange={(e) => setOffsetX(Number(e.target.value))}
                      className="w-full accent-blue-500 cursor-pointer h-1.5 rounded-lg bg-zinc-800"
                    />
                  </div>

                  {/* Slider: SCALE / SIZE */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                      <span>Taille de la monture (Échelle)</span>
                      <span className="text-blue-400 font-bold">{scale}%</span>
                    </div>
                    <input
                      type="range"
                      min={70}
                      max={160}
                      value={scale}
                      onChange={(e) => setScale(Number(e.target.value))}
                      className="w-full accent-blue-500 cursor-pointer h-1.5 rounded-lg bg-zinc-800"
                    />
                  </div>

                  {/* Slider: ROTATION / ANGLE */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                      <span>Inclinaison (Angle d&apos;Assise)</span>
                      <span className="text-blue-400 font-bold">{rotation}°</span>
                    </div>
                    <input
                      type="range"
                      min={-15}
                      max={15}
                      value={rotation}
                      onChange={(e) => setRotation(Number(e.target.value))}
                      className="w-full accent-blue-500 cursor-pointer h-1.5 rounded-lg bg-zinc-800"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* DETAIL & CTA TO PURCHASE SELECTED GLASSES */}
            <div className="border-t border-white/5 pt-5 mt-6 space-y-4">
              <div className="p-3.5 bg-zinc-950/60 border border-white/5 rounded-xl">
                <span className="text-[9px] font-mono uppercase bg-blue-500/10 border border-blue-500/20 text-[#00bcff] px-2 py-0.5 font-bold rounded-sm inline-block mb-2">
                  Équipement Sélectionné
                </span>
                <h4 className="font-serif text-sm italic text-white">
                  {selectedProduct.name}
                </h4>
                <p className="text-[11px] text-zinc-400 font-sans mt-1 leading-relaxed line-clamp-2">
                  {selectedProduct.description}
                </p>
                <div className="flex items-center justify-between mt-3.5 pt-2.5 border-t border-white/5 text-xs">
                  <span className="text-zinc-500 font-mono">Tarif direct :</span>
                  <span className="font-serif italic font-bold text-lg text-[#00bcff]">
                    {new Intl.NumberFormat('fr-FR').format(selectedProduct.price)} F CFA
                  </span>
                </div>
              </div>

              <div className="flex gap-2.5">
                <button
                  onClick={() => {
                    // Triggers download of try-on first if image present, otherwise just prompts ordering
                    onClose();
                    const viewElement = document.getElementById('catalog');
                    if (viewElement) {
                      viewElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex-1 py-3.5 bg-white text-black hover:bg-neutral-150 font-sans text-[10px] uppercase font-bold tracking-widest text-center transition-colors cursor-pointer select-none"
                >
                  Commander ce Modèle
                </button>
                <button
                  onClick={onClose}
                  className="px-4.5 py-3.5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 text-[10px] uppercase font-bold tracking-widest transition-colors cursor-pointer text-center"
                >
                  Fermer
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
