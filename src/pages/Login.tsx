import { useState, useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Zap, ShieldCheck, Sparkles } from "lucide-react";
import SEO from "../components/SEO";
import { Eye, EyeOff, User, Lock, ArrowRight } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const { login, loading, error, token } = useAuthStore();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (token) {
      navigate("/products");
    }
  }, [token, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      toast.error("Please enter your credentials");
      return;
    }

    const success = await login(form);

    if (success) {
      toast.success("Welcome back! 🚀");
      navigate("/products");
    } else {
      toast.error("Access denied. Please check your credentials.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center  overflow-hidden bg-slate-50 font-sans">
      <SEO title="Login" description="Login to your LuxeCart account to continue shopping." />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 lg:px-8">
        <div className="relative z-10 w-full md:block hidden">
          <h1 className="text-4xl lg:text-5xl font-display font-semibold text-slate-900 mb-6 ">
            Welcome to <img src="/logo.webp" alt="LuxeCart Logo" className="w-40 h-10 inline-flex" /><br />
            <span className="text-2xl lg:text-3xl text-slate-600 mt-2 block">Buy Quality Products Online – Fast, Secure & Affordable</span>
          </h1>
          <p className="text-slate-500 mb-10 text-lg max-w-xl">
            Shop online products at the best prices with Cartify. Discover trending items, manage your shopping cart efficiently,
            and enjoy a fast, secure, and user-friendly e-commerce platform.
          </p>

          <div className="mt-8 flex gap-6 text-sm text-slate-500">

            <div className="flex items-start gap-3">
              <div className="bg-blue-50 p-2 rounded-lg">
                <Zap className="text-blue-600" size={18} />
              </div>
              <div>
                <p className="font-semibold text-slate-800">Fast</p>
                <p>Optimized performance</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-green-50 p-2 rounded-lg">
                <ShieldCheck className="text-green-600" size={18} />
              </div>
              <div>
                <p className="font-semibold text-slate-800">Secure</p>
                <p>Safe authentication</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-purple-50 p-2 rounded-lg">
                <Sparkles className="text-purple-600" size={18} />
              </div>
              <div>
                <p className="font-semibold text-slate-800">Simple</p>
                <p>Easy shopping experience</p>
              </div>
            </div>

          </div>
          <img
            src="/login-logo.png"
            alt="Login Illustration"
            className="w-full max-w-[270px] mt-12 "
            style={{ mixBlendMode: "darken" }}
            loading="lazy"
          />
        </div>
        <div className="relative z-10 w-full max-w-md mx-auto lg:max-w-xl px-4 lg:px-6">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">

            <div className="text-center mb-8">
              <h1 className="text-4xl font-display font-bold text-slate-900 mb-3 tracking-tight">
                Login
              </h1>
              <p className="text-slate-500 font-medium border-b border-slate-200 pb-6">Welcome back, please login.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                  Username
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    placeholder="emilys"
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                    className="w-full pl-12 pr-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-700 placeholder:text-slate-400 shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <Lock size={18} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="w-full pl-12 pr-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-700 placeholder:text-slate-400 shadow-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group relative w-full bg-slate-900 text-white py-4 rounded-2xl font-bold tracking-wide overflow-hidden transition-all hover:bg-slate-800 active:scale-[0.98] disabled:opacity-70 cursor-pointer"
              >
                <div className="relative z-10 flex items-center justify-center gap-2">
                  <span>{loading ? "Authenticating..." : "Login"}</span>
                  {!loading && <ArrowRight size={18} />}
                </div>
                <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </form>

            {error && (
              <div className="mt-6 p-3 bg-red-50 rounded-xl border border-red-100">
                <p className="text-red-500 text-xs font-bold text-center uppercase tracking-tight">
                  {error}
                </p>
              </div>
            )}

            <div className="mt-10 pt-8 border-t border-slate-100 text-center">
              <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-3">
                Demo Credentials
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
                <span className="text-xs font-bold text-slate-600">emilys</span>
                <span className="text-slate-300">|</span>
                <span className="text-xs font-bold text-slate-600">emilyspass</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Login;

