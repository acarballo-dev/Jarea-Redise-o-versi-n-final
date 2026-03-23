import React from 'react';
import { motion } from 'motion/react';
import { Icon } from './Icon';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 cursor-pointer group transition-all hover:shadow-2xl flex flex-col items-center text-center"
    >
      <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors">
        <Icon name={service.icon} className="w-8 h-8 text-teal-500 group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-slate-900 font-bold mb-3 tracking-wide">{service.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-wrap">{service.description}</p>
    </motion.div>
  );
};

export const SubServiceCard: React.FC<{ 
  title: string; 
  icon: string; 
  onClick?: () => void;
  isActive?: boolean;
}> = ({ title, icon, onClick, isActive }) => {
  return (
    <div 
      onClick={onClick}
      className={`p-6 rounded-xl shadow-md border transition-all cursor-pointer flex flex-col items-center text-center ${
        isActive 
          ? 'bg-teal-500 border-teal-500 shadow-teal-200' 
          : 'bg-white border-gray-100 hover:shadow-lg hover:border-teal-200'
      }`}
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${
        isActive ? 'bg-white/20' : 'bg-teal-50'
      }`}>
        <Icon name={icon} className={`w-6 h-6 transition-colors ${
          isActive ? 'text-white' : 'text-teal-500'
        }`} />
      </div>
      <h4 className={`font-bold text-sm tracking-wide uppercase transition-colors ${
        isActive ? 'text-white' : 'text-slate-900'
      }`}>{title}</h4>
    </div>
  );
};
