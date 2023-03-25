import { useDispatch } from "react-redux"
import { add } from "./Redux/Action"



function ShowMenu({id,title,desc,price}){
  const dispatch = useDispatch();
 

function handleClick(){

dispatch(add({name:title,price,id}))

}


  return <div>
    <h3>{title} / <b>{price} kr</b></h3>
    <p>{desc}</p>
    <button onClick={handleClick}>Buy</button>
  </div>
}
export default ShowMenu

