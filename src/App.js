import React, { useState, useEffect } from 'react';
import { heroImages, products, contactInfo } from './data';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Clients from './components/Clients';
import Inquiry from './components/Inquiry';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

import {clientsList } from './data';  // ← add clientsList


const RajaFabricatorsWebsite = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Update body class for light/dark mode based on manual CSS selectors
  useEffect(() => {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(isDarkMode ? 'dark-mode' : 'light-mode');
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'clients', 'contact', 'inquiry'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Navbar 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode}
        activeSection={activeSection}
      />
      <Hero images={heroImages} isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Products products={products} isDarkMode={isDarkMode} />
      <Clients clients={clientsList} />
      <Inquiry />
      <Contact contactInfo={contactInfo} isDarkMode={isDarkMode} />
      <ScrollToTop />
    </div>
  );
};

export default RajaFabricatorsWebsite;
