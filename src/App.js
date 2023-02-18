import logo from "./logo.svg";
// import './App.css';
import Page1 from "./Components/Page1/Page1";
import Page2 from "./Components/Page2/Page2";
import Page3 from "./Components/Page3/Page3";
import LandingPage from "./Components/LandingPage/landing_page";
import ShopMenu from "./Components/shopmenu/ShopMenu";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import AuthDetails from "./AuthDetails";
function App() {
    return (
        <div className="App">

            {/* <Router> */}
                {/* <Router> */}

                    <SignIn></SignIn>
                    <SignUp></SignUp>
                    <AuthDetails></AuthDetails>
                    {/* <Route path="/" element={SignIn}></Route>
                        <Route path="/phonesignup" element={PhoneSignUp}/> */}

                        {/* </Router>    */}
                {/* <Route exact path="/signupAuth" component={SignUp} /> */}
                {/* <Route exact path="/signinAuth" component={SignIn} /> */}
                    {/* <Route path="/login" element={<Page1 />} />
                    <Route path="/signup" element={<Page2 />} />
                    <Route path="/aboutyou" element={<Page3 />} />
                    <Route path="/ShopMenu" element={<ShopMenu />} /> */}

                    {/* <Page2 /> */}
                    {/* <Page3 /> */}
                    {/* {<ShopMenu />} */}
                

            {/* </Router> */}

        </div>
    );
}


export default App;
