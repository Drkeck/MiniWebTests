import {useState} from "react"
import styles from "./password.module.css"

function PassWall() {
    const [input, setInput] = useState("");

    const handlePassword = (e) => {
        e.preventDefault();
    }

    return(
        <div className={styles.background}>

            <div className={styles.forum} >
                <h3 className={styles.marker}>password:</h3>
                <form onSubmit={handlePassword}>
                    <input value={input} onChange={(e) => setInput(e.target.value)} id="pass" type="password"/>
                </form>
            </div>
            <div className={styles.stencil}>
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
                <div className={styles.line3}></div>
                <div className={styles.line4}></div>
                <div className={styles.line5}></div>
                <div className={styles.line6}></div>
            </div>
        </div>
    )
}

export default PassWall