import { useParams } from "react-router-dom";
import { auctions } from "../data/auctions";

export default function ProductDetails() {
  const { id } = useParams();
  const product = auctions.find(a => a.id === Number(id));

  if (!product) return <p>Not found</p>;

  return (
    <div className="bg-black min-h-screen text-white p-10">
      <h2 className="text-4xl font-bold">{product.name}</h2>
      <p>{product.category}</p>
      <p className="mt-4">{product.description}</p>
      <p className="text-green-400 mt-4">Starting Price: ${product.startPrice}</p>
      <p>Reviews: ⭐ {product.reviews}</p>
    </div>
  );
}
