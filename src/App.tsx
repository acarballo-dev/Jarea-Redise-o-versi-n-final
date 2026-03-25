/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Page, Service, Project } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { Home } from './pages/Home';
import { ServiceDetail } from './pages/ServiceDetail';
import { ProjectDetail } from './pages/ProjectDetail';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { SERVICES } from './constants';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedService, selectedProject]);

  const handlePageChange = (page: Page, data?: Service | Project) => {
    if (page === 'service-detail' && data) {
      setSelectedService(data as Service);
      setSelectedProject(null);
      setCurrentPage('service-detail');
    } else if (page === 'project-detail' && data) {
      setSelectedProject(data as Project);
      setSelectedService(null);
      setCurrentPage('project-detail');
    } else {
      setSelectedService(null);
      setSelectedProject(null);
      setCurrentPage(page);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={handlePageChange} />;
      case 'service-detail':
        return selectedService ? (
          <ServiceDetail service={selectedService} onPageChange={handlePageChange} />
        ) : (
          <Home onPageChange={handlePageChange} />
        );
      case 'proyectos':
        return <Projects onPageChange={handlePageChange} />;
      case 'project-detail':
        return selectedProject ? (
          <ProjectDetail project={selectedProject} onBack={() => handlePageChange('proyectos')} />
        ) : (
          <Projects onPageChange={handlePageChange} />
        );
      case 'contacto':
        return <Contact />;
      case 'productos':
      case 'servicios':
      case 'nosotros':
        // For demo purposes, these link to home or a generic service detail
        return <Home onPageChange={handlePageChange} />;
      default:
        return <Home onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-teal-500/30 selection:text-teal-900">
      <Navbar currentPage={currentPage} onPageChange={handlePageChange} />
      
      <main>
        {renderPage()}
      </main>

      <Footer onPageChange={handlePageChange} />
      <CookieBanner />
    </div>
  );
}

