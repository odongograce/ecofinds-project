import { auctions } from "../data/auctions";

export default function AdminDashboard() {
  return (
    <div className="section">
      <h2>Pending Approvals</h2>

      {auctions.map((a) => (
        <div className="auction-card" key={a.id}>
          <h4>{a.title}</h4>
          <button>Approve</button>
        </div>
      ))}
    </div>
  );
}
