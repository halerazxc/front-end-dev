import { useEffect, useState } from 'react'
import { assets } from '../assets/assets.tsx'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "motion/react"

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)

  useEffect(() => {
    document.body.style.overflow = showMobileNav ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [showMobileNav])



  return (
    <header id='Home' className="w-full relative">
      {/* Header Navigation */}
      <div className='container z-[100] mx-auto flex justify-end items-center lg:py-[34px] py-4 lg:px-[112px] px-6'>
        {/* Desktop nav */}
        <ul className='md:flex hidden space-x-8 text-lg font-medium transition-all'>
          <a className='hover:text-gray-300' href="#Home">Home</a>
          <a className='hover:text-gray-300' href="#MyWorks">Work</a>
          <a className='hover:text-gray-300' href="#Contacts">Contacts</a>
        </ul>

        {/* Mobile menu button */}
        <img
          className={`md:hidden cursor-pointer ${showMobileNav ? 'hidden' : 'block'}`}
          onClick={() => setShowMobileNav(true)}
          src={assets.burger}
          alt="burger menu"
        />

        <img
          className={`md:hidden cursor-pointer ${showMobileNav ? 'block' : 'hidden'}`}
          onClick={() => setShowMobileNav(false)}
          src={assets.cross}
          alt="burger menu"
          width={30}
        />


      </div>

      {/* Mobile nav content */}
      {showMobileNav && (
        <div className='flex flex-col p-6 fixed top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl border-white border bg-[#010101] gap-5'>
          <a onClick={() => setShowMobileNav(false)} href="#Home">Home</a>
          <a onClick={() => setShowMobileNav(false)} href="#MyWorks">Work</a>
          <a onClick={() => setShowMobileNav(false)} href="#Contacts">Contacts</a>
        </div>
      )}


      {/* Centered Big Text */}
      <div
        className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] w-full px-4 pt-[80px] pb-14 text-center" >
        <p className='text-[40px] md:text-[65px] text-gray-500 max-w-6xl font-extralight'>
          I’m a front-end developer specialising in{' '}
          <span className="text-blue-400">
            <Typewriter
              words={['UI/UX Interfaces', 'React & Tailwind', 'Web Animation', 'Responsive Design']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </p>


        <div className='absolute bottom-14 left-1/2 -translate-x-1/2 animate-pulse'>
          <img src={assets.arrowDown} alt="" />
        </div>
      </div>
    </header >
  )
}

export default Header
