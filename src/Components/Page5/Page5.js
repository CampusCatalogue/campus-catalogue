import React, { useState } from "react";
import styles from "./Page5.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function Page5() {
    const [Shop, setShop] = useState("Desi Darbar");
    const [Time1, setTime1] = useState(25);
    const [Time2, setTime2] = useState(30);
    const [name1, setname1] = useState("Chicken butter Masala");
    const [name2, setname2] = useState("French Fries");
    const [name3, setname3] = useState("Tandoori Roti");
    const [Num1, setNum1] = useState(1);
    const [Num2, setNum2] = useState(1);
    const [Num3, setNum3] = useState(1);
    const [Price1, setPrice1] = useState(250);
    const [Price2, setPrice2] = useState(350);
    const [Price3, setPrice3] = useState(450);
    return (
        <>
            <div className={styles.top}>
                <Link to="/Confirm">
                    <div>
                        <FaArrowLeft />
                    </div>
                </Link>
                <div className={styles.shop}>{Shop}</div>
            </div>
            <div className={styles.time}>
                <span>
                    <AiOutlineClockCircle />
                </span>
                <span>
                    Order will be ready in {Time1} - {Time2} mins
                </span>
            </div>
            <hr />
            <div className={styles.item}>Items added</div>
            <div className={styles.list}>
                <div className={styles.items}>
                    <div>
                        <span className={styles.name}>{name1}</span>
                        <span className={styles.num1}>
                            <span
                                onClick={() => {
                                    if (Num1 - 1 >= 1) setNum1(Num1 - 1);
                                }}
                            >
                                -
                            </span>
                            <span>{Num1}</span>
                            <span
                                onClick={() => {
                                    setNum1(Num1 + 1);
                                }}
                            >
                                +
                            </span>
                        </span>
                    </div>
                    <div>
                        <span className={styles.p1}>{Price1}</span>
                        <span className={styles.p2}>{Price1 * Num1}</span>
                    </div>
                </div>
                <div className={styles.items}>
                    <div>
                        <span className={styles.name}>{name2}</span>
                        <span className={styles.num2}>
                            <span
                                onClick={() => {
                                    if (Num2 - 1 >= 1) setNum2(Num2 - 1);
                                }}
                            >
                                -
                            </span>
                            <span>{Num2}</span>
                            <span
                                onClick={() => {
                                    setNum2(Num2 + 1);
                                }}
                            >
                                +
                            </span>
                        </span>
                    </div>
                    <div>
                        <span className={styles.p1}>{Price2}</span>
                        <span className={styles.p2}>{Price2 * Num2}</span>
                    </div>
                </div>
                <div className={styles.items}>
                    <div>
                        <span className={styles.name}>{name3}</span>
                        <span className={styles.num3}>
                            <span
                                onClick={() => {
                                    if (Num3 - 1 >= 1) setNum3(Num3 - 1);
                                }}
                            >
                                -
                            </span>
                            <span>{Num3}</span>
                            <span
                                onClick={() => {
                                    setNum3(Num3 + 1);
                                }}
                            >
                                +
                            </span>
                        </span>
                    </div>
                    <div>
                        <span className={styles.p1}>{Price3}</span>
                        <span className={styles.p2}>{Price3 * Num3}</span>
                    </div>
                </div>
                <hr />
                <div>
                    <span className={styles.total}>Total:</span>
                    <span className={styles.sum}>
                        {Price1 * Num1 + Price2 * Num2 + Price3 * Num3}
                    </span>
                </div>
            </div>
            <div className={styles.add}>
                <AiOutlinePlusCircle />
                Add More Items
            </div>
            <Link to="/Payment">
                <div className={styles.payment}>Payment</div>
            </Link>
        </>
    );
}

export default Page5;
