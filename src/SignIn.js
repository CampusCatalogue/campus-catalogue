// import firebase from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
// import { Link } from 'react-router-dom';
const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [value, setValue] = useState("");

    const navigate = useNavigate();

	const signIn = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log(userCredential);
                navigate("/");
            })
			.catch((error) => {
				console.log(error);
                alert(error.message);
			});
	};

	const handleClick = () => {
		signInWithPopup(auth, provider).then((data) => {
			setValue(data.user.email);
			// console.log(value)
			localStorage.setItem("email", data.user.email);
            navigate("/");
		});
	};

	useEffect(() => {
		setValue(localStorage.getItem("email"));
		console.log(value);
	}, []);

	return (
		<div className="sign-in-container">
			<form onSubmit={signIn}>
				<h1>Log In to your Account</h1>
				<input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
				<input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
				<button type="submit">Log In</button>
			</form>
			<div>{/* {(value)?<p>google</p>: */ <button onClick={handleClick}> sign in with google </button>}</div>
		</div>
	);
};

export default SignIn;
