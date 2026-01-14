import Navbar from "../components/Navbar";
import AuctionCard from "../components/AuctionCard";
import { auctions } from "../data/auctions";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="p-10 grid md:grid-cols-3 gap-6">
        {auctions.map(item => (
          <AuctionCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
