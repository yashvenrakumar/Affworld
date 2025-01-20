import React, { useState } from "react";
import useRegister from "../../hooks/useRegister"; // Import the custom hook
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleRegister, isLoading } = useRegister(); // Use the custom hook
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4"
      style={{
        backgroundImage: "url('https://picsum.photos/2000/1800')",
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
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out shadow-md"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out shadow-md"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out shadow-md"
        />

        <button
          onClick={() => handleRegister(name, email, password)}
          disabled={isLoading}
          className={`w-full bg-green-500 text-white py-3 px-4 rounded-lg shadow-md hover:bg-green-600 transition ${
            isLoading ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          {isLoading ? "Registering..." : "Register"}
        </button>

        <div className="mt-6 text-center">
          <button
            onClick={goToLogin}
            className="w-full bg-gray-500 text-white py-3 px-4 rounded-lg mb-4 shadow-md hover:bg-gray-600 transition"
          >
            Already have an account? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
