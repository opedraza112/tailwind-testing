import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const ST_LIST = [
  { completed: true, text: 'You Implemented 3 Profit Accelerators 💰', xp: '10' },
  { completed: true, text: 'You Implemented 5 Profit Accelerators! 💰 💰', xp: '20' },
  { completed: false, text: 'You Implemented All 10 Profit Accelerators!! 💰 💰 💰', xp: '30' },
];

const GoalContainer = () => {
  const [statusList, setStatusList] = useState(ST_LIST);

  const completedList = statusList.filter(item => item.completed);

  const toggleStatus = (idx) => {
    const copiedList = statusList.slice();
    for (let i = 0; i < statusList.length; i++) {
      if (i < idx) copiedList[i].completed = true;
      else copiedList[i].completed = false;
    }
    if (!copiedList[idx].completed) copiedList[idx].completed = true;
    setStatusList(copiedList);
  }

  return (
    <div className="mt-8 lg:px-8 px-4 py-8">
      <div className="container mx-auto overflow-hidden text-left">
        <div className='font-bold'>YOUR 10 DAY GOALS 💪🏼</div>
        <div>We've suggested a few goals here for you. Feel free to customize to make them more inspiring! Check them off when complete to claim your points!</div>
      </div>
      <div className="container mx-auto overflow-hidden border-solid border gray-100 p-8 mt-6">
        <div className="lg:grid md:grid-cols-3 md:gap-4 lg:divide-x">
          {statusList.map((item, index) => {
            const opacity = item.completed ? 100 : 30;

            return (
            <div className={`text-left ${index !== 0 && 'lg:pl-4'}`} key={index}>
              <div className="flex items-start justify-between">
                <div className="flex items-center w-10/12">
                  <img
                    className="w-10 h-10"
                    src={item.completed ?
                      'https://liveyourmessage.xperiencify.io/images/goal-bowl-green.png' :
                      'https://liveyourmessage.xperiencify.io/images/goal-bowl.png'
                    }
                  />
                  <span className='pl-4'>{item.text}</span>
                </div>
                {!item.completed && (
                  <a href="#" className="mark w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#484458">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </a>
                )}
              </div>
              <div className='mt-4 mb-4'>
                <div className="flex items-center">
                  {item.completed && (
                    <div className="mark w-8 h-8 rounded-full bg-green-400 flex items-center justify-center" onClick={() => toggleStatus(index)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  {!item.completed && (
                    <div className="mark w-8 h-8 rounded-full shadow-inner border-solid border bg-gray-50" onClick={() => toggleStatus(index)} />
                  )}
                  <div className="pl-4 text-sm">Done it!</div>
                  <div className={`pl-4 pr-4 relative flex opacity-${opacity}`}>
                    <span className="w-8 h-8 rounded-full border-solid border-2 border-green-500 bg-white text-sm flex items-center justify-center z-10">
                      {item.xp}
                    </span>
                    <span className="w-6 h-6 rounded-full border-solid bg-green-400 text-xs text-white italic flex items-center justify-center -ml-2 -mt-2 z-0">
                      xp
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )})}
        </div>
        <div className="mt-8">
          <ProgressBar progressPercentage={Math.floor(100 * completedList.length / statusList.length)} />
        </div>
      </div>
    </div>
  );
};

export default GoalContainer;