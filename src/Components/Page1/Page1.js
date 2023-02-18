import firebase from 'firebase/app'
import React from "react";
import styles from "./Style1.module.css";
import img1 from "./Google.png";
import img2 from "./Dots.png";
import { Link } from "react-router-dom";
import { auth,provider } from "../../firebase";
import {signInWithPopup} from "firebase/auth";
import { useState,useEffect } from "react";

function Page1() {
//  const handleClick=()=>{
//   console.log(" e tg")
//       return <Navigate to="/signupAuth"/>;
//   }
const [value, setValue] = useState("");

const handleClick=()=>{
  signInWithPopup(auth,provider).then((data)=>{
    setValue(data.user.email)
    
    localStorage.setItem("email",data.user.email)
    console.log(value)
  })
  }
  useEffect(()=>{
    setValue(localStorage.getItem('email'))
    console.log(value)
  },[])
  return (
    <>
      <div className={styles.skip}>skip</div>
      <div>
        <div className={styles.log}>Log in with</div>
        <form>
          <div className={styles.number}>
            <div className={styles.nine}>+91</div>
            <input
              placeholder="Enter mobile number"
              className={styles.input}
              style={{
                borderLeft: "none",
                borderBottom: "none",
                borderTop: "none",
                borderRight: "none"
              }}
            ></input>
          </div>
          <div className={styles.continue}>Continue</div>
        </form>
        <div className={styles.or}>
          <hr className={styles.hr} /> <span className={styles.ortext}>OR</span> <hr className={styles.hr} />
        </div>
        <div className={styles.icons}>
        <button onClick={handleClick} > <img className={styles.img1} src={img1} /> </button>
          
          <img className={styles.img2} src={img2} />
        </div>
        <div className={styles.acc}>
          If you dont have a account{" "}
          <Link className={styles.sign} to="/signupAuth" >Sign up</Link>
          {/* <button  onClick={handleClick} ></button> */}
        </div>
        <div className={styles.term}>
          {/* By continuing you agree to the{" "}
          <span style={{ fontWeight: "bold", color: "black" }}>
            terms of service
          </span>{" "}
          and{" "}
          <span style={{ fontWeight: "bold", color: "black" }}>
            privacy policy
          </span> */}
          By continuing you agree to the <b style={{color: '#000'}}>Terms of service</b> and <strong style={{color: '#000'}}>Privacy Policy</strong>
        </div>
      </div>
    </>
  );
}

export default Page1;
