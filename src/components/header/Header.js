import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'


export default function Header() {
  return (
    <div className='container'>
    <ul className='linkContainer'>
      <li className='links'><Link className='item' to="/">Home</Link></li>
      <li className='links'><Link className='item' to="/login">Login</Link></li>
      <li className='links'><Link className='item' to="/Register">Sign up</Link></li>
      <li className='links'><Link className='item' to="/profile">Profile</Link></li>
    </ul>
  </div>
  )
}
