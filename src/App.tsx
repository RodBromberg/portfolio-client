import React, { useState } from 'react'
import { BsFillMoonStarsFill, BsLinkedin, BsTwitter } from 'react-icons/bs'
import pinterreach from './images/pinterreach.png'
import './App.css'
import { Box } from './components/Box'
import { Nav } from './components/navigation/Nav'
import myImage from './images/myimage.jpeg'

function App() {
  const [darkMode,setDarkMode] = useState(false)
  const [tools,setTools] = useState(['Html','Css','Javascript','React'])
  const [color,setColor] = useState('teal')
  const [red] = useState('red')
  const blackOrWhite = darkMode ? "dark" : "dark:text-white"

  

  return (
    <div >
    <head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </head>
    {/* <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40"> */}
    {/* <main className= {`bg-white px-10 ${darkMode ? 'white' : 'dark'}:bg-gray-900 md:px-20 lg:px-40`}> */}
    <main className= {`space bg-white px-10 ${darkMode ? 'white' : 'dark'}:bg-gray-900 md:px-20 lg:px-40`}>
      <section className="min-h-screen">
        <Nav 
        color={color}
        darkMode={darkMode} 
        setDarkMode={()=>setDarkMode(!darkMode)} 
        blackOrWhite={blackOrWhite}
        />
        <div className="text-center p-10 py-10">
        <div className="text-gray-600 body-font font-poppins"></div>

          <h2 className={`text-5xl py-2 text-${color}-600 font-medium dark:text-${color}-400 md:text-6xl`}>
            Rod Bromberg
          </h2>
          <h3 className={`text-2xl py-2 ${blackOrWhite}  md:text-3xl`}>
            Software Developer
          </h3>
          <p className={`text-md py-5 leading-8 ${blackOrWhite} max-w-xl mx-auto md:text-xl`}>
            Frontend/Full-Stack Developer Open To New and Exciting Opportunities That Align With My Skillset and Goals
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <BsLinkedin />
          </div>
          <div className={`my-image mx-auto bg-gradient-to-b rounded-full from-blue-600 to: to-blue-500 br-10 max-w-full w-80 relative overflow-hidden mt-20 md:h-96 md:w-96`}>
            <img style={{ opacity: '0.4'}} src={myImage} alt="" />
            {/* <div className={`back-img`} style={{ width: '100%'}}>
              
            </div> */}
            {/* <img className="bg-teal" src="https://avatars.githubusercontent.com/u/37605462?v=4" alt="" /> */}
            {/* <img 
            src={'https://imgs.search.brave.com/Rayp_qzLhne7eryR0tB5aEpUasBhU_ZwjJfSglUDwOE/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly9sc3Vv/bmxpbmUtc3RhdGlj/LnMzLmFtYXpvbmF3/cy5jb20vbWVkaWEv/aW1hZ2VzLzIwMjEv/MDIvMDUvT0NFXzIw/MjBfV2ViX0hlYWRl/cl9TUUxBbmFseXRp/Y3NfczE0NTE3OTQx/NjAuanBn'} 
             /> */}
          </div>
        </div>
      </section>
      <section>
          <h3 className={`text-3xl py-1 ${blackOrWhite}`}>Projects I've Worked On</h3>
        <div>
          <p className={`text-md py-2 leading-8 ${blackOrWhite}`}>
            I've done remote work for agencies
            consulted for startups 
            and collaborated with talanted people to create digital products
            for both business and consumer use.
          </p>
          <p className={`text-md py-2 leading-8 ${blackOrWhite}`}>
            I offer from a wide range of services, including brand design,
            programming and teaching.
          </p>
        </div>
        <div className="lg:flex gap-10">
          <Box 
          header={'PinterReach'} 
          tools={tools} 
          image={pinterreach}
          color={color}
          />
          <Box 
          header={'Code your dream project'} 
          tools={tools} 
          image={pinterreach}
          color={color}
          />
          <Box 
          header={'Code your dream project'} 
          tools={tools} 
          image={pinterreach}
          color={color}
          />

        </div>

      </section>
      <section className="py-10">
        <div>
          <h3 className={`text-3xl py-1 ${blackOrWhite}`}>Portofolio</h3>
          <p className={`text-md py-2 leading-8 ${blackOrWhite}`}>
            Since the beginning of my journey as a freelance designer and
            developer, I've done remote work for
            <span className={`text-${color}-500`}> agencies </span>
            consulted for <span className={`text-${color}-500`}>startups </span>
            and collaborated with talanted people to create digital products
            for both business and consumer use.
          </p>
          <p className={`text-md py-2 leading-8 text-gray-800 ${blackOrWhite}`}>
            I offer from a wide range of services, including brand design,
            programming and teaching.
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 ">
            <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              
              src={'https://imgs.search.brave.com/Rayp_qzLhne7eryR0tB5aEpUasBhU_ZwjJfSglUDwOE/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly9sc3Vv/bmxpbmUtc3RhdGlj/LnMzLmFtYXpvbmF3/cy5jb20vbWVkaWEv/aW1hZ2VzLzIwMjEv/MDIvMDUvT0NFXzIw/MjBfV2ViX0hlYWRl/cl9TUUxBbmFseXRp/Y3NfczE0NTE3OTQx/NjAuanBn'}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              // layout="responsive"
              src={'https://imgs.search.brave.com/Rayp_qzLhne7eryR0tB5aEpUasBhU_ZwjJfSglUDwOE/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly9sc3Vv/bmxpbmUtc3RhdGlj/LnMzLmFtYXpvbmF3/cy5jb20vbWVkaWEv/aW1hZ2VzLzIwMjEv/MDIvMDUvT0NFXzIw/MjBfV2ViX0hlYWRl/cl9TUUxBbmFseXRp/Y3NfczE0NTE3OTQx/NjAuanBn'}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              // layout="responsive"
              src={'https://imgs.search.brave.com/Rayp_qzLhne7eryR0tB5aEpUasBhU_ZwjJfSglUDwOE/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly9sc3Vv/bmxpbmUtc3RhdGlj/LnMzLmFtYXpvbmF3/cy5jb20vbWVkaWEv/aW1hZ2VzLzIwMjEv/MDIvMDUvT0NFXzIw/MjBfV2ViX0hlYWRl/cl9TUUxBbmFseXRp/Y3NfczE0NTE3OTQx/NjAuanBn'}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              src={'https://imgs.search.brave.com/Rayp_qzLhne7eryR0tB5aEpUasBhU_ZwjJfSglUDwOE/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly9sc3Vv/bmxpbmUtc3RhdGlj/LnMzLmFtYXpvbmF3/cy5jb20vbWVkaWEv/aW1hZ2VzLzIwMjEv/MDIvMDUvT0NFXzIw/MjBfV2ViX0hlYWRl/cl9TUUxBbmFseXRp/Y3NfczE0NTE3OTQx/NjAuanBn'}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              
              src={'https://imgs.search.brave.com/Rayp_qzLhne7eryR0tB5aEpUasBhU_ZwjJfSglUDwOE/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly9sc3Vv/bmxpbmUtc3RhdGlj/LnMzLmFtYXpvbmF3/cy5jb20vbWVkaWEv/aW1hZ2VzLzIwMjEv/MDIvMDUvT0NFXzIw/MjBfV2ViX0hlYWRl/cl9TUUxBbmFseXRp/Y3NfczE0NTE3OTQx/NjAuanBn'}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              // layout="responsive"
              src={'https://imgs.search.brave.com/Rayp_qzLhne7eryR0tB5aEpUasBhU_ZwjJfSglUDwOE/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly9sc3Vv/bmxpbmUtc3RhdGlj/LnMzLmFtYXpvbmF3/cy5jb20vbWVkaWEv/aW1hZ2VzLzIwMjEv/MDIvMDUvT0NFXzIw/MjBfV2ViX0hlYWRl/cl9TUUxBbmFseXRp/Y3NfczE0NTE3OTQx/NjAuanBn'}
            />
          </div>
        </div>
      </section>
    </main>
  </div>
  )
}

export default App
