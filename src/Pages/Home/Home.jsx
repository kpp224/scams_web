import React from 'react'
import Feed from '../../components/Feed/Feed'
import RightSidebar from '../../components/RightSidebar/RightSidebar'

const Home = () => {
  return (
    <div className='flex h-full justify-around items-center'>
      <div className='ml-10'>
        <Feed />
      </div>
      <div className='mr-5'>
        <RightSidebar />
      </div>
    </div>
  )
}

export default Home