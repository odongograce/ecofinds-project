import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "buyer"
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.role === "buyer") navigate("/buyer");
    if (form.role === "seller") navigate("/seller");
    if (form.role === "admin") navigate("/admin");
  };

  return (
    <div className="auth">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />

        <select name="role" onChange={handleChange}>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
