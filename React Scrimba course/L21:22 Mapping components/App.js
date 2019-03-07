import React from "react"
import Product from "./Product"
import productsData from "./vschoolProducts"

function App() {
    // The mapping comes before the return
    // Creates a new array of Product components that are mapped from the vschoolProducts.js file containing the products object

    const productComponents = productsData.map(function(item){
        return(
            <Product key={item.id} product={item}/>
        )
    })

    // Alternative shorter ES6 style
    //const productComponents = productsData.map(item => <Product key={item.id} product={item}/>)

  return (
    // This is all that is required to create the products in the div now
    <div>
        {productComponents}
    </div>
  )
}

export default App
