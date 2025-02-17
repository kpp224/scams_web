import React from 'react';

const Feed = () => {
  return (
    <div className='bg-white w-[95%] p-0 space-y-4 h-[90vh] mx-auto overflow-hidden'>
      {/* Create Post Box */}
      <div className='bg-gray-200 border border-gray-300 p-2 rounded-2xl'>
        <div className='flex items-start space-x-3'>
          {/* Profile Image */}
          <div className='w-7 h-7 bg-gray-400 rounded-full'></div>
          <textarea
            placeholder="What's on your mind?"
            className='w-full p-1 border border-gray-300 rounded-md resize-none'
            rows='2' 
          ></textarea>
        </div>

        {/* Options and Post Button */}
        <div className='flex justify-between items-center mt-2'>
          <div className='flex space-x-3'>
            <button className='text-blue-500 text-xs'>📷 Image</button>
            <button className='text-blue-500 text-xs'>📎 Attachment</button>
            <button className='text-blue-500 text-xs'>🤖 AI</button>
          </div>
          <button className='bg-blue-500 text-white px-3 py-1 text-xs rounded-md'>
            Post
          </button>
        </div>
      </div>

      {/* Scrollable Feed Posts */}
      <div className='h-[80%] overflow-y-auto space-y-5 pr-2 scrollbar-hide'>

        <div className='bg-gray-200 border border-gray-300 p-4 rounded-2xl shadow-md'>
          <div className='flex items-center space-x-4 mb-2'>
            <div className='w-8 h-8 bg-gray-400 rounded-full'></div>
            <div>
              <p className='font-bold text-sm'>Raaz</p>
              <p className='text-xs text-gray-500'>Posted 2 hours ago</p>
            </div>
          </div>
          <p className='text-sm mb-2'>
            This is a sample post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <img
            src='https://via.placeholder.com/600x400'
            alt='Post Image'
            className='w-full rounded-md mb-2'
          />
          <div className='flex justify-between items-center'>
            <div className='flex space-x-2'>
              <div className='flex items-center space-x-1'>
                <button className='text-black text-xs'>👍</button>
                <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  12
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-gray-500 text-xs'>💬</button>
                <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  8
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-gray-500 text-xs'>🤖</button>
                <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  5
                </div>
              </div>
            </div>
            <div className='flex items-center space-x-1'>
              <button className='text-gray-500 text-xs'>↗️</button>
              <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                7
              </div>
            </div>
          </div>
        </div>

        <div className='bg-gray-200 border border-gray-300 p-4 rounded-2xl shadow-md'>
          <div className='flex items-center space-x-4 mb-2'>
            <div className='w-8 h-8 bg-gray-400 rounded-full'></div>
            <div>
              <p className='font-bold text-sm'>Kush</p>
              <p className='text-xs text-gray-500'>Posted 3 hours ago</p>
            </div>
          </div>
          <p className='text-sm mb-2'>
            Another post with multiple images. Swipe to see more.
          </p>
          <div className='flex space-x-2 overflow-x-auto mb-2'>
            <img
              src='https://via.placeholder.com/300x200'
              alt='Post Image 1'
              className='rounded-md'
            />
            <img
              src='https://via.placeholder.com/300x200'
              alt='Post Image 2'
              className='rounded-md'
            />
            <img
              src='https://via.placeholder.com/300x200'
              alt='Post Image 3'
              className='rounded-md'
            />
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex space-x-2'>
              <div className='flex items-center space-x-1'>
                <button className='text-black text-xs'>👍</button>
                <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  20
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-gray-500 text-xs'>💬</button>
                <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  10
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-gray-500 text-xs'>🤖</button>
                <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  3
                </div>
              </div>
            </div>
            <div className='flex items-center space-x-1'>
              <button className='text-gray-500 text-xs'>↗️</button>
              <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                4
              </div>
            </div>
          </div>
        </div>

        <div className='bg-gray-200 border border-gray-300 p-4 rounded-2xl shadow-md'>
          <div className='flex items-center space-x-4 mb-2'>
            <div className='w-8 h-8 bg-gray-400 rounded-full'></div>
            <div>
              <p className='font-bold text-sm'>Nitish</p>
              <p className='text-xs text-gray-500'>Posted 4 hours ago</p>
            </div>
          </div>
          <p className='text-sm mb-2'>
            A short post about my day.
          </p>
          <img
            src='https://via.placeholder.com/600x400'
            alt='Post Image'
            className='w-full rounded-md mb-2'
          />
          <div className='flex justify-between items-center'>
            <div className='flex space-x-2'>
              <div className='flex items-center space-x-1'>
                <button className='text-black text-xs'>👍</button>
                <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  15
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-gray-500 text-xs'>💬</button>
                <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  6
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-gray-500 text-xs'>🤖</button>
                <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  2
                </div>
              </div>
            </div>
            <div className='flex items-center space-x-1'>
              <button className='text-gray-500 text-xs'>↗️</button>
              <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                3
              </div>
            </div>
          </div>
        </div>

        <div className='bg-gray-200 border border-gray-300 p-4 rounded-2xl shadow-md'>
          <div className='flex items-center space-x-4 mb-2'>
            <div className='w-8 h-8 bg-gray-400 rounded-full'></div>
            <div>
              <p className='font-bold text-sm'>vatsal</p>
              <p className='text-xs text-gray-500'>Posted 5 hours ago</p>
            </div>
          </div>
          <p className='text-sm mb-2'>
            Exploring new places!
          </p>
          <img
            src='https://via.placeholder.com/600x400'
            alt='Post Image'
            className='w-full rounded-md mb-2'
          />
          <div className='flex justify-between items-center'>
            <div className='flex space-x-2'>
              <div className='flex items-center space-x-1'>
                <button className='text-black text-xs'>👍</button>
                <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  18
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-gray-500 text-xs'>💬</button>
                <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  9
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-gray-500 text-xs'>🤖</button>
                <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  4
                </div>
              </div>
            </div>
            <div className='flex items-center space-x-1'>
              <button className='text-gray-500 text-xs'>↗️</button>
              <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                5
              </div>
            </div>
          </div>
        </div>

        <div className='bg-gray-200 border border-gray-300 p-4 rounded-2xl shadow-md'>
          <div className='flex items-center space-x-4 mb-2'>
            <div className='w-8 h-8 bg-gray-400 rounded-full'></div>
            <div>
              <p className='font-bold text-sm'>suhal</p>
              <p className='text-xs text-gray-500'>Posted 6 hours ago</p>
            </div>
          </div>
          <p className='text-sm mb-2'>
            Just a random thought.
          </p>
          <img
            src='https://via.placeholder.com/600x400'
            alt='Post Image'
            className='w-full rounded-md mb-2'
          />
          <div className='flex justify-between items-center'>
            <div className='flex space-x-2'>
              <div className='flex items-center space-x-1'>
                <button className='text-black text-xs'>👍</button>
                <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  10
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-gray-500 text-xs'>💬</button>
                <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  5
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-gray-500 text-xs'>🤖</button>
                <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  1
                </div>
              </div>
            </div>
            <div className='flex items-center space-x-1'>
              <button className='text-gray-500 text-xs'>↗️</button>
              <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                2
              </div>
            </div>
          </div>
        </div>

        <div className='bg-gray-200 border border-gray-300 p-4 rounded-2xl shadow-md'>
          <div className='flex items-center space-x-4 mb-2'>
            <div className='w-8 h-8 bg-gray-400 rounded-full'></div>
            <div>
              <p className='font-bold text-sm'>jain</p>
              <p className='text-xs text-gray-500'>Posted 7 hours ago</p>
            </div>
          </div>
          <p className='text-sm mb-2'>
            Sharing my recent project updates.
          </p>
          <img
            src='https://via.placeholder.com/600x400'
            alt='Post Image'
            className='w-full rounded-md mb-2'
          />
          <div className='flex justify-between items-center'>
            <div className='flex space-x-2'>
              <div className='flex items-center space-x-1'>
                <button className='text-black text-xs'>👍</button>
                <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  25
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-gray-500 text-xs'>💬</button>
                <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  12
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-gray-500 text-xs'>🤖</button>
                <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  6
                </div>
              </div>
            </div>
            <div className='flex items-center space-x-1'>
              <button className='text-gray-500 text-xs'>↗️</button>
              <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                8
              </div>
            </div>
          </div>
        </div>

        <div className='bg-gray-200 border border-gray-300 p-4 rounded-2xl shadow-md'>
          <div className='flex items-center space-x-4 mb-2'>
            <div className='w-8 h-8 bg-gray-400 rounded-full'></div>
            <div>
              <p className='font-bold text-sm'>young</p>
              <p className='text-xs text-gray-500'>Posted 8 hours ago</p>
            </div>
          </div>
          <p className='text-sm mb-2'>
            Enjoying the weekend vibes. 🌞
          </p>
          <div className='flex space-x-2 overflow-x-auto mb-2'>
            <img
              src='https://via.placeholder.com/300x200'
              alt='Post Image 1'
              className='rounded-md'
            />
            <img
              src='https://via.placeholder.com/300x200'
              alt='Post Image 2'
              className='rounded-md'
            />
            <img
              src='https://via.placeholder.com/300x200'
              alt='Post Image 3'
              className='rounded-md'
            />
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex space-x-2'>
              <div className='flex items-center space-x-1'>
                <button className='text-black text-xs'>👍</button>
                <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  30
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-gray-500 text-xs'>💬</button>
                <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  15
                </div>
              </div>
              <div className='flex items-center space-x-1'>
                <button className='text-gray-500 text-xs'>🤖</button>
                <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                  7
                </div>
              </div>
            </div>
            <div className='flex items-center space-x-1'>
              <button className='text-gray-500 text-xs'>↗️</button>
              <div className='w-5 h-5 bg-gray-300 rounded-full flex justify-center items-center text-xs font-bold'>
                10
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;