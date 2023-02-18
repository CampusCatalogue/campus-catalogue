// import hamburger from "./images/Vector.png";
import hamburger from "../../images/Vector.png";
import myorder from "../../images/Vector (2).png";
import food from "../../images/Vector (1).png";
import dining from "../../images/ic_round-dining.png";
import RectComp from "./RectComp";
import RestComp from "./RestComp";
import StatusComp from "./StatusComp";
import MoodComp from "./MoodComp";
import search from "../../images/ri_search-line.png";
import DishesComp from "./DishesComp";
import { Link } from "react-router-dom";
import "./landing_page.css";
const LandingPage = () => {
    return (
        <div style={{ overflowY: "hidden" }}>
            <div className="topmost" style={{ height: "45vw" }}>
                <div className="horzsp1">
                    <Link to="/login">
                        <img
                            style={{ width: "7vw", height: "7vw" }}
                            src={hamburger}
                            alt=""
                        />
                    </Link>
                    <div className="searchbox">
                        <img className="searchicn" src={search} alt="" />
                        <input
                            className="inpstyle"
                            type="text"
                            placeholder="what/where you want to eat?"
                        />
                    </div>
                    <div
                        style={{
                            borderRadius: "100%",
                            height: "4vh",
                            width: "10vw",
                        }}
                        className="temp"
                    ></div>
                </div>
                <div className="rightcorner">
                    <StatusComp></StatusComp>
                </div>
                <div className="horz1" style={{ marginTop: "20vw" }}>
                    <div className="horzsp">
                        <RectComp text="New Arrivals" />
                        <RectComp text="New Arrivals" />
                        <RectComp text="New Arrivals" />
                        <RectComp text="New Arrivals" />
                        <RectComp text="New Arrivals" />
                    </div>
                </div>
            </div>
            <div style={{ paddingLeft: "1vw" }}>
                <p>Hey what is your Mood?</p>
                <div className="mood">
                    <div className="moodouter">
                        <MoodComp></MoodComp>
                    </div>
                    <div className="moodouter">
                        <MoodComp></MoodComp>
                    </div>
                    <div className="moodouter">
                        <MoodComp></MoodComp>
                    </div>
                    <div className="moodouter">
                        <MoodComp></MoodComp>
                    </div>
                    <div className="moodouter">
                        <MoodComp></MoodComp>
                    </div>
                    <div className="moodouter">
                        <MoodComp></MoodComp>
                    </div>
                    <div className="moodouter">
                        <MoodComp></MoodComp>
                    </div>
                </div>
            </div>
            <div>
                <span>Here are some Dishes</span>
                <div className="dishesdiv">
                    <DishesComp dish="chicken"></DishesComp>
                    <DishesComp dish="chicken"></DishesComp>
                    <DishesComp dish="chicken"></DishesComp>
                    <DishesComp dish="chicken"></DishesComp>
                    <DishesComp dish="chicken"></DishesComp>
                    <DishesComp dish="chicken"></DishesComp>
                    <DishesComp dish="chicken"></DishesComp>
                    <DishesComp dish="chicken"></DishesComp>
                    <DishesComp dish="chicken"></DishesComp>
                    <DishesComp dish="chicken"></DishesComp>
                </div>
            </div>
            <div>
                <p style={{ marginTop: "5%" }}>Restaurants around you</p>
                <RestComp></RestComp>
            </div>
            <div className="horzimages">
                <div className="vert">
                    <img style={{ width: "4vh" }} src={myorder} alt="" />

                    <p className="spps">Dining</p>
                </div>
                <div className="vert">
                    <img style={{ width: "4vh" }} src={food} alt="" />
                    <p className="spps">Food</p>
                </div>
                <Link to="/Confirm">
                    <div className="vert">
                        <img style={{ width: "4vh" }} src={dining} alt="" />
                        <p className="spps">My Order</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
