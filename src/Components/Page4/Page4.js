import React, { useState } from "react";
import styles from "./Page4.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
function Page4() {
    const [Shop, setShop] = useState("Desi Darbar");
    const [Dish, setDish] = useState("Butter Chicken Masala");
    const [Price, setPrice] = useState(250);
    const [Num, setNum] = useState(1);
    const [Time1, setTime1] = useState(25);
    const [Time2, setTime2] = useState(30);
    return (
        <>
            <div className={styles.top}>
                <Link to="/ShopMenu">
                    <div>
                        <FaArrowLeft style={{ marginRight: "3vw" }} />
                    </div>
                </Link>
                <div className={styles.shop}>{Shop}</div>
                <div className={styles.Search}>
                    <form>
                        <input
                            type="text"
                            placeholder="Search"
                            className={styles.search}
                            style={{
                                borderLeft: "none",
                                borderBottom: "none",
                                borderTop: "none",
                                borderRight: "none",
                            }}
                        ></input>
                    </form>
                </div>
                <div className={styles.menu}>
                    <GiHamburgerMenu
                        style={{ marginLeft: "2.5vw", marginTop: "3vw" }}
                    />
                </div>
            </div>
            <div>
                <div className={styles.sdiv}>
                    <span className={styles.subdiv}>Veg</span>
                    <span className={styles.subdiv}>Non-Veg</span>
                </div>
                <hr />
                <div className={styles.order}>Your Order</div>
                <hr />
                <div className={styles.sdiv1}>
                    <span className={styles.subdiv1}>Highest Rated</span>
                    <span className={styles.subdiv1}>Best Seller</span>
                </div>
                <div className={styles.dish}>{Dish}</div>
                <div className={styles.rating}>Rating : 4.3/5</div>
                <div className={styles.price}>Rs.{Price}</div>
                <div className={styles.description}>Description</div>
            </div>
            <div className={styles.img}>
                <div className={styles.gray}></div>
                <div className={styles.num}>
                    <span
                        onClick={() => {
                            if (Num - 1 >= 0) setNum(Num - 1);
                        }}
                    >
                        -
                    </span>
                    <span> {Num} </span>
                    <span
                        onClick={() => {
                            setNum(Num + 1);
                        }}
                    >
                        +
                    </span>
                </div>
            </div>
            <div className={styles.time}>
                <span>
                    <AiOutlineClockCircle />
                </span>
                <span>
                    Order will be ready in {Time1} - {Time2} mins
                </span>
            </div>
            <Link to="/Checkout">
                <div className={styles.payment}>Next</div>
            </Link>
        </>
    );
}

export default Page4;
