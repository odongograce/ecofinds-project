import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div>
          <h1>Discover. Bid. Reuse.</h1>
          <p>
            EcoFinds is a sustainable auction platform connecting buyers and
            sellers for quality second-hand items.
          </p>
        </div>

        <img
          className="hero-img"
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          alt="Auction"
        />
      </section>

      <section id="about" className="section">
        <h2>About EcoFinds</h2>
        <p>
          We promote sustainability by giving products a second life through
          trusted auctions.
        </p>
      </section>

      <section id="auctions" className="section">
        <h2>Live Auctions</h2>

        <div className="auction-grid">
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

      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>Email: support@ecofinds.com</p>
      </section>

      <Footer />
    </>
  );
}
