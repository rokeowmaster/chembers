import Image from 'next/image'
import React from 'react'

const Nav = () => {
  return (
    <nav>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a href="/">
                <Image src="/clogo.png" width="50" height="50" alt=""/></a>
                <a className="btn btn-ghost text-xl">Chembers <span className='sm:flex hidden'>Interior Design</span>
                </a>
            </div>
            <div className="flex-none sm:flex hidden">
                <ul className="menu menu-horizontal px-1">
                <li><a href="/contacts">Contacts</a></li>
                <li>
                    <details>
                    <summary>
                        About
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-t-none">
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/about">Information</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>
                    </details>
                </li>
                {/* <li>Login</li> */}
                </ul>
            </div>
            <div className='mx-2'><a href="/login">Login</a></div>
            <div className='mx-2'><a href="/">Sign up</a></div>
            <div className='sm:hidden flex'>Menu</div>
        </div>
    </nav>
  )
}

export default Nav