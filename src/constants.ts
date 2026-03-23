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
      { name: 'tomplalprint', logo: 'https://unavatar.io/tompla.com' },
      { name: 'ovelar etiquetas', logo: 'https://unavatar.io/ovelar.com' },
      { name: 'tomplapac', logo: 'https://unavatar.io/tompla.com' },
      { name: 'tomplaplrint regalos', logo: 'https://unavatar.io/tompla.com' },
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
      { name: 'DELL', logo: 'https://unavatar.io/dell.com' },
      { name: 'EPSON', logo: 'https://unavatar.io/epson.com' },
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
      { name: 'BRAVOUR Standout & Impress', logo: 'https://unavatar.io/bravour.com' },
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
      { name: 'HP', logo: 'https://unavatar.io/hp.com' },
      { name: 'Brother', logo: 'https://unavatar.io/brother.com' },
      { name: 'Epson', logo: 'https://unavatar.io/epson.com' },
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
      { name: 'Planning Sisplamo', logo: 'https://unavatar.io/planningsisplamo.com' },
      { name: 'Made Desing', logo: 'https://unavatar.io/madedesign.es' },
      { name: 'Actiu', logo: 'https://unavatar.io/actiu.com' },
      { name: 'DILE the art of seating', logo: 'https://unavatar.io/dileoffice.com' },
      { name: 'Nautilus Intelligent Furniture', logo: 'https://unavatar.io/nautilus.pt' },
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
      { name: 'Freeware', logo: 'https://unavatar.io/freeware.es' },
      { name: 'Palmart', logo: 'https://unavatar.io/palmart.es' },
    ]
  },
];

export const PROJECTS: Project[] = [
  { id: 1, title: 'UNIVERSIDAD POPULAR - ARUCAS', category: 'Espacios de trabajo', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800', date: 'Enero 2024' },
  { id: 2, title: 'INVENTIA PLUS', category: 'Imagen corporativa', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800', date: 'Diciembre 2023' },
  { id: 3, title: 'GRAN CANARIA ESPACIO DIGITAL', category: 'Audiovisuales', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800', date: 'Noviembre 2023' },
  { id: 4, title: 'CENTRO DE REPROGRAFÍA E INFORMÁTICA DE LAS PALMAS', category: 'Espacios de trabajo', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800', date: 'Octubre 2023' },
  { id: 5, title: 'OFICINAS MODERNAS', category: 'Espacios de trabajo', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800', date: 'Septiembre 2023' },
  { id: 6, title: 'SALA DE REUNIONES', category: 'Audiovisuales', image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800', date: 'Agosto 2023' },
];

export const COLLABORATORS: Collaborator[] = [
  { name: 'DELL', logo: 'https://unavatar.io/dell.com' },
  { name: 'EPSON', logo: 'https://unavatar.io/epson.com' },
  { name: 'ACTIU', logo: 'https://unavatar.io/actiu.com' },
  { name: 'TOMPLA', logo: 'https://unavatar.io/tompla.com' },
  { name: 'OVELAR', logo: 'https://unavatar.io/ovelar.com' },
  { name: 'HP', logo: 'https://unavatar.io/hp.com' },
  { name: 'Brother', logo: 'https://unavatar.io/brother.com' },
  { name: 'Palmart', logo: 'https://unavatar.io/palmart.es' },
];
