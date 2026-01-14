import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">EcoFinds</h2>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#auctions">Auctions</a>
        <a href="#contact">Contact</a>
        <Link to="/login" className="btn-outline">Login</Link>
        <Link to="/signup" className="btn-primary">Sign Up</Link>
      </div>
    </nav>
  );
}
