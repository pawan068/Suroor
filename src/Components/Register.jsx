import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../api/auth";


export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await registerUser(name, email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[80%] justify-center  text-[#F5F0EA] font-sans">
     

 

      <div className="flex flex-1 bg-[#14110F] rounded-2xl max-w-[400px] items-center justify-center p-8">
        <form
          onSubmit={handleRegister}
          className="w-full max-w-sm flex flex-col gap-4"
        >
          <span className="uppercase text-[11px] tracking-[0.12em] text-green-600 font-semibold">
            Get started
          </span>
          <h2 className="font-display text-2xl m-0 mb-2">Create your account</h2>

          <label className="flex flex-col gap-1.5 text-sm text-[#B8AFA6]">
            Name
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-[#1E1A17] border border-[#322B25] rounded-lg px-3.5 py-3 text-[#F5F0EA] text-sm outline-none focus:border-green-300 transition-colors"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm text-[#B8AFA6]">
            Email
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-[#1E1A17] border border-[#322B25] rounded-lg px-3.5 py-3 text-[#F5F0EA] text-sm outline-none focus:border-green-300 transition-colors"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm text-[#B8AFA6]">
            Password
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-[#1E1A17] border border-[#322B25] rounded-lg px-3.5 py-3 text-[#F5F0EA] text-sm outline-none focus:border-green-300 transition-colors"
            />
          </label>

          {error && <p className="text-[#FF6B4A] text-sm m-0">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-green-500 cursor-pointer text-[#14110F] rounded-lg py-3 font-semibold text-sm hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
          >
            {loading ? "Signing up..." : "Sign up"}
          </button>

          <p className="text-center text-sm text-[#8A8078] mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-green-100 no-underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}