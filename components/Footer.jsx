import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <h1>By 3FE3LE</h1>
      <Link href="https://es.reactjs.org/">
        <a ><img className="h-6 my-2 animate-pulse" src="/react.png" alt="" /></a>
      </Link>
      <Link href="https://nextjs.org/">
        <a ><img className="h-6 my-2 animate-pulse p-1 bg-gray-500" src="/next-js.svg" alt="" /></a>
      </Link>
      <Link href="https://tailwindcss.com/">
        <a ><img className="h-6 my-2 animate-pulse" src="/tailwind.svg" alt="" /></a>
      </Link>
      <Link href="https://material-ui.com/">
        <a  ><img className="h-6 my-2 animate-pulse" src="/material-ui.svg" alt="" /></a>
      </Link>
    </>
  )
}

export default Footer
