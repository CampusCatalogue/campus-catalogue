import logo from "./logo.svg";
// import './App.css';
import Page1 from "./Components/Page1/Page1";
import Page2 from "./Components/Page2/Page2";
import Page3 from "./Components/Page3/Page3";
import LandingPage from "./Components/LandingPage/landing_page";
import ShopMenu from "./Components/shopmenu/ShopMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/login" element={<Page1 />} />
                    <Route path="/signup" element={<Page2 />} />
                    <Route path="/aboutyou" element={<Page3 />} />
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/ShopMenu" element={<ShopMenu />} />

                    {/* <Page2 /> */}
                    {/* <Page3 /> */}
                    {/* {<ShopMenu />} */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
