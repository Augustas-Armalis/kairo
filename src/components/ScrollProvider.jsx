import { useEffect } from 'react';

export default function ScrollProvider({ children }) {
  // Temporarily disabled Lenis to test if it's causing animation issues
  // useEffect(() => {
  //   const isTouchDevice = () => {
  //     return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  //   };

  //   if (!isTouchDevice()) {
  //     const lenis = new Lenis({
  //       autoRaf: false,
  //       smoothWheel: true,
  //       orientation: 'vertical',
  //       gestureOrientation: 'vertical',
  //       lerp: 0.1,
  //       syncTouch: false,
  //       touchInertiaMultiplier: 35,
  //       wheelMultiplier: 1,
  //       infinite: false,
  //     });

  //     // Store Lenis instance globally
  //     window.lenisInstance = lenis;

  //     // Track animation state to prevent conflicts
  //     let isAnimating = false;
  //     let animationTimeout;

  //     // Disable Lenis during page transitions
  //     const originalPushState = history.pushState;
  //     const originalReplaceState = history.replaceState;
      
  //     history.pushState = function() {
  //       lenis.stop();
  //       setTimeout(() => lenis.start(), 500);
  //       return originalPushState.apply(history, arguments);
  //     };
      
  //     history.replaceState = function() {
  //       lenis.stop();
  //       setTimeout(() => lenis.start(), 500);
  //       return originalReplaceState.apply(history, arguments);
  //     };

  //     // Listen for scroll events to manage animation state
  //     lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
  //       // Set animation flag when scrolling starts
  //       if (Math.abs(velocity) > 0.1) {
  //         isAnimating = true;
  //         clearTimeout(animationTimeout);
          
  //           // Clear animation flag after scroll settles
  //           animationTimeout = setTimeout(() => {
  //             isAnimating = false;
  //           }, 150);
  //         }
  //       });

  //       // Restore scroll position with delay to avoid conflicts
  //       setTimeout(() => {
  //         const scrollPosition = sessionStorage.getItem('scrollPosition') || '0';
  //         lenis.scrollTo(parseInt(scrollPosition), { duration: 0, immediate: true });
  //       }, 100);

  //       // Save scroll position before unload
  //       const handleBeforeUnload = () => {
  //         sessionStorage.setItem('scrollPosition', lenis.scroll.toString());
  //       };

  //       window.addEventListener('beforeunload', handleBeforeUnload);

  //       function raf(time) {
  //         lenis.raf(time);
  //         requestAnimationFrame(raf);
  //       }

  //       requestAnimationFrame(raf);

  //       // Cleanup
  //       return () => {
  //         clearTimeout(animationTimeout);
  //         lenis.off('scroll');
  //         history.pushState = originalPushState;
  //         history.replaceState = originalReplaceState;
  //         window.lenisInstance = null;
  //         lenis.destroy();
  //         window.removeEventListener('beforeunload', handleBeforeUnload);
  //       };
  //     }
  //   }, []);

  return <>{children}</>;
}
