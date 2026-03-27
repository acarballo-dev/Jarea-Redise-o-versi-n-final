import React from 'react';

export const InfoGeneral = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Información General</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-gray-600">
          <p>
            En cumplimiento de lo dispuesto en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios de los siguientes datos de información general:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Titular:</strong> Jarea Soluciones</li>
            <li><strong>Dirección:</strong> Delineante, 22 - 2º Oficina S, Polígono Industrial Salinetas, 35219 Telde, Las Palmas - España</li>
            <li><strong>Email:</strong> info@jareas.es</li>
            <li><strong>Teléfono:</strong> +34 676 584 199</li>
          </ul>
          <p>
            Jarea Soluciones es una empresa dedicada a ofrecer soluciones integrales para empresas, incluyendo imagen corporativa, equipamiento informático, audiovisuales, consumibles, espacios de trabajo y software de gestión.
          </p>
        </div>
      </div>
    </div>
  );
};
