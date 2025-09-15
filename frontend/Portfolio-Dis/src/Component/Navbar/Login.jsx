import React, { useState, useRef } from "react";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import LoginCard from "./LoginCard";
import SignupCard from "./SignupCard";
import { registerUser, loginUser } from "./apiService";

const Login = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ userName: "", email: "", password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [forgotType, setForgotType] = useState(null);
  const [forgotEmail, setForgotEmail] = useState("");
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 640) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRotateY(((x / rect.width) - 0.5) * 30);
    setRotateX(((y / rect.height) - 0.5) * -30);
  };

  const handleTouchMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const touch = e.touches[0];
    const tiltFactor = window.innerWidth < 640 ? 10 : 30;
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    setRotateY(((x / rect.width) - 0.5) * tiltFactor);
    setRotateX(((y / rect.height) - 0.5) * -tiltFactor);
  };

  const handleMouseLeave = () => { setRotateX(0); setRotateY(0); setIsHovering(false); };
  const handleMouseEnter = () => setIsHovering(true);

  const glowShadow = isHovering
    ? `${-rotateY / 3}px ${rotateX / 3}px 25px 5px rgba(0,200,255,0.6), inset ${rotateY / 5}px ${-rotateX / 5}px 15px rgba(0,200,255,0.3)`
    : "none";

  const handleLoginPopup = () => { setShowPopup(true); setIsLogin(true); setFormData({ userName: "", email: "", password: "", confirmPassword: "" }); setErrorMsg(""); };
  const handleClosePopup = () => { setShowPopup(false); setForgotType(null); setForgotEmail(""); setErrorMsg(""); };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) { setErrorMsg("Passwords do not match"); return; }
    try { await registerUser(formData); setIsLogin(true); setFormData({ userName: "", email: "", password: "", confirmPassword: "" }); setErrorMsg(""); alert("Signup successful!"); }
    catch (error) { setErrorMsg(error.response?.data?.message || "Signup failed"); }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try { await loginUser({ userName: formData.userName, password: formData.password }); setErrorMsg(""); alert("Login successful!"); setShowPopup(false); }
    catch (error) { setErrorMsg(error.response?.data?.message || "Login failed"); }
  };

  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    if (!forgotEmail) { setErrorMsg("Enter your email"); return; }
    if (forgotType === "username") alert(`Username for ${forgotEmail} is: demo_user123`);
    if (forgotType === "password") alert(`Password reset link sent to: ${forgotEmail}`);
    setForgotEmail(""); setForgotType(null); setErrorMsg("");
  };

  return (
    <div>
      {!showPopup && (
        <div className="text-center mt-4">
          <button
            onClick={handleLoginPopup}
            className="bg-gradient-to-br from-blue-50 via-cyan-200 to-purple-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-800 text-black dark:text-white py-1 px-5 rounded-full flex items-center gap-2 mx-auto shadow-md hover:shadow-[0_0_20px_rgba(0,200,255,0.6)] hover:scale-105 transition-all duration-300"
          >
            <FaUser className="text-xl" />
            <span>Login</span>
          </button>
        </div>
      )}

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onTouchStart={() => setIsHovering(true)}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseLeave}
            style={{ rotateX, rotateY, transformPerspective: 1000, boxShadow: glowShadow, transition: "box-shadow 0.1s ease-out, transform 0.2s ease-out" }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, y: -20 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="bg-transparent text-black dark:text-white p-4 sm:p-6 rounded-2xl w-[90%] max-w-xs sm:max-w-md relative backdrop-blur-sm text-sm sm:text-base max-h-[90vh] overflow-y-auto"
          >
            <button onClick={handleClosePopup} className="absolute top-2 right-3 text-lg z-50">✖</button>

            {forgotType ? (
              <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-md">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                  {forgotType === "username" ? "Recover Username" : "Reset Password"}
                </h2>
                <form onSubmit={handleForgotSubmit}>
                  <input type="email" placeholder="Enter your email" className="w-full border p-2 mb-4 rounded text-sm" value={forgotEmail} onChange={(e) => setForgotEmail(e.target.value)} required />
                  <div className="flex justify-center">
                    <button type="submit" className="bg-gradient-to-tr from-blue-300 via-purple-300 to-indigo-300 text-black px-4 py-2 rounded hover:text-white w-32 hover:w-64 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(0,200,255,0.7)] text-xs sm:text-base">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="relative w-full perspective-1000 h-full min-h-[400px]">
                <motion.div animate={{ rotateY: isLogin ? 0 : 180 }} transition={{ duration: 0.8 }} className="relative w-full h-full [transform-style:preserve-3d]">
                  <LoginCard
                    formData={formData}
                    setFormData={setFormData}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    handleLoginSubmit={handleLoginSubmit}
                    setForgotType={setForgotType}
                    setIsLogin={setIsLogin}
                    errorMsg={errorMsg}
                  />
                  <SignupCard
                    formData={formData}
                    setFormData={setFormData}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    showConfirmPassword={showConfirmPassword}
                    setShowConfirmPassword={setShowConfirmPassword}
                    handleSignupSubmit={handleSignupSubmit}
                    setIsLogin={setIsLogin}
                    errorMsg={errorMsg}
                  />
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Login;
