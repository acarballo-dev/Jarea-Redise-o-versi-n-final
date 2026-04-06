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
import { About } from './pages/About';
import { ServiceDetail } from './pages/ServiceDetail';
import { ProjectDetail } from './pages/ProjectDetail';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { InfoGeneral } from './pages/InfoGeneral';
import { AvisoLegal } from './pages/AvisoLegal';
import { Privacidad } from './pages/Privacidad';
import { Cookies } from './pages/Cookies';
import { SERVICES, PROJECTS } from './constants';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedService, selectedProject]);

  const handlePageChange = (page: Page, data?: Service | Project, pushState = true) => {
    if (page === 'service-detail' && data) {
      setSelectedService(data as Service);
      setSelectedProject(null);
      setCurrentPage('service-detail');
      if (pushState) {
        window.history.pushState({ page, dataId: (data as Service).id }, '', '');
      }
    } else if (page === 'project-detail' && data) {
      setSelectedProject(data as Project);
      setSelectedService(null);
      setCurrentPage('project-detail');
      if (pushState) {
        window.history.pushState({ page, dataId: (data as Project).id }, '', '');
      }
    } else {
      setSelectedService(null);
      setSelectedProject(null);
      setCurrentPage(page);
      if (pushState) {
        window.history.pushState({ page }, '', '');
      }
    }
  };

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state) {
        const { page, dataId } = event.state;
        if (page === 'service-detail' && dataId) {
          const service = SERVICES.find(s => s.id === dataId);
          handlePageChange(page, service, false);
        } else if (page === 'project-detail' && dataId) {
          const project = PROJECTS.find(p => p.id === Number(dataId));
          handlePageChange(page, project, false);
        } else {
          handlePageChange(page, undefined, false);
        }
      } else {
        handlePageChange('home', undefined, false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Initial state setup
    if (!window.history.state) {
      window.history.replaceState({ page: 'home' }, '', '');
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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
      case 'nosotros':
        return <About onPageChange={handlePageChange} />;
      case 'info-general':
        return <InfoGeneral />;
      case 'aviso-legal':
        return <AvisoLegal />;
      case 'privacidad':
        return <Privacidad />;
      case 'cookies':
        return <Cookies />;
      case 'productos':
      case 'servicios':
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

