import React, { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Optional: Add logic to show or hide the button based on scroll position.
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button onClick={scrollToTop} className="scroll-to-top">
      ↑
    </button>
  );
};

export default ScrollToTop;
