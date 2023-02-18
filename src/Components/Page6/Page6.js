import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from "./Page6.module.css";

function Page6() {
	const [bill, setBill] = useState(250);
	const [Check, setCheck] = useState(true);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");

    }
	return (
		<>
			<div className={styles.top}>
				<Link to="/Checkout">
					<FaArrowLeft />
				</Link>
				<span className={styles.topSpan}>Bill Total: Rs.{bill}</span>
			</div>
			<div className={styles.div1}>Hey your order will get ready in 50 mins, we will notify you.</div>
			<div className={styles.notifs}>
				<span>Notification settings </span>
				<span className={styles.check}>
					{Check ? (
						// <span className={styles.first}  onClick ={()=>{setCheck(false)}} ><span className={styles.one}></span></span> : <span className={styles.second} onClick ={()=>{setCheck(true)}}><span className={styles.two}></span></span>
						<span
							className={styles.on}
							onClick={() => {
								setCheck(false);
							}}
						>
							On
						</span>
					) : (
						<span
							className={styles.on}
							onClick={() => {
								setCheck(true);
							}}
						>
							Off
						</span>
					)}
				</span>
			</div>
			<div className={styles.soundAlarm}>
				<span className={styles.alarm}>Set alarm in the device</span>
				<span className={styles.sound}>Sound notifications</span>
			</div>
			<br />
			<br />
			<hr />
			<div className={styles.rect}></div>
			<hr />
			<div className={styles.card}>
				<div className={styles.cardHead}>Recommended</div>
				<div className={styles.card1}>
					<div className={styles.rect1}></div>
					<div className={styles.cardSubHead}>BHIM</div>
					<div className={styles.right1}>
						<FaAngleRight />
					</div>
				</div>
			</div>
			<div className={styles.card}>
				<div className={styles.cardHead}>Cards(Credit/Debit/atm)</div>
				<div className={styles.card1}>
					<div className={styles.rect1}></div>
					<div className={styles.cardSubHead}>Add credit,debit and atm cards</div>
					<div className={styles.right2}>
						<FaAngleRight />
					</div>
				</div>
			</div>
			<div className={styles.card}>
				<div className={styles.cardHead}>UPI</div>
				<div className={styles.card1}>
					<div className={styles.rect1}></div>
					<div className={styles.cardSubHead}>Pay via UPI</div>
					<div className={styles.right3}>
						<FaAngleRight />
					</div>
				</div>
			</div>
			<div className={styles.payment} onClick={handleClick}>
				Payment
			</div>
		</>
	);
}
export default Page6;
