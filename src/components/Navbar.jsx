// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import ThemeToggle from "./ThemeToggle";

// export default function Navbar() {
//   const { cart } = useCart();

//   return (
//     <nav className="flex justify-between px-10 py-6 bg-black text-white">
//       <Link to="/home" className="text-green-400 font-bold text-xl">ecoFinds</Link>
//       <div className="flex items-center gap-6">
//         <Link to="/home">Auctions</Link>
//         <Link to="/profile">👤</Link>
//         <ThemeToggle />
//         <span>🛒 {cart.length}</span>
//       </div>
//     </nav>
//   );
// }
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">ecoFinds</div>

      <div className="nav-actions">
        <button className="btn-outline">Sign In</button>
        <button className="btn-primary">Sign Up</button>
      </div>
    </nav>
  );
}
