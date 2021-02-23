import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: widthW, innerHeight: heightW } = window;
  return {
    widthW,
    heightW
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
