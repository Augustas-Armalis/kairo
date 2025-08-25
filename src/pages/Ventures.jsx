import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';

const Ventures = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const cardRefs = useRef({});

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 601);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const handleScroll = () => {
        const viewportCenter = window.innerHeight / 2;
        let closestCard = null;
        let minDistance = Infinity;

        Object.values(cardRefs.current).forEach((ref) => {
          if (ref) {
            const rect = ref.getBoundingClientRect();
            const cardCenter = rect.top + rect.height / 2;
            const distance = Math.abs(cardCenter - viewportCenter);
            
            if (distance < minDistance) {
              minDistance = distance;
              closestCard = ref.dataset.projectId;
            }
          }
        });

        if (closestCard && closestCard !== activeProject) {
          setActiveProject(parseInt(closestCard));
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isMobile, activeProject]);

  const handleCardClick = (projectLink) => {
    window.open(projectLink, '_blank');
  };

  const handleCardHover = (projectId) => {
    if (!isMobile) {
      setHoveredProject(projectId);
    }
  };

  const handleCardLeave = () => {
    if (!isMobile) {
      setHoveredProject(null);
    }
  };

  return (
    <>
      <div className="flex flex-col w-full h-full min-h-screen items-center pt-[160px] px-3 max-[601px]:pt-[150px]">
      <div className="flex flex-row flex-wrap gap-[10px] items-center justify-center w-full max-w-[569px]">

        {projects.map((project) => {
          const isHovered = hoveredProject === project.id;
          const isActive = isMobile ? activeProject === project.id : isHovered;
          
          return (
            <motion.div
              key={project.id}
              ref={(el) => {
                if (el) {
                  cardRefs.current[project.id] = el;
                  el.dataset.projectId = project.id;
                }
              }}
              className={`flex flex-col gap-[6px] max-w-[279.5px] w-full h-[256px] rounded-[16px] p-[10px] transition-all duration-300 ease-out cursor-pointer relative overflow-hidden ${
                isActive ? 'bg-hover' : 'bg-bg hover:bg-hover'
              }`}
              onMouseEnter={() => handleCardHover(project.id)}
              onMouseLeave={handleCardLeave}
              onClick={() => handleCardClick(project.link)}
            >
              <div className="flex flex-row gap-[10px] items-center w-full h-fit">
                <img src={project.logo} alt="Logo" className="w-[36px] h-[36px] object-cover rounded-[8px]"/>
                <p className="text-[20px] font-medium text-white">{project.name}</p>
              </div>

              <p className="text-base font-medium text-alt">{project.description}</p>

              <motion.img 
                src={project.images[0]} 
                alt={project.name} 
                className="w-[280px] h-auto object-cover rounded-[8px] absolute left-[10px]"
                initial={{ bottom: -16 }}
                animate={{
                  bottom: isActive ? -8 : -16
                }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              />

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-bg/70 backdrop-blur-md border-t border-hover/20 py-[6px] px-4"
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 12, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  >
                    {project.inDevelopment ? (
                      <div className="flex w-full items-center justify-center text-sm">
                        <span className="text-white font-medium">Under development, join the waitlist!</span>
                      </div>
                    ) : (
                      <div className="flex flex-wrap w-full items-center justify-center gap-2 text-sm">
                        <div className="flex items-center gap-2 mr-1">
                          <span className="text-alt">ARR:</span>
                          <span className="text-white font-medium">{project.stats.arr}</span>
                        </div>
                        <div className="flex items-center gap-2 mr-1">
                          <span className="text-alt">Valuation:</span>
                          <span className="text-white font-medium">{project.stats.valuation}</span>
                        </div>
                        <div className="flex items-center gap-2 mr-1">
                          <span className="text-alt">MRR:</span>
                          <span className="text-white font-medium">{project.stats.mrr}</span>
                        </div>
                        <div className="flex items-center gap-2 mr-1">
                          <span className="text-alt">Users:</span>
                          <span className="text-white font-medium">{project.stats.users}</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

      
      
      </div>
    </div>
    </>
  )
}

export default Ventures
