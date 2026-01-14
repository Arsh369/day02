import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex gap-15'>
        <Link to={'/'} className='text-gray-400 font-semibold bg-gray-900 px-3 py-1 rounded-2xl'>Home</Link>
        <Link to={'/about'} className='text-gray-400 font-semibold bg-gray-900 px-3 py-1 rounded-2xl'>About</Link>
        <Link  className='text-gray-400 font-semibold bg-gray-900 px-3 py-1 rounded-2xl'>Projects</Link>
        <Link  className='text-gray-400 font-semibold bg-gray-900 px-3 py-1 rounded-2xl'>Blog</Link>
        <Link  className='text-gray-400 font-semibold bg-gray-900 px-3 py-1 rounded-2xl'>Contact</Link>
    </nav>
  )
}

export default Navbar