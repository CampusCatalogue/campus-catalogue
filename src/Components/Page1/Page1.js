import React from "react";
import styles from "./Style1.module.css";
import img1 from "./Google.png";
import img2 from "./Dots.png";
function Page1() {
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
          <img className={styles.img1} src={img1} />
          <img className={styles.img2} src={img2} />
        </div>
        <div className={styles.acc}>
          If you dont have a account{" "}
          <span className={styles.sign}>Sign up</span>
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
