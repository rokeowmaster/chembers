import Image from 'next/image'
import React from 'react'

const Nav = () => {
  return (
    <nav className="z-50">
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a href="/">
                <Image src="/clogo.png" width="50" height="50" alt=""/></a>
                <a className="btn btn-ghost text-xl">Chembers <span className='sm:flex hidden'>Interior Design</span>
                </a>
            </div>
            <div className="">
                <ul className="menu menu-horizontal px-1">
                <section className='flex-none sm:flex hidden'>
                <li><a href="/contacts">Contacts</a></li>
                <li>
                    <details>
                    <summary>
                        About
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-t-none">
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/about">Information</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>
                    </details>
                </li>
                <li><a href="/login">Login</a></li>
                <li><a href="/">Sign up</a></li>
                </section>
                
                <li className='sm:hidden flex'>
                    <details>
                    <summary>
                        <button className="btn btn-square btn-ghost"> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-t-none">
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/about">Information</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>
                    </details>
                </li>
                </ul>
                </div>
        
                
            
        </div>
    </nav>
  )
}

export default Nav