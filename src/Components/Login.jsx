import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/auth";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await loginUser(email, password);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80%]   text-[#F5F0EA] font-sans">
     

      {/* Right form panel */}
      <div className="flex flex-1 max-w-[400px] items-center bg-[#14110F] rounded-2xl justify-center p-8">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm flex flex-col gap-4"
        >
          <span className="uppercase text-[11px] tracking-[0.12em] text-green-600 font-semibold">
            Welcome back
          </span>
          <h2 className="font-display text-2xl m-0 mb-2">Log in to continue</h2>

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
            className="mt-2 bg-green-500 text-[#14110F] rounded-lg py-3 font-semibold text-sm hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>

          <div className="flex items-center gap-3 my-1">
            <div className="h-px flex-1 bg-[#322B25]" />
            <span className="text-xs text-[#8A8078]">or</span>
            <div className="h-px flex-1 bg-[#322B25]" />
          </div>

          
       <a   href="http://localhost:5000/api/auth/google"  className="flex items-center justify-center gap-2.5 bg-[#1E1A17] border border-[#322B25] rounded-lg py-3 text-sm font-medium text-[#F5F0EA] hover:bg-[#241F1B] transition-colors">
           
          
            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z"/>
              <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 0 0 9 18z"/>
              <path fill="#FBBC05" d="M3.97 10.72A5.4 5.4 0 0 1 3.68 9c0-.6.1-1.18.29-1.72V4.95H.96A9 9 0 0 0 0 9c0 1.45.35 2.83.96 4.05l3.01-2.33z"/>
              <path fill="#EA4335" d="M9 3.58c1.32 0 2.51.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58z"/>
            </svg>
            Continue with Google
          </a>

          <p className="text-center text-sm text-[#8A8078] mt-2">
            No account?{" "}
            <Link to="/register" className="text-[#FF6B4A] no-underline">
              Create one
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}