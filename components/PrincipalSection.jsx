import React from 'react'
import Link from 'next/link'
import Footer from './Footer'
import SocialMediaLinks from './SocialMediaLinks'

const PrincipalSection = () => {
  return (
    <>
      <section className='w-full h-screen min-h-full flex flex-col md:flex-row justify-center items-center'>
        <div className="w-full md:w-10/12 h-full grid grid-rows-5 ">
          <div className="w-full h-full row-span-3 flex flex-col sm:flex-row">
            <div className="w-0 h-0 md:w-2/12 bg-gray-100 md:h-full shadow-inner ">
              <div className="animate-pulse h-12 w-full bg-gradient-to-r from-gray-500 via-gray-700 to-gray-600 flex items-center justify-center">
                <Link href="/my-services">
                  <a>
                    <h1 className="hidden md:inline font-black text-white text-2xl">Mis Servicios</h1>
                  </a>
                </Link>
              </div>
              <div className="h-full flex justify-center">
                <img src="/services.png" alt="me" className="object-cover object-top" />
              </div>
            </div>
            <div className="w-full sm:w-6/12 md:w-5/12 h-full grid sm:grid-rows-3">
              <div className="w-full sm:h-full bg-black px-2 py-2 sm:p-4 row-span-1 sm:row-span-2 flex flex-row items-center justify-between text-white shadow-2xl ">
                <h1 className="text-2xl sm:text-4xl px-2 ">
                  Bienvenido a...
                </h1>
                <h1 className="museo text-2xl sm:text-4xl px-2 text-center" >3FE 3LE</h1>
              </div>
              <div className="w-full h-full bg-gradient-to-r from-teal-400 to-blue-500 text-white row-span-1 p-2 flex justify-center items-center shadow-inner">
                <h1 className="p-2 m-2 text-2xl museo">Digital</h1>
                <img src="/youtube-logo.png" alt="youtube" className="h-10 sm:h-16" />
                <h1 className="p-2 m-2 text-2xl ">Creator</h1>
              </div>
            </div>
            <div className="w-full sm:w-6/12 text-lg lg:text-2xl xl:text-3xl md:w-5/12 bg-gray-100 h-full p-4 shadow-inner">
              <p> Hola muchachos!! ¿como están? como se pueden dar cuenta este es mi sitio web, el cual estaré construyendo para mas adelante convertirlo en algo un poco mas interesante </p>
            </div>
          </div>
          <div className="w-full h-full row-span-2 flex shadow-inner">
            <div className="w-2/12 md:w-4/12 bg-gray-200 min-h-full p-2 shadow-inner flex items-center justify-center">
              <h1 className="museo md:text-2xl lg:text-4xl p-4 text-teal-400">D E V E L O P E R</h1>
            </div>
            <div className="w-8/12 md:w-6/12 bg-black min-h-full">
              <SocialMediaLinks />
              <div className="h-full pt-12 flex animate-pulse justify-center items-center">
                <div className="text-white text-2xl font-black uppercase">Muy pronto...</div>
              </div>
            </div>
            <div className="w-2/12 bg-red-500 min-h-full p-2 shadow-inner flex items-center justify-center">
              <h1 className="md:text-4xl lg:text-5xl p-4 text-center text-red-600">You Tuber</h1>
            </div>
          </div>
        </div>
        <div className="w-full  md:w-2/12 min-h-screen grid grid-rows-5  shadow-md">
          <div className="w-full bg-white row-span-4 md:row-span-2 shadow-inner">
            <div className="animate-pulse h-12 w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center">
              <Link href="/about">
                <a >
                  <h1 className="font-black text-white text-2xl">Acerca de Mi</h1>
                </a>
              </Link>
            </div>
            <div className="h-full flex justify-center">
              <img src="/about-me.svg" alt="me" className="object-cover" />
            </div>
          </div>
          <div className="w-full bg-black text-white  row-span-1 md:row-span-3 shadow-2xl flex flex-row sm:flex-col justify-between items-center p-4">
            <Footer />
          </div>
        </div>
      </section>
    </>
  )
}

export default PrincipalSection
