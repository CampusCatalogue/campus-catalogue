import "./RestComp.css";
import { Link } from "react-router-dom";
import menu from "../../images/bxs_food-menu.png";
import rating from "../../images/Group 27.png";
import location from "../../images/location.png";
const RestComp = () => {
    return (
        <div>
            <Link to="/ShopMenu">
                <div className="temp1"></div>

                <div className="horzdisp">
                    <div style={{ marginLeft: "20px" }}>
                        <h2>
                            <p>Desi Durbar</p>
                        </h2>
                        <p>Chinese</p>

                        <p>
                            <img
                                src={location}
                                alt="location"
                                style={{ width: "10px" }}
                            ></img>
                            &nbsp;&nbsp;Kokha gate
                        </p>
                    </div>
                    <div>
                        <img src={menu} alt="" style={{ marginTop: "7px" }} />
                    </div>
                    <div>
                        <img
                            src={rating}
                            style={{ width: "40px", marginTop: "20px" }}
                            alt=""
                        />
                        <p style={{ marginRight: "20px" }}>₹300 for two</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default RestComp;
