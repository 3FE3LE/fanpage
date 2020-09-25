import React from 'react'
import Link from 'next/link'
import Footer from './Footer'
import SocialMediaLinks from './SocialMediaLinks'
import About from './content/About'
import Youtuber from './content/Youtuber'
import Developer from './content/Developer'
import MyServices from './content/MyServices'

const PrincipalSection = () => {
  return (
    <>
      <section className='w-full h-screen min-h-full flex flex-wrap justify-center items-center'>
        <div className="w-full  md:w-10/12 min-h-screen grid grid-rows-5 ">
          <div className="w-full h-full row-span-3 flex flex-wrap">
            <MyServices view={true} />
            <div className="w-full sm:w-6/12 md:w-5/12 h-auto sm:h-full grid grid-rows-2 sm:grid-rows-3">
              <div className="relative w-full sm:h-full row-span-1 sm:row-span-2 bg-black px-2 py-2 sm:p-4 flex-wrap flex justify-center  text-white shadow-2xl ">
                <div className="flex items-center justify-between w-full">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl px-2  "> Bienvenido a...</h1>
                  <h1 className="museo text-2xl sm:text-4xl md:text-5xl lg:text-6xl px-2 text-center" >3FE 3LE</h1>
                </div>
                <img className="w-16 h-16 absolute sm:right-0 bottom-0 sm:-mr-8 -mb-6 sm:-mb-8 animate-text-focus-in" src="/favicon.ico" />
              </div>
              <div className="w-full sm:h-full row-span-1 bg-gradient-to-r from-teal-400 to-blue-500 text-white p-2 flex justify-center items-center shadow-inner">
                <h1 className=" mx-4 text-2xl museo z-10">Digital</h1>
                <img src="/youtube-logo.png" alt="youtube" className="h-10 sm:h-16 -m-8" />
                <h1 className=" mx-4 text-2xl">Creator</h1>
              </div>
            </div>
            <div className="w-full sm:w-6/12 md:w-5/12 h-auto sm:h-full flex items-center sm:text-md  md:text-lg lg:text-xl xl:text-2xl uppercase font-black  bg-gray-100 sm:pl-5 p-4 text-center sm:text-right shadow-inner">
              <p> Hola muchachos!!. <br /> ¡¿como están?! <br /> como se pueden dar cuenta este es mi sitio web, el cual estaré construyendo para mas adelante convertirlo en algo un poco mas interesante </p>
            </div>
          </div>
          <div className="w-full h-full row-span-2 flex shadow-inner">
            <Developer />
            <div className="w-8/12 md:w-6/12 bg-black min-h-full">
              <SocialMediaLinks />
              <div className="h-full pt-12 flex animate-pulse justify-center items-center">
                <div className="text-white text-2xl font-black uppercase">Muy pronto...</div>
              </div>
            </div>
            <Youtuber />
          </div>
        </div>
        <div className="w-full  md:w-2/12 min-h-screen z-50 grid grid-rows-5  ">
          <About />
          <MyServices view={false} />
          <div className="w-full z-0 bg-black text-white  row-span-1 md:row-span-3 flex flex-wrap justify-center items-center p-4">
            <Footer />
          </div>
        </div>
      </section>
    </>
  )
}

export default PrincipalSection
