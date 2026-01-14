import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BuyerDashboard from "./pages/BuyerDashboard";
import SellerDashboard from "./pages/SellerDashboard";
import { AuctionProvider } from "./context/AuctionContext";

export default function App() {
  return (
    <AuctionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/buyer" element={<BuyerDashboard />} />
          <Route path="/seller" element={<SellerDashboard />} />
        </Routes>
      </BrowserRouter>
    </AuctionProvider>
  );
}
