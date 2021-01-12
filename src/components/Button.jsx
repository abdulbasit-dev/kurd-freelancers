import React from 'react'

function Button({text}) {
    return (
        <button className="bg-blue-500 rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6">
    {text}
    </button>
    )
}

export default Button
