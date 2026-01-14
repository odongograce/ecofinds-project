const auctions = [
  {
    title: "Vintage Camera",
    img: "https://images.unsplash.com/photo-1519183071298-a2962be96c31?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Leather Bag",
    img: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Wooden Table",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Classic Lamp",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80"
  }
];

export default function Home() {
  return (
    <section className="hero">
      {/* LEFT SIDE */}
      <div className="hero-text">
        <h1>
          Discover.<br />
          Bid.<br />
          Reuse.
        </h1>

        <p>
          Sustainable auctions for quality second-hand items.
        </p>

        <div className="hero-actions">
          <button className="btn-primary">Get Started</button>
          <button className="btn-outline">Sign In</button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-grid">
        {auctions.map((item, index) => (
          <div className="hero-card" key={index}>
            <img
              src={item.img}
              alt={item.title}
              className="hero-card-img"
            />
            <h4>{item.title}</h4>
            <span>Live Auction</span>
          </div>
        ))}
      </div>
    </section>
  );
}
