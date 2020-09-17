import React, { useState } from 'react'
import { Fade, Slide } from '@material-ui/core'

const About = () => {

  const [show, setShow] = useState(false)

  const handleClick = () => setShow(true)

  const handleClose = () => setShow(false)

  return (
    <>
      <div onClick={() => handleClick()} className="w-full bg-white row-span-2 md:row-span-2 shadow-inner sm:transition duration-500 ease-in-out transform sm:hover:-translate-x-2 cursor-pointer hover:translate-y-1 hover:scale-105">
        <div className="animate-pulse h-12 w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center">
          <h1 className="font-black  text-white text-2xl">Acerca de Mi</h1>
        </div>
        <div className="h-full flex justify-center">
          <img src="/about-me.svg" alt="me" className="object-cover" />
        </div>
      </div>
      <Fade in={show} timeout={{ appear: 30000, enter: 1000, exit: 800 }}>
        <div  className="fixed top-0 z-10 right-0 left-0 bottom-0  bg-gradient-to-tr from-yellow-400 via-orange-500 to-red-500 bg-opacity-75 w-screen h-screen pb-12 px-4 font-black text-2xl">
          <div className="w-full h-full relative" >
            <Slide direction="down" in={show} unmountOnExit mountOnEnter timeout={{ enter: 1000, exit: 1000 }}>
              <div className="w-full h-full z-30 shadow-md bg-gradient-to-r from-orange-500 to-transparent rounded-b-lg px-8 py-4">
                <svg onClick={() => handleClose()} className="w-12 h-12 text-red-100 fixed top-1/12 right-1/12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                </svg>
                <div className="md:w-5/12">
                  <h1 className="text-red-100 text-6xl sm:text-8xl" >Acerca de</h1>
                  <h5 className="text-yellow-200 -mt-16 sm:-mt-24 text-8xl sm:text-12xl text-right" >Mi...</h5>
                </div>
                <p className="text-orange-200 sm:w-8/12 font-semibold sm:text-2xl" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt asperiores temporibus mollitia praesentium repudiandae neque dolores! Reiciendis eos quidem adipisci, consequatur quod ipsam culpa, rem ad tempora ipsa debitis nostrum?</p>
              </div>
            </Slide>
            <img src="/about-me.svg" alt="me" className="bg-opacity-0 w-8/12 fixed right-0 -z-10 bottom-1/12 " />
          </div>
        </div>
      </Fade>
    </>
  )
}

export default About
