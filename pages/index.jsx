import React from 'react'
import { Grid } from '@material-ui/core'
import Head from 'next/head'

const Home = () => (

  <>
    <Head>
      <title>3FE 3LE</title>
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=MuseoModerno:wght@700&display=swap" rel="stylesheet" />
      <script src="https://apis.google.com/js/platform.js"></script>
    </Head>
    <div className='w-full min-h-screen flex flex-col md:flex-row justify-center items-center'>
      <div className="w-full md:w-10/12 min-h-screen flex grid grid-rows-5 ">
        <div className="w-full h-full row-span-3 flex flex-col sm:flex-row">
          <div className="w-0 h-0 md:w-2/12 bg-gray-100 md:h-full shadow-inner flex items-center"></div>
          <div className="w-full sm:w-6/12 md:w-5/12 h-full grid grid-rows-1 sm:grid-rows-3">
            <div className="w-full w-auto sm:h-full bg-black px-2 py-4 sm:p-4 row-span-1 sm:row-span-2 flex flex-row items-center justify-between text-white shadow-2xl ">
              <h1 className="text-2xl sm:text-4xl px-2 ">
                Bienvenido a...
              </h1>
              <a className="museo text-4xl md:text-4xl px-2 text-center" target='_blank' href="https://youtube.com/c/3FE3LE">3FE 3LE</a>
            </div>
            <div className="w-full h-full bg-gradient-to-r from-teal-400 to-blue-500 text-white row-span-1 p-2 flex justify-center items-center shadow-inner">
              <h1 className="p-2 m-2 text-2xl museo">Digital</h1>
              <img src="/youtube-logo.png" alt="youtube" className="h-10 sm:h-16" />
              <h1 className="p-2 m-2 text-2xl ">Creator</h1>
            </div>
          </div>
          <div className="w-full sm:w-6/12 text-md sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl md:w-5/12 bg-gray-100 h-full p-4 shadow-inner">
            <p> Hola muchachos!! ¿como están? como se pueden dar cuenta este es mi sitio web, el cual estaré construyendo para mas adelante convertirlo en algo un poco mas interesante </p>
          </div>
        </div>
        <div className="w-full h-full row-span-2 flex shadow-inner">
          <div className="w-2/12 md:w-4/12 bg-gray-200 min-h-full p-2 shadow-inner flex items-center justify-center">
            <h1 className="museo md:text-2xl lg:text-4xl p-4 text-teal-400">D E V E L O P E R</h1>
          </div>
          <div className="w-8/12 md:w-6/12 bg-black min-h-full">
            <div className="flex justify-between w-full h-0 -mt-6 -ml-6">
              <div className="w-0 h-0 relative">
                <div className="h-12 w-12 text-white font-black bg-white shadow-md rounded-full flex items-center justify-center">
                  <img src="/github.png" alt="github" className="h-10" />
                </div>
              </div>
              <div className="w-0 h-0 relative">
                <div className="h-12 w-12 text-white font-black bg-white shadow-md rounded-full flex items-center justify-center">
                  <img src="/twitter.png" alt="github" className="h-12" />
                </div>
              </div>
              <div className="w-0 h-0 relative">
                <div className="h-12 w-12 text-white font-black bg-yellow-300 border-4 border-white shadow-lg rounded-full flex items-center justify-center">
                  <img src="/instagram.png" alt="github" className="h-8" />
                </div>
              </div>
              <div className="w-0 h-0 relative">
                <div className="h-12 w-12 text-white font-black bg-white  shadow-md rounded-full flex items-center justify-center">
                  <img src="/facebook.png" alt="github" className="h-12 w-12  rounded-full" />
                </div>
              </div>
              <div className="w-0 h-0 relative">
                <div className="h-12 w-12 text-white font-black bg-white shadow-md rounded-full flex items-center justify-center">
                  <img src="/linkedin.png" alt="github" className="h-12" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/12 bg-white min-h-full p-2 shadow-inner flex items-center justify-center">
            <h1 className="md:text-4xl lg:text-5xl p-4 text-red-600">You Tuber</h1>
          </div>
        </div>
      </div>
      <div className="w-full  md:w-2/12 min-h-screen flex grid grid-rows-5  shadow-md">
        <div className="w-full bg-white row-span-4 md:row-span-2 shadow-inner"></div>
        <div className="w-full bg-black text-white  row-span-1 md:row-span-3 shadow-2xl flex items-center p-4">
          <h1>By 3FE3LE</h1>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  </>
)
export default Home
