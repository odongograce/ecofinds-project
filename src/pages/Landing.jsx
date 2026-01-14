import { Link } from "react-router-dom";
import "../App.css";

export default function Landing() {
  return (
    <div className="landing">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">ecoFinds</div>
        <div className="nav-actions">
          <Link className="btn-outline" to="/login">Sign In</Link>
          <Link className="btn-primary" to="/signup">Sign Up</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero container">
        {/* TEXT */}
        <div className="hero-text">
          <h1>
            Discover.<br />
            Bid.<br />
            Reuse.
          </h1>
          <p>
            Sustainable auctions for quality second-hand items.
            Let value rise naturally through competitive bidding.
          </p>

          <div className="hero-actions">
            <Link to="/signup" className="btn-primary">Get Started</Link>
            <Link to="/login" className="btn-outline">Sign In</Link>
          </div>
        </div>

        {/* IMAGE GRID */}
        <div className="hero-grid">
          {items.map((item, i) => (
            <div key={i} className="hero-card" style={{ marginTop: i % 2 ? "60px" : "0" }}>
              <img src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
              <span>Live Auction</span>
            </div>
          ))}
        </div>

        <div className="glow" />
      </section>
    </div>
  );
}

const items = [
  {
    title: "Vintage Camera",
    img: "https://images.unsplash.com/photo-1519183071298-a2962eadcdb2"
  },
  {
    title: "Leather Bag",
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
  },
  {
    title: "Wooden Table",
    img: "https://images.unsplash.com/photo-1582582621959-48d27397dc69"
  },
  {
    title: "Retro Lamp",
    img: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f"
  }
];
