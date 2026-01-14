import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">ecoFinds</div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#auctions">Auctions</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-actions">
        <Link to="/login" className="btn-outline">Sign In</Link>
        <Link to="/signup" className="btn-primary">Sign Up</Link>
      </div>
    </nav>
  );
}
