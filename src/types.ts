export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  icon: string;
  subServices?: SubService[];
  collaborators?: Collaborator[];
}

export interface SubService {
  title: string;
  description?: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  date?: string;
}

export interface Collaborator {
  name: string;
  logo: string;
}

export type Page = 'home' | 'productos' | 'servicios' | 'proyectos' | 'nosotros' | 'contacto' | 'service-detail' | 'project-detail';
