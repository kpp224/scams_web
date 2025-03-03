import React, { useState } from 'react';
import {
  MdCamera,
  MdAttachFile,
  MdFace,
  MdThumbUp,
  MdComment,
  MdShare,
  MdMoreVert,
  MdReport,
  MdDone,
  MdClose,
} from 'react-icons/md'; 

const Feed = () => {
  const [image, setImage] = useState(null);
  const [attachment, setAttachment] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91Cj2MN7nGbINor10wBMHJCapdjxuW9UUVw&s/150'); // Default profile photo
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'Raaz',
      profilePhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCG7tDn1aZAMNPDro9_PvbJxESThQb98XmfMOZyI97A8uIoA2I_otoX8gBMR9HXuUCmuY&usqp=CAU/150', // Add profile photo URL
      time: '2 hours ago',
      content:
        'As technology advances, so do cyber threats. Cybercrime has become a global crisis, affecting individuals, businesses, and governments. From phishing attacks and ransomware to identity theft and data breaches, hackers are constantly finding new ways to exploit vulnerabilities. Research in cybercrime is crucial to developing stronger security measures, AI-driven threat detection, and global cybersecurity policies. Awareness, digital literacy, and ethical hacking play a key role in combating online threats. Stay informed, stay secure! 🔒💻',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91Cj2MN7nGbINor10wBMHJCapdjxuW9UUVw&s/600x400',
      likes: 12,
      comments: 8,
      shares: 7,
      showCommentBox: false,
      commentText: '',
      showMenu: false,
    },
    {
      id: 2,
      username: 'John',
      profilePhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQx64vK3LKqDg8sdtMHTXB65uicBnONVsCo3Jtd4FJMKPlbnKFjOsCscfgd4cabdrLFg&usqp=CAU/150', // Add profile photo URL
      time: '1 hour ago',
      content:
        'Indian PM Narendra Modi and former U.S. President Donald Trump discussed cybersecurity threats and global digital safety. Modi emphasized India’s cybersecurity initiatives, while Trump stressed the need for global cooperation against cybercrime. They focused on 5G security, AI-driven defense, and intelligence sharing to combat cyber threats. Both leaders pledged to strengthen cybersecurity laws and partnerships for a safer digital future. 💻🚀',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHGFYjWq2qrBqkUkenaRdGCK-mAJ31Vcgw2Q&s/600x400',
      likes: 15,
      comments: 5,
      shares: 3,
      showCommentBox: false,
      commentText: '',
      showMenu: false,
    },
  ]);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleAttachmentUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAttachment(file.name);
    }
  };

  const handleAIClick = () => {
    alert('AI feature triggered!');
  };

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleCommentClick = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, showCommentBox: !post.showCommentBox }
          : post
      )
    );
  };

  const handleCommentSubmit = (postId, e) => {
    e.preventDefault();
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: post.comments + 1, showCommentBox: false, commentText: '' }
          : post
      )
    );
    alert(`Comment submitted: ${posts.find((post) => post.id === postId).commentText}`);
  };

  const handleShare = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, shares: post.shares + 1 } : post
      )
    );
  };

 
  const handleMenuClick = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, showMenu: !post.showMenu } : post
      )
    );
  };

  // Handle menu option click
  const handleMenuOption = (postId, option) => {
    alert(`Option selected: ${option}`);
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, showMenu: false } : post
      )
    );
  };

  return (
    <div className='w-[90vh] p-2 overflow-y-auto scrollbar-hide space-y-4 h-[90vh] overflow-hidden'>
      {/* Create Post Box */}
      <div className='bg-[#ffffff] border w-[100%] border-gray-300 p-2 rounded-2xl'>
        <div className='flex items-start space-x-3'>
          {/* Profile Image */}
          <img
            src={profilePhoto}
            alt='Profile'
            className='w-10 h-10 rounded-full object-cover cursor-pointer'
          />
          <textarea
            placeholder="What's on your mind?"
            className='w-full p-1 border border-gray-300 rounded-md resize-none'
            rows='2'
          ></textarea>
        </div>

        {/* Options and Post Button */}
        <div className='flex justify-between items-center ml-2 mt-2 mr-2'>
          <div className='flex space-x-3'>
            {/* Image/Video Upload Button */}
            <label className='text-blue-500 text-sm cursor-pointer flex items-center space-x-1 hover:scale-110 transition-transform hover:text-blue-600'>
              <input
                type='file'
                accept='image/*, video/*'
                style={{ display: 'none' }}
                onChange={handleImageUpload}
              />
              <MdCamera className='icon camera-icon' />
              <span className='text-black'>Image/Video</span>
            </label>

            {/* Attachment Upload Button */}
            <label className='text-gray-500 text-sm cursor-pointer flex items-center space-x-1 hover:scale-110 transition-transform hover:text-gray-700'>
              <input
                type='file'
                style={{ display: 'none' }}
                onChange={handleAttachmentUpload}
              />
              <MdAttachFile className='icon attachment-icon' />
              <span className='text-black'>Attachment</span>
            </label>

            {/* AI Button */}
            <button
              className='text-red-400 text-sm cursor-pointer flex items-center space-x-1 hover:scale-110 transition-transform hover:text-red-600'
              onClick={handleAIClick}
            >
              <MdFace className='icon ai-icon' />
              <span className='text-black'>AI</span>
            </button>

            {/* Update Profile Photo Button */}
            <label className='text-blue-500 text-sm cursor-pointer flex items-center space-x-1 hover:scale-110 transition-transform hover:text-blue-600'>
              <input
                type='file'
                accept='image/*'
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setProfilePhoto(URL.createObjectURL(file));
                  }
                }}
              />
            </label>
          </div>
          <button className='bg-blue-500 flex items-center justify-center text-white cursor-pointer h-7 w-17 px-3 py-1 rounded-md hover:bg-blue-600 transition-colors'>
            <span>Post</span>
          </button>
        </div>

        {/* Display Uploaded Image/Video */}
        {image && (
          <div className='mt-2'>
            {image.includes('video') ? (
              <video controls className='w-full rounded-md'>
                <source src={image} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={image} alt='Uploaded' className='w-full rounded-md' />
            )}
          </div>
        )}

        {/* Display Uploaded Attachment */}
        {attachment && (
          <div className='mt-2 text-sm text-gray-600'>
            <span>Attachment: {attachment}</span>
          </div>
        )}
      </div>

      <div className='flex justify-around items-center'>
        <hr className='w-[95%] h-[1px] text-[#646464]' />
      </div>

      {/* Scrollable Feed Posts */}
      <div className='h-[80%] w-[100%] space-y-4 scrollbar-hide'>
        {posts.map((post) => (
          <div
            key={post.id}
            className='bg-[#ffffff] border h-auto border-gray-300 p-4 rounded-2xl shadow-md'
          >
            {/* "Not Interested" Option */}
            <div className='flex justify-end relative'>
              <button
                className='text-gray-500 hover:text-gray-700'
                onClick={() => handleMenuClick(post.id)}
              >
                <MdMoreVert />
              </button>
              {/* Menu Options */}
              {post.showMenu && (
                <div className='absolute top-6 right-0 bg-white bg-opacity-95 border border-gray-200 rounded-lg shadow-lg z-10 w-48'>
                  <button
                    className='flex items-center space-x-3 w-full px-4 py-2 hover:bg-gray-50 transition-colors'
                    onClick={() => handleMenuOption(post.id, 'Interested')}
                  >
                    <MdDone className='text-green-500 text-lg' />
                    <span className='text-sm text-gray-700'>Interested</span>
                  </button>
                  <button
                    className='flex items-center space-x-3 w-full px-4 py-2 hover:bg-gray-50 transition-colors'
                    onClick={() => handleMenuOption(post.id, 'Not Interested')}
                  >
                    <MdClose className='text-red-500 text-lg' />
                    <span className='text-sm text-gray-700'>Not Interested</span>
                  </button>
                  <button
                    className='flex items-center space-x-3 w-full px-4 py-2 hover:bg-gray-50 transition-colors'
                    onClick={() => handleMenuOption(post.id, 'Report')}
                  >
                    <MdReport className='text-yellow-500 text-lg' />
                    <span className='text-sm text-gray-700'>Report</span>
                  </button>
                </div>
              )}
            </div>

            {/* User Info with Profile Photo */}
            <div className='flex items-center cursor-pointer space-x-4 mb-2'>
              <img
                src={post.profilePhoto}
                alt='Profile'
                className='w-10 h-10 rounded-full object-cover'
              />
              <div>
                <p className='font-bold text-sm'>{post.username}</p>
                <p className='text-xs text-gray-500'>{post.time}</p>
              </div>
            </div>

            {/* Post Content */}
            <p className='text-sm mb-2'>{post.content}</p>
            <img
              src={post.image}
              alt='Post Image'
              className='w-full cursor-pointer rounded-md mb-2'
            />

            {/* Like, Comment, Share, and AI Buttons */}
            <div className='flex justify-between cursor-pointer items-center'>
              <div className='flex space-x-3'>
                {/* Like Button */}
                <div className='flex items-center space-x-1'>
                  <button
                    className='text-red-500 text-sm hover:scale-110 transition-transform hover:text-red-600'
                    onClick={() => handleLike(post.id)}
                  >
                    <MdThumbUp className='icon like-icon' />
                  </button>
                  <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                    {post.likes}
                  </div>
                </div>

                {/* Comment Button */}
                <div className='flex items-center space-x-1'>
                  <button
                    className='text-gray-500 text-sm hover:scale-110 transition-transform hover:text-gray-700'
                    onClick={() => handleCommentClick(post.id)}
                  >
                    <MdComment className='icon comment-icon' />
                  </button>
                  <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                    {post.comments}
                  </div>
                </div>

                {/* AI Button */}
                <div className='flex items-center space-x-1'>
                  <button
                    className='text-red-400 text-sm hover:scale-110 transition-transform hover:text-red-600'
                    onClick={handleAIClick}
                  >
                    <MdFace className='icon ai-icon' />
                  </button>
                  <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                    3
                  </div>
                </div>
              </div>

              {/* Share Button */}
              <div className='flex items-center space-x-1'>
                <button
                  className='text-gray-500 text-sm hover:scale-110 transition-transform hover:text-gray-700'
                  onClick={() => handleShare(post.id)}
                >
                  <MdShare className='icon share-icon' />
                </button>
                <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  {post.shares}
                </div>
              </div>
            </div>

            {/* Comment Box */}
            {post.showCommentBox && (
              <form
                onSubmit={(e) => handleCommentSubmit(post.id, e)}
                className='mt-2'
              >
                <textarea
                  placeholder='Write a comment...'
                  value={post.commentText}
                  onChange={(e) =>
                    setPosts((prevPosts) =>
                      prevPosts.map((p) =>
                        p.id === post.id
                          ? { ...p, commentText: e.target.value }
                          : p
                      )
                    )
                  }
                  className='w-full p-2 border border-gray-300 rounded-md resize-none text-sm'
                  rows='1'
                ></textarea>
                <button
                  type='submit'
                  className='mt-2 bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 transition-colors text-sm'
                >
                  Comment
                </button>
              </form>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;