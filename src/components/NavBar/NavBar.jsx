import React from 'react'
import './NavBar.css'
export default function NavBar({children}) {
  return (
    <nav>
        <ul>{children}</ul>
    </nav>
  )
}
