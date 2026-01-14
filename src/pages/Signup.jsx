import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "buyer"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // FRONTEND ONLY (mock signup)
    console.log("User registered:", form);

    alert("Signup successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="auth">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <input
          name="name"
          placeholder="username"
          required
          onChange={handleChange}
        />

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
        </select>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
