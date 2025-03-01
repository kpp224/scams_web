import React, { useState } from 'react';

const RightSidebar = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New message from John', time: '2 sec ago', unread: true },
    { id: 2, message: 'Your post got 10 likes', time: '30 sec ago', unread: true },
    { id: 3, message: 'New comment on your post', time: '40 sec ago', unread: false },
  ]);

  const markAllAsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
  };

  return (
    <div className="fixed right-20 top-8 w-75 p-2" style={{ height: 'calc(20vh)' }}>
      {/* First Box: Search, Profile Photo, Notifications */}
      <div className="bg-white rounded-lg p-4 shadow-lg mb-4">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 p-2 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full hover:opacity-80 transition-opacity"
          />
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-sm text-gray-800">Notifications</h3>
            <button
              onClick={markAllAsRead}
              className="text-green-600 text-sm font-bold hover:text-green-800 transition-colors"
            >
              Mark as Read
            </button>
          </div>
          <ul className="mt-2 space-y-2 text-sm text-gray-700">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={`p-2 rounded-md transition-colors ${
                  notification.unread ? 'bg-gray-100' : 'bg-white'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>{notification.message}</span>
                  <span className="text-gray-500 text-xs">{notification.time}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-3">
            <span className="text-green-600 text-sm">{notifications.filter((n) => n.unread).length} New</span>
            <button className="text-black font-bold text-sm hover:text-green-800 transition-colors border border-green-600 px-2 py-1 rounded-md hover:bg-green-50">
              View All
            </button>
          </div>
        </div>
      </div>

      {/* Second Box: Trending Cybercrime */}
      <div className="bg-white rounded-lg p-4 shadow-lg mb-4">
        <h3 className="font-semibold text-sm text-gray-800">Trending Cybercrime</h3>
        <ul className="mt-2 space-y-2 text-sm text-gray-700">
          <li className="hover:bg-gray-100 p-2 rounded-md transition-colors">Phishing Attacks</li>
          <li className="hover:bg-gray-100 p-2 rounded-md transition-colors">Ransomware</li>
          <li className="hover:bg-gray-100 p-2 rounded-md transition-colors">Identity Theft</li>
        </ul>
        <div className="flex justify-between items-center mt-3">
          <span className="text-green-600 text-sm">5 Trending</span>
          <button className="text-black font-bold text-sm hover:text-green-800 transition-colors border border-green-600 px-2 py-1 rounded-md hover:bg-green-50">
            View All
          </button>
        </div>
      </div>

      {/* Third Box: Live Discussion */}
      <div className="bg-white rounded-lg p-4 shadow-lg">
        <h3 className="font-semibold text-sm text-gray-800">Live Discussion</h3>
        <ul className="mt-2 space-y-2 text-sm text-gray-700">
          <li className="hover:bg-gray-100 p-2 rounded-md transition-colors">Discussion on Cybersecurity Trends</li>
          <li className="hover:bg-gray-100 p-2 rounded-md transition-colors">Q&A with Cybersecurity Experts</li>
          <li className="hover:bg-gray-100 p-2 rounded-md transition-colors">Latest Updates on Cyber Threats</li>
        </ul>
        <div className="flex justify-between items-center mt-3">
          <span className="text-green-600 text-sm">2 Active</span>
          <button className="text-black font-bold text-sm hover:text-green-800 transition-colors border border-green-600 px-2 py-1 rounded-md hover:bg-green-50">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;