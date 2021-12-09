import {useState} from "react"

function PassWall() {
    const [input, setInput] = useState("");

    const handlePassword = (e) => {
        e.preventDefault();
        console.log(input)
    }

    return(
        <div className="background">
            <form onSubmit={handlePassword}>
                <label htmlFor="pass">password:</label>
                <input value={input} onChange={(e) => setInput(e.target.value)} id="pass" type="password"/>
            </form>
        </div>
    )
}

export default PassWall