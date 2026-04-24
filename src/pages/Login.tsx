import { useState, useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
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
          <h1 className="text-5xl lg:text-6xl font-display font-semibold text-slate-900 mb-6 ">
            Welcome to <img src="/logo.webp" alt="LuxeCart Logo" className="w-40 h-10 inline-flex" /><br />
            <span className="text-3xl lg:text-4xl text-slate-700 mt-2 block">Buy Quality Products Online – Fast, Secure & Affordable</span>
          </h1>
          <p className="text-slate-500 mb-10 text-lg max-w-xl">
            Shop online products at the best prices with Cartify. Discover trending items, manage your shopping cart efficiently, 
    and enjoy a fast, secure, and user-friendly e-commerce platform.
          </p>

          <div className="flex items-center mb-10">
            <div className="flex -space-x-5 pr-3">
              <div className="group relative">
                <div className="absolute border border-gray-200 pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 -top-17 group-hover:mr-2 right-0 transition-all duration-400 pl-4 pr-12 py-2 rounded text-nowrap">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <p className="font-medium">Richard Nelson</p>
                      <svg className="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#2196F3" />
                      </svg>
                    </div>
                    <span className="text-xs text-slate-500">@richard</span>
                  </div>
                  <div className="size-3 border-r border-b border-gray-300/90 bg-white rotate-45 absolute right-4 -bottom-1.75"></div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                  alt="image"
                  className="size-12 rounded-full border-2 border-white group-hover:-translate-x-2 transition-all duration-400 z-2"
                />
              </div>
              <div className="group relative">
                <div className="absolute border border-gray-200 pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 -top-17 group-hover:mr-2 right-0 transition-all duration-400 pl-4 pr-12 py-2 rounded text-nowrap">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <p className="font-medium">Avery Johnson</p>
                      <svg className="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#2196F3" />
                      </svg>
                    </div>
                    <span className="text-xs text-slate-500">@averywrites</span>
                  </div>
                  <div className="size-3 border-r border-b border-gray-300/90 bg-white rotate-45 absolute right-4 -bottom-1.75"></div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                  alt="image"
                  className="size-12 rounded-full border-2 border-white group-hover:-translate-x-2 transition-all duration-400 z-2"
                />
              </div>
              <div className="group relative">
                <div className="absolute border border-gray-200 pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 -top-17 group-hover:mr-2 right-0 transition-all duration-400 pl-4 pr-12 py-2 rounded text-nowrap">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <p className="font-medium">Jordan Lee</p>
                      <svg className="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#2196F3" />
                      </svg>
                    </div>
                    <span className="text-xs text-slate-500">@jordantalks</span>
                  </div>
                  <div className="size-3 border-r border-b border-gray-300/90 bg-white rotate-45 absolute right-4 -bottom-1.75"></div>
                </div>
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png"
                  alt="image"
                  className="size-12 rounded-full border-2 border-white group-hover:-translate-x-2 transition-all duration-400 z-2"
                />
              </div>
              <div className="group relative">
                <div className="absolute border border-gray-200 pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 -top-17 group-hover:mr-2 right-0 transition-all duration-400 pl-4 pr-12 py-2 rounded text-nowrap">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <p className="font-medium">Noah Patel</p>
                      <svg className="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#2196F3" />
                      </svg>
                    </div>
                    <span className="text-xs text-slate-500">@noahpatel</span>
                  </div>
                  <div className="size-3 border-r border-b border-gray-300/90 bg-white rotate-45 absolute right-4 -bottom-1.75"></div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                  alt="image"
                  className="size-12 rounded-full border-2 border-white group-hover:-translate-x-2 transition-all duration-400 z-2"
                />
              </div>
              <div className="group relative">
                <div className="absolute border border-gray-200 pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 -top-17 group-hover:mr-2 right-0 transition-all duration-400 pl-4 pr-12 py-2 rounded text-nowrap">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <p className="font-medium">Oliver Brooks</p>
                      <svg className="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#2196F3" />
                      </svg>
                    </div>
                    <span className="text-xs text-slate-500">@oliverbrooks</span>
                  </div>
                  <div className="size-3 border-r border-b border-gray-300/90 bg-white rotate-45 absolute right-4 -bottom-1.75"></div>
                </div>
                <img
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt="image"
                  className="size-12 rounded-full border-2 border-white z-2"
                />
              </div>
            </div>
            <p className="text-sm font-medium text-slate-600">
              <span className="font-bold text-slate-900">20K+</span> buyers have joined us. Now it's your turn.
            </p>
          </div>
          <img
            src="/login.png"
            alt="Login Illustration"
            className="w-full mx-auto"
            loading="lazy"
          />
        </div>
        <div className="relative z-10 w-full max-w-md mx-auto lg:max-w-xl px-4 lg:px-6">
          <div className="glass bg-white/60 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-xl shadow-blue-900/5 border border-white/60">

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
                    className="w-full pl-12 pr-5 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-700 placeholder:text-slate-300"
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
                    className="w-full pl-12 pr-12 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-700 placeholder:text-slate-300"
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
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-[120px] animate-pulse delay-1000"></div>

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

