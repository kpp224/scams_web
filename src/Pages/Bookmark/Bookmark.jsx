import React, { useState } from 'react';

const Bookmark = () => {
  // Sample bookmarked scam-related posts
  const [bookmarkedPosts, setBookmarkedPosts] = useState([
    {
      id: 1,
      username: 'ScamAlert',
      profilePhoto: 'https://i.pravatar.cc/150?img=3',
      time: '2 hours ago',
      content: '🚨 Beware of phishing emails claiming to be from your bank. Always verify the sender before clicking any links.',
      image: 'https://picsum.photos/600/400',
      likes: 200,
      comments: 50,
      shares: 80,
    },
    {
      id: 2,
      username: 'CyberSafe',
      profilePhoto: 'https://i.pravatar.cc/150?img=5',
      time: '5 hours ago',
      content: '⚠️ Fake job offers are on the rise! Never share personal information without verifying the company.',
      image: 'https://picsum.photos/600/400',
      likes: 150,
      comments: 40,
      shares: 60,
    },
  ]);

  // Function to remove a bookmark
  const removeBookmark = (id) => {
    setBookmarkedPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  return (
    <div className="flex flex-wrap min-h-screen bg-gray-100">
      {/* Left Section: Bookmarked Posts */}
      <div className="w-full lg:w-3/5 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Bookmarked Scam Alerts</h1>
        <div className="h-[calc(100vh-100px)] overflow-y-auto space-y-6 pr-2 scrollbar-hide">
          {bookmarkedPosts.length === 0 ? (
            <p className="text-gray-500 text-center">No bookmarks available.</p>
          ) : (
            bookmarkedPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white border border-gray-300 p-4 rounded-lg shadow-md"
              >
                {/* Post Header */}
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={post.profilePhoto}
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover"
                    onError={(e) => (e.target.src = 'https://i.pravatar.cc/150?img=1')} // Fallback for broken images
                  />
                  <div>
                    <p className="font-bold text-lg">{post.username}</p>
                    <p className="text-sm text-gray-500">{post.time}</p>
                  </div>
                </div>

                {/* Post Content */}
                <p className="text-gray-800 mb-4">{post.content}</p>
                {post.image && (
                  <img
                    src={post.image}
                    alt="Post"
                    className="w-full rounded-lg mb-4"
                    onError={(e) => (e.target.src = 'https://picsum.photos/600/400')} // Fallback for broken images
                  />
                )}

                {/* Remove Bookmark Button */}
                <div className="flex justify-end">
                  <button
                    onClick={() => removeBookmark(post.id)}
                    className="text-red-500 hover:text-red-600 font-medium"
                  >
                    Remove Bookmark
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Right Section: Bookmark Stats and Tips */}
      <div className="w-full lg:w-2/5 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Bookmark Insights</h2>
        <div className="space-y-6">
          {/* Total Bookmarks */}
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
            <p className="text-lg font-medium text-gray-700">Total Bookmarks</p>
            <span className="text-xl font-bold text-blue-600">{bookmarkedPosts.length}</span>
          </div>

          {/* Categories */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Categories</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Phishing Scams</li>
              <li>Fake Job Offers</li>
              <li>Online Shopping Scams</li>
              <li>Identity Theft</li>
            </ul>
          </div>

          {/* Tips for Staying Safe */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Tips to Stay Safe</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Always verify the sender before clicking on links.</li>
              <li>Use trusted websites for online shopping.</li>
              <li>Never share personal information with unverified sources.</li>
              <li>Enable two-factor authentication on your accounts.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;