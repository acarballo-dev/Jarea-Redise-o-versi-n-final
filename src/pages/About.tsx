import React from 'react';
import { Icon } from '../components/Icon';
import { Page, Service, Project } from '../types';

interface AboutProps {
  onPageChange: (page: Page, data?: Service | Project) => void;
}

export const About = ({ onPageChange }: AboutProps) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full filter blur-[100px] translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h4 className="text-teal-400 font-bold tracking-widest uppercase mb-4">Quiénes Somos</h4>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Tu socio de confianza en Gran Canaria
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              No vendemos productos ni servicios. Resolvemos los problemas de tu empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">No vendemos productos. Resolvemos problemas.</h2>
              <p>
                En Jarea Soluciones sabemos que cada empresa es diferente, y que un proveedor que simplemente sirve pedidos no es suficiente. Por eso trabajamos de otra manera: cuando nos contratas, pasamos a formar parte de tu equipo.
              </p>
              <p>
                Somos ágiles, comprometidos y apasionados por cada proyecto. Da igual si se trata de equipar una oficina, renovar tu imagen corporativa o gestionar una instalación compleja: lo abordamos con la misma exigencia y cuidado. Sin burocracia innecesaria. Sin letra pequeña.
              </p>
              <p className="font-bold text-slate-900">
                Somos el socio que tu empresa estaba buscando.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/jarea-team/800/600" 
                  alt="Equipo Jarea Soluciones" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-500 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Lo que nos hace diferentes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Un único interlocutor',
                description: 'Gestionamos todo el proyecto, de principio a fin. No tienes que coordinar a varios proveedores, nosotros nos encargamos de todo.',
                icon: 'Users'
              },
              {
                title: 'Adaptados a tu presupuesto',
                description: 'Ofrecemos soluciones para empresas de cualquier tamaño, optimizando cada inversión para que sea rentable.',
                icon: 'Target'
              },
              {
                title: 'Experiencia local',
                description: 'Conocemos profundamente el tejido empresarial de Gran Canaria, sus particularidades y sus necesidades.',
                icon: 'MapPin'
              },
              {
                title: 'Ágiles y comprometidos',
                description: 'Respondemos rápido y cumplimos lo que prometemos. Sin burocracia innecesaria que ralentice tu negocio.',
                icon: 'Zap'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-shadow bg-white">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6">
                  <Icon name={item.icon} className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Nuestros valores</h2>
            <p className="text-gray-400">Tres principios guían cada decisión que tomamos en Jarea Soluciones:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Compromiso', description: 'Cada proyecto recibe nuestra máxima atención, sin importar su tamaño.', icon: 'Heart' },
              { title: 'Agilidad', description: 'Respondemos rápido y nos adaptamos a los cambios sin perder el rumbo.', icon: 'Zap' },
              { title: 'Resultados', description: 'No cerramos un proyecto hasta que el cliente está completamente satisfecho.', icon: 'Target' }
            ].map((value, idx) => (
              <div key={idx} className="text-center space-y-4">
                <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-teal-500/20">
                  <Icon name={value.icon} className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-teal-50 rounded-3xl p-12 md:p-16 flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Lo que nos hace diferentes</h2>
              <ul className="space-y-4">
                {[
                  'Somos ágiles: tomamos decisiones rápido y nos adaptamos sin burocracia.',
                  'Somos cercanos: conoces a la persona que lleva tu proyecto, no a un call center.',
                  'Somos integrales: cubrimos todas las necesidades de equipamiento y tecnología de tu empresa bajo un mismo techo.',
                  'Somos locales: conocemos el mercado de Gran Canaria, sus particularidades y sus oportunidades.',
                  'Somos honestos: si algo no encaja con lo que necesitas, te lo decimos aunque eso signifique perder una venta.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-gray-700">
                    <Icon name="Check" className="w-5 h-5 text-teal-600 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Nuestro equipo</h3>
              <p className="text-gray-600 leading-relaxed">
                Detrás de Jarea Soluciones hay personas con años de experiencia en el sector, apasionadas por lo que hacen y comprometidas con un único objetivo: que tu empresa funcione mejor después de trabajar con nosotros.
              </p>
              <p className="text-gray-600 leading-relaxed">
                No somos un departamento de ventas. Somos técnicos, gestores de proyectos y asesores que entienden tanto la tecnología como el impacto que tiene en el día a día de un negocio. Esa combinación es lo que nos permite ofrecer soluciones que realmente funcionan en la práctica.
              </p>
              <p className="font-bold text-slate-900 italic">
                Cuando trabajas con nosotros, no eres un cliente más. Eres parte de nuestra historia de éxito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">¿Hablamos?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Si estás buscando un socio de confianza para equipar, mejorar o digitalizar tu empresa en Gran Canaria, nos encanta conocer proyectos nuevos. Cuéntanos qué necesitas y te damos una respuesta en menos de 24 horas, sin compromiso y sin letra pequeña.
          </p>
          <button 
            onClick={() => onPageChange('contacto')}
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-10 rounded-full transition-all tracking-widest uppercase shadow-lg shadow-teal-500/20"
          >
            Contactar ahora
          </button>
        </div>
      </section>
    </div>
  );
};
