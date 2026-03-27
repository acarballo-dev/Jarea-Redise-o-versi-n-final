import { Service, Project, Collaborator } from './types';
import { project1 } from './data/projects/project-1';
import { project2 } from './data/projects/project-2';
import { project3 } from './data/projects/project-3';
import { project4 } from './data/projects/project-4';
import { project5 } from './data/projects/project-5';
import { project6 } from './data/projects/project-6';
import { project7 } from './data/projects/project-7';

export const SERVICES: Service[] = [
  {
    id: 'imagen-corporativa',
    title: 'IMAGEN CORPORATIVA',
    description: 'Tu marca es lo primero que ven tus clientes. Nos encargamos de que sea inolvidable.',
    fullDescription: 'Tu marca es lo primero que ven tus clientes. Nos encargamos de que sea inolvidable. Desde el diseño del logotipo hasta la rotulación de tus vehículos, fachadas o uniformes. Creamos una identidad coherente que transmite profesionalidad y confianza.',
    icon: 'PenTool',
    subServices: [
      { title: 'PAPELERÍA CORPORATIVA', description: 'Diseñamos y producimos toda la papelería que tu empresa necesita: desde tarjetas de visita hasta folletos y publicaciones corporativas.', icon: 'FileText' },
      { title: 'ETIQUETAS', description: 'Soluciones de etiquetado para todo tipo de industrias: química, alimentación, logística y más.', icon: 'Tag' },
      { title: 'PAQUETERÍA', description: 'Embalajes especializados para e-commerce, diseñados para un montaje fácil y alta resistencia.', icon: 'Package' },
      { title: 'REGALO DE EMPRESA', description: 'Propuestas novedosas en artículos promocionales con marcaje personalizado para tu marca.', icon: 'Gift' },
      { title: 'CARTELERÍA Y SEÑALÉTICA', description: 'Sistemas de señalización, banners y roll-ups para una comunicación visual efectiva.', icon: 'UserSquare' },
    ],
    collaborators: [
      { name: 'Tomplalprint', logo: '/images/collab-tomplalprint.png' },
      { name: 'Ovelar', logo: '/images/collab-ovelar.png' },
      { name: 'Tomplapac', logo: '/images/collab-tomplapac.png' },
      { name: 'Tomplaprint Regalos', logo: '/images/collab-tomplaprint-regalos.png' },
    ]
  },
  {
    id: 'equipamiento-informatico',
    title: 'EQUIPAMIENTO INFORMÁTICO',
    description: 'No vendemos cajas, vendemos herramientas de trabajo.',
    fullDescription: 'No vendemos cajas, vendemos herramientas de trabajo. Configuramos el hardware que tu empresa necesita para ser eficiente: ordenadores, servidores, redes y periféricos. Con marcas líderes y un soporte técnico que no te deja tirado.',
    icon: 'Monitor',
    subServices: [
      { title: 'ORDENADORES', description: 'Equipamiento informático de alto rendimiento para tu empresa: sobremesa, portátiles, tablets y servidores.', icon: 'Pc' },
      { title: 'PERIFÉRICOS', description: 'Monitores, discos duros, servidores NAS y accesorios esenciales para tu flujo de trabajo.', icon: 'MousePointer2' },
      { title: 'IMPRESIÓN Y ESCANEADO', description: 'Impresoras, equipos multifunción y escáneres profesionales para una gestión documental eficiente.', icon: 'Printer' },
      { title: 'REDES', description: 'Electrónica de red avanzada y cableado estructurado para una conectividad sin interrupciones.', icon: 'Wifi' },
      { title: 'MAQUINARIA DE OFICINA', description: 'Destructoras, ensobradoras y plegadoras para automatizar tus tareas administrativas.', icon: 'Cpu' },
    ],
    collaborators: [
      { name: 'Dell', logo: '/images/collab-dell.png' },
      { name: 'Epson', logo: '/images/collab-epson.png' },
    ]
  },
  {
    id: 'audiovisuales',
    title: 'AUDIOVISUALES',
    description: 'Transformamos tus salas en espacios de comunicación avanzada.',
    fullDescription: 'Transformamos tus salas en espacios de comunicación avanzada. Instalamos pantallas profesionales, sistemas de videoconferencia, sonido y cartelería digital. Soluciones intuitivas para que la tecnología sea una ayuda, no un obstáculo.',
    icon: 'Tv',
    subServices: [
      { title: 'PROYECCIÓN', description: 'Proyectores, pantallas y soportes que inspiran y hacen tu espacio de trabajo más elegante y funcional.', icon: 'Projector' },
      { title: 'CARTELERÍA DIGITAL', description: 'Monitores, pantallas LED y videowalls para una comunicación dinámica e impactante.', icon: 'Tablet' },
      { title: 'INTERACTIVOS', description: 'Monitores y pizarras interactivas que fomentan la colaboración y el aprendizaje dinámico.', icon: 'Hand' },
      { title: 'AUDIO - VÍDEO', description: 'Sistemas de conferencia, videoconferencia y sonido profesional para salas de reuniones avanzadas.', icon: 'Speaker' },
      { title: 'SOPORTES TABLET', description: 'Soportes y carcasas de diseño para la integración de tablets en espacios públicos y privados.', icon: 'Smartphone' },
    ],
    collaborators: [
      { name: 'Bravour', logo: '/images/collab-bravour.png' },
    ]
  },
  {
    id: 'consumibles',
    title: 'CONSUMIBLES',
    description: 'Que nada detenga tu actividad diaria.',
    fullDescription: 'Que nada detenga tu actividad diaria. Suministramos todo lo que tu oficina necesita: desde tóner y papel hasta material de papelería técnica. Con entrega rápida en toda Gran Canaria para que nunca te falte de nada.',
    icon: 'Printer',
    subServices: [
      { title: 'PAPEL A4 y A3', description: 'Suministro de papel de alta calidad con certificaciones medioambientales exigentes para todo tipo de impresión.', icon: 'Paper' },
      { title: 'TINTA Y TÓNER', description: 'Gama completa de consumibles originales y compatibles para todas las marcas líderes del mercado.', icon: 'Smartphone' },
      { title: 'PILAS Y BATERÍAS', description: 'Soluciones de energía portátiles para mantener tus dispositivos siempre operativos.', icon: 'Smartphone' },
      { title: 'TARJETAS DE IDENTIFICACIÓN Y ACCESO', description: 'Tarjetas de PVC personalizadas, con banda magnética, chip o tecnología RFID/NFC.', icon: 'Smartphone' },
    ],
    collaborators: [
      { name: 'Epson', logo: '/images/collab-epson.png' },
    ]
  },
  {
    id: 'espacios-de-trabajo',
    title: 'ESPACIOS DE TRABAJO',
    description: 'Diseñamos oficinas donde la gente quiere trabajar.',
    fullDescription: 'Diseñamos oficinas donde la gente quiere trabajar. Mobiliario ergonómico, mamparas, suelos técnicos e iluminación. Creamos entornos productivos, cómodos y alineados con la imagen de tu compañía.',
    icon: 'Armchair',
    subServices: [
      { title: 'MOBILIARIO DE OFICINA', description: 'Sillas ergonómicas, mesas de trabajo y sistemas de archivo que combinan diseño y funcionalidad.', icon: 'Lightbulb' },
      { title: 'EQUIPAMIENTO ESCOLAR', description: 'Mobiliario especializado para centros educativos: sillas, mesas y pizarras de alta durabilidad.', icon: 'Presentation' },
      { title: 'MOBILIARIO AUXILIAR Y COMPLEMENTOS', description: 'Percheros, papeleras y biombos que completan y organizan tu entorno de trabajo.', icon: 'FileText' },
    ],
    collaborators: [
      { name: 'Planning Sisplamo', logo: '/images/collab-planning-sisplamo.png' },
      { name: 'Made Design', logo: '/images/collab-made-design.png' },
      { name: 'Actiu', logo: '/images/collab-actiu.png' },
      { name: 'Dile', logo: '/images/collab-dile.png' },
      { name: 'Nautilus', logo: '/images/collab-nautilus.png' },
    ]
  },
  {
    id: 'software-de-gestion',
    title: 'SOFTWARE DE GESTIÓN',
    description: 'Digitaliza tu negocio para tener el control total.',
    fullDescription: 'Digitaliza tu negocio para tener el control total. Implementamos soluciones ERP y software específico que simplifica tus procesos, ahorra tiempo y te ayuda a tomar mejores decisiones basadas en datos reales.',
    icon: 'Cloud',
    subServices: [
      { title: 'ERP', description: 'Gestión comercial, económica y financiera integrada para un control total de tu negocio.', icon: 'ExternalLink' },
      { title: 'CRM', description: 'Herramientas avanzadas para la gestión de relaciones con clientes y optimización de ventas.', icon: 'Users' },
      { title: 'MRP', description: 'Gestión integral de tareas, producción y control de calidad para procesos industriales.', icon: 'Layers' },
      { title: 'SGA', description: 'Soluciones de logística avanzada para la gestión eficiente de almacenes.', icon: 'Folder' },
      { title: 'BPM', description: 'Portales corporativos y flujos de trabajo que conectan a tu empresa con proveedores y clientes.', icon: 'Maximize' },
    ],
    collaborators: [
      { name: 'Freeware', logo: '/images/collab-freeware.png' },
      { name: 'Palmart', logo: '/images/collab-palmart.png' },
    ]
  },
];

export const PROJECTS: Project[] = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
];

export const COLLABORATORS: Collaborator[] = [
  { name: 'Tomplalprint', logo: '/images/collab-tomplalprint.png' },
  { name: 'Ovelar', logo: '/images/collab-ovelar.png' },
  { name: 'Tomplapac', logo: '/images/collab-tomplapac.png' },
  { name: 'Tomplaprint Regalos', logo: '/images/collab-tomplaprint-regalos.png' },
  { name: 'Dell', logo: '/images/collab-dell.png' },
  { name: 'Epson', logo: '/images/collab-epson.png' },
  { name: 'Bravour', logo: '/images/collab-bravour.png' },
  { name: 'Planning Sisplamo', logo: '/images/collab-planning-sisplamo.png' },
  { name: 'Made Design', logo: '/images/collab-made-design.png' },
  { name: 'Actiu', logo: '/images/collab-actiu.png' },
  { name: 'Dile', logo: '/images/collab-dile.png' },
  { name: 'Nautilus', logo: '/images/collab-nautilus.png' },
  { name: 'Freeware', logo: '/images/collab-freeware.png' },
  { name: 'Palmart', logo: '/images/collab-palmart.png' },
];
