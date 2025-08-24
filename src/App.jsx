import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Ventures from './pages/Ventures'
import Team from './pages/Team'
import Acquire from './pages/Acquire'
import PageTransition from './components/PageTransition'

function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <PageTransition>
              <Home />
            </PageTransition>
          } />
          <Route path="/ventures" element={
            <PageTransition>
              <Ventures />
            </PageTransition>
          } />
          <Route path="/team" element={
            <PageTransition>
              <Team />
            </PageTransition>
          } />
          <Route path="/acquire" element={
            <PageTransition>
              <Acquire />
            </PageTransition>
          } />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
