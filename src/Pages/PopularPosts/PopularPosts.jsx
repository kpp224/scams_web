import React, { useState } from 'react';

const PopularPosts = () => {
  // Sample popular scam-related posts
  const [popularPosts, setPopularPosts] = useState([
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
    {
      id: 3,
      username: 'FraudWatch',
      profilePhoto: 'https://i.pravatar.cc/150?img=7',
      time: '1 day ago',
      content: '🔒 Protect yourself from online shopping scams. Use trusted websites and avoid deals that seem too good to be true.',
      image: 'https://picsum.photos/600/400',
      likes: 300,
      comments: 70,
      shares: 100,
    },
  ]);

  // Sample scam-related topics
  const topics = ['Phishing', 'Online Shopping Scams', 'Fake Job Offers', 'Identity Theft', 'Investment Scams', 'Social Media Fraud'];

  return (
    <div className="flex flex-wrap min-h-screen bg-gray-100">
      {/* Left Section: Popular Scam Posts (70%) */}
      <div className="w-full lg:w-7/10 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Popular Scam Alerts</h1>
        <div className="h-[calc(100vh-100px)] overflow-y-auto space-y-6 pr-2 scrollbar-hide">
          {popularPosts.map((post) => (
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

              {/* Post Actions */}
              <div className="flex justify-between items-center text-gray-600">
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-1 hover:text-blue-500">
                    <span>👍</span>
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-blue-500">
                    <span>💬</span>
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-blue-500">
                    <span>🔗</span>
                    <span>{post.shares}</span>
                  </button>
                </div>
                <button className="text-blue-500 hover:text-blue-600">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Scam Topics (30%) */}
      <div className="w-full lg:w-3/10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Explore Scam Topics</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {topics.map((topic, index) => (
            <li key={index} className="hover:text-blue-500 cursor-pointer">
              {topic}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Trending Tags</h3>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-200"
              >
                #{topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPosts;