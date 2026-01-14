import { useState } from "react";

export default function SellerDashboard() {
  const [item, setItem] = useState("");

  const submitItem = (e) => {
    e.preventDefault();
    alert("Item submitted for admin approval");
  };

  return (
    <div className="section">
      <h2>Upload Auction Item</h2>

      <form className="auth-box" onSubmit={submitItem}>
        <input placeholder="Item name" required />
        <input placeholder="Image URL" required />
        <input type="number" placeholder="Starting Price" required />
        <button>Add Item</button>
      </form>
    </div>
  );
}
