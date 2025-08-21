import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects.js';

export default function SaasShowcase() {
  const [activeProject, setActiveProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [allImages, setAllImages] = useState([]);
  const [usedImages, setUsedImages] = useState([]);
  const [baseImage, setBaseImage] = useState('');
  const [overlayImage, setOverlayImage] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);
  
  // Dynamically discover all images from products folders
  useEffect(() => {
    const discoverImages = () => {
      const imagePaths = [
        // Example folder
        '/images/products/example/example1.png',
        '/images/products/example/bigexample1.png',
        // Try1 folder
        '/images/products/try1/Rectangle 1000002352.png',
        '/images/products/try1/Rectangle 1000002352-4.png',
        // Try2 folder
        '/images/products/try2/Rectangle 1000002352-1.png',
        '/images/products/try2/Rectangle 1000002352-2.png',
        '/images/products/try2/Rectangle 1000002352-3.png',
      ];
      setAllImages(imagePaths);
      
      // Initialize base image
      if (imagePaths.length > 0 && !baseImage) {
        setBaseImage(imagePaths[0]);
      }
    };
    
    discoverImages();
  }, [baseImage]);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 601);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Get next random image without repetition
  const getNextRandomImage = () => {
    if (allImages.length === 0) return 0;
    
    // If we've used all images, reset the used list
    if (usedImages.length >= allImages.length) {
      setUsedImages([]);
    }
    
    // Find an image that hasn't been used recently
    const availableImages = allImages.filter((_, index) => !usedImages.includes(index));
    const randomIndex = Math.floor(Math.random() * availableImages.length);
    const selectedImageIndex = allImages.indexOf(availableImages[randomIndex]);
    
    // Add to used images
    setUsedImages(prev => [...prev, selectedImageIndex]);
    
    return selectedImageIndex;
  };

  // Handle image transitions with layering
  const transitionToNewImage = (newImageSrc) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setOverlayImage(newImageSrc);
    
    // After overlay fades in, update base image
    setTimeout(() => {
      setBaseImage(newImageSrc);
      setOverlayImage('');
      setIsTransitioning(false);
    }, 300); // Match the fade duration
  };

  // Random image cycling when no project is active
  useEffect(() => {
    if (!activeProject && allImages.length > 0) {
      // Global random cycling through all project images
      intervalRef.current = setInterval(() => {
        const newIndex = getNextRandomImage();
        const newImageSrc = allImages[newIndex];
        setCurrentImageIndex(newIndex);
        transitionToNewImage(newImageSrc);
      }, 1500);
    } else if (activeProject) {
      // Project-specific cycling
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      
      intervalRef.current = setInterval(() => {
        const newIndex = (currentImageIndex + 1) % activeProject.images.length;
        const newImageSrc = activeProject.images[newIndex];
        setCurrentImageIndex(newIndex);
        transitionToNewImage(newImageSrc);
      }, 1500);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeProject, allImages.length, currentImageIndex]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const gridContainer = document.querySelector('.grid-container');
      const topPopup = document.querySelector('.top-popup');
      if (activeProject && gridContainer && topPopup && !gridContainer.contains(event.target) && !topPopup.contains(event.target)) {
        setActiveProject(null);
        setCurrentImageIndex(0);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeProject]);

  const handleProjectHover = (project) => {
    if (!isMobile) {
      console.log('Hovering over:', project.name);
      setActiveProject(project);
      setCurrentImageIndex(0); // Start from first image (which is now the thumbnail)
    }
  };

  const handleProjectLeave = () => {
    if (!isMobile) {
      console.log('Hover ended');
      setActiveProject(null);
      setCurrentImageIndex(0); // Reset to start of global cycle
    }
  };

  const handleProjectClick = (project) => {
    if (isMobile) {
      console.log('Clicked on:', project.name);
      // Mobile: toggle project active state
      if (activeProject?.id === project.id) {
        setActiveProject(null);
        setCurrentImageIndex(0);
      } else {
        setActiveProject(project);
        setCurrentImageIndex(0); // Start from first image
      }
    } else {
      // Desktop: redirect to project link
      window.open(project.link, '_blank');
    }
  };

  const handleMobilePopupClick = () => {
    if (isMobile && activeProject) {
      window.open(activeProject.link, '_blank');
    }
  };

  const getCurrentImage = () => {
    if (activeProject) {
      // Show project-specific images
      return activeProject.images[currentImageIndex % activeProject.images.length];
    }
    // Show random global images
    return allImages[currentImageIndex] || allImages[0];
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Project Logos Grid */}
      <div
        className="bg-bg w-fit max-w-full flex gap-2 p-2 rounded-2xl pointer-events-auto grid-container"
        onMouseLeave={handleProjectLeave}
      >
        {projects.map((project) => (
          <motion.img
            key={project.id}
            src={project.logo}
            className={`w-[52px] h-[52px] object-cover rounded-[10px] cursor-pointer transition-all duration-300 ${
              activeProject?.id === project.id ? 'opacity-70' : 'opacity-100'
            } pointer-events-auto project-logo`}
            onMouseEnter={() => handleProjectHover(project)}
            onClick={() => handleProjectClick(project)}
            whileTap={{ scale: 0.95 }}
          />
        ))}
      </div>

      {/* Top Popup - positioned above the logos */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 -top-8 z-50 top-popup"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="w-[200px] h-[24px] bg-red-500 rounded flex items-center justify-center">
              {isMobile ? (
                <button
                  onClick={handleMobilePopupClick}
                  className="flex items-center gap-2 text-white text-sm"
                >
                  <span>{activeProject.popupText}</span>
                  <img 
                    src={activeProject.mobileIcon} 
                    alt="arrow" 
                    className="w-4 h-4" 
                  />
                </button>
              ) : (
                <p className="text-white text-sm">{activeProject.popupText}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Image Container */}
      <div className="relative w-full h-auto aspect-[1440/890] bg-bg border border-hover rounded-2xl mt-4 overflow-hidden">
        {/* Base image that stays until new one is ready */}
        {baseImage && (
          <img
            src={baseImage}
            alt="Product Preview"
            className="w-full h-full object-cover rounded-2xl"
          />
        )}
        
        {/* Overlay image that fades in */}
        <AnimatePresence>
          {overlayImage && (
            <motion.img
              key={`overlay-${overlayImage}`}
              src={overlayImage}
              alt="Product Preview Overlay"
              className="w-full h-full object-cover rounded-2xl absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>

        {/* Stats Board - slides up from bottom when project is active */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-bg/90 backdrop-blur-md border-t border-hover p-4"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-alt">Users:</span>
                  <span className="text-white font-medium">{activeProject.stats.users}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-alt">ARR:</span>
                  <span className="text-white font-medium">{activeProject.stats.arr}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-alt">Valuation:</span>
                  <span className="text-white font-medium">{activeProject.stats.valuation}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
