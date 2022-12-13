import React, { useState } from 'react'
import { BsFillMoonStarsFill,BsFillMoonFill, BsPaletteFill } from 'react-icons/bs'

interface NavProps {
    darkMode: boolean,
    setDarkMode: (darkMode: boolean) => void,
    // setShowModal: (showModal: boolean) => void,
    color: string,
    blackOrWhite: string
}

const colors = ['white','red','black','green','yellow',]

const Modal = () => {
    return (
        <div className="fixed right-20 top-8">
            <div className="cursor-pointer p-2 mr-200 fixed left-50 rounded bg-slate-400 w-20 overflow-x-scroll">
              {colors.map(color => (
                <div>{color}</div>
              ))}
            </div>
        </div>
    )
}

export const Nav = ({ darkMode, setDarkMode,color, blackOrWhite }: NavProps) => {
    const [showModal, setShowModal] = useState(false)


  return (
    <>
    <nav className="py-10 mb-12 flex justify-between dark:text-white">
    <h1 className={`text-xl ${darkMode ? 'text-teal-600': 'text-teal-600'}`}>xdevelopedbyx</h1>
    <ul className="flex items-center">
      <li className={`flex`}>
      <BsPaletteFill 
      onClick={() => setShowModal(!showModal)}
      className={`cursor-pointer text-2xl mr-5 ${darkMode ? 'text-black' : null}`} 
      />
       <BsFillMoonStarsFill
          onClick={() => setDarkMode(!darkMode)}
          className={`cursor-pointer text-2xl ${darkMode ? 'text-black' : null}`}
        /> 
      </li>
      <li>
        <a
          className={`bg-gradient-to-r from-teal-500 text- to-teal-100 text-white px-4 py-2 border-none rounded-md ml-8`}
          href="#"
        >
          Resume
        </a>
      </li>
    </ul>
  </nav>
  {showModal ? <Modal /> : null}
  </>
  )
}
