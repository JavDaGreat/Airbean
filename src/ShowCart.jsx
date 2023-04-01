import { useDispatch } from "react-redux"
import { deleteOrder,add } from "./Redux/Action"
import { useState} from "react"
import addIcon from './assets/add.svg'
import deleteIcon from './assets/closev2.svg'


function ShowCart({name,price,number,id}){
  const[counter,setCounter]=useState(1)

  const dispatch=useDispatch()

  function handleDelete(){
    dispatch(deleteOrder(id))
    number(current=> current - 1)
  }
  function handleAdd(){
    setCounter( current=> current+1)

    number(current=>current+1)
    dispatch(add({name,price,id}))
  }


  return <li className="list-cart">
    <button onClick={handleAdd}> <img src= {addIcon}alt="" /></button>
    <h4>{name} </h4>
    <p>{counter}</p>
    <p>{price} Kr</p>
    <button onClick={handleDelete}><img  src={deleteIcon} alt="" /></button>
  </li>
}
export default ShowCart