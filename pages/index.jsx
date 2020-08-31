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
    <div className='w-full bg-gray-200 min-h-screen flex flex-col md:flex-row lg:w-10/12 justify-center items-center'>
      <div className="w-full md:w-10/12 bg-gray-300 min-h-screen flex grid grid-rows-5">
        <div className="w-full h-full row-span-3 flex">
          <div className="w-0 hidden sm:w-2/12 border bg-gray-400 h-full"></div>
          <div className="w-1/2 sm:w-5/12 bg-gray-400 h-full grid grid-rows-3">
            <div className="w-full h-full border bg-gray-500 p-2 row-span-2"></div>
            <div className="w-full h-full border bg-gray-600 p-2 row-span-1"></div>
          </div>
          <div className="w-1/2 sm:w-5/12 bg-gray-400 border min-h-full"></div>
        </div>
        <div className="w-full h-full row-span-2 flex">
          <div className="w-2/12 sm:w-4/12 bg-white min-h-full"></div>
          <div className="w-8/12 sm:w-6/12 bg-black min-h-full">
            <div className="flex justify-between w-full h-0 -mt-6 -ml-6">
              <div className="w-0 h-0 relative">
                <div className="h-12 w-12 text-white font-black bg-gray-400 shadow-md rounded-full flex items-center justify-center">ico</div>
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
          <div className="w-2/12 bg-white min-h-full p-2"></div>
        </div>
      </div>
      <div className="w-full  md:w-2/12 bg-gray-400 min-h-screen grid grid-rows-5 ">
        <div className="w-full bg-white row-span-4 md:row-span-2"></div>
        <div className="w-full bg-black   row-span-1 md:row-span-3"></div>
      </div>
    </div>
  </>
)
export default Home
