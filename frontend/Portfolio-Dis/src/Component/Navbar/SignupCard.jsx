import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const SignupCard = ({
  formData,
  setFormData,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  handleSignupSubmit,
  setIsLogin,
  errorMsg
}) => {

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="absolute inset-0  p-4 sm:p-6 shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">

      {errorMsg && (
        <div className="text-red-700 bg-red-100 p-3 mb-4 text-center rounded">{errorMsg}</div>
      )}
     
       <h2 className="text-center text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 mb-2 drop-shadow-md">
  Signup
</h2>


     <div className="mb-4 text-center text-sm sm:text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 drop-shadow-md">
  🚀 Sign up to explore my projects and portfolio updates.
</div>

      

      <form onSubmit={handleSignupSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="Username"
          className="w-full border p-2 mb-4 rounded text-sm"
          value={formData.userName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-2 mb-4 rounded text-sm"
          value={formData.email}
          onChange={handleChange}
          required
        />
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

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-300 text-black px-4 py-2 rounded hover:text-white w-28 sm:w-32 hover:w-64 transition-all duration-300 shadow-md"
          >
            Signup
          </button>
        </div>
      </form>

      <p className="mt-4 text-center text-sm text-gray-700 dark:text-gray-300">
        Already have an account?{" "}
        <button
          onClick={() => setIsLogin(true)}
          className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text font-semibold text-base hover:underline transition-all duration-300"
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default SignupCard;
