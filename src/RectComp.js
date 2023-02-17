import './RectComp.css';

const RectComp = (props) => {
    return ( 
        <div className="rect">
           { props.text}
        </div>
     );
}
 
export default RectComp;