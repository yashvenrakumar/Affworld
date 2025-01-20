import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken); // Set the token from localStorage if it exists
    }
  }, []);

  const fetchWithAuth = async (url, options = {}) => {
    const headers = {
      Authorization: `Bearer ${token}`,
      ...options.headers, // Merge any additional headers
    };

    return axios({
      ...options,
      url,
      headers,
    });
  };

  return { token, fetchWithAuth };
};

export default useAuth;
