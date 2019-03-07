import React from "react"

// The function takes the argument props which contains the properties from app.js
function ContactCard(props) {
    console.log(props)
    return (
        <div className="contact-card">
            // The properties re accessed through dot notation. props = properties, contact = the object passed in from app.js, then the name of the property
            <img src={props.contact.imgUrl}/>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )
}

export default ContactCard
