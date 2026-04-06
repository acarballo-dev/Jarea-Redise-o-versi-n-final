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
    tagline: 'Porque la primera impresión no se improvisa.',
    description: 'Tu imagen corporativa es el primer mensaje que envías al mundo. Diseñamos y producimos todos los elementos que construyen una identidad de marca sólida y coherente.',
    fullDescription: 'Tu imagen corporativa es el primer mensaje que envías al mundo. Diseñamos y producimos todos los elementos que construyen una identidad de marca sólida y coherente: papelaría profesional, cartelería, señalética, etiquetas, packaging, regalos de empresa y mucho más. Desde una tarjeta de visita hasta la rotulación completa de tus instalaciones, todo con el mismo nivel de detalle y calidad.\n\nHaz que tu marca hable antes de que tú lo hagas.',
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
    tagline: 'La tecnología que tu equipo necesita para rendir al máximo.',
    description: 'Ordenadores, portátiles, servidores, periféricos, impresoras, escáneres, redes… Seleccionamos y suministramos el equipamiento informático ideal para cada puesto de trabajo.',
    fullDescription: 'Ordenadores, portátiles, servidores, periféricos, impresoras, escáneres, redes… Seleccionamos y suministramos el equipamiento informático ideal para cada puesto de trabajo, adaptado al tamaño y presupuesto de tu empresa. Trabajamos con las marcas líderes del mercado y te asesoramos sin compromiso para que cada inversión sea rentable desde el primer día.\n\nTecnología de verdad. Asesoramiento de confianza.',
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
    tagline: 'Transforma tus espacios en entornos donde la comunicación fluye.',
    description: 'Las reuniones más productivas, las presentaciones más impactantes y la colaboración más eficiente empiezan por tener el equipamiento audiovisual adecuado.',
    fullDescription: 'Las reuniones más productivas, las presentaciones más impactantes y la colaboración más eficiente empiezan por tener el equipamiento audiovisual adecuado. Proyectores, pantallas interactivas, sistemas de videoconferencia, cartelería digital, audio profesional… Tanto si equipas una sala de reuniones como un gran auditorio, diseñamos la solución que mejor se adapta a tu espacio y tus necesidades.\n\nPorque comunicar bien es una ventaja competitiva.',
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
    tagline: 'Lo que necesitas, cuando lo necesitas, sin sorpresas.',
    description: 'Tóners, cartuchos, papel, material de oficina… Gestionamos el suministro de consumibles para que nunca tengas que parar por falta de stock.',
    fullDescription: 'Tóners, cartuchos, papel, material de oficina… Gestionamos el suministro de consumibles para que nunca tengas que parar por falta de stock. Precios competitivos, marcas de calidad y servicio ágil para empresas de cualquier tamaño.\n\nDeja de preocuparte por los pequeños detalles. Nosotros los gestionamos.',
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
    tagline: 'El espacio donde trabajas influye más de lo que crees.',
    description: 'Diseñamos y equipamos oficinas, despachos, salas de reuniones y áreas comunes que combinan funcionalidad, ergonomía y estética.',
    fullDescription: 'Un entorno bien diseñado aumenta la productividad, mejora el bienestar del equipo y proyecta una imagen profesional ante clientes y colaboradores. Diseñamos y equipamos oficinas, despachos, salas de reuniones y áreas comunes que combinan funcionalidad, ergonomía y estética. Hemos trabajado con ayuntamientos, universidades, asesorías y empresas privadas en Canarias, y en cada proyecto el resultado habla por sí solo.\n\nTu oficina debería inspirarte a trabajar mejor.',
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
    tagline: 'Digitaliza tu empresa sin complicaciones.',
    description: 'Te ayudamos a seleccionar e implementar las herramientas de software que realmente necesitas: gestión empresarial, facturación, control de inventario, CRM y más.',
    fullDescription: 'La transformación digital no tiene por qué ser un proceso costoso ni traumático. Te ayudamos a seleccionar e implementar las herramientas de software que realmente necesitas: gestión empresarial, facturación, control de inventario, CRM y más. Te acompañamos en cada paso, desde la elección de la solución hasta la formación de tu equipo.\n\nMenos papel, más eficiencia. Empieza hoy.',
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
