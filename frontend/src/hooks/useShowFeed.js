import { useState } from "react";
import axios from "axios";

const useShowFeed = () => {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle fetching feed data
  const handleSubmit = async () => {
    const token = localStorage.getItem("token"); // Get the token from localStorage

    if (!token) {
      setError("No authentication token found. Please log in.");
      return;
    }

    setLoading(true);
    setError(null); // Reset error before each fetch

    try {
      // API call to fetch feed data
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/feed/posts`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add Bearer token for authorization
          },
        }
      );

      // Ensure feed data is set correctly
      setFeed(res.data); // Extract data from the response
    } catch (err) {
      setError("Failed to fetch the feed. Please try again.");
      console.error("Error fetching feed:", err.message);
    } finally {
      setLoading(false); // Always stop loading, regardless of success or error
    }
  };

  return {
    handleSubmit,
    feed,
    loading,
    error,
  };
};

export default useShowFeed;
