import React from 'react'
import Link from 'next/link'

const SocialMediaLinks = () => {
  const linkClass = "w-0 h-0 relative z-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"; 
  return (
    <>
      <div className="flex justify-between w-full h-0 -mt-6 -ml-6">
        <Link href="https://github.com/3FE3LE">
          <a className={linkClass} >
          <div className=" h-12 w-12 text-white font-black bg-white shadow-md rounded-full flex items-center justify-center">
            <img src="/github.png" alt="github" className="h-10" />
          </div>  
          </a>
        </Link>
        <Link href="https://twitter.com/3FE3LE">
          <a className={linkClass} >
          <div className=" h-12 w-12 text-white font-black bg-white shadow-md rounded-full flex items-center justify-center">
            <img src="/twitter.png" alt="github" className="h-12" />
          </div>
          </a>
        </Link>
        <Link href="https://www.instagram.com/3fe3le/">
          <a className={linkClass} >
          <div className=" h-12 w-12 text-white font-black bg-yellow-300 border-4 border-white shadow-lg rounded-full flex items-center justify-center">
            <img src="/instagram.png" alt="github" className="h-8" />
          </div>
          </a>
        </Link>
        <Link href="https://www.facebook.com/3FE3LE">
          <a className={linkClass} >
          <div className=" h-12 w-12 text-white font-black bg-white  shadow-md rounded-full flex items-center justify-center">
            <img src="/facebook.png" alt="github" className="h-12 w-12  rounded-full" />
          </div>
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/franklicona/">
          <a className={linkClass} >
          <div className=" h-12 w-12 text-white font-black bg-white shadow-md rounded-full flex items-center justify-center">
            <img src="/linkedin.png" alt="github" className="h-12" />
          </div>
          </a>
        </Link>
      </div>
    </>
  )
}

export default SocialMediaLinks
