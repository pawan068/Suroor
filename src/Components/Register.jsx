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
    <div className="flex min-h-screen bg-[#14110F] text-[#F5F0EA] font-sans">
      <div className="hidden md:flex flex-1 flex-col items-center justify-center gap-6 border-r border-[#2A241F] bg-[radial-gradient(circle_at_30%_20%,#241D18,#14110F_70%)]">
        <div className="flex items-end gap-1.5 h-16">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="w-1.5 rounded-sm bg-[#FF6B4A] animate-eq"
              style={{ animationDelay: `${i * 0.12}s` }}
            />
          ))}
        </div>
        <h1 className="font-display text-4xl tracking-tight m-0">Musicfy</h1>
        <p className="text-[#8A8078] text-sm m-0">Your sound, always on.</p>
      </div>

      <div className="flex flex-1 items-center justify-center p-8">
        <form
          onSubmit={handleRegister}
          className="w-full max-w-sm flex flex-col gap-4"
        >
          <span className="uppercase text-[11px] tracking-[0.12em] text-[#FF6B4A] font-semibold">
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
              className="bg-[#1E1A17] border border-[#322B25] rounded-lg px-3.5 py-3 text-[#F5F0EA] text-sm outline-none focus:border-[#FF6B4A] transition-colors"
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
              className="bg-[#1E1A17] border border-[#322B25] rounded-lg px-3.5 py-3 text-[#F5F0EA] text-sm outline-none focus:border-[#FF6B4A] transition-colors"
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
              className="bg-[#1E1A17] border border-[#322B25] rounded-lg px-3.5 py-3 text-[#F5F0EA] text-sm outline-none focus:border-[#FF6B4A] transition-colors"
            />
          </label>

          {error && <p className="text-[#FF6B4A] text-sm m-0">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-[#FF6B4A] text-[#14110F] rounded-lg py-3 font-semibold text-sm hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
          >
            {loading ? "Signing up..." : "Sign up"}
          </button>

          <p className="text-center text-sm text-[#8A8078] mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-[#FF6B4A] no-underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}