import React from 'react'
import './second.scss'
import '../assets/scss/main.scss'

const Fifth = () => {
  return (
    <div>
      <div className="flex">
        <div className="q bg-blue-500">0</div>
        <div className=" bg-green-300 w-full d">0.1</div>
      </div>
      <div className="flex">
        <div className="w-1/3 bg-yellow-500">1</div>
        <div className="w-1/3 bg-red-500">2</div>
        <div className="w-1/3 bg-green-500">3</div>
      </div>
      <div className="flex">
        <div className="w-1/3 bg-red-500">4</div>
        <div className="w-1/3 bg-green-500">5</div>
        <div className="w-1/3 bg-yellow-500">6</div>
      </div>
    </div>
  )
}

export default Fifth
