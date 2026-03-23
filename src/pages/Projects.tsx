import { useState } from 'react';
import { PROJECTS } from '../constants';
import { ProjectCard } from '../components/ProjectCard';

import { Page, Project } from '../types';

interface ProjectsProps {
  onPageChange: (page: Page, data?: Project) => void;
}

export const Projects = ({ onPageChange }: ProjectsProps) => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Espacios de trabajo', 'Imagen corporativa', 'Audiovisuales'];

  const filteredProjects = filter === 'Todos' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-widest uppercase">PROYECTOS</h1>
          <div className="flex items-center justify-center space-x-2 text-teal-500 text-sm font-medium">
            <span>Home</span>
            <span>/</span>
            <span className="text-gray-400">Proyectos</span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-teal-500 text-white py-4 px-8 rounded-lg text-center mb-12 font-bold text-xl">
            Más de 200 proyectos realizados
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'bg-teal-500 text-white' 
                    : 'bg-teal-50 text-teal-600 hover:bg-teal-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => onPageChange('project-detail', project)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
