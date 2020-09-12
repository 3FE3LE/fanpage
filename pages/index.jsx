import React from 'react'
import Head from 'next/head'
import PrincipalSection from '../components/PrincipalSection'
import SecondSection from '../components/SecondSection'

const Home = () => (

  <>
    <Head>
      <title>3FE 3LE</title>
      <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=MuseoModerno:wght@700&display=swap" rel="stylesheet" />
      <script src="https://apis.google.com/js/platform.js"></script>
    </Head>
    <PrincipalSection/>
    {/* <SecondSection/> */}
  </>
)
export default Home
