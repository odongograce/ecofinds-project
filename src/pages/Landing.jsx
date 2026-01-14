import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex justify-between px-10 py-6">
        <h1 className="text-green-400 font-bold text-xl">ecoFinds</h1>
        <div className="flex gap-6">
          <Link to="/login">Sign In</Link>
          <Link to="/signup" className="bg-green-500 px-5 py-2 rounded-full text-black">
            Sign Up
          </Link>
        </div>
      </nav>

      <section className="grid md:grid-cols-2 gap-16 px-10 pt-24">
        <div>
          <h2 className="text-6xl font-extrabold leading-tight">
            Discover.<br />Bid.<br />Reuse.
          </h2>
          <p className="text-white/60 mt-6 max-w-md">
            Sustainable auctions for quality second-hand items.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {["Camera", "Bag", "Table", "Lamp"].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 p-6 rounded-3xl border border-white/10"
              style={{ marginTop: i % 2 ? "80px" : "0px" }}
            >
              <div className="h-40 bg-white/10 rounded-xl mb-4" />
              <h3>{item}</h3>
              <p className="text-green-400 text-sm">Live Auction</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
