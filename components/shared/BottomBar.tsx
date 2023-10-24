import React from 'react'
import BottomLeftBar from './BottomLeftBar'
import BottomRightBar from './BottomRightBar'
import Topbar from './Topbar'

const BottomBar = () => {
  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <div className="flex-1 flex items-center justify-center">
        {/* Add your section content here */}
        <div className='flex flex-1'>
        <div className='w-1/3 bg-gray-200'>
        <BottomLeftBar />
        </div>
        <div className='w-2/3 bg-gray-300'>
        <BottomRightBar />
        </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;



