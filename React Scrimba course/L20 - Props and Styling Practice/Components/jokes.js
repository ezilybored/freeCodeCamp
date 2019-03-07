import React from "react"

function Joke(props) {

    const styles = {

    }

    if(props.jokeprops.question == ""){
         styles.display = "none"
    } else {
         styles.display = "block"
    }

    console.log(props)

    return(
        <div className="joke">
            // Answer given by the course is to use either
            // style={{display: !props.question ? "none"}}
            // or
            // style={{display: !props.question && "none"}}
            // This checks to see if there is a property called question. If not then it remders the display as none
            // Thhese would be placed instead of style={styles} and remove the need for my loop code
            <div className="question" style={styles}>
                <p>Question:</p>
                <p>{props.jokeprops.question}</p>
                <hr />
            </div>
            // Changes the colour of the text if there is just a punchline and no question to the joke
            <div style={{color: !props.question && "#888888"}}>
                <p>Punchline:</p>
                <p>{props.jokeprops.punchline}</p>
            </div>
        </div>
    )
}

export default Joke
