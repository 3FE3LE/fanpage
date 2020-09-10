import React from 'react'
// import Link from 'next/link'
import Layout from '../components/Layout'
import Head from 'next/head'

export default function myServices() {


  return (
    <>
      <Head>
        <title>3FE 3LE</title>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=MuseoModerno:wght@700&display=swap" rel="stylesheet" />
        <script src="https://apis.google.com/js/platform.js"></script>
      </Head>
      <Layout>
        <div className="w-full h-screen sm:w-6/12 md:w-4/12 lg:w-5/12 sm:h-full bg-gray-200">

        </div>
        <div className="w-full h-screen sm:w-6/12 md:w-4/12 lg:w-3/12 sm:h-full bg-gray-400"></div>
        <div className="w-full h-screen sm:w-6/12 md:w-4/12 lg:w-4/12 sm:h-full bg-gray-600"></div>
      </Layout>
    </>
  )
}
