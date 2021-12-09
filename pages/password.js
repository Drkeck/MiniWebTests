import {useState} from "react"
import styles from "./password.module.css"

function PassWall() {
    const [input, setInput] = useState("");

    const handlePassword = (e) => {
        e.preventDefault();
    }

    return(
        <div className={styles.background}>
            <form onSubmit={handlePassword} className={styles.forum}>
                <label htmlFor="pass" >password:</label>
                <input value={input} onChange={(e) => setInput(e.target.value)} id="pass" type="password"/>
            </form>
        </div>
    )
}

export default PassWall