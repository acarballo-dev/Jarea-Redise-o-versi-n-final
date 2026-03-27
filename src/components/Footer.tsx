import { Icon } from './Icon';
import { Page, Service, Project } from '../types';

interface FooterProps {
  onPageChange: (page: Page, data?: Service | Project) => void;
}

export const Footer = ({ onPageChange }: FooterProps) => {
  return (
    <footer className="bg-slate-900 text-gray-400 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand & Social */}
          <div className="space-y-6">
            <div className="flex items-center cursor-pointer" onClick={() => onPageChange('home')}>
              <img 
                src="/images/jarea-logo.png" 
                alt="Jarea Soluciones" 
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `
                    <div class="flex items-center space-x-2">
                      <div class="w-8 h-8 bg-teal-500 rounded-md flex items-center justify-center">
                        <span class="text-white font-bold text-lg">J</span>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-white font-bold text-lg leading-none">Jarea</span>
                        <span class="text-teal-400 text-[10px] tracking-widest uppercase">Soluciones</span>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-400 transition-colors"><Icon name="Facebook" className="w-5 h-5" /></a>
              <a href="#" className="hover:text-teal-400 transition-colors"><Icon name="Youtube" className="w-5 h-5" /></a>
              <a href="#" className="hover:text-teal-400 transition-colors"><Icon name="Linkedin" className="w-5 h-5" /></a>
              <a href="#" className="hover:text-teal-400 transition-colors"><Icon name="Instagram" className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">PRODUCTOS</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => onPageChange('service-detail')} className="hover:text-teal-400 transition-colors">Imagen corporativa</button></li>
              <li><button onClick={() => onPageChange('service-detail')} className="hover:text-teal-400 transition-colors">Equipamiento informático</button></li>
              <li><button onClick={() => onPageChange('service-detail')} className="hover:text-teal-400 transition-colors">Audiovisuales</button></li>
              <li><button onClick={() => onPageChange('service-detail')} className="hover:text-teal-400 transition-colors">Consumibles</button></li>
              <li><button onClick={() => onPageChange('service-detail')} className="hover:text-teal-400 transition-colors">Espacios de trabajo</button></li>
              <li><button onClick={() => onPageChange('service-detail')} className="hover:text-teal-400 transition-colors">Software de gestión</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">CONTACTO</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Icon name="MapPin" className="w-5 h-5 text-teal-500 shrink-0" />
                <span>Delineante, 22 - 2º Oficina S, Polígono Industrial Salinetas, 35219 Telde, Las Palmas - España</span>
              </li>
              <li className="flex items-center space-x-3">
                <Icon name="Phone" className="w-5 h-5 text-teal-500 shrink-0" />
                <span>+34 676 584 199</span>
              </li>
              <li className="flex items-center space-x-3">
                <Icon name="Mail" className="w-5 h-5 text-teal-500 shrink-0" />
                <span>info@jareas.es</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
          <p>© Copyright Jarea Soluciones - Mídite.</p>
          <div className="flex space-x-6">
            <button onClick={() => onPageChange('info-general')} className="hover:text-teal-400">Información General</button>
            <button onClick={() => onPageChange('aviso-legal')} className="hover:text-teal-400">Aviso Legal</button>
            <button onClick={() => onPageChange('privacidad')} className="hover:text-teal-400">Privacidad</button>
            <button onClick={() => onPageChange('cookies')} className="hover:text-teal-400">Política de Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
