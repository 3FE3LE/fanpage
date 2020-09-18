import { Fade, Slide } from '@material-ui/core'
import React, { useState } from 'react'

const MyServices = ({ view }) => {

  const [show, setShow] = useState(false)

  const handleClick = () => setShow(true)

  const handleClose = () => setShow(false)

  return (

    <>
      {view === true ? <div onClick={() => handleClick()} className="w-0 h-0 md:w-2/12 bg-gray-100 md:h-full sm:transition duration-500 ease-in-out transform  cursor-pointer sm:hover:translate-y-2 sm:hover:translate-x-1 sm:hover:scale-105">
        <div className="animate-pulse h-12 w-full bg-gradient-to-r from-gray-500 via-gray-700 to-gray-600 flex items-center justify-center">
          <h1 className="museo hidden md:inline font-black text-white text-2xl">Mis Servicios</h1>
        </div>
        <div className="h-full flex justify-center">
          <img src="/services.svg" alt="me" className="object-cover object-top" />
        </div>
      </div> :
        <div onClick={() => handleClick()} className="w-full bg-white row-span-2  md:hidden ">
          <div className="animate-pulse h-12 w-full   bg-gradient-to-r from-gray-500 via-gray-700 to-gray-600 flex items-center justify-center">
            <h1 className="museo font-black text-white text-2xl">Mis Servicios</h1>
          </div>
          <div className="h-full flex justify-center">
            <img src="/services.svg" alt="me" className="object-cover object-top" />
          </div>
        </div>}
      <Fade in={show} timeout={{ appear: 30000, enter: 1000, exit: 800 }}>
        <div className="fixed top-0 z-100 right-0 left-0 bottom-0  bg-gradient-to-tr from-gray-800 via-gray-500 to-gray-700 bg-opacity-75 w-screen h-screen pb-12 px-4 font-black text-2xl">
          <div className="w-full h-full relative" >
            <svg onClick={() => handleClose()} className="w-12 h-12 text-red-100 fixed top-1/12 right-1/12 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
            </svg>
            <Slide direction="down" in={show} unmountOnExit mountOnEnter timeout={{ enter: 1000, exit: 1000 }}>
              <div className="w-full h-full -z-30 shadow-md bg-gradient-to-br from-gray-500 to-transparent rounded-b-lg px-8 py-4">
                <div className="md:w-5/12">
                  <h1 className="museo text-gray-300 text-6xl sm:text-8xl" >Mis</h1>
                  <h5 className="museo text-white -mt-16 sm:-mt-24  text-6xl sm:text-12xl" >Servicios</h5>
                </div>
                <p className="text-white sm:w-8/12 font-semibold sm:text-2xl" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt asperiores temporibus mollitia praesentium repudiandae neque dolores! Reiciendis eos quidem adipisci, consequatur quod ipsam culpa, rem ad tempora ipsa debitis nostrum?</p>
              </div>
            </Slide>
            <img src="/developer_activity.svg" alt="me" className="bg-opacity-0 w-8/12 fixed right-0 -z-10 bottom-1/12 " />
          </div>
        </div>
      </Fade>
    </>
  )
}

export default MyServices
