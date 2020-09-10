import React from 'react'
import NavBar from './NavBar'

const Layout = ({children}) => {
  return (
    <div className="flex w-screen h-full sm:h-screen flex-col flex-wrap  sm:flex-row-reverse">
      <NavBar/>
      {children}
    </div>
  )
}

export default Layout
