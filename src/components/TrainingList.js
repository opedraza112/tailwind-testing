import React, { useState } from 'react';

const TRAINING_LIST = [
  {
    img_url: 'https://xpc-api-prod.s3-us-west-1.amazonaws.com/users/20/trainings/95736/1621373546740.jpg',
    training_number: 1,
    title: 'The Most Addictive Thing in the World 😲',
    status: 'awaiting',
    xp: '3'
  },
  {
    img_url: 'https://xpc-api-prod.s3-us-west-1.amazonaws.com/users/20/trainings/95739/1621373414068.jpg',
    training_number: 2,
    title: 'Welcome to the 3% 🙏',
    status: 'in_progress',
    xp: '7'
  },
  {
    img_url: 'https://xpc-api-prod.s3-us-west-1.amazonaws.com/users/20/trainings/98162/1621373359800.jpg',
    training_number: 3,
    title: 'Make FOMO Your Friend',
    status: 'awaiting',
    xp: '5'
  },
];

const STATUS_LIST = {
  'awaiting': { text: 'Awaiting Start', color: 'text-blue-500' },
  'in_progress': { text: 'In Progress', color: 'text-green-500' },
};

const TrainingList = () => {
  return (
    <div className="mt-8 lg:px-8 px-4 py-8">
      <div className="container mx-auto overflow-hidden text-left">
        <div className='font-bold'>YOUR CURRENTLY AVAILABLE TRAININGS 👇</div>
        <div>Here are your available trainings. Dive in now!</div>
      </div>
      {TRAINING_LIST.map((item, index) => {
        return (
          <div key={index} className="container mx-auto overflow-hidden border-solid border gray-100 p-4 mt-6">
            <div className="lg:grid md:grid-cols-5 md:gap-4">
              <div className="col-span-1">
                <img src={item.img_url} className="h-36" />
              </div>
              <div className="col-span-3 text-left">
                <div className="divide-x divide-black text-sm">
                  <span className="mr-2">Training {item.training_number}</span>
                  <span className={`pl-3 ${STATUS_LIST[item.status].color}`}>{STATUS_LIST[item.status].text}</span>
                </div>
                <div className="text-xl font-semibold mt-1">
                  {item.title}
                </div>
                <div className={`mt-8 relative flex items-center`}>
                  <span className="mr-4">Available XPs</span>
                  <div className="opacity-50 flex">
                    <span className="w-8 h-8 rounded-full border-solid border-2 border-green-500 bg-white text-sm flex items-center justify-center z-10">
                      {item.xp}
                    </span>
                    <span className="w-6 h-6 rounded-full border-solid bg-green-400 text-xs text-white italic flex items-center justify-center -ml-2 -mt-2 z-0">
                      xp
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded">
                  View
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default TrainingList;