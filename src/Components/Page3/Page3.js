import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import styles from "./Page3.module.css"
function Page3() {
  return (
    <>
        <div className={styles.back}><FaArrowLeft style={{marginRight:"2.5vw"}}/>Hey tell me more about you</div>
        <form>
                <div className={styles.name}>Name</div>
                <input type='text' name='name' style={{width:"80vw",borderLeft:"none",borderRight:"none",borderTop:"none"}}></input>
        </form>
        <div>
            <div className={styles.like}>What you like...</div>
            <div className={styles.sub}>so that we can suggest delicious food option of your choice</div>
        </div>
        <div className={styles.items}>
            <div className={styles.item}>I am a vegeterian.</div>
            <div className={styles.item}>I can eat both veg and non-veg.</div>
        </div>
        <div className={styles.continue}>Continue</div>
        <div className={styles.last}></div>
    </>
  )
}

export default Page3