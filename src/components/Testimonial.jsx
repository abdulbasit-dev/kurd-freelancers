import React, {useState} from 'react';

import ahmed from '../assets/img/ahmed.png';
function Index() {
  const [change, setChange] = useState(false);
  return (
    <div className='mt-10'>
      <div className='container mx-auto pt-16'>
        <h1 className='text-gray-800 font-extrabold xl:text-5xl text-3xl mb-4 text-center md:text-center lg:text-center'>
          Hear From Our Customers
        </h1>
        <p className='text-xl text-center md:text-center xl:w-2/3 lg:w-2/3 w-11/12 mx-auto text-gray-600 mb-12'>
          You made it so simple. My new site is so much faster and easier to
          work with than my old site. I just choose the page, make the change
          and click save.
        </p>
      </div>
      <div className='w-full bg-gray-100 py-16'>
        <div className='container relative mx-auto'>
          <div className='absolute -mt-16 top-0'>
            <svg width={151} height={104} xmlns='http://www.w3.org/2000/svg'>
              <g fill='#667EEA' fillRule='evenodd'>
                <rect x='.88' width={3} height={3} rx='1.5' />
                <rect x='17.88' width={3} height={3} rx='1.5' />
                <rect x='32.88' width={3} height={3} rx='1.5' />
                <rect x='49.88' width={3} height={3} rx='1.5' />
                <rect x='65.88' width={3} height={3} rx='1.5' />
                <rect x='82.88' width={3} height={3} rx='1.5' />
                <rect x='98.88' width={3} height={3} rx='1.5' />
                <rect x='115.88' width={3} height={3} rx='1.5' />
                <rect x='131.88' width={3} height={3} rx='1.5' />
                <rect x='147.88' width={3} height={3} rx='1.5' />
                <rect x='.88' y={13} width={3} height={3} rx='1.5' />
                <rect x='17.88' y={13} width={3} height={3} rx='1.5' />
                <rect x='32.88' y={13} width={3} height={3} rx='1.5' />
                <rect x='49.88' y={13} width={3} height={3} rx='1.5' />
                <rect x='65.88' y={13} width={3} height={3} rx='1.5' />
                <rect x='82.88' y={13} width={3} height={3} rx='1.5' />
                <rect x='98.88' y={13} width={3} height={3} rx='1.5' />
                <rect x='115.88' y={13} width={3} height={3} rx='1.5' />
                <rect x='131.88' y={13} width={3} height={3} rx='1.5' />
                <rect x='147.88' y={13} width={3} height={3} rx='1.5' />
                <rect x='.88' y={25} width={3} height={3} rx='1.5' />
                <rect x='17.88' y={25} width={3} height={3} rx='1.5' />
                <rect x='32.88' y={25} width={3} height={3} rx='1.5' />
                <rect x='49.88' y={25} width={3} height={3} rx='1.5' />
                <rect x='65.88' y={25} width={3} height={3} rx='1.5' />
                <rect x='82.88' y={25} width={3} height={3} rx='1.5' />
                <rect x='98.88' y={25} width={3} height={3} rx='1.5' />
                <rect x='115.88' y={25} width={3} height={3} rx='1.5' />
                <rect x='131.88' y={25} width={3} height={3} rx='1.5' />
                <rect x='147.88' y={25} width={3} height={3} rx='1.5' />
                <rect x='.88' y={38} width={3} height={3} rx='1.5' />
                <rect x='17.88' y={38} width={3} height={3} rx='1.5' />
                <rect x='32.88' y={38} width={3} height={3} rx='1.5' />
                <rect x='49.88' y={38} width={3} height={3} rx='1.5' />
                <rect x='65.88' y={38} width={3} height={3} rx='1.5' />
                <rect x='82.88' y={38} width={3} height={3} rx='1.5' />
                <rect x='98.88' y={38} width={3} height={3} rx='1.5' />
                <rect x='115.88' y={38} width={3} height={3} rx='1.5' />
                <rect x='131.88' y={38} width={3} height={3} rx='1.5' />
                <rect x='147.88' y={38} width={3} height={3} rx='1.5' />
                <rect x='.88' y={51} width={3} height={3} rx='1.5' />
                <rect x='17.88' y={51} width={3} height={3} rx='1.5' />
                <rect x='32.88' y={51} width={3} height={3} rx='1.5' />
                <rect x='49.88' y={51} width={3} height={3} rx='1.5' />
                <rect x='65.88' y={51} width={3} height={3} rx='1.5' />
                <rect x='82.88' y={51} width={3} height={3} rx='1.5' />
                <rect x='98.88' y={51} width={3} height={3} rx='1.5' />
                <rect x='115.88' y={51} width={3} height={3} rx='1.5' />
                <rect x='131.88' y={51} width={3} height={3} rx='1.5' />
                <rect x='147.88' y={51} width={3} height={3} rx='1.5' />
                <rect x='.88' y={63} width={3} height={3} rx='1.5' />
                <rect x='17.88' y={63} width={3} height={3} rx='1.5' />
                <rect x='32.88' y={63} width={3} height={3} rx='1.5' />
                <rect x='49.88' y={63} width={3} height={3} rx='1.5' />
                <rect x='65.88' y={63} width={3} height={3} rx='1.5' />
                <rect x='82.88' y={63} width={3} height={3} rx='1.5' />
                <rect x='98.88' y={63} width={3} height={3} rx='1.5' />
                <rect x='115.88' y={63} width={3} height={3} rx='1.5' />
                <rect x='131.88' y={63} width={3} height={3} rx='1.5' />
                <rect x='147.88' y={63} width={3} height={3} rx='1.5' />
                <rect x='.88' y={76} width={3} height={3} rx='1.5' />
                <rect x='17.88' y={76} width={3} height={3} rx='1.5' />
                <rect x='32.88' y={76} width={3} height={3} rx='1.5' />
                <rect x='49.88' y={76} width={3} height={3} rx='1.5' />
                <rect x='65.88' y={76} width={3} height={3} rx='1.5' />
                <rect x='82.88' y={76} width={3} height={3} rx='1.5' />
                <rect x='98.88' y={76} width={3} height={3} rx='1.5' />
                <rect x='115.88' y={76} width={3} height={3} rx='1.5' />
                <rect x='131.88' y={76} width={3} height={3} rx='1.5' />
                <rect x='147.88' y={76} width={3} height={3} rx='1.5' />
                <rect x='.88' y={89} width={3} height={3} rx='1.5' />
                <rect x='17.88' y={89} width={3} height={3} rx='1.5' />
                <rect x='32.88' y={89} width={3} height={3} rx='1.5' />
                <rect x='49.88' y={89} width={3} height={3} rx='1.5' />
                <rect x='65.88' y={89} width={3} height={3} rx='1.5' />
                <rect x='82.88' y={89} width={3} height={3} rx='1.5' />
                <rect x='98.88' y={89} width={3} height={3} rx='1.5' />
                <rect x='115.88' y={89} width={3} height={3} rx='1.5' />
                <rect x='131.88' y={89} width={3} height={3} rx='1.5' />
                <rect x='147.88' y={89} width={3} height={3} rx='1.5' />
                <rect x='.88' y={101} width={3} height={3} rx='1.5' />
                <rect x='17.88' y={101} width={3} height={3} rx='1.5' />
                <rect x='32.88' y={101} width={3} height={3} rx='1.5' />
                <rect x='49.88' y={101} width={3} height={3} rx='1.5' />
                <rect x='65.88' y={101} width={3} height={3} rx='1.5' />
                <rect x='82.88' y={101} width={3} height={3} rx='1.5' />
                <rect x='98.88' y={101} width={3} height={3} rx='1.5' />
                <rect x='115.88' y={101} width={3} height={3} rx='1.5' />
                <rect x='131.88' y={101} width={3} height={3} rx='1.5' />
                <rect x='147.88' y={101} width={3} height={3} rx='1.5' />
              </g>
            </svg>
          </div>
          <div className='absolute -mb-16 bottom-0 right-0'>
            <svg width={151} height={104} xmlns='http://www.w3.org/2000/svg'>
              <g fill='#667EEA' fillRule='evenodd'>
                <rect x='.88' width={3} height={3} rx='1.5' />
                <rect x='17.88' width={3} height={3} rx='1.5' />
                <rect x='32.88' width={3} height={3} rx='1.5' />
                <rect x='49.88' width={3} height={3} rx='1.5' />
                <rect x='65.88' width={3} height={3} rx='1.5' />
                <rect x='82.88' width={3} height={3} rx='1.5' />
                <rect x='98.88' width={3} height={3} rx='1.5' />
                <rect x='115.88' width={3} height={3} rx='1.5' />
                <rect x='131.88' width={3} height={3} rx='1.5' />
                <rect x='147.88' width={3} height={3} rx='1.5' />
                <rect x='.88' y={13} width={3} height={3} rx='1.5' />
                <rect x='17.88' y={13} width={3} height={3} rx='1.5' />
                <rect x='32.88' y={13} width={3} height={3} rx='1.5' />
                <rect x='49.88' y={13} width={3} height={3} rx='1.5' />
                <rect x='65.88' y={13} width={3} height={3} rx='1.5' />
                <rect x='82.88' y={13} width={3} height={3} rx='1.5' />
                <rect x='98.88' y={13} width={3} height={3} rx='1.5' />
                <rect x='115.88' y={13} width={3} height={3} rx='1.5' />
                <rect x='131.88' y={13} width={3} height={3} rx='1.5' />
                <rect x='147.88' y={13} width={3} height={3} rx='1.5' />
                <rect x='.88' y={25} width={3} height={3} rx='1.5' />
                <rect x='17.88' y={25} width={3} height={3} rx='1.5' />
                <rect x='32.88' y={25} width={3} height={3} rx='1.5' />
                <rect x='49.88' y={25} width={3} height={3} rx='1.5' />
                <rect x='65.88' y={25} width={3} height={3} rx='1.5' />
                <rect x='82.88' y={25} width={3} height={3} rx='1.5' />
                <rect x='98.88' y={25} width={3} height={3} rx='1.5' />
                <rect x='115.88' y={25} width={3} height={3} rx='1.5' />
                <rect x='131.88' y={25} width={3} height={3} rx='1.5' />
                <rect x='147.88' y={25} width={3} height={3} rx='1.5' />
                <rect x='.88' y={38} width={3} height={3} rx='1.5' />
                <rect x='17.88' y={38} width={3} height={3} rx='1.5' />
                <rect x='32.88' y={38} width={3} height={3} rx='1.5' />
                <rect x='49.88' y={38} width={3} height={3} rx='1.5' />
                <rect x='65.88' y={38} width={3} height={3} rx='1.5' />
                <rect x='82.88' y={38} width={3} height={3} rx='1.5' />
                <rect x='98.88' y={38} width={3} height={3} rx='1.5' />
                <rect x='115.88' y={38} width={3} height={3} rx='1.5' />
                <rect x='131.88' y={38} width={3} height={3} rx='1.5' />
                <rect x='147.88' y={38} width={3} height={3} rx='1.5' />
                <rect x='.88' y={51} width={3} height={3} rx='1.5' />
                <rect x='17.88' y={51} width={3} height={3} rx='1.5' />
                <rect x='32.88' y={51} width={3} height={3} rx='1.5' />
                <rect x='49.88' y={51} width={3} height={3} rx='1.5' />
                <rect x='65.88' y={51} width={3} height={3} rx='1.5' />
                <rect x='82.88' y={51} width={3} height={3} rx='1.5' />
                <rect x='98.88' y={51} width={3} height={3} rx='1.5' />
                <rect x='115.88' y={51} width={3} height={3} rx='1.5' />
                <rect x='131.88' y={51} width={3} height={3} rx='1.5' />
                <rect x='147.88' y={51} width={3} height={3} rx='1.5' />
                <rect x='.88' y={63} width={3} height={3} rx='1.5' />
                <rect x='17.88' y={63} width={3} height={3} rx='1.5' />
                <rect x='32.88' y={63} width={3} height={3} rx='1.5' />
                <rect x='49.88' y={63} width={3} height={3} rx='1.5' />
                <rect x='65.88' y={63} width={3} height={3} rx='1.5' />
                <rect x='82.88' y={63} width={3} height={3} rx='1.5' />
                <rect x='98.88' y={63} width={3} height={3} rx='1.5' />
                <rect x='115.88' y={63} width={3} height={3} rx='1.5' />
                <rect x='131.88' y={63} width={3} height={3} rx='1.5' />
                <rect x='147.88' y={63} width={3} height={3} rx='1.5' />
                <rect x='.88' y={76} width={3} height={3} rx='1.5' />
                <rect x='17.88' y={76} width={3} height={3} rx='1.5' />
                <rect x='32.88' y={76} width={3} height={3} rx='1.5' />
                <rect x='49.88' y={76} width={3} height={3} rx='1.5' />
                <rect x='65.88' y={76} width={3} height={3} rx='1.5' />
                <rect x='82.88' y={76} width={3} height={3} rx='1.5' />
                <rect x='98.88' y={76} width={3} height={3} rx='1.5' />
                <rect x='115.88' y={76} width={3} height={3} rx='1.5' />
                <rect x='131.88' y={76} width={3} height={3} rx='1.5' />
                <rect x='147.88' y={76} width={3} height={3} rx='1.5' />
                <rect x='.88' y={89} width={3} height={3} rx='1.5' />
                <rect x='17.88' y={89} width={3} height={3} rx='1.5' />
                <rect x='32.88' y={89} width={3} height={3} rx='1.5' />
                <rect x='49.88' y={89} width={3} height={3} rx='1.5' />
                <rect x='65.88' y={89} width={3} height={3} rx='1.5' />
                <rect x='82.88' y={89} width={3} height={3} rx='1.5' />
                <rect x='98.88' y={89} width={3} height={3} rx='1.5' />
                <rect x='115.88' y={89} width={3} height={3} rx='1.5' />
                <rect x='131.88' y={89} width={3} height={3} rx='1.5' />
                <rect x='147.88' y={89} width={3} height={3} rx='1.5' />
                <rect x='.88' y={101} width={3} height={3} rx='1.5' />
                <rect x='17.88' y={101} width={3} height={3} rx='1.5' />
                <rect x='32.88' y={101} width={3} height={3} rx='1.5' />
                <rect x='49.88' y={101} width={3} height={3} rx='1.5' />
                <rect x='65.88' y={101} width={3} height={3} rx='1.5' />
                <rect x='82.88' y={101} width={3} height={3} rx='1.5' />
                <rect x='98.88' y={101} width={3} height={3} rx='1.5' />
                <rect x='115.88' y={101} width={3} height={3} rx='1.5' />
                <rect x='131.88' y={101} width={3} height={3} rx='1.5' />
                <rect x='147.88' y={101} width={3} height={3} rx='1.5' />
              </g>
            </svg>
          </div>
          <section id='carousel'>
            <figure className={change ? 'hidden' : 'block'}>
              <div className='w-11/12 mx-auto bg-white py-10 sm:px-16 px-10 relative'>
                <div className='flex items-center justify-between pb-8'>
                  <div className='xl:flex md:flex lg:flex sm:flex items-center'>
                    <div className='h-20 w-20'>
                      <img
                        src={ahmed}
                        alt
                        className='rounded-full object-cover h-full w-full shadow'
                      />
                    </div>
                    <div className='xl:pl-6 lg:pl-6 md:pl-6 sm:pl-6 sm:pt-0 pt-4'>
                      <p className='text-xl text-gray-600 font-bold'>
                        Ahmad Saman
                      </p>
                      <p className='sm:text-xl text-sm text-gray-600'>
                        Fluter, and Web developer
                      </p>
                    </div>
                  </div>
                  <svg
                    width={85}
                    height={65}
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <text
                      transform='rotate(-180 475.5 56.5)'
                      fill='#EDF2F7'
                      fillRule='evenodd'
                      fontFamily='ProximaNova-Extrabld, Proxima Nova'
                      fontSize={200}
                      fontWeight={600}
                      letterSpacing='1.667'
                    >
                      <tspan x={860} y={184}>
                        “
                      </tspan>
                    </text>
                  </svg>
                </div>
                <p className='text-base text-gray-600 pb-6 w-full sm:w-10/12'>
                  It's a Great Website having almost all the functionalities
                  that wee need. Provides a really good opportunity to connect
                  with people and get work done.You can work with multiple
                  clients and multiple projects with a single platform. It has
                  good role management features. It is user friendly and helpful
                  website.
                </p>

                <img
                  src='https://cdn.tuk.dev/assets/Path-right-arrow.png'
                  alt
                  className='absolute right-0 mr-16 sm:-mt-6 cursor-pointer'
                  onClick={() => setChange(!change)}
                />
              </div>
            </figure>
            <figure className={change ? 'block' : 'hidden'}>
              <div className='w-11/12 mx-auto bg-white py-10 sm:px-16 px-10 relative'>
                <div className='flex items-center justify-between pb-8'>
                  <div className='xl:flex md:flex lg:flex sm:flex items-center'>
                    <div className='h-20 w-20'>
                      <img
                        src='https://cdn.tuk.dev/assets/templates/Project+Management/pm_15.png'
                        alt
                        className='rounded-full object-cover h-full w-full shadow'
                      />
                    </div>
                    <div className='xl:pl-6 lg:pl-6 md:pl-6 sm:pl-6 sm:pt-0 pt-4'>
                      <p className='text-xl text-gray-600 font-bold'>
                        Richard Stark
                      </p>
                      <p className='sm:text-xl text-sm text-gray-600'>
                        UX Strategy
                      </p>
                    </div>
                  </div>
                  <svg
                    width={85}
                    height={65}
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <text
                      transform='rotate(-180 475.5 56.5)'
                      fill='#EDF2F7'
                      fillRule='evenodd'
                      fontFamily='ProximaNova-Extrabld, Proxima Nova'
                      fontSize={200}
                      fontWeight={600}
                      letterSpacing='1.667'
                    >
                      <tspan x={860} y={184}>
                        “
                      </tspan>
                    </text>
                  </svg>
                </div>
                <p className='text-base text-gray-600 pb-6 w-full sm:w-10/12'>
                  The company really helped me with my personal branding.
                  Everything from conception to execution was extremely awesome
                  and really professional. I enjoyed the services they offered.
                  Their design is impeccable.
                </p>
                <p className='text-base text-gray-600 w-full sm:w-10/12'>
                  I truly value the relationship they created with me. I will
                  always think first about them while starting any projects in
                  the future. They are definitely my go-to for any design or
                  services. Excellent communication and I always feel that I am
                  their first priority.
                </p>
                <img
                  src='https://cdn.tuk.dev/assets/Path-right-arrow.png'
                  alt
                  className='absolute right-0 mr-16 sm:-mt-6 cursor-pointer'
                  onClick={() => setChange(!change)}
                />
              </div>
            </figure>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Index;
