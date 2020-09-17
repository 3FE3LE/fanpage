import React from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'

export default function about() {
  return (
    <>
      <Head>
        <title>3FE 3LE</title>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=MuseoModerno:wght@700&display=swap" rel="stylesheet" />
        <script src="https://apis.google.com/js/platform.js"></script>
      </Head>
      <Layout>
        <div className="w-full h-screen md:w-7/12 lg:w-5/12 sm:h-full bg-gray-200 grid grid-rows-4">
          <div className="row-span-3 w-full pt-24 shadow-xl">
            <h1 className="text-4xl w-full p-2">
              Que te puedo contar de mi?...
            </h1>
          </div>

          <div className="row-span-1 w-full bg-blue-500 shadow-inner">
            <div className="flex justify-center h-0 w-full">
              <div className="h-48 w-48 bg-indigo-600 -m-24 shadow-2xl"></div>
            </div>
          </div>
        </div>

        <div className="w-full h-screen md:w-5/12 lg:w-3/12 sm:h-full bg-gray-400 grid grid-rows-5 ">
          <div className="row-span-4 w-full h-full bg-gray-700 flex">
            <div className="h-full w-full relative flex">
            <p>parte 1</p>
            <div className="absolute right-0 mt-24 h-32 w-32 bg-white -mr-16 shadow-2xl"></div>
            </div>

            <div className="h-full w-full bg-gray-900">
            <p>parte 2</p>
            </div>
          </div>
          <div className="row-span-1 w-full h-full bg-gray-100 flex">
            <p>parte 3</p>
          </div>
        </div>
        <div className="w-full h-screen lg:w-4/12 sm:h-full bg-gray-600 grid grid-rows-5">
          <div className="row-span-2 bg-white flex">
            <div className="w-4/12 h-full bg-black"></div>
            <div className="w-8/12 h-full"></div>
          </div>
          <div className="row-span-3"></div>
        </div>
      </Layout>
    </>
  )
}
