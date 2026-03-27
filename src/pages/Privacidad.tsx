import React from 'react';

export const Privacidad = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Política de Privacidad</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-gray-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Responsable del Tratamiento</h2>
            <p>
              El responsable del tratamiento de los datos personales recogidos a través de este sitio web es Jarea Soluciones, con domicilio en Delineante, 22 - 2º Oficina S, Polígono Industrial Salinetas, 35219 Telde, Las Palmas - España.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Finalidad del Tratamiento</h2>
            <p>
              Los datos personales facilitados por los usuarios a través de los formularios de contacto se utilizarán exclusivamente para gestionar sus consultas y solicitudes de información sobre nuestros servicios.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Base Jurídica</h2>
            <p>
              La base jurídica para el tratamiento de sus datos es el consentimiento del usuario al enviar el formulario de contacto.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Conservación de los Datos</h2>
            <p>
              Los datos se conservarán durante el tiempo necesario para atender su solicitud y mientras no se solicite su supresión.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Derechos del Usuario</h2>
            <p>
              El usuario tiene derecho a acceder, rectificar, suprimir sus datos, así como otros derechos reconocidos en la normativa vigente, enviando una solicitud a info@jareas.es.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
