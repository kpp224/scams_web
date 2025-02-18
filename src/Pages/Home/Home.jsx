import React from 'react'
import Feed from '../../components/Feed/Feed'
import RightSidebar from '../../components/RightSidebar/RightSidebar'

const Home = () => {
  return (
    <div className='flex h-full pr-20 bg-white justify-around items-center'>
      <div>
        <Feed />
      </div>
      <div>
        <RightSidebar />
      </div>
    </div>
  )
}

export default Home