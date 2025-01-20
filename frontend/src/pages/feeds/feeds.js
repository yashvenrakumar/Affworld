import React from "react";
import useFeed from "../../hooks/useFeed"; // Import the custom hook

const Feed = () => {
  const {
    caption,
    setCaption,
    photo,
    handlePhotoChange,
    handleSubmit,
    loading,
    error,
  } = useFeed(); // Use the custom hook

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Create a Post</h2>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Upload Photo
          </label>
          <input
            type="file"
            onChange={handlePhotoChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Caption
          </label>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Write a caption"
            className="w-full p-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 text-white w-full py-2 rounded-md"
          disabled={loading} // Disable button when loading
        >
          {loading ? "Posting..." : "Post"}
        </button>
      </div>
    </div>
  );
};

export default Feed;
