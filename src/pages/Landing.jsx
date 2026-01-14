import Navbar from "../components/Navbar";

const auctions = [
  {
    title: "Vintage Camera",
    img: "https://images.unsplash.com/photo-1519183071298-a2962be96c31?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Leather Bag",
    img: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Wooden Table",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Classic Lamp",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Landing() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Discover.<br />Bid.<br />Reuse.
          </h1>
          <p>Sustainable auctions for quality second-hand items.</p>
        </div>

        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80"
          alt="Live Auction"
        />
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About ecoFinds</h2>
        <p>
          ecoFinds is a sustainable auction platform where second-hand items
          gain new life through competitive bidding. We connect sellers and
          buyers who value reuse and environmental responsibility.
        </p>
      </section>

      {/* AUCTIONS */}
      <section id="auctions" className="section">
        <h2>Live Auctions</h2>

        <div className="auction-grid">
          {auctions.map((item, index) => (
            <div className="auction-card" key={index}>
              <img src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
              <span>Live Auction</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>Email: support@ecofinds.com</p>
        <p>Phone: +254 700 000 000</p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} ecoFinds. All rights reserved.
      </footer>
    </>
  );
}
