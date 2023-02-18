// import firebase from "firebase/app";
import React from "react";
import styles from "./Style1.module.css";
import img1 from "./Google.png";
import img2 from "./Dots.png";
import backbtn from "../../assets/images/shopmenuimg/backbtnicon.png";
import { Link, Navigate } from "react-router-dom";
import { auth, provider } from "../../firebase";
import {
    signInWithPhoneNumber,
    signInWithPopup,
    RecaptchaVerifier,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Page1() {
    //  const handleClick=()=>{
    //   console.log(" e tg")
    //       return <Navigate to="/signupAuth"/>;
    //   }
    const [value, setValue] = useState("");
    const [number, setNumber] = useState("");

    const navigate = useNavigate();

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email);

            localStorage.setItem("email", data.user.email);
            console.log(value);
            navigate("/");
        });
    };

    const signIn = (e) => {
        e.preventDefault();
        window.recaptchaVerifier = new RecaptchaVerifier(
            "sign-in-button",
            {
                size: "invisible",
                callback: (response) => {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    signInWithPhoneNumber(auth, number)
                        .then((data) => {
                            console.log(data);
                            navigate("/");
                        })
                        .error((error) => {
                            console.log(error);
                        });
                },
            },
            auth
        );
    };

    useEffect(() => {
        setValue(localStorage.getItem("email"));
        console.log(value);
    }, []);
    return (
        <>
            <Link to="/" style={{ height: "1vh" }}>
                <div className={styles.back}>
                    <img
                        src={backbtn}
                        alt="back"
                        style={{
                            width: "10vw",
                            marginTop: "8vw",
                            marginLeft: "3vw",
                        }}
                    ></img>
                </div>
                <div className={styles.skip}>skip</div>
            </Link>
            <div>
                <div className={styles.log}>Log in with</div>
                <form onSubmit={signIn}>
                    <div className={styles.number}>
                        <div className={styles.nine}>+91</div>
                        <input
                            placeholder="Enter mobile number"
                            className={styles.input}
                            style={{
                                borderLeft: "none",
                                borderBottom: "none",
                                borderTop: "none",
                                borderRight: "none",
                            }}
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        ></input>
                    </div>
                    <div className={styles.continue} onClick={signIn}>
                        Continue
                    </div>
                </form>
                <div className={styles.or}>
                    <hr className={styles.hr} />{" "}
                    <span className={styles.ortext}>OR</span>{" "}
                    <hr className={styles.hr} />
                </div>
                <div className={styles.icons}>
                    <button onClick={handleClick}>
                        {" "}
                        <img className={styles.img1} src={img1} />{" "}
                    </button>

                    <img className={styles.img2} src={img2} />
                </div>
                <div className={styles.acc}>
                    If you dont have a account{" "}
                    <Link className={styles.sign} to="/signupAuth">
                        Sign up
                    </Link>
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
                    By continuing you agree to the{" "}
                    <b style={{ color: "#000" }}>Terms of service</b> and{" "}
                    <strong style={{ color: "#000" }}>Privacy Policy</strong>
                </div>
            </div>
        </>
    );
}

export default Page1;
