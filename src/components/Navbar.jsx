import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 z-[100] w-full absolute'>
      <h1 className='text-blue-600 text-4xl font-bold cursor-pointer '>FMOVIES</h1>
      <div>
        <button className='text-white pr-4'>Upcoming</button>
        <button className='text-white pr-4'>Popular</button>
        <button className='py-2 rounded text-white'>Top Rated</button>
      </div>
      <div>
        <button className='text-white pr-4'>Sign In</button>
        <button className='bg-red-600 px-6 py-2 rounded text-white'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
