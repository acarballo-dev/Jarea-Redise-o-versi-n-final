import { Service, Project, Collaborator } from './types';

export const SERVICES: Service[] = [
  {
    id: 'imagen-corporativa',
    title: 'IMAGEN CORPORATIVA',
    description: 'Papelería corporativa, etiquetas, regalo de empresa, cartelería y señalética, …',
    fullDescription: 'Cartas, carpetas, tarjetas de visita, sobres y bolsas, formularios, folletos y publicaciones, …',
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
    description: 'Ordenadores, periféricos, impresión y escaneado, redes, maquinaria de oficina, …',
    fullDescription: 'Equipamiento informático para tu empresa, sobremesa, portátiles, tablets, servidores, …',
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
    description: 'Proyección, cartelería digital, interactivos, audio-video, soporportes tablet, …',
    fullDescription: 'Transformamos sus espacios con tecnología audiovisual de vanguardia. Somos especialistas en sistemas de proyección, cartelería digital interactiva y soluciones completas de audio-video para salas de reuniones, eventos y espacios comerciales.',
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
    description: 'Papel A4 y A3, tinta y tóner, pilas y baterías, tarjetas de identificación y acceso',
    fullDescription: 'Garantizamos el suministro constante de los materiales esenciales para su operativa diaria. Disponemos de un amplio stock de tintas, tóneres, papel de alta calidad y accesorios para asegurar que su oficina nunca se detenga por falta de suministros.',
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
    description: 'Mobiliario de oficina, equipamiento escolar, mobiliario auxiliar y complementos, …',
    fullDescription: 'Diseñamos y equipamos entornos de trabajo productivos, ergonómicos y modernos. Desde mobiliario de oficina funcional hasta equipamiento escolar especializado, creamos espacios que inspiran y facilitan el desempeño diario.',
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
    description: 'ERP / CRM / SGA / BPM',
    fullDescription: 'Implementamos herramientas digitales potentes que optimizan sus procesos internos. Ofrecemos soluciones ERP, CRM, SGA y BPM personalizadas para mejorar la eficiencia operativa, el control de datos y la toma de decisiones estratégicas en su compañía.',
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
  { 
    id: 1, 
    title: 'UNIVERSIDAD POPULAR - ARUCAS', 
    category: 'Espacios de trabajo', 
    image: '/images/Universidad Popular – Arucas.jpg', 
    gallery: ['/images/Universidad Popular – Arucas 2.jpg', '/images/Universidad Popular – Arucas 3.jpg', '/images/Universidad Popular – Arucas 4.jpg'],
    date: 'Enero 2024' 
  },
  { 
    id: 2, 
    title: 'INVENTIA PLUS', 
    category: 'Imagen corporativa', 
    image: './images/Inventia Plus.jpg', 
    gallery: ['/images/Inventia Plus 2.jpg', '/images/Inventia Plus 3.jpg', '/images/Inventia Plus 4.jpg'],
    date: 'Diciembre 2023' 
  },
  { 
    id: 3, 
    title: 'GRAN CANARIA ESPACIO DIGITAL', 
    category: 'Audiovisuales', 
    image: '/images/Gran Canaria Espacio Digital.jpg', 
    gallery: ['/images/Gran Canaria Espacio Digital.jpg'],
    date: 'Noviembre 2023' 
  },
  { 
    id: 4, 
    title: 'CENTRO DE REPROGRAFÍA E INFORMÁTICA DE LAS PALMAS', 
    category: 'Espacios de trabajo', 
    image: '/images/Centro de Reprografía e Informática de Las Palmas.jpg', 
    gallery: ['/images/Centro de Reprografía e Informática de Las Palmas 2.jpg', '/images/Centro de Reprografía e Informática de Las Palmas 3.jpg', '/images/Centro de Reprografía e Informática de Las Palmas 4.jpg'],
    date: 'Octubre 2023' 
  },
  { 
    id: 5, 
    title: 'AYUNTAMIENTO DE SANTA BRÍGIDA', 
    category: 'Espacios de trabajo', 
    image: '/images/ayuntamiento de santa brigida.jpg', 
    gallery: ['/images/ayuntamiento de santa brigida 2.jpg', '/images/ayuntamiento de santa brigida 3.jpg', '/images/ayuntamiento de santa brigida 4.jpg', '/images/ayuntamiento de santa brigida 5.jpg'],
    date: 'Septiembre 2023' 
  },
  { 
    id: 6, 
    title: 'VALLESECO', 
    category: 'Espacios de trabajo', 
    image: '/images/valleseco.jpg', 
    gallery: ['/images/valleseco.jpg'],
    date: 'Agosto 2023' 
  },
  { 
    id: 7, 
    title: 'VALSEQUILLO', 
    category: 'Espacios de trabajo', 
    image: '/images/valsequillo.jpg', 
    gallery: ['/images/valsequillo.jpg'],
    date: 'Julio 2023' 
  },
];

export const COLLABORATORS: Collaborator[] = [
  { name: 'Palmart', logo: '/images/collab-palmart.png' },
  { name: 'Freeware', logo: '/images/collab-freeware.png' },
  { name: 'Nautilus', logo: '/images/collab-nautilus.png' },
  { name: 'Dile', logo: '/images/collab-dile.png' },
  { name: 'Actiu', logo: '/images/collab-actiu.png' },
  { name: 'Made Design', logo: '/images/collab-made-design.png' },
  { name: 'Planning Sisplamo', logo: '/images/collab-planning-sisplamo.png' },
  { name: 'Bravour', logo: '/images/collab-bravour.png' },
  { name: 'Epson', logo: '/images/collab-epson.png' },
  { name: 'Dell', logo: '/images/collab-dell.png' },
  { name: 'Tomplaprint Regalos', logo: '/images/collab-tomplaprint-regalos.png' },
  { name: 'Tomplapac', logo: '/images/collab-tomplapac.png' },
  { name: 'Ovelar', logo: '/images/collab-ovelar.png' },
  { name: 'Tomplalprint', logo: '/images/collab-tomplalprint.png' },
];
