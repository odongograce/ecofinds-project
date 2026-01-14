import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Landing() {
return (
<div>
<Navbar />


<section id="hero" className="hero">
<div className="hero-text">
<h1>Buy & Sell Sustainable Items</h1>
<p>Eco-friendly auctions made simple.</p>
</div>
</section>


<section id="about" className="section">
<h2>About Us</h2>
<p>
ecoFinds is a sustainable auction platform connecting buyers and sellers.
</p>
</section>
<section className="section auctions">
<h2>Live Auctions</h2>
<div className="auction-grid">
{[1,2,3].map(i => (
<div key={i} className="auction-card">
<img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" />
<h4>Eco Item {i}</h4>
<span>Starting: $50</span>
<button>Learn More</button>
</div>
))}
</div>
</section>


<section id="contact" className="section">
<h2>Contact Us</h2>
<p>Email: support@ecofinds.com</p>
<p>Phone: +254 700 000 000</p>
</section>


<Footer />
</div>
);
}