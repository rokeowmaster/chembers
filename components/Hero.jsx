'use client'
import React from 'react'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div
        className="hero min-h-screen" style={{backgroundImage: 'url(banner.webp)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <motion.div 
        initial={{y:'-1000vh'}} 
        animate={{y:0}} 
        transition={{ ease: "easeIn", duration: 2 }}
        className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Chembers Beds, Your Interior Design Partner</h1>
            <p className="mb-5">Instant Room Decor Upgrades You Can't Afford to Overlook</p>
            <a href="#projects" className="btn btn-primary">Browse</a>
            </div>
        </motion.div>
    </div>
  )
}

export default Hero