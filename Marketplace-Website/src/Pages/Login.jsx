import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hook/useAuth";
import toast from "react-hot-toast";
import UseAxios from "../Hook/UseAxios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userLogin, signInWithGoogle, logOut } = useAuth();
  const navigate = useNavigate();
  const Axios = UseAxios();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Logging in...");

    try {
      await userLogin(email, password);
      const res = await Axios.post("/user/access-token", { email });

      if (res.data.Success) {
        toast.success("Logged in successfully!", { id: toastId, duration: 3000 });
        navigate("/");
        window.location.reload();
      } else {
        logOut();
        toast.error("Login failed. Please try again.", { id: toastId, duration: 3000 });
      }
    } catch (error) {
      toast.error(error.message, { id: toastId, duration: 3000 });
    }
  };

  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Logging in with Google...");

    try {
      const user = await signInWithGoogle();
      const userData = {
        name: user?.user?.displayName,
        email: user?.user?.email,
        role: "user",
      };
      const res = await Axios.put(
        `/user/create-user/${user?.user?.email}`,
        userData
      );
      const response = await Axios.post("/user/access-token", {
        email: user?.user?.email,
      });

      if (res.data) {
        toast.success("Logged in successfully!", { id: toastId, duration: 3000 });
        navigate("/");
        window.location.reload();
      } else {
        logOut();
        toast.error("Login failed. Please try again.", { id: toastId, duration: 3000 });
      }
    } catch (error) {
      toast.error(error.message, { id: toastId, duration: 3000 });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-pink-400 to-purple-500 py-10 text-center">
          <h1 className="text-4xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-100 mt-2">Log in to explore our exclusive collection</p>
        </div>

        {/* Form Section */}
        <form className="p-8" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
              onBlur={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
              onBlur={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p className="text-center text-sm mb-6">
            Don&apos;t have an account?{' '}
            <NavLink
              to="/register"
              className="text-pink-500 font-semibold hover:underline"
            >
              Sign Up
            </NavLink>
          </p>
          <button
            type="submit"
            className="w-full py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-all"
          >
            Login
          </button>
          <div className="divider my-6 text-gray-400">OR</div>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
          >
            <FcGoogle className="w-6 h-6" /> Login with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;