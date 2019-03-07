import React from "react"

function Header() {
  return(
    // For React css styling you must use className instead of class as class is taken by javascript
    <nav className="navbar">
      <h1>Navbar element</h1>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    </nav>
  )
}

export default MyHeader
