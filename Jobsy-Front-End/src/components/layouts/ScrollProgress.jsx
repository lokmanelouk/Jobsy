// components/ScrollProgress.jsx
import { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      setScroll((window.scrollY / totalHeight) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 h-1 z-50 bg-[#F97316] transition-all duration-300"
      style={{ width: `${scroll}%` }}
    />
  );
};

export default ScrollProgress;