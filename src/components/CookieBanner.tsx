import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from './Icon';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto bg-slate-900 text-white p-6 rounded-2xl shadow-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center shrink-0">
                <Icon name="Info" className="w-6 h-6 text-teal-400" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg">Aviso de Cookies</h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
                  Utilizamos cookies propias y de terceros para mejorar su experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido. Al hacer clic en "Aceptar", acepta nuestro uso de cookies.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={handleDecline}
                className="flex-1 md:flex-none px-6 py-3 text-sm font-bold text-slate-400 hover:text-white transition-colors"
              >
                RECHAZAR
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none px-8 py-3 text-sm font-bold bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-all shadow-lg shadow-teal-500/20"
              >
                ACEPTAR
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
