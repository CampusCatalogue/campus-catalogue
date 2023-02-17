import "./StatusComp.css";
const StatusComp = () => {
  return (
    <div className="status">
      <div className="horz">
        <span style={{color:"white",fontSize:"3vw",paddingRight:"3vw",paddingBottom:"1vw"}} >your order status</span>
        <span style={{color:"white",fontSize:"3vw",paddingRight:"2vw"}} >Time</span>
      </div>
      <div  className="horzstat">
        <div className="showstatus" ></div>
        <div className="showstatus" ></div>
        <div className="showstatus on" ></div>

        <span style={{fontSize:"3vw",border:"1px black solid",margin:"0.1vw"}} >10 min</span>
      </div>
    </div>
  );
};

export default StatusComp;
