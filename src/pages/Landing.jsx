import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>EcoFinds Auction Platform</h1>
          <p>Bid. Sell. Discover sustainable products.</p>
        </div>

        <img
          className="hero-img"
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          alt="Auction"
        />
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <p>
          EcoFinds connects sellers and buyers through a trusted auction system
          focused on sustainability and transparency.
        </p>
      </section>

      {/* AUCTIONS PREVIEW */}
      <section id="auctions" className="section">
        <h2>Live Auctions</h2>

        <div className="auction-preview">
          <div className="auction-card">
            <img src="https://images.unsplash.com/photo-1606813902917-8a07f3c40b6f" />
            <h4>Vintage Camera</h4>
            <span>Starting at $50</span>
          </div>

          <div className="auction-card">
            <img src="https://images.unsplash.com/photo-1512499617640-c2f999018b72" />
            <h4>Classic Watch</h4>
            <span>Starting at $120</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>Email: support@ecofinds.com</p>
      </section>

      <Footer />
    </>
  );
}
