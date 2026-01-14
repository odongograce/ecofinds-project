import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("buyer");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, role);

    if (role === "seller") navigate("/seller");
    else if (role === "admin") navigate("/admin");
    else navigate("/auctions");
  };

  return (
    <div className="auth">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input placeholder="Password" type="password" required />

        <select onChange={(e) => setRole(e.target.value)}>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
          <option value="admin">Admin</option>
        </select>

        <button>Login</button>
      </form>
    </div>
  );
}
