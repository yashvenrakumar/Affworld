import { useState } from "react";
import axios from "axios";

const useFeed = () => {
  const [caption, setCaption] = useState("");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle photo change
  const handlePhotoChange = (e) => setPhoto(e.target.files[0]);

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token"); // Get the token from localStorage

    if (!token) {
      setError("No authentication token found.");
      return;
    }

    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("photo", photo);

    setLoading(true);
    setError(null); // Reset error before each submit

    try {
      // Include the Authorization header with Bearer token
      await axios.post(
        `${process.env.REACT_APP_API_URL}/feed/posts`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure we send multipart data
            Authorization: `Bearer ${token}`, // Add Bearer token for authorization
          },
        }
      );
      alert("Post created successfully");
      setCaption(""); // Reset caption after successful submission
      setPhoto(null); // Reset photo after successful submission
    } catch (err) {
      setError("Failed to create post");
      console.error("Error posting feed:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    caption,
    setCaption,
    photo,
    handlePhotoChange,
    handleSubmit,
    loading,
    error,
  };
};

export default useFeed;
