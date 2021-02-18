import React, {useEffect} from 'react';

function JobPost() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='container mt-10'>
      <h1 className='text-3xl'>Post Your Job on KurdFreelancer</h1>
      <div className='bg-gray-400 h-0.5 mt-2'></div>
    </div>
  );
}

export default JobPost;
