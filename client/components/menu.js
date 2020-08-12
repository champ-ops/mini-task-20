import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className=" flex flex-col h-screen justify-center items-center bg-teal-700 text-white">
      <Link className="border-solid rounded-lg border-2 border-white mb-2 px-1 " to="/first">
        First task
      </Link>
      <Link className="border-solid rounded-lg border-2 border-white mb-2 px-1" to="/second">
        Second task
      </Link>
      <Link className="border-solid rounded-lg border-2 border-white mb-2 px-1" to="/third">
        Third task
      </Link>
      <Link className="border-solid rounded-lg border-2 border-white mb-2 px-1" to="/fourth">
        Fourth task
      </Link>
      <Link className="border-solid rounded-lg border-2 border-white mb-2 px-1" to="/fifth">
        Fifth task
      </Link>
      <Link className="border-solid rounded-lg border-2 border-white mb-2 px-1" to="/sixth">
        Sixth task
      </Link>
      <Link className="border-solid rounded-lg border-2 border-white mb-2 px-1" to="/seventh">
        Seventh task
      </Link>
      <Link className="border-solid rounded-lg border-2 border-white mb-2 px-1" to="/eighth">
        Eighth task
      </Link>
      <Link className="border-solid rounded-lg border-2 border-white mb-2 px-1" to="/nine">
        Nine task
      </Link>
    </div>
  )
}

export default Menu
