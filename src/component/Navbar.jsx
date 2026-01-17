import React from 'react'

const Navbar = () => {
  return (
   <nav className='bg-purple-400 p-4 flex justify-between items-center h-20'>
    <div className='logo font-bold'>Pass OP  </div>
    <ul>
        <li className=' flex gap-4 space-x-4'>
          <a   className='hover:font-bold' href="/"> Home </a>
          <a   className='hover:font-bold' href="">About Us </a>
            <a   className='hover:font-bold' href="">Contact Us </a>
        </li>
    </ul>
   </nav>
  )
}

export default Navbar
