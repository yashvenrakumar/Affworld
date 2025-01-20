import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleResetPassword = async (email, newPassword) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/resetPasswor`,
        { email, newPassword }
      );
      alert("Password reset successful");
      navigate("/login");

      return response;
    } catch (error) {
      console.error("Password reset failed:", error.message || error);
      setError("Failed to reset password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return { handleResetPassword, isLoading, error };
};

export default useResetPassword;
