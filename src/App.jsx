import { Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Ventures from './pages/Ventures'
import Team from './pages/Team'
import Acquire from './pages/Acquire'

function App() {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.16, 1, 0.3, 1],
        duration: 0.4
      }
    },
    out: {
      opacity: 0,
      y: -20,
      transition: {
        ease: [0.16, 1, 0.3, 1],
        duration: 0.4
      }
    }
  };

  const pageTransition = {
    type: "tween",
    ease: [0.16, 1, 0.3, 1],
    duration: 0.4
  };

  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/ventures" element={<Ventures />} />
            <Route path="/team" element={<Team />} />
            <Route path="/acquire" element={<Acquire />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
