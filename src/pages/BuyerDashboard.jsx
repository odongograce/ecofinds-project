import { useContext, useState } from "react";
import { AuctionContext } from "../context/AuctionContext";

export default function BuyerDashboard() {
  const { auctions, placeBid } = useContext(AuctionContext);
  const [bid, setBid] = useState("");

  return (
    <div className="page">
      <h2>Live Auctions</h2>

      <div className="auctions">
        {auctions
          .filter((a) => a.approved)
          .map((item) => (
            <div className="auction-card" key={item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
              <p>Starting: ${item.startingPrice}</p>
              <p>Highest: ${item.highestBid}</p>

              <input
                type="number"
                placeholder="Your bid"
                onChange={(e) => setBid(e.target.value)}
              />
              <button onClick={() => placeBid(item.id, bid)}>
                Place Bid
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
