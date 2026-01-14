import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex gap-15'>
        <a href="#" className='text-gray-400 font-semibold bg-gray-900 px-3 py-1 rounded-2xl'>Home</a>
        <a href="#" className='text-gray-400 font-semibold bg-gray-900 px-3 py-1 rounded-2xl'>About</a>
        <a href="#" className='text-gray-400 font-semibold bg-gray-900 px-3 py-1 rounded-2xl'>Projects</a>
        <a href="#" className='text-gray-400 font-semibold bg-gray-900 px-3 py-1 rounded-2xl'>Blog</a>
        <a href="#" className='text-gray-400 font-semibold bg-gray-900 px-3 py-1 rounded-2xl'>Contact</a>
    </nav>
  )
}

export default Navbar