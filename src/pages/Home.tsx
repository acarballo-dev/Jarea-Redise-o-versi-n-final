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
      <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 overflow-hidden py-20">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center pb-32 md:pb-48">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Tu empresa merece <br />
            <span className="text-teal-400">un socio, no un proveedor.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          >
            Gestionamos proyectos, equipamiento e instalaciones para que tú solo tengas que preocuparte de lo que realmente importa: hacer crecer tu negocio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <button 
              onClick={() => onPageChange('contacto')}
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center mx-auto group"
            >
              Cuéntanos tu proyecto
              <Icon name="ArrowRight" className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-bold text-teal-400 mb-2">200+</span>
              <span className="text-gray-500 text-sm uppercase tracking-widest font-medium">proyectos entregados</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-bold text-teal-400 mb-2">15+</span>
              <span className="text-gray-500 text-sm uppercase tracking-widest font-medium">años de experiencia</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-bold text-teal-400 mb-2">6</span>
              <span className="text-gray-500 text-sm uppercase tracking-widest font-medium">áreas de especialización</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:-mt-32 relative z-20">
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
              <span className="text-teal-500 font-bold text-sm tracking-widest uppercase">QUIÉNES SOMOS</span>
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight">No vendemos productos. Resolvemos problemas.</h2>
              <p className="text-gray-600 leading-relaxed">
                En Jarea Soluciones sabemos que cada empresa es diferente, y que un proveedor que simplemente sirve pedidos no es suficiente. Por eso trabajamos de otra manera: cuando nos contratas, pasamos a formar parte de tu equipo.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Somos ágiles, comprometidos y apasionados por cada proyecto. Da igual si se trata de equipar una oficina, renovar tu imagen corporativa o gestionar una instalación compleja: lo abordamos con la misma exigencia y cuidado.
              </p>
              <button 
                onClick={() => onPageChange('nosotros')}
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md font-bold transition-all"
              >
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

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Lo que dicen nuestros clientes</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "Jarea Soluciones se ha convertido en nuestro socio tecnológico de confianza. Su capacidad de respuesta y profesionalidad son excepcionales.",
                author: "Director IT",
                company: "Institución Educativa"
              },
              {
                text: "Equiparon nuestra nueva oficina en tiempo récord y con un resultado impecable. Entienden perfectamente lo que necesita una empresa moderna.",
                author: "Gerente",
                company: "Despacho Profesional"
              },
              {
                text: "La mejor decisión que tomamos fue confiarles nuestra imagen corporativa y el software de gestión. Un servicio integral de primer nivel.",
                author: "Propietario",
                company: "Empresa de Servicios"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl relative">
                <Icon name="Quote" className="w-10 h-10 text-teal-500/20 absolute top-6 right-6" />
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-teal-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
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
