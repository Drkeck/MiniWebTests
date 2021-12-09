import {useState} from "react"

function PassWall() {
    const [input, setInput] = useState("");

    const handlePassword = (e) => {
        e.preventDefault();
    }

    return(
        <div className="background" style={{background: "gray"}}>
            <form onSubmit={handlePassword}>
                <label htmlFor="pass">password:</label>
                <input value={input} onChange={(e) => setInput(e.target.value)} id="pass" type="password"/>
            </form>
        </div>
    )
}

export default PassWall