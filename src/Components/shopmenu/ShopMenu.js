// sm ---> ShopMenu
import React, { useRef, useEffect, useState } from "react";
import "./shopmenu.css";
import SearchIcon from "../../assets/images/shopmenuimg/searchicon.png";
import BackIcon from "../../assets/images/shopmenuimg/backbtnicon.png";
import ShopImg1 from "../../assets/images/shopmenuimg/sampleshopimg.png";
import VegIcon from "../../assets/images/shopmenuimg/veg.png";
import NonVegIcon from "../../assets/images/shopmenuimg/nonveg.png";
import FullStar from "../../assets/images/shopmenuimg/fullstar.png";
import HalfStar from "../../assets/images/shopmenuimg/halfstar.png";
import EmptyStar from "../../assets/images/shopmenuimg/emptystar.png";
import { Text, Animated } from "react-native";
import { Link } from "react-router-dom";
function ShopMenu() {
    let [menu, setMenu] = useState(false);
    const handleMenuClick = () => {
        setMenu(!menu);
    };
    const func = () => {
        console.log("clicked");
    };
    const animatedScale = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        animatedScale.setValue(1);
    }, []);

    const handleOnPress = () => {
        animatedScale.setValue(0.8);
        Animated.spring(animatedScale, {
            toValue: 1,
            bounciness: 24,
            speed: 20,
            useNativeDriver: true,
        }).start();
    };
    return (
        <div>
            <div className="header">
                <img src={BackIcon} alt="" className="backbtn" />
                <div className="searchbar">
                    <img src={SearchIcon} alt="" className="searchicon"></img>
                    <input
                        type={Text}
                        placeholder="Search Dish"
                        className="inputdish active"
                    ></input>
                </div>
                <div className="hamburger-sm">{/* <img  /> */}</div>
            </div>
            <div className="shopdetails">
                <div className="detailstext">
                    <h1>Desi Darbar</h1>
                    <h3>North Indian</h3>
                    <br />
                    <h4>
                        <p>25-30 min/ order time</p>
                        <p>Khoka Gate</p>
                    </h4>
                </div>
                <div className="shopimages">
                    <img src={ShopImg1} alt="" className="shopimg shopimg1" />
                    <img src={ShopImg1} alt="" className="shopimg shopimg2" />
                    <img src={ShopImg1} alt="" className="shopimg shopimg3" />
                </div>
            </div>
            <div className="foodtypebtns">
                <button
                    type="button"
                    className="vegbtn"
                    onClick={handleOnPress}
                >
                    <img src={VegIcon} alt="" className="" />
                    Veg
                </button>
                <button type="button" className="nonvegbtn" onClick={func}>
                    <img src={NonVegIcon} alt="" className="" />
                    Non Veg
                </button>
            </div>
            <div className="fullmenu">
                <div className="maincourse">
                    <h1 style={{ fontSize: "7vw" }}>Main Course (15)</h1>
                    <div className="dishcard">
                        <div className="dishdetails">
                            <div className="dishtags">
                                <img src={NonVegIcon} alt="" className="" />
                                <div className="tag">Highest&nbsp;Rated</div>
                                <div className="tag">BestSeller</div>
                            </div>
                            <div
                                className="dishname"
                                style={{ textAlign: "left" }}
                            >
                                <h2>
                                    Chicken Butter
                                    <br /> Masala
                                </h2>
                            </div>
                            <div className="dishrating">
                                <img src={FullStar} alt="" className="star" />
                                <img src={FullStar} alt="" className="star" />
                                <img src={FullStar} alt="" className="star" />
                                <img src={FullStar} alt="" className="star" />
                                <img src={HalfStar} alt="" className="star" />
                                <p> &nbsp; &nbsp;218 rating</p>
                            </div>
                            <br />
                            <p className="price">&#x20B9; 250</p>
                            <p className="description">
                                Rich creamy and smooth chicken gravy with a
                                tinge of sweetness and tanginess. Based on north
                                Indian taste
                                <span className="readmorebtn">
                                    ... read more
                                </span>
                            </p>
                        </div>
                        <div className="dishimg">
                            <img className="" alt="" />
                            <Link to="/Confirm">
                                <button type="button" className="addbtn">
                                    Add +{" "}
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        ..............................................................................
                    </div>
                    <div className="dishcard">
                        <div className="dishdetails">
                            <div className="dishtags">
                                <img src={NonVegIcon} alt="" className="" />
                                {/* <div className="tag">Highest&nbsp;Rated</div>
                <div className="tag">BestSeller</div> */}
                            </div>
                            <div
                                className="dishname"
                                style={{ textAlign: "left" }}
                            >
                                <h2>Chicken Kasa</h2>
                            </div>
                            <div className="dishrating">
                                <img src={FullStar} alt="" className="star" />
                                <img src={FullStar} alt="" className="star" />
                                <img src={FullStar} alt="" className="star" />
                                <img src={HalfStar} alt="" className="star" />
                                <img src={EmptyStar} alt="" className="star" />
                                <p> &nbsp; &nbsp;140 rating</p>
                            </div>
                            <br />
                            <p className="price">&#x20B9; 250</p>
                            <p className="description">
                                Rich creamy and smooth chicken gravy with a
                                tinge of sweetness and tanginess. Based on north
                                Indian taste
                                <span className="readmorebtn">
                                    ... read more
                                </span>
                            </p>
                        </div>
                        <div className="dishimg">
                            <img className="" alt="" />
                            <Link to="/Confirm">
                                <button type="button" className="addbtn">
                                    Add +{" "}
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        ..............................................................................
                    </div>
                    <div className="dishcard">
                        <div className="dishdetails">
                            <div className="dishtags">
                                <img src={VegIcon} alt="" className="" />
                                <div className="tag">Highest&nbsp;Rated</div>
                                <div className="tag">BestSeller</div>
                            </div>
                            <div
                                className="dishname"
                                style={{ textAlign: "left" }}
                            >
                                <h2>Punjabi paneer butter</h2>
                            </div>
                            <div className="dishrating">
                                <img src={FullStar} alt="" className="star" />
                                <img src={FullStar} alt="" className="star" />
                                <img src={FullStar} alt="" className="star" />
                                <img src={FullStar} alt="" className="star" />
                                <img src={HalfStar} alt="" className="star" />
                                <p> &nbsp; &nbsp;98 rating</p>
                            </div>
                            <br />
                            <p className="price">&#x20B9; 250</p>
                            <p className="description">
                                Rich creamy and smooth chicken gravy with a
                                tinge of sweetness and tanginess. Based on north
                                Indian taste
                                <span className="readmorebtn">
                                    ... read more
                                </span>
                            </p>
                        </div>
                        <div className="dishimg">
                            <img className="" alt="" />
                            <Link to="/Confirm">
                                <button type="button" className="addbtn">
                                    Add +{" "}
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        ..............................................................................
                    </div>
                </div>
            </div>
            <div className="fixedmenubtn" onClick={handleMenuClick}>
                {menu ? (
                    <>
                        <div className="menubox">
                            <h2>Menu</h2>
                            <div>Starters</div>
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default ShopMenu;
