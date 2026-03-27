import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { Icon } from '../components/Icon';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.gallery && project.gallery.length > 0 
    ? [project.image, ...project.gallery] 
    : [project.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-500 hover:text-teal-500 transition-colors mb-12 group"
        >
          <Icon name="ArrowLeft" className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="font-bold text-sm tracking-widest uppercase">Volver</span>
        </button>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Project Image Carousel */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-2/3"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 aspect-video group/carousel">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImageIndex}
                  src={images[currentImageIndex]} 
                  alt={`${project.title} - ${currentImageIndex + 1}`} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800';
                  }}
                />
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-900 opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-white"
                  >
                    <Icon name="ChevronLeft" className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-900 opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-white"
                  >
                    <Icon name="ChevronRight" className="w-6 h-6" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentImageIndex ? 'bg-teal-500 w-6' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="mt-6 flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative flex-shrink-0 w-24 aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                      idx === currentImageIndex ? 'border-teal-500' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right: Project Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/3 space-y-8"
          >
            <div>
              <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-4 uppercase">
                {project.title}
              </h1>
              <div className="h-1 w-20 bg-teal-500"></div>
            </div>

            <div className="space-y-6">
              {project.description && (
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="FileText" className="w-5 h-5 text-teal-500" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Descripción</span>
                    <p className="text-slate-700 font-medium leading-relaxed">{project.description}</p>
                  </div>
                </div>
              )}

              {project.challenge && (
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" className="w-5 h-5 text-teal-500" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">El Desafío</span>
                    <p className="text-slate-700 font-medium leading-relaxed">{project.challenge}</p>
                  </div>
                </div>
              )}

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Calendar" className="w-5 h-5 text-teal-500" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Fecha de realización</span>
                  <span className="text-slate-700 font-medium">{project.date || 'No especificada'}</span>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Tag" className="w-5 h-5 text-teal-500" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Categoría</span>
                  <span className="text-slate-700 font-medium">{project.category}</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <p className="text-gray-500 leading-relaxed italic">
                "Proyecto realizado con los más altos estándares de calidad, adaptado a las necesidades específicas de nuestro cliente."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
