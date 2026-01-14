import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <span className="logo">ecoFinds</span>
        <div className="nav-links">
          <Link to="/login">Sign In</Link>
          <Link to="/signup" className="eco-btn">Sign Up</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div>
          <h1>
            Discover.<br />
            Bid.<br />
            Reuse.
          </h1>

          <p>
            Sustainable auctions for quality second-hand items.
          </p>

          <div className="hero-actions">
            <Link to="/signup" className="eco-btn">Get Started</Link>
            <Link to="/login" className="eco-outline">Sign In</Link>
          </div>
        </div>

        {/* Pinterest-style cards */}
        <div className="masonry">
          {["Camera", "Bag", "Table", "Lamp"].map((item, i) => (
            <div className="card" key={i}>
              <div className="masonry-image"></div>
              <h3>{item}</h3>
              <p className="auction-price">Live Auction</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
