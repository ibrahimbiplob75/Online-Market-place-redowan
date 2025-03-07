import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import toast from "react-hot-toast";
import UseAxios from "../Hook/UseAxios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [imageLink, setImageLink] = useState(""); // New state for image link
  const { createUser, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const Axios = UseAxios();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters long, include one uppercase letter, one number, and one special character"
      );
      return;
    }

    // Confirm password validation
    if (confirm !== password) {
      toast.error("Passwords do not match");
      return;
    }

    const toastId = toast.loading("Creating user...");
    const userData = {
      name,
      email,
      image: imageLink, // Include image link in user data
      role: "user",
    };

    try {
      await createUser(email, password);
      const res = await Axios.put(`/user/create-user/${email}`, userData);
      if (res.data.upsertedId) {
        toast.success("User Created", { id: toastId });
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message, { id: toastId });
    }
  };

  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Logging in...");

    try {
      const user = await signInWithGoogle();
      const userData = {
        name: user?.user?.displayName,
        email: user?.user?.email,
        image: user?.user?.photoURL, // Use Google profile photo as image link
        role: "user",
      };
      const res = await Axios.put(
        `/user/create-user/${user?.user?.email}`,
        userData
      );
      if (res.data) {
        toast.success("Logged in", { id: toastId });
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      toast.error("Google login failed", { id: toastId });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-200 flex justify-center items-center">
      <div className="card w-full max-w-lg shadow-xl bg-white rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center text-purple-600 mb-4">
            Create Your Account
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Join with us and explore exclusive collections and offers.
          </p>
          <form onSubmit={handleSubmit}>
            {/* Full Name Input */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-lg">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered rounded-lg"
                onBlur={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email Input */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-lg">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered rounded-lg"
                onBlur={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-lg">Password</span>
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="input input-bordered rounded-lg"
                onBlur={(e) => setPassword(e.target.value)}
                required
              />
              <p className="text-sm text-gray-500 mt-2">
                Password must be at least 8 characters, include one uppercase letter, one number, and one special character.
              </p>
            </div>

            {/* Confirm Password Input */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-lg">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="input input-bordered rounded-lg"
                onBlur={(e) => setConfirm(e.target.value)}
                required
              />
            </div>

            {/* Image Link Input */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-lg">Profile Image Link</span>
              </label>
              <input
                type="url"
                placeholder="Enter your profile image link"
                className="input input-bordered rounded-lg"
                onBlur={(e) => setImageLink(e.target.value)}
                required
              />
              <p className="text-sm text-gray-500 mt-2">
                Provide a valid URL for your profile image.
              </p>
            </div>

            {/* Login Link */}
            <p className="text-center text-sm mb-4">
              Already have an account?{' '}
              <NavLink
                to="/login"
                className="text-purple-600 font-bold hover:underline"
              >
                Login here
              </NavLink>
            </p>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="btn btn-primary w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-2"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="divider my-6 text-gray-500">Or continue with</div>

          {/* Google Sign Up Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full flex justify-center items-center border-gray-400 rounded-lg py-2 hover:bg-gray-100"
          >
            <FcGoogle className="mr-3 text-2xl" /> Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;