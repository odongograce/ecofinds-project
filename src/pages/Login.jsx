import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="bg-white/5 p-10 rounded-3xl border border-white/10 w-96">
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>

        <button
          onClick={() => navigate("/home")}
          className="bg-green-500 w-full py-3 rounded-xl text-black font-semibold"
        >
          Mock Login
        </button>
      </div>
    </div>
  );
}
