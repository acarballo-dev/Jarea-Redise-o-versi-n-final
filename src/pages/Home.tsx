import { motion } from 'motion/react';
import { SERVICES, PROJECTS, COLLABORATORS } from '../constants';
import { ServiceCard } from '../components/ServiceCard';
import { ProjectCard } from '../components/ProjectCard';
import { Icon } from '../components/Icon';
import { Page, Service, Project } from '../types';

interface HomeProps {
  onPageChange: (page: Page, data?: Service | Project) => void;
}

export const Home = ({ onPageChange }: HomeProps) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-slate-950 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Equipamos tu empresa <br />
            <span className="text-teal-400">con lo mejor del mercado</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          >
            Soluciones integrales para tu negocio en Gran Canaria.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-bold text-teal-400 mb-2">200+</span>
              <span className="text-gray-500 text-sm uppercase tracking-widest">proyectos entregados</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-bold text-teal-400 mb-2">15+</span>
              <span className="text-gray-500 text-sm uppercase tracking-widest">años de experiencia</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-bold text-teal-400 mb-2">6</span>
              <span className="text-gray-500 text-sm uppercase tracking-widest">áreas de especialización</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 -mt-32 relative z-20">
            {SERVICES.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onClick={() => onPageChange('service-detail', service)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img 
                src="/images/InventiaPlus.jpg" 
                alt="Office" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <span className="text-teal-500 font-bold text-sm tracking-widest uppercase">Nosotros</span>
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight">SOBRE JAREA SOLUCIONES</h2>
              <p className="text-gray-600 leading-relaxed">
                 Jarea Soluciones es una empresa joven, pero con una dilatada experiencia en gestión de proyectos, instalaciones, equipamiento y suministro para empresas. Nuestro objetivo es convertirnos en su colaborador de confianza y juntos aportar a su compañía las mejores soluciones y productos. Nuestro trabajo no es vender productos o servicios. Cuando trabajas con nosotros, nos convertimos en parte de tu equipo. 
              </p>
              <p className="text-gray-600 leading-relaxed">
                Para nosotros, cada pedido es un proceso en marcha para ayudar a hacer crecer su negocio. Somos una empresa pequeña pero ágil, orgullosos de cada trabajo y capaces de abordar proyectos de cualquier volumen con una máxima clara que no es otra que generar las mejores soluciones.


              </p>
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md font-bold transition-all">
                SABER MÁS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16 tracking-widest uppercase">TRABAJOS RECIENTES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => onPageChange('project-detail', project)}
              />
            ))}
          </div>
          <div className="mt-16 text-center">
            <button 
              onClick={() => onPageChange('proyectos')}
              className="inline-flex items-center gap-2 text-teal-500 font-bold hover:text-teal-400 transition-colors group"
            >
              VER TODOS LOS PROYECTOS
              <Icon name="ChevronRight" className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Collaborators */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-16 tracking-widest uppercase">NUESTROS COLABORADORES</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 transition-all">
            {COLLABORATORS.map((collab) => (
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
    </div>
  );
};
