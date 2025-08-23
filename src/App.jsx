import { Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Ventures from './pages/Ventures'
import Team from './pages/Team'
import Acquire from './pages/Acquire'

function App() {
  const location = useLocation();

  // Dynamic meta tag management for each page
  useEffect(() => {
    const updateMetaTags = () => {
      const baseUrl = 'https://kairostudio.co';
      const ogImage = 'https://kairostudio.co/images/ogimage.webp';
      
      switch (location.pathname) {
        case '/':
          // Home page - already set in index.html
          break;
        case '/ventures':
          document.title = 'Our Ventures - Kairo';
          document.querySelector('meta[name="description"]')?.setAttribute('content', 'Discover our portfolio of world-class SaaS ventures. Explore innovative solutions and cutting-edge technology built by Kairo Studio.');
          document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'Our Ventures - Kairo');
          document.querySelector('meta[property="og:description"]')?.setAttribute('content', 'Discover our portfolio of world-class SaaS ventures. Explore innovative solutions and cutting-edge technology built by Kairo Studio.');
          document.querySelector('meta[property="og:url"]')?.setAttribute('content', `${baseUrl}/ventures`);
          document.querySelector('meta[property="og:image"]')?.setAttribute('content', ogImage);
          document.querySelector('meta[property="twitter:title"]')?.setAttribute('content', 'Our Ventures - Kairo');
          document.querySelector('meta[property="twitter:description"]')?.setAttribute('content', 'Discover our portfolio of world-class SaaS ventures. Explore innovative solutions and cutting-edge technology built by Kairo Studio.');
          document.querySelector('meta[property="twitter:url"]')?.setAttribute('content', `${baseUrl}/ventures`);
          document.querySelector('meta[property="twitter:image"]')?.setAttribute('content', ogImage);
          document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${baseUrl}/ventures`);
          break;
        case '/team':
          document.title = 'Our Team - Kairo';
          document.querySelector('meta[name="description"]')?.setAttribute('content', 'Meet the talented team behind Kairo Studio. Our founders and experts in design, development, and business growth.');
          document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'Our Team - Kairo');
          document.querySelector('meta[property="og:description"]')?.setAttribute('content', 'Meet the talented team behind Kairo Studio. Our founders and experts in design, development, and business growth.');
          document.querySelector('meta[property="og:url"]')?.setAttribute('content', `${baseUrl}/team`);
          document.querySelector('meta[property="og:image"]')?.setAttribute('content', ogImage);
          document.querySelector('meta[property="twitter:title"]')?.setAttribute('content', 'Our Team - Kairo');
          document.querySelector('meta[property="twitter:description"]')?.setAttribute('content', 'Meet the talented team behind Kairo Studio. Our founders and experts in design, development, and business growth.');
          document.querySelector('meta[property="twitter:url"]')?.setAttribute('content', `${baseUrl}/team`);
          document.querySelector('meta[property="twitter:image"]')?.setAttribute('content', ogImage);
          document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${baseUrl}/team`);
          break;
        case '/acquire':
          document.title = 'Acquire - Kairo';
          document.querySelector('meta[name="description"]')?.setAttribute('content', 'Looking to acquire innovative SaaS solutions? Partner with Kairo Studio for strategic acquisitions and business growth opportunities.');
          document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'Acquire - Kairo');
          document.querySelector('meta[property="og:description"]')?.setAttribute('content', 'Looking to acquire innovative SaaS solutions? Partner with Kairo Studio for strategic acquisitions and business growth opportunities.');
          document.querySelector('meta[property="og:url"]')?.setAttribute('content', `${baseUrl}/acquire`);
          document.querySelector('meta[property="og:image"]')?.setAttribute('content', ogImage);
          document.querySelector('meta[property="twitter:title"]')?.setAttribute('content', 'Acquire - Kairo');
          document.querySelector('meta[property="twitter:description"]')?.setAttribute('content', 'Looking to acquire innovative SaaS solutions? Partner with Kairo Studio for strategic acquisitions and business growth opportunities.');
          document.querySelector('meta[property="twitter:url"]')?.setAttribute('content', `${baseUrl}/acquire`);
          document.querySelector('meta[property="twitter:image"]')?.setAttribute('content', ogImage);
          document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${baseUrl}/acquire`);
          break;
        default:
          // Reset to home page meta tags
          document.title = 'Kairo';
          document.querySelector('meta[name="description"]')?.setAttribute('content', 'We build cool SaaS And make It work. Holding Venture studio of many World-class startups.');
          document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'Kairo');
          document.querySelector('meta[property="og:description"]')?.setAttribute('content', 'We build cool SaaS And make It work. Holding Venture studio of many World-class startups.');
          document.querySelector('meta[property="og:url"]')?.setAttribute('content', baseUrl);
          document.querySelector('meta[property="og:image"]')?.setAttribute('content', ogImage);
          document.querySelector('meta[property="twitter:title"]')?.setAttribute('content', 'Kairo');
          document.querySelector('meta[property="twitter:description"]')?.setAttribute('content', 'We build cool SaaS And make It work. Holding Venture studio of many World-class startups.');
          document.querySelector('meta[property="twitter:url"]')?.setAttribute('content', baseUrl);
          document.querySelector('meta[property="twitter:image"]')?.setAttribute('content', ogImage);
          document.querySelector('link[rel="canonical"]')?.setAttribute('href', baseUrl);
      }
    };

    updateMetaTags();
  }, [location.pathname]);

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
          style={{ willChange: "transform, opacity" }}
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
