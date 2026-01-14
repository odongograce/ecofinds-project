export default function SellerDashboard() {
  return (
    <div className="page">
      <h2>Upload Auction Item</h2>

      <form className="card">
        <input placeholder="Title" />
        <input placeholder="Image URL" />
        <input placeholder="Starting Price" type="number" />
        <input type="date" />
        <textarea placeholder="Description" />
        <button>Add Item (Pending Approval)</button>
      </form>
    </div>
  );
}
