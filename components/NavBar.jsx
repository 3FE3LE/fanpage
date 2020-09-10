import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavBar = () => {

  const router = useRouter();

  let color

  switch (router.pathname) {
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
      color: `bg-${color}-100`,
    },
    {
      name: "Acerca de mi",
      path: "/about",
      color: `bg-${color}-200`,
    },
    {
      name: "Mis servicios",
      path: "/my-services",
      color: `bg-${color}-300`,
    },
    {
      name: "Developer",
      path: "/developer",
      color: `bg-${color}-400`,
    },
    {
      name: "Youtuber",
      path: "/youtuber",
      color: `bg-${color}-500`,
    }
    // {
    //   name:"",
    //   path:"",
    //   color:"",
    // }
  ]

  const navClass = "flex items-center justify-center w-full h-full text-center text-xs font-black hover:animate- "

  return (
    <div className="fixed top-0 right-0 w-full md:w-7/12 lg:w-5/12">
      <nav className={`shadow-xl bg-gray-100 w-full h-24 flex items-center text-${color}-900`} >
        {navItems.map(item => (
          <Link key={item.name} href={item.path}>
            <a className={`${navClass} ${item.path === router.pathname ? 'shadow-inner' : ''} ${item.color}`}>
              {item.name}
            </a>
          </Link>)
        )}
      </nav>
    </div>
  )
}

export default NavBar
