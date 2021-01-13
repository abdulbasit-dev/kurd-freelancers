import React, { useState } from 'react'
import logo from "./../assets/img/linkedin.svg"

const Input = ({ placeholder, className, type }) => {
    const [display, setDisplay] = useState(()=>false)
    return (
        <div className={`relative flex items-center border border-lightblue ${className}`}>
            <h1 className={`text-gray-400 absolute left-1 ${display ? 'block':'hidden'} transition ease-in-out duration-200`}>{"placeholder"}</h1>
            <input type={type ? type : "text"} className="w-full z-10 bg-transparent bottom-0" placeholder={ "" }/>
            <img src={logo} alt="username/email logo" className=" w-5 h-5  absolute right-1 z-20 "/>
        </div>
    )
}

export default Input
