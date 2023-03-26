import { useDispatch } from "react-redux"
import { add } from "./Redux/Action"
import addIcon from './assets/add.svg'




function ShowMenu({id,title,desc,price}){
  const dispatch = useDispatch();
 

function handleClick(){

dispatch(add({name:title,price,id}))

}


  return <div className="showMenu">
        <button onClick={handleClick}> <img src={addIcon} alt="" /></button>
        <h3>{title} </h3>
        <h4>{price} KR</h4> <br />

    <p>{desc}</p>
  </div>
}
export default ShowMenu

