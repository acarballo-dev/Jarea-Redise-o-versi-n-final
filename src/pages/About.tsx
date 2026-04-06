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
            <h4 className="text-teal-400 font-bold tracking-widest uppercase mb-4">Tu socio de confianza en Canarias</h4>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              No vendemos productos ni servicios. Resolvemos los problemas de tu empresa.
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                En Jarea Soluciones llevamos años ayudando a empresas, instituciones y profesionales de Canarias a funcionar mejor. Lo hacemos de una manera distinta a la de la mayoría de proveedores: en lugar de despachar pedidos, nos convertimos en parte de tu equipo.
              </p>
              <p>
                Cuando nos contratas, no recibes un catálogo y una factura. Recibes un interlocutor que entiende tu negocio, que anticipa lo que necesitas y que se queda a tu lado mucho después de que el proyecto esté terminado.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/InventiaPlus.jpg" 
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

      {/* Our History */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Nuestra historia</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-gray-600 leading-relaxed">
            <div className="space-y-6">
              <p>
                Jarea Soluciones nació con una premisa sencilla pero exigente: ser la empresa que cualquier empresario querría tener como proveedor. Sin letra pequeña, sin tiempos de respuesta eternos, sin soluciones genéricas que no encajan con nadie.
              </p>
              <p>
                Desde nuestra base en el Polígono Industrial de Las Salinetas, en Telde, hemos trabajado con todo tipo de organizaciones: desde pequeñas asesorías y despachos profesionales hasta organismos públicos. Cada proyecto nos ha enseñado algo nuevo y nos ha hecho mejores en lo que hacemos.
              </p>
            </div>
            <div className="space-y-6">
              <p>
                Somos una empresa pequeña por elección, no por limitación. El tamaño nos permite ser ágiles, cercanos y completamente volcados en cada cliente. No tenemos grandes estructuras que ralenticen las decisiones ni protocolos que pongan barreras entre tú y la persona que resuelve tu problema.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Por qué trabajar con nosotros</h2>
            <p className="text-gray-600 text-lg">
              Hay muchas empresas que pueden venderte un ordenador, diseñarte un logotipo o instalarte una pantalla. Lo que no encontrarás fácilmente es alguien que haga todo eso con el mismo nivel de atención...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Un único punto de contacto',
                description: 'Gestionamos proyectos integrales que combinan espacios de trabajo, equipamiento informático, imagen corporativa y más. No tienes que coordinar a cinco proveedores distintos: nosotros lo hacemos por ti.',
                icon: 'Users'
              },
              {
                title: 'Asesoramiento sin compromiso',
                description: 'Antes de recomendarte cualquier solución, nos tomamos el tiempo necesario para entender qué necesitas realmente. No tenemos interés en venderte más de lo que precisas.',
                icon: 'Target'
              },
              {
                title: 'Capacidad para cualquier escala',
                description: 'Da igual si necesitas renovar un puesto de trabajo o equipar una oficina completa. Hemos trabajado desde pequeños despachos hasta organismos del Gobierno Autónomo.',
                icon: 'Maximize'
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
                  'Somos locales: conocemos el mercado de Canarias, sus particularidades y sus oportunidades.',
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
