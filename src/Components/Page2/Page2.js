import React from 'react'
import styles from "./Style2.module.css"
import { FaArrowLeft } from "react-icons/fa";
function Page2() {
  return (
    <>
        <div className={styles.back}><FaArrowLeft style={{marginRight:"2.5vw"}}/>OTP Verification</div>
        <div className={styles.code}>
            <div>We have send a verification code to</div>
            <div className={styles.num}>+91 88888888</div>
        </div>
        <div className={styles.digit}>
            <input type="number" pattern="[0-9]*" maxLength='1' className={styles.item}></input>
            <input type={'number'} pattern="[0-9]*" maxLength='1' className={styles.item}></input>
            <input type={'number'} pattern="[0-9]*" maxLength='1' className={styles.item}></input>
            <input type={'number'} pattern="[0-9]*" maxLength='1' className={styles.item}></input>
            <input type={'number'} pattern="[0-9]*" maxLength='1' className={styles.item}></input>
            <input type={'number'} pattern="[0-9]*" maxLength='1' className={styles.item}></input>
        </div>
        <div className={styles.sms}>
            <button className={styles.sms1}>Resend SMS</button>
            <button className={styles.sms2}>Call Me</button>
        </div>
        <div className={styles.other}>Try other log in methods</div>
    </>
  )
}

export default Page2