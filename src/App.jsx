import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Ventures from './pages/Ventures'
import Team from './pages/Team'
import Acquire from './pages/Acquire'

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there's a redirect parameter from 404.html
    const urlParams = new URLSearchParams(window.location.search);
    const redirectPath = urlParams.get('redirect');
    
    if (redirectPath) {
      // Remove the redirect parameter from the URL
      urlParams.delete('redirect');
      const newUrl = redirectPath + (urlParams.toString() ? '?' + urlParams.toString() : '');
      
      // Navigate to the correct route
      navigate(newUrl, { replace: true });
    }
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ventures" element={<Ventures />} />
        <Route path="/team" element={<Team />} />
        <Route path="/acquire" element={<Acquire />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
