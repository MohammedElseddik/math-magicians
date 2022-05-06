import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar">
    <span>Math Magicians</span>
    <Link to="/home">Home</Link>
    <Link to="/calculator">Calculator</Link>
    <Link to="/quote">Quote</Link>
  </nav>
);

export default NavBar;
