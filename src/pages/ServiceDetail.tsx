import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Service, Page, Project, SubService } from '../types';
import { SubServiceCard } from '../components/ServiceCard';
import { COLLABORATORS } from '../constants';

interface ServiceDetailProps {
  service: Service;
  onPageChange: (page: Page, data?: Service | Project) => void;
}

export const ServiceDetail = ({ service, onPageChange }: ServiceDetailProps) => {
  const [selectedSub, setSelectedSub] = useState<SubService | null>(null);

  // Set the first sub-service as selected by default when service changes
  useEffect(() => {
    if (service.subServices && service.subServices.length > 0) {
      setSelectedSub(service.subServices[0]);
    } else {
      setSelectedSub(null);
    }
  }, [service.id, service.subServices]);
  // Map service IDs to specific background images to match the provided screenshots
  const bgImages: Record<string, string> = {
    'imagen-corporativa': '/images/service-imagen-corporativa.jpg',
    'equipamiento-informatico': '/images/service-equipamiento-informatico.jpg',
    'audiovisuales': '/images/service-audiovisuales.jpg',
    'software-de-gestion': '/images/service-software-de-gestion.jpg',
    'espacios-de-trabajo': '/images/service-espacios-de-trabajo.jpg',
    'consumibles': '/images/service-consumibles.jpg',
  };

  const heroBg = bgImages[service.id] || '/images/service-default.jpg';

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroBg} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950/80"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center space-x-2 text-teal-400 text-sm font-medium mb-6">
            <button onClick={() => onPageChange('home')} className="hover:underline">Home</button>
            <span>/</span>
            <span className="text-white opacity-60">{service.title}</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase"
          >
            {service.title}
          </motion.h1>
        </div>
      </section>

      {/* Sub-services Grid */}
      {service.subServices && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 -mt-40 relative z-20">
              {service.subServices.map((sub, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <SubServiceCard 
                    title={sub.title} 
                    icon={sub.icon} 
                    onClick={() => setSelectedSub(selectedSub?.title === sub.title ? null : sub)}
                    isActive={selectedSub?.title === sub.title}
                  />
                </motion.div>
              ))}
            </div>

            {/* Sub-service Description */}
            <AnimatePresence mode="wait">
              {selectedSub && (
                <motion.div
                  key={selectedSub.title}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-12 overflow-hidden"
                >
                  <div className="bg-teal-50 p-8 rounded-2xl border border-teal-100 max-w-3xl mx-auto text-center">
                    <h3 className="text-teal-600 font-bold text-lg mb-4 uppercase tracking-widest">
                      {selectedSub.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                      {selectedSub.description || 'Información detallada sobre este servicio próximamente.'}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      )}

      {/* Collaborators */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-16 tracking-widest uppercase relative">
            NUESTROS COLABORADORES
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-teal-500/20"></div>
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 transition-all">
            {(service.collaborators || COLLABORATORS.slice(0, 3)).map((collab) => (
              <div key={collab.name} className="flex flex-col items-center justify-center group">
                <div className="relative h-12 md:h-16 flex items-center justify-center min-w-[120px] transition-all">
                  {/* Text Logo (Always there as fallback) */}
                  <span className="absolute inset-0 flex items-center justify-center text-lg md:text-xl font-black text-slate-200 uppercase tracking-tighter select-none text-center">
                    {collab.name}
                  </span>
                  
                  {/* Real Logo (Fades in on top) */}
                  <img 
                    src={collab.logo} 
                    alt={collab.name} 
                    className="relative z-10 h-full w-auto object-contain transition-all duration-500 opacity-0 group-hover:scale-110"
                    onLoad={(e) => {
                      (e.target as HTMLImageElement).style.opacity = '1';
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      const domain = collab.logo.split('/').pop() || '';
                      const googleFavicon = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
                      if (target.src !== googleFavicon) {
                        target.src = googleFavicon;
                      } else {
                        target.style.display = 'none';
                      }
                    }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="mt-2 text-[10px] font-bold text-slate-400 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  {collab.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-teal-500 text-white text-center relative overflow-hidden">
        {/* Subtle grid pattern for CTA */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
            OPTIMIZA TU INFRAESTRUCTURA INFORMÁTICA CON JAREA.
          </h2>
          <p className="text-xl opacity-90 font-medium">Contáctanos hoy para una consulta personalizada.</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg font-semibold">
            <a href="mailto:info@jareas.es" className="hover:text-slate-900 transition-colors">info@jareas.es</a>
            <span className="hidden md:block opacity-40">|</span>
            <a href="tel:+34676584199" className="hover:text-slate-900 transition-colors">+34 676 584 199</a>
            <span className="hidden md:block opacity-40">|</span>
            <span>Gran Canaria</span>
          </div>
          <button className="bg-white text-teal-500 px-10 py-4 rounded-md font-bold hover:bg-slate-900 hover:text-white transition-all shadow-xl uppercase tracking-widest">
            SOLICITAR PRESUPUESTO
          </button>
        </div>
      </section>
    </div>
  );
};
