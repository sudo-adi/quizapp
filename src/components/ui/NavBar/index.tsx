import React from 'react'

const NavBar = () => {
  return (
    <a href="localhost:3000" className='block'>
      <div className='h-[50px] rounded-full mt-2 mx-2 bg-gradient-to-r from-indigo-800 via-purple-500 to-pink-500 items-center flex flex-row justify-between'>
        <h1 className="text-white pl-6 text-xl font-bold">Xeon Quiz</h1>
        <div className="flex text-white text-xl font-semibold flex-row gap-6 items-center justify-center mr-40">
          <h1 className='hover:text-pink-200'>
            Login
          </h1>
          <h1 className='hover:text-pink-200'>
            Signup
          </h1>
        </div>
      </div>
    </a>
  )
}

export default NavBar