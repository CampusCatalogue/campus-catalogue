import "./DishesComp.css";
const DishesComp = (props) => {
    return ( 
        <div class="dishesouter" >
           <div class="dishesmain">
            </div>
            <span>{props.dish}</span>  
        </div>
     );
}
 
export default DishesComp;