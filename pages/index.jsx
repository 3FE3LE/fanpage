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
          <div className="w-0 md:w-2/12 bg-white h-full shadow-inner"></div>
          <div className="w-full sm:w-6/12 md:w-5/12 h-full grid grid-rows-3">
            <div className="w-full h-full bg-black p-4 row-span-2 text-white shadow-2xl ">
              <h1 className="text-2xl">
                Bienvenido a...
            </h1>
              <a className="museo text-6xl" target='_blank' href="https://youtube.com/c/3FE3LE">3FE 3LE</a>
            </div>
            <div className="w-full h-full bg-white row-span-1 flex justify-center items-center shadow-inner">
              <img src="/youtube-logo.png" alt="youtube" className="h-16" />
            </div>
          </div>
          <div className="w-full sm:w-6/12 text-sm md:text-md md:w-5/12 bg-white min-h-full p-4 shadow-inner">

            <p> Hola muchachos!! ¿como están? como se pueden dar cuenta este es mi sitio web, el cual estaré construyendo para mas adelante convertirlo en algo un poco mas interesante </p>

          </div>
        </div>
        <div className="w-full h-full row-span-2 flex shadow-inner">
          <div className="w-2/12 md:w-4/12 bg-white min-h-full shadow-inner"></div>
          <div className="w-8/12 md:w-6/12 bg-black min-h-full">
            <div className="flex justify-between w-full h-0 -mt-6 -ml-6">
              <div className="w-0 h-0 relative">
                <div className="h-12 w-12 text-white font-black bg-gray-400 shadow-md rounded-full flex items-center justify-center">
                  <img src="/yo.png" alt="github" className="h-6" />
                </div>
              </div>
              <div className="w-0 h-0 relative">
                <div className="h-12 w-12 text-white font-black bg-blue-400 shadow-md rounded-full flex items-center justify-center">ico</div>
              </div>
              <div className="w-0 h-0 relative">
                <div className="h-12 w-12 text-white font-black bg-red-400 shadow-md rounded-full flex items-center justify-center">ico</div>
              </div>
              <div className="w-0 h-0 relative">
                <div className="h-12 w-12 text-white font-black bg-yellow-400 shadow-md rounded-full flex items-center justify-center">ico</div>
              </div>
              <div className="w-0 h-0 relative">
                <div className="h-12 w-12 text-white font-black bg-green-400 shadow-md rounded-full flex items-center justify-center">ico</div>
              </div>
            </div>
          </div>
          <div className="w-2/12 bg-white min-h-full p-2 shadow-inner"></div>
        </div>
      </div>
      <div className="w-full  md:w-2/12 min-h-screen flex grid grid-rows-5  shadow-md">
        <div className="w-full bg-white row-span-4 md:row-span-2 shadow-inner"></div>
        <div className="w-full bg-black   row-span-1 md:row-span-3 shadow-2xl"></div>
      </div>
    </div>
  </>
)
export default Home
