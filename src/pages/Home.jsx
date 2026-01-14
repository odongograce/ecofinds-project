import Navbar from "../components/Navbar";
import AuctionCard from "../components/AuctionCard";
import { auctions } from "../data/auctions";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h2 className="page-title">Live Auctions</h2>
        <p className="page-subtitle">
          Bid on trending second-hand items
        </p>

        <div className="grid grid-3">
          {auctions.map(item => (
            <AuctionCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
