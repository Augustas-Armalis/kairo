import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Ventures from './pages/Ventures'
import Team from './pages/Team'
import Acquire from './pages/Acquire'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ventures" element={<Ventures />} />
        <Route path="/team" element={<Team />} />
        <Route path="/acquire" element={<Acquire />} />
      </Routes>
    </div>
  )
}

export default App
