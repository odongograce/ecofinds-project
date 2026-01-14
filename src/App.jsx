// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { CartProvider } from "./context/CartContext";
// import { ThemeProvider } from "./context/ThemeContext";
// import "./App.css";

// import Landing from "./pages/Landing";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Home from "./pages/Home";
// import ProductDetails from "./pages/ProductDetails";

// export default function App() {
//   return (
//     <ThemeProvider>
//       <CartProvider>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Landing />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/product/:id" element={<ProductDetails />} />
//           </Routes>
//         </BrowserRouter>
//       </CartProvider>
//     </ThemeProvider>
//   );
// }
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
    </BrowserRouter>
  );
}
