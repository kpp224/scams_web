import React, { useState } from 'react';

const Messages = () => {
  // Sample users
  const [users] = useState([
    { id: 1, username: 'Alice', profilePhoto: 'https://i.pravatar.cc/150?img=3' },
    { id: 2, username: 'Bob', profilePhoto: 'https://i.pravatar.cc/150?img=5' },
    { id: 3, username: 'Charlie', profilePhoto: 'https://i.pravatar.cc/150?img=7' },
  ]);

  // Sample messages
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Alice', content: 'Hi there!', time: '10:00 AM' },
    { id: 2, sender: 'You', content: 'Hello! How are you?', time: '10:02 AM' },
    { id: 3, sender: 'Alice', content: 'I’m good, thanks! What about you?', time: '10:05 AM' },
  ]);

  const [selectedUser, setSelectedUser] = useState(users[0]); // Default selected user
  const [newMessage, setNewMessage] = useState('');

  // Handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, sender: 'You', content: newMessage, time: 'Now' },
      ]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Section: User List */}
      <div className="w-1/3 bg-white shadow-lg p-4">
      <h2 className="text-xl font-bold mb-4">Users</h2>
      <ul className="space-y-4">
      {users.map((user) => (
        <li
          key={user.id}
          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
            selectedUser.id === user.id ? 'bg-blue-100' : 'hover:bg-gray-100'
          }`}
        onClick={() => setSelectedUser(user)}
      >
        <div className="flex items-center space-x-4">
          <img
            src={user.profilePhoto}
            alt={user.username}
            className="w-10 h-10 rounded-full object-cover"
            onError={(e) => (e.target.src = 'https://i.pravatar.cc/150?img=1')} // Fallback for broken images
          />
          <p className="font-medium text-gray-800">{user.username}</p>
        </div>
        {/* Icon */}
        <div className="text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-7 4h8a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </li>
    ))}
  </ul>
</div>

      {/* Right Section: Chat Interface */}
      <div className="w-2/3 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white shadow-md p-4">
          <h2 className="text-xl font-bold text-gray-800">{selectedUser.username}</h2>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === 'You' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`p-3 rounded-lg max-w-xs ${
                  message.sender === 'You'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                <p>{message.content}</p>
                <span className="text-xs text-gray-500 block mt-1">{message.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-white p-4 flex items-center space-x-4">
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;