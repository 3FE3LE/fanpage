import { Fade, Slide } from '@material-ui/core'
import React, { useState } from 'react'

const Youtuber = () => {

  const [show, setShow] = useState(false)

  const handleClick = () => setShow(true)

  const handleClose = () => setShow(false)

  return (
    <>
      <div onClick={() => handleClick()} className="w-2/12  bg-gradient-to-tr from-red-500 via-red-700 to-red-600 min-h-full p-2 shadow-inner flex items-center justify-center sm:transition duration-500 ease-in-out transform  cursor-pointer hover:-translate-y-3 hover:scale-105">
        <h1 className="md:text-4xl lg:text-5xl p-4 text-center text-white ">You Tuber</h1>
      </div>
      <Fade in={show} timeout={{ appear: 30000, enter: 1000, exit: 800 }}>
        <div  className="fixed top-0 z-100 right-0 left-0 bottom-0  bg-gradient-to-tr from-red-500 via-red-700 to-red-600 bg-opacity-75 w-screen h-screen pb-12 px-4 font-black text-2xl">
          <div className="w-full h-full relative" >
            <Slide direction="down" in={show} unmountOnExit mountOnEnter timeout={{ enter: 1000, exit: 1000 }}>
              <div className="w-full h-full z-30 shadow-md bg-gradient-to-tr from-red-600  to-transparent rounded-b-lg px-8 py-4">
                <svg onClick={() => handleClose()} className="w-12 h-12 text-red-100 fixed top-1/12 right-1/12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                </svg>
                <div className="md:w-3/12">
                  <h1 className="text-white text-6xl sm:text-8xl" >You</h1>
                  <h5 className="text-white -mt-16 sm:-mt-24 text-8xl sm:text-12xl text-right" >Tuber.</h5>
                </div>
                <p className="text-red-100 sm:w-8/12 font-semibold sm:text-2xl" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt asperiores temporibus mollitia praesentium repudiandae neque dolores! Reiciendis eos quidem adipisci, consequatur quod ipsam culpa, rem ad tempora ipsa debitis nostrum?</p>
              </div>
            </Slide>
            <img src="/youtuber.svg" alt="me" className="bg-opacity-0 w-8/12 fixed right-0 -z-10 bottom-1/12 " />
          </div>
        </div>
      </Fade>
    </>
  )
}

export default Youtuber
