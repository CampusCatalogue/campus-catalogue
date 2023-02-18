import "./RestComp.css";
import menu from "../../images/bxs_food-menu.png";
import rating from "../../images/Group 27.png";
const RestComp = () => {
    return (
        <div>
            <div className="temp1"></div>
            <div className="horzdisp">
                <div>
                    <p>Restarant name 1</p>
                    <p>Chinese</p>
                    <p>Kokha gate</p>
                </div>
                <div>
                    <img src={menu} alt="" />
                </div>
                <div>
                    <img src={rating} alt="" />
                    <p>300 for two</p>
                </div>
            </div>
        </div>
    );
};

export default RestComp;
