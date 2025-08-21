import Lenis from 'lenis';
import { useEffect } from 'react';

export default function ScrollProvider({ children }) {
  useEffect(() => {
    const isTouchDevice = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };

    if (!isTouchDevice()) {
      const lenis = new Lenis({
        autoRaf: false,
        smoothWheel: true,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        lerp: 0.1,
      });

      // Store Lenis instance globally
      window.lenisInstance = lenis;

      // Restore scroll position
      const scrollPosition = sessionStorage.getItem('scrollPosition') || '0';
      window.scrollTo(0, parseInt(scrollPosition));

      // Save scroll position before unload
      const handleBeforeUnload = () => {
        sessionStorage.setItem('scrollPosition', window.scrollY.toString());
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Cleanup
      return () => {
        window.lenisInstance = null;
        lenis.destroy();
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, []);

  return <>{children}</>;
}
