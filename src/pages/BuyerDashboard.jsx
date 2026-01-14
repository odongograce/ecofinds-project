import { auctions } from "../data/auctions";

export default function BuyerDashboard() {
  return (
    <div className="section">
      <h2>Live Auctions</h2>

      <div className="auction-grid">
        {auctions.map((a) => (
          <div className="auction-card" key={a.id}>
            <img src={a.image} />
            <h4>{a.title}</h4>
            <span>Current Bid: ${a.highestBid}</span>
            <button className="btn-primary">Place Bid</button>
          </div>
        ))}
      </div>
    </div>
  );
}
