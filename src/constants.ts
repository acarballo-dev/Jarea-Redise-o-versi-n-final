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
    description: 'Porque la primera impresión no se improvisa.',
    fullDescription: 'Tu imagen corporativa es el primer mensaje que envías al mundo. Diseñamos y producimos todos los elementos que construyen una identidad de marca sólida y coherente: papelaría profesional, cartelería, señalética, etiquetas, packaging, regalos de empresa y mucho más.\nDesde una tarjeta de visita hasta la rotulación completa de tus instalaciones, todo con el mismo nivel de detalle y calidad.\nHaz que tu marca hable antes de que tú lo hagas.',
    icon: 'PenTool',
    subServices: [
      { title: 'PAPELERÍA CORPORATIVA', description: 'Cartas, carpetas, tarjetas de visita, sobres y bolsas, formularios, folletos y publicaciones, …', icon: 'FileText' },
      { title: 'ETIQUETAS', description: 'Etiquetas para todo tipo de productos: Industria química, alimentación, logística, cosmética, farmacéutica, …', icon: 'Tag' },
      { title: 'PAQUETERÍA', description: 'Embalajes especiales para comercio electrónico.\nFácil montaje, alta resistencia y con sistema de cierre y apertura fácil.', icon: 'Package' },
      { title: 'REGALO DE EMPRESA', description: 'Todo tipo de producto para proyectos promocionales, de publicidad y comunicación, con las propuestas y tendencias más novedosas, con todo tipo de marcaje, …', icon: 'Gift' },
      { title: 'CARTELERÍA Y SEÑALÉTICA', description: 'Cartelería, banners, roll-up, directorios y señalética de empresa, …', icon: 'UserSquare' },
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
    description: 'La tecnología que tu equipo necesita para rendir al máximo.',
    fullDescription: 'Ordenadores, portátiles, servidores, periféricos, impresoras, escáneres, redes… Seleccionamos y suministramos el equipamiento informático ideal para cada puesto de trabajo, adaptado al tamaño y presupuesto de tu empresa.\nTrabajamos con las marcas líderes del mercado y te asesoramos sin compromiso para que cada inversión sea rentable desde el primer día.\nTecnología de verdad. Asesoramiento de confianza.',
    icon: 'Monitor',
    subServices: [
      { title: 'ORDENADORES', description: 'Equipamiento informático para tu empresa, sobremesa, portátiles, tablets, servidores, …', icon: 'Pc' },
      { title: 'PERIFÉRICOS', description: 'Monitores, discos duros y servidores NAS, accesorios, …', icon: 'MousePointer2' },
      { title: 'IMPRESIÓN Y ESCANEADO', description: 'Impresoras y equipos multifunción, escáneres, …', icon: 'Printer' },
      { title: 'REDES', description: 'Electrónica de red y cableado.', icon: 'Wifi' },
      { title: 'MAQUINARIA DE OFICINA', description: 'Destructoras, ensobradoras, plegadoras, …', icon: 'Cpu' },
    ],
    collaborators: [
      { name: 'Dell', logo: '/images/collab-dell.png' },
      { name: 'Epson', logo: '/images/collab-epson.png' },
    ]
  },
  {
    id: 'audiovisuales',
    title: 'AUDIOVISUALES',
    description: 'Transforma tus espacios en entornos donde la comunicación fluye.',
    fullDescription: 'Las reuniones más productivas, las presentaciones más impactantes y la colaboración más eficiente empiezan por tener el equipamiento audiovisual adecuado. Proyectores, pantallas interactivas, sistemas de videoconferencia, cartelería digital, audio profesional… lo instalamos, configuramos y dejamos funcionando.\nTanto si equipas una sala de reuniones como un gran auditorio, diseñamos la solución que mejor se adapta a tu espacio y tus necesidades.\nPorque comunicar bien es una ventaja competitiva.',
    icon: 'Tv',
    subServices: [
      { title: 'PROYECCIÓN', description: 'Proporcionamos productos que le apoyarán e inspirarán a hacer su espacio de trabajo más eficiente, más funcional y más elegante.Esencialmente, somos solucionadores de problemas, respondiendo de diferentes formas y facilitándole un poco la vida empresarial. Hacemos esto, ofreciendo diferentes soluciones de productos, dentro de los que se encuentran:\n\nProyectores, pantallas, soportes, lámparas, monitores, cartelería digital, interactivos', icon: 'Projector' },
      { title: 'CARTELERÍA DIGITAL', description: 'Monitores, led, videowall, …', icon: 'Tablet' },
      { title: 'INTERACTIVOS', description: 'Monitores y pizarras interactivas.', icon: 'Hand' },
      { title: 'AUDIO - VÍDEO', description: 'Sistemas de conferencia, videoconferencia, altavoces, …', icon: 'Speaker' },
      { title: 'SOPORTES TABLET', description: 'Soportes y carcasas para tablet.', icon: 'Smartphone' },
    ],
    collaborators: [
      { name: 'Bravour', logo: '/images/collab-bravour.png' },
    ]
  },
  {
    id: 'consumibles',
    title: 'CONSUMIBLES',
    description: 'Lo que necesitas, cuando lo necesitas, sin sorpresas.',
    fullDescription: 'Tóners, cartuchos, papel, material de oficina… Gestionamos el suministro de consumibles para que nunca tengas que parar por falta de stock. Precios competitivos, marcas de calidad y servicio ágil para empresas de cualquier tamaño.\nDeja de preocuparte por los pequeños detalles. Nosotros los gestionamos.',
    icon: 'Printer',
    subServices: [
      { title: 'PAPEL A4 y A3', description: 'Consumibles y suministro de papel A4 y A4, especial para impresión láser y chorro de tinta, con las más exigentes certificaciones de calidad  ISO 9001 y medio ambientales ISO 14001, ISO 50001 y EMAS, certificados de cadena de custodia, según certificaciones folrestales FSC y PEFC.', icon: 'Paper' },
      { title: 'TINTA Y TÓNER', description: 'La gama más completa de consumibles para todo tipo de equipos, láser como tinta, y de todas las marcar: HP, Brother, Epson, Canon, Oki, Ricoh…', icon: 'Smartphone' },
      { title: 'PILAS Y BATERÍAS', description: 'Soportes y carcasas para tablet.', icon: 'Smartphone' },
      { title: 'TARJETAS DE IDENTIFICACIÓN Y ACCESO', description: 'Tarjetas de PVC blancas o personalizadas, con banda magnética, chip de contacto o proximidad, RFID NFC.  Tarjetas SAFEKEEPERCARD para almacenaje de claves y contraseñas', icon: 'Smartphone' },
    ],
    collaborators: [
      { name: 'Epson', logo: '/images/collab-epson.png' },
    ]
  },
  {
    id: 'espacios-de-trabajo',
    title: 'ESPACIOS DE TRABAJO',
    description: 'El espacio donde trabajas influye más de lo que crees.',
    fullDescription: 'Un entorno bien diseñado aumenta la productividad, mejora el bienestar del equipo y proyecta una imagen profesional ante clientes y colaboradores. Diseñamos y equipamos oficinas, despachos, salas de reuniones y áreas comunes que combinan funcionalidad, ergonomía y estética.\nHemos trabajado con ayuntamientos, universidades, asesorías y empresas privadas en Gran Canaria, y en cada proyecto el resultado habla por sí solo.\nTu oficina debería inspirarte a trabajar mejor.',
    icon: 'Armchair',
    subServices: [
      { title: 'MOBILIARIO DE OFICINA', description: 'Sillas de oficina, mesas, archivo, recepción, divisorias, espera, …', icon: 'Lightbulb' },
      { title: 'EQUIPAMIENTO ESCOLAR', description: 'Sillas, mesas, pizarras, comunicación visual, …', icon: 'Presentation' },
      { title: 'MOBILIARIO AUXILIAR Y COMPLEMENTOS', description: 'Percheros, papeleras, biombos y accesorios que completan su entorno de trabajo.', icon: 'FileText' },
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
    description: 'Digitaliza tu empresa sin complicaciones.',
    fullDescription: 'La transformación digital no tiene por qué ser un proceso costoso ni traumático. Te ayudamos a seleccionar e implementar las herramientas de software que realmente necesitas: gestión empresarial, facturación, control de inventario, CRM y más.\nTe acompañamos en cada paso, desde la elección de la solución hasta la formación de tu equipo.\nMenos papel, más eficiencia. Empieza hoy.',
    icon: 'Cloud',
    subServices: [
      { title: 'ERP', description: 'Gestión comercial, económica y financiera.', icon: 'ExternalLink' },
      { title: 'CRM', description: 'Gestión de clientes.', icon: 'Users' },
      { title: 'MRP', description: 'Gestión integral de tareas, Gestión documental, Control de calidad y Control de la Producción.', icon: 'Layers' },
      { title: 'SGA', description: 'Logística avanzada.', icon: 'Folder' },
      { title: 'BPM', description: 'Portal corporativo, del proveedor y del cliente.', icon: 'Maximize' },
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
