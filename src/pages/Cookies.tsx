import React from 'react';

export const Cookies = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Política de Cookies</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-gray-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. ¿Qué son las Cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se descargan en su equipo al acceder a determinadas páginas web. Permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. ¿Qué tipos de Cookies utiliza este sitio web?</h2>
            <p>
              Este sitio web utiliza cookies técnicas para permitir el correcto funcionamiento de la página y cookies de análisis para obtener estadísticas de uso anónimas.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Gestión de Cookies</h2>
            <p>
              El usuario puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Consentimiento</h2>
            <p>
              Al navegar por este sitio web, el usuario consiente el uso de las cookies en las condiciones contenidas en esta política de cookies.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
