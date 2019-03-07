import React from "react"
import Joke from "./components/jokes.js"

function App(){
    return(
        <div>
            <nav>
                <h2 className="nav">Awesome joke app</h2>
            </nav>
            <div className="jokes">
                <Joke
                    jokeprops={{question: "generic joke question", punchline: "generic joke punchline"}}
                />
                <Joke
                    jokeprops={{question: "", punchline: "punchline only"}}
                />
                <Joke
                    jokeprops={{question: "generic joke question", punchline: "generic joke punchline"}}
                />
                <Joke
                    jokeprops={{question: "generic joke question", punchline: "generic joke punchline"}}
                />
                <Joke
                    jokeprops={{question: "generic joke question", punchline: "generic joke punchline"}}
                />
            </div>
        </div>
    )
}

export default App
