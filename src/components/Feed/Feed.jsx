import React from 'react';
import { FaCamera, FaPaperclip, FaRobot, FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';

const Feed = () => {
  return (
    <div className='bg-white w-[90vh] overflow-y-auto scrollbar-hide space-y-4 h-[90vh] overflow-hidden'>
      {/* Create Post Box */}
      <div className='bg-gray-200 border w-[100%] border-gray-300 p-2 rounded-2xl'>
        <div className='flex items-start space-x-3'>
          {/* Profile Image */}
          <div className='w-10 h-9 bg-gray-400 cursor-pointer rounded-full'></div>
          <textarea
            placeholder="What's on your mind?"
            className='w-full p-1 border border-gray-300 rounded-md resize-none'
            rows='2' 
          ></textarea>
        </div>

        {/* Options and Post Button */}
        <div className='flex justify-between items-center ml-2 mt-2 mr-2 '>
          <div className='flex space-x-3 '>
            <button className='text-blue-500 text-sm cursor-pointer flex items-center space-x-1'>
              <FaCamera />
              <span className='text-black'>Image</span>
            </button>
            <button className='text-gray-500 text-sm cursor-pointer flex items-center space-x-1'>
              <FaPaperclip />
              <span className='text-black'>Attachment</span>
            </button>
            <button className='text-red-400 text-sm cursor-pointer flex items-center space-x-1'>
              <FaRobot />
              <span className='text-black'>AI</span>
            </button>
          </div>
          <button className='bg-blue-500 flex items-center justify-center text-white cursor-pointer h-7 w-17 px-3 py-1 rounded-md'>
           <span>Post</span> 
          </button>
        </div>
      </div>

      {/* Scrollable Feed Posts */}
      <div className='h-[80%] w-[100%]  space-y-4  scrollbar-hide'> 

        <div className='bg-gray-200 border h-auto border-gray-300 p-4 rounded-2xl shadow-md'>
          <div className='flex items-center cursor-pointer space-x-4 mb-2'>
            <div className='w-8 h-8 bg-gray-400 rounded-full'></div>
            <div>
              <p className='font-bold text-sm'>Raaz</p>
              <p className='text-xs text-gray-500'>Posted 2 hours ago</p>
            </div>
          </div>
          <p className='text-sm mb-2'>
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className='text-sm mb-2'>
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <img
            src='https://via.placeholder.com/600x400'
            alt='Post Image'
            className='w-full cursor-pointer rounded-md mb-2'
          />
          <div className='flex justify-between cursor-pointer items-center'>
            <div className='flex space-x-3'>
              <div className='flex items-center space-x-1'>
                <button className='text-blue-500 text-sm'><FaThumbsUp /></button>
                <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  12
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-gray-500 text-sm'><FaComment /></button>
                <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  8
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-red-400 text-sm'><FaRobot /></button>
                <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  5
                </div>
              </div>
            </div>
            <div className='flex items-center space-x-1'>
              <button className='text-gray-500 text-sm'><FaShare /></button>
              <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                7
              </div>
            </div>
          </div>
        </div>

        <div className='bg-gray-200 border h-auto border-gray-300 p-4 rounded-2xl shadow-md'>
          <div className='flex items-center cursor-pointer space-x-4 mb-2'>
            <div className='w-8 h-8 bg-gray-400 rounded-full'></div>
            <div>
              <p className='font-bold text-sm'>Raaz</p>
              <p className='text-xs text-gray-500'>Posted 2 hours ago</p>
            </div>
          </div>
          <p className='text-sm mb-2'>
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className='text-sm mb-2'>
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <img
            src='https://via.placeholder.com/600x400'
            alt='Post Image'
            className='w-full cursor-pointer rounded-md mb-2'
          />
          <div className='flex justify-between cursor-pointer items-center'>
            <div className='flex space-x-3'>
              <div className='flex items-center space-x-1'>
                <button className='text-blue-500 text-sm'><FaThumbsUp /></button>
                <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  12
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-gray-500 text-sm'><FaComment /></button>
                <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  8
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-red-400 text-sm'><FaRobot /></button>
                <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  5
                </div>
              </div>
            </div>
            <div className='flex items-center space-x-1'>
              <button className='text-gray-500 text-sm'><FaShare /></button>
              <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                7
              </div>
            </div>
          </div>
        </div>

        <div className='bg-gray-200 border h-auto border-gray-300 p-4 rounded-2xl shadow-md'>
          <div className='flex items-center cursor-pointer space-x-4 mb-2'>
            <div className='w-8 h-8 bg-gray-400 rounded-full'></div>
            <div>
              <p className='font-bold text-sm'>Raaz</p>
              <p className='text-xs text-gray-500'>Posted 2 hours ago</p>
            </div>
          </div>
          <p className='text-sm mb-2'>
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className='text-sm mb-2'>
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <img
            src='https://via.placeholder.com/600x400'
            alt='Post Image'
            className='w-full cursor-pointer rounded-md mb-2'
          />
          <div className='flex justify-between cursor-pointer items-center'>
            <div className='flex space-x-3'>
              <div className='flex items-center space-x-1'>
                <button className='text-blue-500 text-sm'><FaThumbsUp /></button>
                <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  12
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-gray-500 text-sm'><FaComment /></button>
                <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  8
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-red-400 text-sm'><FaRobot /></button>
                <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  5
                </div>
              </div>
            </div>
            <div className='flex items-center space-x-1'>
              <button className='text-gray-500 text-sm'><FaShare /></button>
              <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                7
              </div>
            </div>
          </div>
        </div>

        <div className='bg-gray-200 border h-auto border-gray-300 p-4 rounded-2xl shadow-md'>
          <div className='flex items-center cursor-pointer space-x-4 mb-2'>
            <div className='w-8 h-8 bg-gray-400 rounded-full'></div>
            <div>
              <p className='font-bold text-sm'>Raaz</p>
              <p className='text-xs text-gray-500'>Posted 2 hours ago</p>
            </div>
          </div>
          <p className='text-sm mb-2'>
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className='text-sm mb-2'>
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <img
            src='https://via.placeholder.com/600x400'
            alt='Post Image'
            className='w-full cursor-pointer rounded-md mb-2'
          />
          <div className='flex justify-between cursor-pointer items-center'>
            <div className='flex space-x-3'>
              <div className='flex items-center space-x-1'>
                <button className='text-blue-500 text-sm'><FaThumbsUp /></button>
                <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  12
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-gray-500 text-sm'><FaComment /></button>
                <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  8
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-red-400 text-sm'><FaRobot /></button>
                <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  5
                </div>
              </div>
            </div>
            <div className='flex items-center space-x-1'>
              <button className='text-gray-500 text-sm'><FaShare /></button>
              <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                7
              </div>
            </div>
          </div>
        </div>

        <div className='bg-gray-200 border h-auto border-gray-300 p-4 rounded-2xl shadow-md'>
          <div className='flex items-center cursor-pointer space-x-4 mb-2'>
            <div className='w-8 h-8 bg-gray-400 rounded-full'></div>
            <div>
              <p className='font-bold text-sm'>Raaz</p>
              <p className='text-xs text-gray-500'>Posted 2 hours ago</p>
            </div>
          </div>
          <p className='text-sm mb-2'>
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className='text-sm mb-2'>
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <img
            src='https://via.placeholder.com/600x400'
            alt='Post Image'
            className='w-full cursor-pointer rounded-md mb-2'
          />
          <div className='flex justify-between cursor-pointer items-center'>
            <div className='flex space-x-3'>
              <div className='flex items-center space-x-1'>
                <button className='text-blue-500 text-sm'><FaThumbsUp /></button>
                <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  12
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-gray-500 text-sm'><FaComment /></button>
                <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  8
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-red-400 text-sm'><FaRobot /></button>
                <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  5
                </div>
              </div>
            </div>
            <div className='flex items-center space-x-1'>
              <button className='text-gray-500 text-sm'><FaShare /></button>
              <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                7
              </div>
            </div>
          </div>
        </div>

        <div className='bg-gray-200 border h-auto border-gray-300 p-4 rounded-2xl shadow-md'>
          <div className='flex items-center cursor-pointer space-x-4 mb-2'>
            <div className='w-8 h-8 bg-gray-400 rounded-full'></div>
            <div>
              <p className='font-bold text-sm'>Raaz</p>
              <p className='text-xs text-gray-500'>Posted 2 hours ago</p>
            </div>
          </div>
          <p className='text-sm mb-2'>
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className='text-sm mb-2'>
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <img
            src='https://via.placeholder.com/600x400'
            alt='Post Image'
            className='w-full cursor-pointer rounded-md mb-2'
          />
          <div className='flex justify-between cursor-pointer items-center'>
            <div className='flex space-x-3'>
              <div className='flex items-center space-x-1'>
                <button className='text-blue-500 text-sm'><FaThumbsUp /></button>
                <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  12
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-gray-500 text-sm'><FaComment /></button>
                <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  8
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-red-400 text-sm'><FaRobot /></button>
                <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  5
                </div>
              </div>
            </div>
            <div className='flex items-center space-x-1'>
              <button className='text-gray-500 text-sm'><FaShare /></button>
              <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                7
              </div>
            </div>
          </div>
        </div>

        <div className='bg-gray-200 border h-auto border-gray-300 p-4 rounded-2xl shadow-md'>
          <div className='flex items-center cursor-pointer space-x-4 mb-2'>
            <div className='w-8 h-8 bg-gray-400 rounded-full'></div>
            <div>
              <p className='font-bold text-sm'>Raaz</p>
              <p className='text-xs text-gray-500'>Posted 2 hours ago</p>
            </div>
          </div>
          <p className='text-sm mb-2'>
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className='text-sm mb-2'>
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <img
            src='https://via.placeholder.com/600x400'
            alt='Post Image'
            className='w-full cursor-pointer rounded-md mb-2'
          />
          <div className='flex justify-between cursor-pointer items-center'>
            <div className='flex space-x-3'>
              <div className='flex items-center space-x-1'>
                <button className='text-blue-500 text-sm'><FaThumbsUp /></button>
                <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  12
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-gray-500 text-sm'><FaComment /></button>
                <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  8
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-red-400 text-sm'><FaRobot /></button>
                <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  5
                </div>
              </div>
            </div>
            <div className='flex items-center space-x-1'>
              <button className='text-gray-500 text-sm'><FaShare /></button>
              <div className='w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                7
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;