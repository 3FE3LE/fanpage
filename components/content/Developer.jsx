import { Fade, Slide } from '@material-ui/core'
import React, { useState } from 'react'

const Developer = () => {

  const [show, setShow] = useState(false)

  const handleClick = () => setShow(true)

  const handleClose = () => setShow(false)

  return (
    <>
      <div onClick={() => handleClick()} className="w-2/12 md:w-4/12 bg-circuit bg-gray-200 min-h-full p-2 shadow-inner flex items-center justify-center  sm:transition duration-500 ease-in-out transform  cursor-pointer hover:-translate-y-3 hover:scale-105">
        <h1 className="museo md:text-2xl lg:text-4xl p-4 text-teal-400">D E V E L O P E R</h1>
      </div>
      <Fade in={show} timeout={{ appear: 30000, enter: 1000, exit: 800 }}>
        <div className="fixed top-0 z-100 right-0 left-0 bottom-0 bg-circuit bg-gray-200 w-screen h-screen pb-12 px-4 font-black text-2xl">
          <div className="w-full h-full relative" >
            <Slide direction="down" in={show} unmountOnExit mountOnEnter timeout={{ enter: 1000, exit: 1000 }}>
              <div className="w-full h-full z-30 shadow-md bg-gradient-to-br from-teal-100  to-transparent rounded-b-lg px-8 py-4">
                <svg onClick={() => handleClose()} className="w-12 h-12 text-teal-500 fixed top-1/12 right-1/12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                </svg>
                <div className="md:w-full">
                  <h1 className="text-teal-500 text-5xl w-5/12 sm:w-full museo sm:text-8xl" >D E V E L O P E R</h1>
                </div>
                <div className="pt-32">
                  <p className="text-teal-500 sm:w-8/12 font-semibold sm:text-2xl" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt asperiores temporibus mollitia praesentium repudiandae neque dolores! Reiciendis eos quidem adipisci, consequatur quod ipsam culpa, rem ad tempora ipsa debitis nostrum?</p>
                </div>
              </div>
            </Slide>
            <img src="/developer.svg" alt="me" className="bg-opacity-0 w-8/12 fixed right-0 -z-10 bottom-1/12 " />
          </div>
        </div>
      </Fade>
    </>
  )
}

export default Developer
