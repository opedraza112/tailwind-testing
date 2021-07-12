import React from 'react'

const ProgressBar = ({ progressPercentage }) => {
  return (
      <div className='h-2 w-full bg-gray-200 rounded-full'>
        <div
          style={{ width: `${progressPercentage}%`}}
          className={`h-full bg-green-300 rounded-full`}>
        </div>
      </div>
  );
};

export default ProgressBar;