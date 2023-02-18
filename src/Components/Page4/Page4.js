import React, { useState } from 'react'
import styles from "./Page4.module.css"
import { FaArrowLeft } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClockCircle } from "react-icons/ai";
function Page4() {
    const [Shop,setShop] = useState("Desi Darbar");
    const [Dish,setDish] = useState("Butter Chicken Masala");
    const [Price,setPrice] = useState(250);
    const [Num,setNum] = useState(1);
    const [Time1,setTime1] = useState(25);
    const [Time2,setTime2] = useState(30);
  return (
    <>
        <div className={styles.top}>
            <div><FaArrowLeft/></div>
            <div className={styles.shop}>{Shop}</div>
            <div>
                <form>
                    <input type="text" placeholder='Search' className={styles.search} style={{borderLeft:"none",borderBottom:"none",borderTop:"none",borderRight:"none"}}></input>
                </form>
            </div>
            <div className={styles.menu}><GiHamburgerMenu style={{marginLeft:"2.5vw",marginTop:"3vw"}}/></div>
        
        </div>
        <div>
            <div className={styles.sdiv}><span className={styles.subdiv}>Veg</span><span className={styles.subdiv}>Non-Veg</span></div>
            <hr/>
            <div className={styles.order}>Your Order</div>
            <hr/>
            <div className={styles.sdiv1}><span className={styles.subdiv1}>Highest Rated</span><span className={styles.subdiv1}>Best Seller</span></div>
            <div className={styles.dish}>{Dish}</div>
            <div className={styles.rating}>Rating</div>
            <div className={styles.price}>Rs.{Price}</div>
            <div className={styles.description}>fcnewufhsncuwendcuewhcfnwundecuc9nweurcfhbwuebdcnuew9hc9ewhfccnudncuwencnuedncuehrcwnuhc</div>
        </div>
        <div>
            <div>Image</div>
            <div>
                <span onClick={() => {
                    if(Num-1>=0) setNum(Num-1)}}>
                        -
                    </span>
                    <span>{Num}</span>
                    <span onClick={() => {setNum(Num+1)}}>+</span></div>
        </div>
        <div><span><AiOutlineClockCircle/></span><span>Order will be ready in {Time1} - {Time2} mins</span></div>
        <div>Having Group Party?</div>
        <div>dbcuyebdcyebcybeydcbibewdcybeydcbebdcbedcybedcbeygcebcuebc8eogrc8ebcebc8egc8ebubvvibcba</div>
        <div>
            <div>
                <div>img</div>
                <div>
                    <div>Tea Cup</div>
                    <div>Friends</div>
                </div>
                <div>dbcbwydbcybwdcbwbciuwbdcy</div>
            </div>
            <div>
                <div>img</div>
                <div>
                    <div>Tea Cup</div>
                    <div>Friends</div>
                </div>
                <div>dbcbwydbcybwdcbwbciuwbdcy</div>
            </div>
            <div>
                <div>img</div>
                <div>
                    <div>Tea Cup</div>
                    <div>Friends</div>
                </div>
                <div>dbcbwydbcybwdcbwbciuwbdcy</div>
            </div>
        </div>
        <div>Next</div>
    </>
  )
}

export default Page4