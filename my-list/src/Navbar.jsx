import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between bg-slate-700 text-white py-5'> 
    <div className="logo">

        <span className=' font-bold text-xl mx-8 '> iTmask</span>
    </div>
    <ul className='flex gap-8 mx-9'>

        <li className='cursor-pointer hover:font-bold transition-all duration-75'>Home</li>
         <li className='cursor-pointer hover:font-bold transition-all duration-75'>Your 
            tasks
         </li>
    </ul>
    </nav>
  )
}

export default Navbar