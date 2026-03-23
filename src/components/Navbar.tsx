import { motion, AnimatePresence } from 'motion/react';
import { Page, Service, Project } from '../types';
import { Icon } from './Icon';
import { useState } from 'react';
import { SERVICES } from '../constants';

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page, data?: Service | Project) => void;
}

export const Navbar = ({ currentPage, onPageChange }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems: { label: string; value: Page }[] = [
    { label: 'INICIO', value: 'home' },
    { label: 'PRODUCTOS', value: 'productos' },
    { label: 'PROYECTOS', value: 'proyectos' },
    { label: 'CONTACTO', value: 'contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer" onClick={() => onPageChange('home')}>
            <img 
              src="/images/jarea-logo.png" 
              alt="Jarea Soluciones" 
              className="h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = `
                  <div class="flex items-center space-x-2">
                    <div class="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                      <span class="text-white font-bold text-2xl">J</span>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-white font-bold text-xl leading-none">Jarea</span>
                      <span class="text-teal-400 text-xs tracking-widest uppercase">Soluciones</span>
                    </div>
                  </div>
                `;
              }}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.value} 
                className="relative"
                onMouseEnter={() => item.value === 'productos' && setIsDropdownOpen(true)}
                onMouseLeave={() => item.value === 'productos' && setIsDropdownOpen(false)}
              >
                <button
                  onClick={() => item.value !== 'productos' && onPageChange(item.value)}
                  className={`text-sm font-medium tracking-wider transition-colors hover:text-teal-400 flex items-center gap-1 ${
                    currentPage === item.value || (item.value === 'productos' && currentPage === 'service-detail')
                      ? 'text-teal-400 border-b-2 border-teal-400' 
                      : 'text-gray-300'
                  }`}
                >
                  {item.label}
                  {item.value === 'productos' && <Icon name="ChevronRight" className="w-4 h-4 rotate-90" />}
                </button>

                {/* Dropdown */}
                {item.value === 'productos' && (
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 w-64 bg-slate-800 border border-white/10 rounded-lg shadow-2xl py-2 mt-2 overflow-hidden"
                      >
                        {SERVICES.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => {
                              onPageChange('service-detail', service);
                              setIsDropdownOpen(false);
                            }}
                            className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:bg-teal-500 hover:text-white transition-colors"
                          >
                            {service.title}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <button className="text-gray-300 hover:text-teal-400">
              <Icon name="Search" className="w-5 h-5" />
            </button>
            <button 
              onClick={() => onPageChange('contacto')}
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md text-sm font-bold transition-all"
            >
              CONTACTO
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300">
              {isMenuOpen ? <Icon name="X" className="w-6 h-6" /> : <Icon name="Menu" className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-900 border-b border-white/10 px-4 py-6 space-y-4"
        >
          {navItems.map((item) => (
            <div key={item.value}>
              <button
                onClick={() => {
                  if (item.value !== 'productos') {
                    onPageChange(item.value);
                    setIsMenuOpen(false);
                  } else {
                    setIsDropdownOpen(!isDropdownOpen);
                  }
                }}
                className="flex justify-between items-center w-full text-left text-gray-300 hover:text-teal-400 font-medium"
              >
                {item.label}
                {item.value === 'productos' && <Icon name="ChevronRight" className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-90' : ''}`} />}
              </button>
              
              {item.value === 'productos' && isDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l border-white/10">
                  {SERVICES.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        onPageChange('service-detail', service);
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left text-sm text-gray-400 hover:text-teal-400 py-1"
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button 
            onClick={() => {
              onPageChange('contacto');
              setIsMenuOpen(false);
            }}
            className="w-full bg-teal-500 text-white px-6 py-3 rounded-md font-bold"
          >
            CONTACTO
          </button>
        </motion.div>
      )}
    </nav>
  );
};
