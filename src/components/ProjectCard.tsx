import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';

export const ProjectCard: React.FC<{ project: Project; onClick?: () => void }> = ({ project, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative group overflow-hidden rounded-xl aspect-[4/3]"
    >
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        referrerPolicy="no-referrer"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
        <h4 className="text-white font-bold text-lg leading-tight mb-4">{project.title}</h4>
        <button 
          onClick={onClick}
          className="w-fit border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-4 py-1 rounded text-xs font-bold transition-all"
        >
          VER MÁS
        </button>
      </div>
    </motion.div>
  );
};
