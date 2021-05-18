import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';
import { v4 as uuidv4 } from 'uuid';

const container = {
    hidden: {
        x: 400,
        transition: {
            duration: 0.4,
        },
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
        },
    },
};
const burgervariants = {
    open: {
        borderRadius: '10px 0px 10px  0px ',
        backgroundColor: 'rgba(255,255,255,0.15)',
    },
    closed: {
        borderRadius: '0px 10px   0px 10px',
        backgroundColor: 'rgba(0,0,0,0.75)',
    },
};
function BurgerMenu({ Urls }) {
    const [state, setstate] = useState(false);
    return (
        <>
            <motion.div
                variants={burgervariants}
                animate={state ? 'open' : 'closed'}
                className=" fixed p-1 z-50 top-0 right-0  m-3 flex tablet:hidden">
                <Hamburger
                    color="#fff"
                    toggle={() => {
                        setstate(!state);
                    }}
                    toggled={state}
                />
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                animate={state ? 'show' : 'hidden'}
                transition={{ duration: 0.3 }}
                className="fixed z-40 bg-opacity-90 bg-gray-900 right-0 top-0 h-screen w-60 tablet:hidden">
                <nav>
                    <ul className={` text-white pt-20 ${state ? 'flex ' : 'hidden'}    flex-col  items-center   `}>
                        {Urls.map((url) => {

                            if (!!url.func) {
                                return (
                                    <li key={uuidv4()} className=" flex justify-center items-center w-20  h-20   my-3 ">
                                        <NavLink
                                            to={url.path}
                                            onClick={() => {
                                                url.func()
                                                setstate(!state);
                                            }}>
                                            <motion.h1 className="   sm:text-md text-lg font-bold ">{url.name}</motion.h1>
                                        </NavLink>
                                    </li>)
                            }
                            else
                                return (
                                    <li key={uuidv4()} className=" flex justify-center items-center w-20  h-20   my-3 ">
                                        <NavLink
                                            to={url.path}
                                            onClick={() => {
                                                setstate(!state);
                                            }}>
                                            <motion.h1 className="   sm:text-md text-lg font-bold ">{url.name}</motion.h1>
                                        </NavLink>
                                    </li>)
                        }
                        )
                        }
                    </ul>
                </nav>
            </motion.div>
        </>
    );
}

export default BurgerMenu
