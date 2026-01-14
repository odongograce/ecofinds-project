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
        />
      </section>

      <section id="auctions" className="section">
        <h2>Live Auctions</h2>
      </section>

      <Footer />
    </>
  );
}
