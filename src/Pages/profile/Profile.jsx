import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaThumbsUp, FaComment, FaShare, FaEdit, FaArchive, FaUserEdit, FaShareAlt } from 'react-icons/fa';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const ProfileContent = () => {
  // Image URLs
  const profileImage = "https://acuriousarmywife.com/wp-content/uploads/2013/12/dsc_17132.jpg?w=1200/150"; // Replace with your image link
  const user1Image = "https://m.media-amazon.com/images/M/MV5BNTBlNjM3NGQtZWMyNS00OWQ0LTk0ZDctNzc4YzY4MmRjYTQ0XkEyXkFqcGc@._V1_.jpg40"; // User 1 image
  const user2Image = "https://m.media-amazon.com/images/M/MV5BNTBlNjM3NGQtZWMyNS00OWQ0LTk0ZDctNzc4YzY4MmRjYTQ0XkEyXkFqcGc@._V1_.jpghttps://images.genius.com/9b1dda6bd0126ce40213dbc3bcb396bc.1000x1000x1.jpghttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsC3yMr5MgfGuT9GFDbO88h_cq1Wzn-xdf6Q&s/40"; // User 2 image
  const user3Image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsC3yMr5MgfGuT9GFDbO88h_cq1Wzn-xdf6Q&s/40"; // User 3 image
  const aiAssistantImage = "https://via.placeholder.com/40"; // AI Assistant image

  // Data for the radial progress chart (skills)
  const skillsData = [
    { name: 'PS', value: 85, fill: '#8884d8' },
    { name: 'AI', value: 90, fill: '#82ca9d' },
    { name: 'AG', value: 78, fill: '#ffc658' },
  ];

  // Data for the spider chart (performance)
  const performanceData = [
    { subject: 'Attempts', A: 120, fullMark: 150 },
    { subject: 'Correct', A: 85, fullMark: 150 },
    { subject: 'Performance', A: 70, fullMark: 100 },
  ];

  // State for posted posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'Rajhans',
      content: 'Just had an amazing workout session! 💪 #FitnessGoals',
      timestamp: '2 hours ago',
      likes: 120,
      comments: [
        { id: 1, username: 'AI_Assistant', content: 'Great job! Keep it up! 🎉', image: aiAssistantImage },
        { id: 2, username: 'User2', content: 'You’re inspiring me to hit the gym! 💯', image: user2Image },
      ],
      media: null, // Can be an image or video link
    },
    {
      id: 2,
      username: 'Rajhans',
      content: 'Exploring new AI tools today. So much to learn! 🤖 #AI #Tech',
      timestamp: '5 hours ago',
      likes: 95,
      comments: [
        { id: 1, username: 'AI_Assistant', content: 'AI is the future! Keep exploring! 🚀', image: aiAssistantImage },
        { id: 2, username: 'User3', content: 'Which tools are you using? 🔧', image: user3Image },
      ],
      media: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsC3yMr5MgfGuT9GFDbO88h_cq1Wzn-xdf6Q&s/600x400', // Example image link
    },
    {
      id: 3,
      username: 'Rajhans',
      content: 'Just finished a great book on productivity! Highly recommend it. 📚 #Productivity',
      timestamp: '1 day ago',
      likes: 75,
      comments: [
        { id: 1, username: 'AI_Assistant', content: 'Reading is a great habit! Keep it up! 📖', image: aiAssistantImage },
        { id: 2, username: 'User1', content: 'What’s the name of the book?', image: user1Image },
      ],
      media: null,
    },
    {
      id: 4,
      username: 'Rajhans',
      content: 'Enjoying a beautiful sunset! 🌅 #Nature',
      timestamp: '3 days ago',
      likes: 150,
      comments: [
        { id: 1, username: 'AI_Assistant', content: 'Nature is the best therapy! 🌿', image: aiAssistantImage },
        { id: 2, username: 'User2', content: 'Wow, where is this?', image: user2Image },
      ],
      media: 'https://via.placeholder.com/600x400', // Example image link
    },
  ]);

  // Unique name provided by us
  const uniqueName = "@rajhans_007";

  // Functionality for Edit and Share buttons
  const handleEditProfile = () => {
    alert('Edit Profile clicked!');
  };

  const handleShareProfile = () => {
    alert('Share Profile clicked!');
  };

  return (
    <div className="p-4">
      {/* Profile Header */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 transform transition-transform hover:scale-105">
        <div className="flex items-center space-x-4">
          <img
            src={profileImage}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
          />
          <div>
            <h1 className="text-2xl font-bold">Rajhans</h1>
            <p className="text-gray-600">{uniqueName}</p>
            <p className="text-gray-600">India--Bihar--Student</p>
            <p className="text-gray-500">Joined on 22:04:2025</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 transform transition-transform hover:scale-105">
        <h2 className="text-xl font-semibold mb-4">Stats</h2>
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
          <div className="text-center">
            <p className="text-gray-600">Followers</p>
            <p className="text-xl font-bold">120</p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">All Posts</p>
            <p className="text-xl font-bold">20</p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">Total Challenges</p>
            <p className="text-xl font-bold">19</p>
          </div>
        </div>
      </div>

      {/* About Me Section with Edit Button */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 relative transform transition-transform hover:scale-105">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">About Me</h2>
          <button
            className="text-blue-500 hover:text-blue-600 flex items-center space-x-2"
            onClick={handleEditProfile}
          >
            <FaEdit /> {/* Edit icon */}
            <span>Edit</span>
          </button>
        </div>
        <p className="text-gray-600">
          I’m a student passionate about fitness, AI, and technology. I love exploring new tools and
          sharing my journey with the world. Let’s connect and grow together! 🌟
        </p>
        <div className="mt-4">
          <p className="text-gray-600">
            <span className="font-semibold">Interests:</span> Fitness, AI, Technology, Gaming
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Skills:</span> Photoshop, AI Tools, Programming
          </p>
        </div>
      </div>

      {/* Graphs Side by Side */}
      <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0 mb-6">
        {/* Performance Spider Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md flex-1 transform transition-transform hover:scale-105">
          <h2 className="text-xl font-semibold mb-4">Performance</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart outerRadius={90} data={performanceData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar
                  name="Performance"
                  dataKey="A"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* My Current Skills (Radial Progress Chart) */}
        <div className="bg-white p-6 rounded-lg shadow-md flex-1 transform transition-transform hover:scale-105">
          <h2 className="text-xl font-semibold mb-4">My Current Skills</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                innerRadius="20%"
                outerRadius="100%"
                data={skillsData}
                startAngle={180}
                endAngle={0}
              >
                <RadialBar minAngle={15} background clockWise dataKey="value" />
                <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Create Post Box Simplified */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 transform transition-transform hover:scale-105">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <Link
            to="/create-post"
            className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
          >
            <span className="text-xl">+</span>
            <span>Create Post</span>
          </Link>
          <div className="flex space-x-4">
            <button
              className="flex items-center space-x-2 text-gray-500 hover:text-blue-500"
              onClick={handleEditProfile}
            >
              <FaUserEdit /> {/* Edit profile icon */}
              <span>Edit Profile</span>
            </button>
            <button
              className="flex items-center space-x-2 text-gray-500 hover:text-blue-500"
              onClick={handleShareProfile}
            >
              <FaShareAlt /> {/* Share profile icon */}
              <span>Share Profile</span>
            </button>
          </div>
        </div>
      </div>

      {/* Posted Posts Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 transform transition-transform hover:scale-105">
        <h2 className="text-xl font-semibold mb-4">Posted Posts</h2>
        {posts.map((post) => (
          <div key={post.id} className="mb-6 border-b border-gray-200 pb-6">
            {/* Post Header */}
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={profileImage}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
              />
              <div>
                <p className="font-semibold">{post.username}</p>
                <p className="text-gray-500 text-sm">{post.timestamp}</p>
              </div>
            </div>

            {/* Post Content */}
            <p className="mb-4">{post.content}</p>

            {/* Media (Image or Video) */}
            {post.media && (
              <div className="mb-4">
                {post.media.includes('video') ? (
                  <video controls className="w-full rounded-lg">
                    <source src={post.media} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={post.media} alt="Post Media" className="w-full rounded-lg" />
                )}
              </div>
            )}

            {/* Like, Comment, Share Buttons */}
            <div className="flex space-x-4 mb-4">
              <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
                <FaThumbsUp /> {/* Like icon */}
                <span>Like ({post.likes})</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
                <FaComment /> {/* Comment icon */}
                <span>Comment</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
                <FaShare /> {/* Share icon */}
                <span>Share</span>
              </button>
            </div>

            {/* Comments Section */}
            <div className="mt-4">
              {post.comments.map((comment) => (
                <div
                  key={comment.id}
                  className="flex items-start space-x-3 mb-4 bg-gray-50 p-3 rounded-lg"
                >
                  {/* Commenter's Profile Image */}
                  <img
                    src={comment.image}
                    alt="Commenter"
                    className="w-8 h-8 rounded-full object-cover border-2 border-blue-500"
                  />

                  {/* Comment Content */}
                  <div className="flex-1">
                    <p className="font-semibold">{comment.username}</p>
                    <p className="text-gray-700">{comment.content}</p>
                  </div>

                  {/* Comment Timestamp (Optional) */}
                  <p className="text-gray-500 text-sm">2 mins ago</p>
                </div>
              ))}
            </div>

            {/* Add Comment Input */}
            <div className="mt-4">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Add a comment..."
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileContent;