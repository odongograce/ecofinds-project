import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="fixed right-0 top-0 w-80 h-full bg-black p-6 text-white">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>{item.name}</span>
          <button onClick={() => removeFromCart(item.id)}>❌</button>
        </div>
      ))}
      <p className="mt-4 font-bold">Total: ${total}</p>
    </div>
  );
}
