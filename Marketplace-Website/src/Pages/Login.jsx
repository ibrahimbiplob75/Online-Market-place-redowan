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
    const toastId = toast.loading("Logging in ...");

    try {
      await userLogin(email, password);
      const res = await Axios.post("/user/access-token", { email });

      if (res.data.Success) {
        toast.success("Logged in", { id: toastId });
        navigate("/");
        window.location.reload();
      } else {
        console.log("call logout");
        logOut();
      }
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Logging in ...");

    try {
      const user = await signInWithGoogle();
      const userData = {
        name: user?.user?.displayName,
        email: user?.user?.email,
        role: "student",
      };
      const res = await Axios.put(
        `/user/create-user/${user?.user?.email}`,
        userData
      );
      const response = await Axios.post("/user/access-token", {
        email: user?.user?.email,
      });

      if (res.data) {
        toast.success("Logged in", { id: toastId });
        navigate("/");
        window.location.reload();
      } else {
        console.log("call logout");
        logOut();
      }
    } finally {}
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex justify-center items-center px-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-indigo-500 py-8 text-center">
          <h1 className="text-4xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-200 mt-2">Log in to access exclusive content</p>
        </div>
        <form className="p-8" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              onBlur={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              onBlur={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p className="text-center text-sm mb-6">
            Don&apos;t have an account?{' '}
            <NavLink
              to="/register"
              className="text-primary font-bold hover:underline"
            >
              Sign Up
            </NavLink>
          </p>
          <button
            type="submit"
            className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-indigo-600 transition-all"
          >
            Login
          </button>
          <div className="divider mt-6">OR</div>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full py-3 border border-primary text-primary font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-all"
          >
            <FcGoogle className="w-6 h-6" /> Login with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
