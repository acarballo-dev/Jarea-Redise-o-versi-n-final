import React, { useState, FormEvent } from 'react';
import { Icon } from '../components/Icon';

export const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    asunto: '',
    area: 'Imagen Corporativa',
    mensaje: ''
  });

  const contactInfo = [
    {
      title: 'DIRECCIÓN:',
      content: 'Delineante, 22 - 2º Oficina S, Polígono Industrial Salinetas, 35219 Telde, Las Palmas - España',
      icon: 'MapPin'
    },
    {
      title: 'TELÉFONO:',
      content: '+34 676 584 199',
      icon: 'Phone'
    },
    {
      title: 'EMAIL:',
      content: 'info@jareas.es',
      icon: 'Mail'
    },
    {
      title: 'HORARIO DE OFICINA:',
      content: 'Lunes - Viernes: 9:00 - 18:00\nSábado: Cerrado\nDomingo: Cerrado',
      icon: 'Clock'
    }
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Reemplaza 'info@jareas.es' con tu ID de Formspree si prefieres usar uno específico
      const response = await fetch('https://formspree.io/f/info@jarea.es', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          nombre: '',
          email: '',
          empresa: '',
          telefono: '',
          asunto: '',
          area: 'Imagen Corporativa',
          mensaje: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error enviando el formulario:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column: Info Cards */}
            <div className="lg:w-1/3 space-y-6">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="bg-slate-900 p-8 rounded-xl flex items-start space-x-6">
                  <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name={info.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-teal-400 font-bold text-sm tracking-widest mb-2">{info.title}</h3>
                    <p className="text-white text-sm whitespace-pre-line leading-relaxed opacity-80">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Form */}
            <div className="lg:w-2/3 bg-white p-8 md:p-12 rounded-xl shadow-2xl border border-gray-100">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center">
                    <Icon name="Check" className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">¡Mensaje Enviado!</h2>
                  <p className="text-slate-600 max-w-md">
                    Gracias por contactar con Jarea Soluciones. Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-teal-600 font-bold hover:underline pt-4"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Nombre*</label>
                    <input 
                      type="text" 
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-teal-500" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email*</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-teal-500" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Empresa</label>
                    <input 
                      type="text" 
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-teal-500" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Teléfono</label>
                    <input 
                      type="tel" 
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-teal-500" 
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Asunto</label>
                    <input 
                      type="text" 
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-teal-500" 
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Área de Interés</label>
                    <select 
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-teal-500 bg-white"
                    >
                      <option>Imagen Corporativa</option>
                      <option>Equipamiento Informático</option>
                      <option>Audiovisuales</option>
                      <option>Consumibles</option>
                      <option>Espacios de Trabajo</option>
                      <option>Software de Gestión</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Mensaje</label>
                    <textarea 
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows={6} 
                      className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:border-teal-500"
                    ></textarea>
                  </div>
                  
                  {status === 'error' && (
                    <div className="md:col-span-2 text-red-500 text-sm font-medium">
                      Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctanos directamente por email.
                    </div>
                  )}

                  <div className="md:col-span-2">
                    <button 
                      type="submit"
                      disabled={status === 'submitting'}
                      className={`w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 rounded-md transition-all tracking-widest uppercase flex items-center justify-center ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          ENVIANDO...
                        </>
                      ) : 'ENVIAR MENSAJE'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[500px] bg-gray-100 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.582864634289!2d-15.39446862386345!3d27.97604497603115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4097b686868686b%3A0x6868686868686868!2sC.%20Delineante%2C%2022%2C%2035219%20Telde%2C%20Las%20Palmas%2C%20Spain!5e0!3m2!1sen!2ses!4v1711186868686!5m2!1sen!2ses" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Jarea Soluciones"
          className="w-full h-full"
        ></iframe>
      </section>
    </div>
  );
};
