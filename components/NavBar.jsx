import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavBar = () => {

  const router = useRouter();

  const path = router.pathname;

  let color

  switch (path) {
    case '/about':
      color = 'orange'
      break;
    case '/my-services':
      color = 'gray'
      break;
    case '/developer':
      color = 'blue'
      break;
    case '/youtuber':
      color = 'red'
      break;

    default:
      break;
  }

  const navItems = [
    {
      name: "Inicio",
      path: "/",
      color: `bg-gradient-to-tr from-transparent to-${color}-100`
    },
    {
      name: "Acerca de mi",
      path: "/about",
      color: `bg-gradient-to-tr from-${color}-100 to-${color}-200`
    },
    {
      name: "Mis servicios",
      path: "/my-services",
      color: `bg-gradient-to-tr from-${color}-200 to-${color}-300`
    },
    {
      name: "Developer",
      path: "/developer",
      color: `bg-gradient-to-tr from-${color}-300 to-${color}-400`
    },
    {
      name: "Youtuber",
      path: "/youtuber",
      color: `bg-gradient-to-tr from-${color}-400 to-${color}-500`
    }
    // {
    //   name:"",
    //   path:"",
    //   color:"",
    // }
  ]

  const navClass = "flex items-center justify-center w-full h-full text-center text-xs sm:text-lg md:text-xl font-black"

  return (
    <div className="fixed top-0 right-0 w-full md:w-7/12 lg:w-5/12">
      <nav className={`shadow-xl bg-gray-100 w-full h-20 flex items-center text-${color}-900`} >
        {navItems.map(item => (
          <Link key={item.name} href={item.path}>
            <a className={`${navClass} ${item.path == path ? 'shadow-inner' : ''} ${item.color}`}>
              {item.name}
            </a>
          </Link>)
        )}
      </nav>
    </div>
  )
}

export default NavBar
