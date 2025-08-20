import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/ventures">Ventures</Link>
      <Link to="/team">Team</Link>
      <Link to="/acquire">Acquire</Link>
    </nav>
  )
}

export default Navbar
