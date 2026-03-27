import React from 'react';

export const AvisoLegal = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Aviso Legal</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-gray-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Identificación del Titular</h2>
            <p>
              El titular del sitio web jarea.es es Jarea Soluciones, con domicilio en Delineante, 22 - 2º Oficina S, Polígono Industrial Salinetas, 35219 Telde, Las Palmas - España.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Condiciones de Uso</h2>
            <p>
              El acceso y uso de este sitio web atribuye la condición de usuario, aceptando desde dicho acceso las presentes condiciones de uso. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Propiedad Intelectual e Industrial</h2>
            <p>
              Todos los derechos de propiedad intelectual e industrial sobre el sitio web y sus contenidos (textos, imágenes, logos, etc.) pertenecen a Jarea Soluciones o a terceros que han autorizado su uso. Queda prohibida la reproducción, distribución o comunicación pública sin autorización previa.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Exclusión de Responsabilidad</h2>
            <p>
              Jarea Soluciones no se hace responsable de los daños y perjuicios que pudieran derivarse de interferencias, omisiones, interrupciones, virus informáticos o desconexiones en el funcionamiento operativo de este sistema electrónico.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
