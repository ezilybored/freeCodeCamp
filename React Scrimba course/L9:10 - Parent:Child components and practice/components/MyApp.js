import React from "react"
// Imports the Footer component from MyFooter.js
import Footer from "./components/MyFooter"
import Header from "./components/MyHeader"

// Create a function to render the JSX element. Use camel case but with first letter also capitalised
function MyApp() {
  return (
    <div>
      <Header />
      <main>
        <p>The content of the page</p>
      </main>
      //This includes the footer on the page using the Footer component from MyFooter.js
      <Footer />
    </div>
  )
}

// Allows the function to be available to other files
export default MyApp
