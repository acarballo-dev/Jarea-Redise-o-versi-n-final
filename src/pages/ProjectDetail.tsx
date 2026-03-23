import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { Icon } from '../components/Icon';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
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
          {/* Left: Project Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-2/3"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-100 aspect-video">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800';
                }}
              />
            </div>
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
