import logo from "./logo.svg";
// import './App.css';
// import logo from './logo.svg';
import "./App.css";
import Page1 from "./Components/Page1/Page1";
import Page2 from "./Components/Page2/Page2";
import Page3 from "./Components/Page3/Page3";
import Page4 from "./Components/Page4/Page4";
import Page6 from "./Components/Page6/Page6";
import Page5 from "./Components/Page5/Page5";
// function App() {
//   return (
//     <div className="App">
//       {/* <Page1/> */}
//       {/* <Page2/> */}
//       {/* <Page3/> */}
//       <Page4/>
//       {/* <Page5/> */}
//       {/* <Page6/> */}
//     </div>
//   );

// import './App.css';
// import Page1 from "./Components/Page1/Page1";
// import Page2 from "./Components/Page2/Page2";
// import Page3 from "./Components/Page3/Page3";
import LandingPage from "./Components/LandingPage/landing_page";
import ShopMenu from "./Components/shopmenu/ShopMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import AuthDetails from "./AuthDetails";

function App() {
    return (
        <div className="App">
            {/* <Router>  */}

            {/* <SignIn></SignIn>
                    <SignUp></SignUp>
                    <AuthDetails></AuthDetails> */}
            {/* <Route path="/" element={SignIn}></Route>
                        <Route path="/phonesignup" element={PhoneSignUp}/> */}

            {/* <Route exact path="/signupAuth" component={SignUp} /> 
                 <Route exact path="/signinAuth" component={SignIn} />  */}
            <Router>
                <Routes>
                    <Route path="/signupAuth" element={<SignUp />}></Route>
                    <Route path="/login" element={<Page1 />} />
                    <Route path="/signup" element={<Page2 />} />
                    <Route path="/aboutyou" element={<Page3 />} />
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/ShopMenu" element={<ShopMenu />} />
                    <Route path="/Confirm" element={<Page4 />} />
                    <Route path="/Checkout" element={<Page5 />} />
                    <Route path="/Payment" element={<Page6 />} />
                </Routes>
            </Router>
            {/* <Page2 /> */}
            {/* <Page3 /> */}
            {/* {<ShopMenu />} */}

            {/* </Router> */}
        </div>
    );
}

export default App;
