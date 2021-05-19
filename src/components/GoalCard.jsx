import React from 'react';

function GoalCard({goal}) {
  return (
    <div className='flex flex-col items-center w-full tablet:w-1/4 border border-gray-800 mb-5 rounded-lg shadow-2xl'>
      <h1 className='text-2xl mb-4 mt-3 '>{goal.title}</h1>
      <p className='px-3 text-center mb-5'>{goal.description}</p>
    </div>
  );
}

export default GoalCard;
