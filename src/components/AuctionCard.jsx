import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function AuctionCard({ item }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
      <h3 className="font-semibold">{item.name}</h3>
      <p className="text-white/60">{item.category}</p>
      <p className="text-green-400 mt-2">${item.startPrice}</p>

      <div className="flex gap-4 mt-4">
        <Link to={`/product/${item.id}`} className="underline">
          View
        </Link>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    </div>
  );
}
