import React from "react";
import Feed from "./feeds";
import ShowFeed from "./showFeed";

export default function FeedingView() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 bg-opacity-20  via-purple-500 to-pink-500 min-h-screen py-6 px-4">
      <div className="flex flex-col lg:flex-row justify-center gap-8">
        {/* Left Sidebar - Feed */}
        <div className="w-full lg:w-1/4 bg-white rounded-lg shadow-lg p-6 flex justify-center items-center">
          <Feed />
        </div>

        {/* Right Section - Show Feed */}
        <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-6">
          <ShowFeed />
        </div>
      </div>
    </div>
  );
}
