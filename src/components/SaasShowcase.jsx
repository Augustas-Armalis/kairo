import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects.js';

export default function SaasShowcase() {
  const [activeProject, setActiveProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [allImages, setAllImages] = useState([]);
  const [usedImages, setUsedImages] = useState([]);
  const [lastShownImage, setLastShownImage] = useState('');
  const intervalRef = useRef(null);
  
  // Dynamically discover all images from products folders
  useEffect(() => {
    const discoverImages = () => {
      // Get all images from all project folders
      const allProjectImages = projects.flatMap(project => project.images);
      setAllImages(allProjectImages);
      
      // Set initial random image instead of always starting with index 0
      if (allProjectImages.length > 0) {
        const randomInitialIndex = Math.floor(Math.random() * allProjectImages.length);
        setCurrentImageIndex(randomInitialIndex);
      }
    };
    
    discoverImages();
  }, []);

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
    
    // If we've used all images, reset the used list to start fresh
    if (usedImages.length >= allImages.length) {
      setUsedImages([]);
    }
    
    // Find images that haven't been used recently AND are not the last shown image
    let availableImages = allImages.filter((_, index) => 
      !usedImages.includes(index) && allImages[index] !== lastShownImage
    );
    
    // If no available images (all used or only last shown image available), 
    // allow any image except the last shown one
    if (availableImages.length === 0) {
      availableImages = allImages.filter((_, index) => allImages[index] !== lastShownImage);
    }
    
    // Occasionally shuffle the available images for extra randomness
    if (Math.random() < 0.3) { // 30% chance to shuffle
      availableImages = [...availableImages].sort(() => Math.random() - 0.5);
    }
    
    // If we have available images, pick one randomly
    if (availableImages.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableImages.length);
      const selectedImageIndex = allImages.indexOf(availableImages[randomIndex]);
      
      // Add to used images to track what we've shown
      setUsedImages(prev => [...prev, selectedImageIndex]);
      
      return selectedImageIndex;
    }
    
    // Fallback: if somehow no available images, pick any random one except last shown
    const fallbackImages = allImages.filter((_, index) => allImages[index] !== lastShownImage);
    if (fallbackImages.length > 0) {
      const randomIndex = Math.floor(Math.random() * fallbackImages.length);
      return allImages.indexOf(fallbackImages[randomIndex]);
    }
    
    // Last resort: if only one image exists, return it
    return 0;
  };

  // Random image cycling when no project is active
  useEffect(() => {
    if (!activeProject && allImages.length > 0) {
      // Global random cycling through all project images
      intervalRef.current = setInterval(() => {
        const newIndex = getNextRandomImage();
        setCurrentImageIndex(newIndex);
        setLastShownImage(allImages[newIndex]); // Track the last shown image
      }, 1000);
    } else if (activeProject) {
      // Project-specific cycling
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      
      intervalRef.current = setInterval(() => {
        const newIndex = (currentImageIndex + 1) % activeProject.images.length;
        setCurrentImageIndex(newIndex);
        setLastShownImage(activeProject.images[newIndex]); // Track the last shown image
      }, 1000);
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
        className="bg-bg w-fit max-w-full grid auto-flow-col grid-cols-[repeat(auto-fit,52px)] gap-2  p-2 rounded-2xl pointer-events-auto grid-container"
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
            className="absolute -top-11 z-50 top-popup"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="w-fit h-fit px-4 pb-[6px] pt-[7px] bg-hover rounded-full flex items-center justify-center">
              {isMobile ? (
                <button
                  onClick={handleMobilePopupClick}
                  className="flex items-center gap-2 text-white text-base leading-tight"
                >
                  <span>{activeProject.popupTextMobile}</span>
                  <img 
                    src="/svgs/link.svg"
                    alt="arrow" 
                    className="w-[15px] h-[15px]" 
                  />
                </button>
              ) : (
                <p className="text-white text-base leading-tight">{activeProject.name}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Image Container */}
      <div className="relative w-full h-auto aspect-[1440/890] bg-bg border border-hover rounded-2xl mt-4 overflow-hidden">
        {/* Base image that stays visible */}
        <img
          src={getCurrentImage()}
          alt="Product Preview"
          className="w-full h-full object-cover rounded-2xl"
        />
        
        {/* Overlay image that fades in on top */}
        <AnimatePresence>
          <motion.img
            key={`overlay-${getCurrentImage()}`}
            src={getCurrentImage()}
            alt="Product Preview Overlay"
            className="w-full h-full object-cover rounded-2xl absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </AnimatePresence>
        
        {/* Stats Board - slides up from bottom when project is active */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-bg/70 backdrop-blur-md border-t border-hover py-[6px] px-4"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="flex flex-wrap w-full items-center justify-center gap-6 max-[601px]:gap-3 text-sm">
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
