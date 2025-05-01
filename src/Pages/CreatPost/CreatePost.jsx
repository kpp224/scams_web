import React, { useState } from 'react';
import { FaFileUpload, FaRobot } from 'react-icons/fa'; // Import icons

const CreatePost = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleAIContent = () => {
    // Simulate AI-generated content
    setDescription('This is an AI-generated description for your post. You can edit it as needed.');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert('Title and description are required.');
      return;
    }

    let imageUrl = null;

    if (file) {
      try {
        imageUrl = await fileToBase64(file);
      } catch (err) {
        console.error('Failed to convert file to Base64:', err);
        alert('Image upload failed. Please try again.');
        return;
      }
    }

    const newPost = {
      id: Date.now(),
      username: 'Current User',
      profilePhoto: 'https://i.pravatar.cc/150?img=3',
      time: new Date().toISOString(),
      content: description,
      image: imageUrl || 'https://picsum.photos/600/400',
      likes: 0,
      comments: 0,
      shares: 0,
    };

    addPost(newPost);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-green-600">Post is created!</h1>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create a New Post</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Post Title */}
          <div>
            <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">
              Post Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the title of your post"
              required
            />
          </div>

          {/* Post Description */}
          <div>
            <label htmlFor="description" className="block text-lg font-medium text-gray-700 mb-2">
              Post Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write a brief description about your post"
              rows="5"
              required
            ></textarea>
            <button
              type="button"
              onClick={handleAIContent}
              className="mt-2 flex items-center space-x-2 text-blue-600 hover:text-blue-800"
            >
              <FaRobot className="w-5 h-5" />
              <span>Generate AI Content</span>
            </button>
          </div>

          {/* File Upload */}
          <div>
            <label htmlFor="file" className="block text-lg font-medium text-gray-700 mb-2">
              Attach File (Optional)
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaFileUpload className="w-6 h-6 text-gray-500" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            >
              Submit Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;