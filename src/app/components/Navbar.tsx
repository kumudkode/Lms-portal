import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className='bg-gray-600 py-4 flex justify-between'>
      <Link href="/">Home</Link>
      <Link href="/">Dashboard</Link>
      <Link href="/">Login/Signup</Link>
    </nav>
  )
}

export default Navbar