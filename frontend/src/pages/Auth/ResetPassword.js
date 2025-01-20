import React, { useState } from "react";
import useResetPassword from "../../hooks/useResetPassword"; // Import the custom hook

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { handleResetPassword, isLoading, error } = useResetPassword(); // Use the hook

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match");
    } else {
      // Call the hook's handleResetPassword function
      handleResetPassword(email, newPassword);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4"
      style={{
        backgroundImage: "url('https://picsum.photos/2200/1800')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay with opacity */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-20"
        style={{ zIndex: -1 }}
      ></div>

      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg opacity-95">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Reset Password
        </h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out shadow-md"
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out shadow-md"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out shadow-md"
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}{" "}
        {/* Error message */}
        <button
          onClick={handleSubmit} // Use handleSubmit instead of handleResetPassword directly
          disabled={isLoading}
          className={`w-full bg-blue-500 text-white py-3 px-4 rounded-lg shadow-md hover:bg-blue-600 transition ${
            isLoading ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          {isLoading ? "Resetting..." : "Reset Password"}
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
