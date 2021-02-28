import React, {useEffect} from 'react';

function JobInfo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='container mt-12 mb-24'>
      <section className='flex justify-between items-center'>
        <div>
          <div className='mb-3'>
            <h1 className='text-4xl mb-2'>Job Title</h1>
            <p>Price Type | Price</p>
          </div>
          <div>
            <p>
              Posted by <span className='text-blue-500'>Ahmed Saman</span>
            </p>
            <p>
              Post Date <span className='text-blue-500'>12/12/2021</span>
            </p>
          </div>
        </div>
        <div>
          <button className='bg-primary text-white px-8 py-2 rounded-lg'>
            Apply
          </button>
        </div>
      </section>
      <div className='bg-gray-200 h-0.5 my-4'></div>
      <section className='my-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div>
            <h2 className='text-3xl'>Job Type</h2>
            <div className='mt-2 mb-12'>
              {[1, 2, 3].map(item => (
                <button
                  key={item}
                  className='border-2 mr-4 border-primary rounded-full px-2 py-1 text-primary font-semibold'
                >
                  Required skills
                </button>
              ))}
            </div>
            <p className='w-98'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              libero veritatis itaque ea? Quibusdam sapiente quos ullam dolor
              ipsa, obcaecati voluptates beatae quidem deserunt eaque iste illo
              saepe iure accusamus eos, eveniet doloremque nisi minus
              repudiandae temporibus. Nobis aut sit ipsa non, nulla quidem
              temporibus. Mollitia similique porro beatae exercitationem
              obcaecati deserunt cum repudiandae laborum nesciunt qui error modi
              aspernatur, dignissimos, ducimus at cumque reiciendis quas vitae
              placeat! Sunt ipsa molestiae, nam vel doloremque inventore magni
              totam temporibus corrupti distinctio porro quia, voluptate
              reiciendis a vero aut quibusdam. Suscipit omnis reiciendis tenetur
              numquam quidem, ipsum quaerat, sunt sint explicabo eos id? A
              magnam esse praesentium in repellendus deserunt dolorum! Explicabo
              pariatur in excepturi. Dolore corporis reiciendis quas aliquid
              magnam? Quidem quod hic totam. Blanditiis voluptatem animi neque
              omnis, harum officia debitis recusandae nisi. Dolore repellendus
              provident labore suscipit laboriosam ea aliquam dolores ullam,
              libero ducimus deleniti quisquam. Accusamus modi distinctio
              molestias nemo unde quas eligendi quod dolorem consequatur nihil,
              doloremque ipsam, assumenda, at qui deleniti commodi autem numquam
              enim! Est, quos pariatur temporibus corporis autem ipsum cumque
              neque accusantium provident eius laborum, eaque vitae perspiciatis
              illo, qui voluptatum! Sunt illo nemo corrupti commodi earum
              adipisci temporibus architecto hic id ad?
            </p>
          </div>
          <div className='pl-32 mt-4 '>
            <div className='border border-gray-800 p-4 '>
              <h3 className='text-2xl px-2 pb-3 border-b border-gray-700'>
                Similer Jobs
              </h3>
              <div className='px-4'>
                {[1, 2, 3].map(item => (
                  <div
                    className='my-4 pb-4  border-b border-gray-700'
                    key={item}
                  >
                    <div className='flex justify-between items-center'>
                      <h4 className='text-xl capitalize text-blue-500'>
                        Job Title
                      </h4>
                      <p className='text-gray-400 text-sm'>12/12/2021</p>
                    </div>
                    <p className='text-gray-500 mt-1'>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eos ex corporis quaerat dolorum adipisci enim nihil quam
                      autem praesentium excepturi?
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JobInfo;
