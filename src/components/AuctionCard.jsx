import { Link } from "react-router-dom";

export default function AuctionCard({ item }) {
  return (
    <div className="card">
      <div className="masonry-image"></div>
      <h3>{item.name}</h3>
      <p className="auction-price">Starting at ${item.startPrice}</p>

      <Link to={`/product/${item.id}`} className="eco-outline">
        View Details
      </Link>
    </div>
  );
}
