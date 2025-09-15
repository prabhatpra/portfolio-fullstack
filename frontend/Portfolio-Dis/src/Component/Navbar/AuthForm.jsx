import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AuthForm = ({ isLogin, setIsLogin, forgotType, setForgotType }) => {
  const [formData, setFormData] = useState({ userName: "", email: "", password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!formData.userName || !formData.password) {
      setErrorMsg("Please fill all fields");
      return;
    }
    alert("Login successful!");
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }
    setShowSuccessMsg(true);
    setTimeout(() => setIsLogin(true), 800);
  };

  if (forgotType) {
    return (
      <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          {forgotType === "username" ? "Recover Username" : "Reset Password"}
        </h2>
        <form onSubmit={(e) => { e.preventDefault(); alert("Reset link sent"); setForgotType(null); }}>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border p-2 mb-4 rounded text-sm"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <button className="bg-gradient-to-tr from-blue-300 via-purple-300 to-indigo-300 text-black w-full py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {showSuccessMsg && (
        <div className="text-green-700 bg-green-100 p-3 mb-4 text-center rounded">
          🎉 Signup successful! You can now login.
        </div>
      )}
      {errorMsg && (
        <div className="text-red-700 bg-red-100 p-3 mb-4 text-center rounded">
          {errorMsg}
        </div>
      )}

      <h2 className="text-xl sm:text-2xl font-bold mb-4">{isLogin ? "Login" : "Signup"}</h2>
      <form onSubmit={isLogin ? handleLoginSubmit : handleSignupSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="Username"
          className="w-full border p-2 mb-4 rounded text-sm"
          value={formData.userName}
          onChange={handleChange}
          required
        />
        {!isLogin && (
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-2 mb-4 rounded text-sm"
            value={formData.email}
            onChange={handleChange}
            required
          />
        )}
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="w-full border p-2 rounded text-sm pr-10"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {!isLogin && (
          <div className="relative mb-4">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full border p-2 rounded text-sm pr-10"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        )}
        <button type="submit" className="bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-300 text-black px-4 py-2 rounded w-full mb-4 hover:text-white">
          {isLogin ? "Login" : "Signup"}
        </button>
      </form>
      <p className="text-center text-sm">
        {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-600 font-medium underline"
        >
          {isLogin ? "Signup" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;
