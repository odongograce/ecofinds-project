import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <button onClick={() => navigate("/home")} className="bg-green-500 px-8 py-3 rounded">
        Login
      </button>
    </div>
  );
}
