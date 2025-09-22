import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingOrb } from './components/FloatingOrb';

import { HomeSection } from './sections/HomeSection';
import { ProgramsSection } from './sections/ProgramsSection';
import { ResearchSection } from './sections/ResearchSection';
import { FacultySection } from './sections/FacultySection';
import { AdmissionsSection } from './sections/AdmissionsSection';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navigateTo = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
 
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        {Array.from({ length: 20 }).map((_, i) => (
          <FloatingOrb key={i} delay={i * 0.2} size="w-2 h-2" />
        ))}
      </div>

      <Navbar activeSection={activeSection} onNavigate={navigateTo} />

      <main className="relative z-10">
        {activeSection === 'home' && <HomeSection />}
        {activeSection === 'programs' && <ProgramsSection />}
        {activeSection === 'research' && <ResearchSection />}
        {activeSection === 'faculty' && <FacultySection />}
        {activeSection === 'admissions' && <AdmissionsSection />}
      </main>

      <Footer />
    </div>
  );
}
