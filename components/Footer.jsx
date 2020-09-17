import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <h1 className="text-center sm:w-full" >By 3FE3LE</h1>
      <Link href="https://es.reactjs.org/">
        <a className="flex justify-center" ><img className="h-10 md:mx-16 z-0 mx-1 animate-pulse" src="/react.png" alt="" /></a>
      </Link>
      <Link href="https://nextjs.org/">
        <a className="flex justify-center" ><img className="h-10 md:mx-16 z-0 mx-1 animate-pulse p-1 bg-gray-500" src="/next-js.svg" alt="" /></a>
      </Link>
      <Link href="https://tailwindcss.com/">
        <a className="flex justify-center" ><img className="h-10 md:mx-16 z-0 mx-1 animate-pulse" src="/tailwind.svg" alt="" /></a>
      </Link>
      <Link href="https://material-ui.com/">
        <a  className="flex justify-center" ><img className="h-10 md:mx-16 z-0 mx-1 animate-pulse" src="/material-ui.svg" alt="" /></a>
      </Link>
    </>
  )
}

export default Footer
