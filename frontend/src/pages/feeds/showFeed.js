import React, { useEffect } from "react";
import useShowFeed from "../../hooks/useShowFeed";

const ShowFeed = () => {
  const { handleSubmit, feed, loading, error } = useShowFeed(); // Use the custom hook

  // Trigger feed fetch on component mount
  useEffect(() => {
    handleSubmit(); // Fetch feed data only once when component mounts
  }, []); // Empty dependency array to avoid infinite loop

  return (
    <div className="bg-gray-50 min-h-screen py-6 px-4">
      <button onClick={() => handleSubmit()}>
        <h1 className="text-4xl py-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-center drop-shadow-lg tracking-wide">
          Refresh
        </h1>
      </button>

      {/* Error and Loading States */}
      {loading && (
        <div className="text-center text-blue-600 text-xl">Loading Feed...</div>
      )}
      {error && <div className="text-center text-red-600 text-xl">{error}</div>}

      {/* Feed Display */}
      {!loading && !error && feed.length === 0 && (
        <div className="text-center text-gray-600 text-xl">
          No feed available.
        </div>
      )}

      {/* Scrollable Feed Display */}
      <div
        className="max-w-6xl mx-auto mt-6 overflow-y-auto"
        style={{ maxHeight: "70vh" }} // Set max height for scrolling
      >
        <div className="grid    grid-cols-1   gap-6">
          {feed.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={item.photo}
                  alt={item.caption}
                  className="w-16 h-16 object-cover rounded-full border-2 border-gray-300"
                />
                <div>
                  <p className="font-semibold text-lg">{item.user.name}</p>
                  <p className="text-sm text-gray-500">{item.user.email}</p>
                </div>
              </div>

              <p className="text-xl font-semibold text-gray-800 mb-2">
                {item.caption}
              </p>
              <img
                src={item.photo}
                alt={item.caption}
                className="w-full h-72 object-cover rounded-xl mb-4 transition-all duration-300 hover:opacity-80"
              />
              {/* Optional: Add icons like "like", "comment", etc. */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowFeed;
