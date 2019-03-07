import React from "react"

function Product(props) {
    let description = props.product.description
    return (
        <div>
            <h3>Name: {props.product.name}</h3>
            <p>Price: {props.product.price}</p>
            <button onClick={()=>{ alert(description); }}>Item description</button>
            <hr/>
        </div>
    )
}

export default Product
