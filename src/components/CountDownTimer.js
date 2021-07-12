import React from 'react'
import { useState, useEffect } from 'react';

function CountDownTimer() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-12-31`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        DAYS: Math.floor(difference / (1000 * 60 * 60 * 24)),
        HOURS: Math.floor((difference / (1000 * 60 * 60)) % 24),
        MINS: Math.floor((difference / 1000 / 60) % 60),
        SECS: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <span className="w-16 h-16 flex flex-col items-center justify-center bg-blue-100" key={interval}>
        <dt className="text-2xl font-medium text-gray-600 truncate">{timeLeft[interval].toString().padStart(2, '0') || '00'}</dt>
        <dd className="mt-1 text-xs font-light text-gray-500">{interval}</dd>
      </span>
    );
  });

  return (
    <dt className='mt-12 ml-12 flex items-center'>
      <span className='mr-12'>Your mission ends in:</span>
      <dl className="space-x-3 flex justify-center">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </dl>
    </dt>
  );
}

export default CountDownTimer;