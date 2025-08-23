import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname || window.location.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-center flex-col items-center w-full fixed top-6 max-[593px]:top-4 z-50 px-3" ref={navRef}>
      <div className="flex w-full max-w-[569px] bg-bg/70 backdrop-blur-md justify-between h-[43px] z-50 items-center px-6 rounded-full max-[593px]:pl-5 max-[593px]:pr-[10px]">
      
        <a href="https://kairostudio.co" rel="noopener noreferrer">
          <img src="/svgs/biglogo.svg" alt="logo" className='w-auto h-[18px]'/>
        </a>

        <div className='flex gap-6 text-alt text-[16px] text-center max-[593px]:hidden'>
          <Link to="/">
            <p className={`transition-colors duration-300 ${
              currentPath === '/' ? 'text-white' : 'text-alt hover:text-white'
            }`}>Home</p>
          </Link>
          <Link to="/ventures">
            <p className={`transition-colors duration-300 ${
              currentPath === '/ventures' ? 'text-white' : 'text-alt hover:text-white'
            }`}>Ventures</p>
          </Link>
          <Link to="/team">
            <p className={`transition-colors duration-300 ${
              currentPath === '/team' ? 'text-white' : 'text-alt hover:text-white'
            }`}>Team</p>
          </Link>
          <Link to="/acquire">
            <p className={`transition-colors duration-300 ${
              currentPath === '/acquire' ? 'text-white' : 'text-alt hover:text-white'
            }`}>Acquire</p>
          </Link>
        </div>

        {/* Burger Menu Button */}
        <div className='w-[42px] h-[42px] hidden items-center justify-center max-[593px]:flex' onClick={toggleMenu}>
          <div
            className="flex-col gap-2 w-fit cursor-pointer max-[593px]:flex hidden"
            
          >
            <motion.div
              className="w-7 h-[2px] bg-white rounded-full"
              animate={isOpen ? { rotate: 45, y: 5, width: '26px' } : { rotate: 0, y: 0, width: '28px' }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            />
            <motion.div
              className="w-7 h-[2px] bg-white rounded-full"
              animate={isOpen ? { rotate: -45, y: -5, width: '26px' } : { rotate: 0, y: 0, width: '28px' }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            />
          </div>
        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="hidden w-full max-w-[569px] mx-3 bg-bg/70 backdrop-blur-md z-40 justify-between items-center px-2 py-2 flex-col h-fit rounded-[24px] max-[593px]:flex mt-3 gap-2"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30, duration: 0.3 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          >
            <Link to="/" className={`group flex items-center justify-center w-full h-[40px] rounded-full transition-all duration-300 ${
              currentPath === '/' ? 'bg-hover' : 'bg-transparent hover:bg-hover'
            }`}>
              <p className={`transition-all duration-150 text-base ${
                currentPath === '/' ? 'text-white' : 'text-alt group-hover:text-white'
              }`}>Home</p>
            </Link>
            <Link to="/ventures" className={`group flex items-center justify-center w-full h-[40px] rounded-full transition-all duration-150 ${
              currentPath === '/ventures' ? 'bg-hover' : 'bg-transparent hover:bg-hover'
            }`}>
              <p className={`transition-all duration-150 text-base ${
                currentPath === '/ventures' ? 'text-white' : 'text-alt group-hover:text-white'
              }`}>Ventures</p>
            </Link>
            <Link to="/team" className={`group flex items-center justify-center w-full h-[40px] rounded-full transition-all duration-150 ${
              currentPath === '/team' ? 'bg-hover' : 'bg-transparent hover:bg-hover'
            }`}>
              <p className={`transition-all duration-150 text-base ${
                currentPath === '/team' ? 'text-white' : 'text-alt group-hover:text-white'
              }`}>Team</p>
            </Link>
            <Link to="/acquire" className={`group flex items-center justify-center w-full h-[40px] rounded-full transition-all duration-150 ${
              currentPath === '/acquire' ? 'bg-hover' : 'bg-transparent hover:bg-hover'
            }`}>
              <p className={`transition-all duration-150 text-base ${
                currentPath === '/acquire' ? 'text-white' : 'text-alt group-hover:text-white'
              }`}>Acquire</p>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  )
}

export default Navbar