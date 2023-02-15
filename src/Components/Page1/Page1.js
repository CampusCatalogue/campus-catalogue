import React from 'react'
import styles from "./Style1.module.css"
import img1 from "./Google.png"
import img2 from "./Dots.png"
function Page1() {
  return (
    <>
        <div className={styles.skip}>skip</div>
        <div className={styles.log}>Log in with</div>
        <form>
        <div className={styles.number}><div className={styles.nine}>+91</div><input placeholder='Enter mobile number' className={styles.input} style={{borderLeft:"none",borderBottom:"none",borderTop:"none",borderRight:"none",}}></input></div>
        <div className={styles.continue}>Continue</div>
        </form>
        <div className={styles.or}><hr className={styles.hr}/> or <hr className={styles.hr}/></div>
        <div><img className={styles.img1} src={img1} /><img className={styles.img2} src={img2} /></div>
        <div className={styles.acc}>If you dont have a account <span className={styles.sign}>Sign up</span></div>
        <div className={styles.term}>By continuing you agree to the <span style={{fontWeight:"bold",color:"black"}}>terms of service</span> and <span style={{fontWeight:"bold",color:"black"}}>privacy policy</span></div>
    </>
  )
}

export default Page1