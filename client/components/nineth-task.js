import React from 'react'
import './second.scss'
import '../assets/scss/main.scss'

const Nine = () => {
  return (
    <div className="h-screen flex">
      <div className=" bg-gray-600 f m-auto ">
        <div className="bg-black s">1</div>
        <div className="flex justify-center">
          <div className="bg-black s">2</div>
        </div>
        <div className="flex justify-end">
          <div className="bg-black s">3</div>
        </div>
      </div>
    </div>
  )
}

export default Nine
