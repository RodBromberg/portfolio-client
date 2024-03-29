import React, { useState } from 'react'
import { BsFillMoonStarsFill,BsFillMoonFill, BsPaletteFill } from 'react-icons/bs'

interface NavProps {
    darkMode: boolean,
    setDarkMode: (darkMode: boolean) => void,
    color: string,
    // blackOrWhite: string
}

// test
export const Nav = ({ darkMode, setDarkMode,color,  }: NavProps) => {
  return (
    <>
    <nav className="py-10 mb-12 flex justify-between dark:text-white">
    <a href='#' className={`text-xl text-white-600`}>rodbromberg.me</a>
    <ul className="flex items-center">
      <li className={`flex`}>
      </li>
      <li>
        <a 
          target='_blank'
          className={`bg-gradient-to-r from-blue-900 text- to-blue-800 px-4 py-2 border-none rounded-md ml-8`}
          href="https://resume.creddle.io/embed/aib94t4uc26">
          Resume
        </a>
      </li>
    </ul>
  </nav>
  </>
  )
}
