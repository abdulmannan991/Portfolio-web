import { useEffect, useState } from 'react';

const useScrollAnimation = (triggerId: string) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(triggerId);
      if (section && !hasAnimated) {
        const rect = section.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setHasAnimated(true); 
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated, triggerId]);

  return hasAnimated;
};

export default useScrollAnimation;
