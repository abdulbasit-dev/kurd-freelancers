import React, {useEffect} from 'react';

function JobPost() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1 className='text-3xl'>Job Post Page</h1>
    </div>
  );
}

export default JobPost;
