import { useSelector,useDispatch } from "react-redux"
import ShowCart from "./ShowCart.jsx";
import { useNavigate } from "react-router-dom";
import { addNr, reset} from "./Redux/Action"



function Cart (){
 const navigate=useNavigate()
 const dispatch=useDispatch()



  const product = useSelector(state => state.products)

  const total= product.reduce((acc, obj) => {
    return acc + obj.price;
  }, 0);
  
  const takeOrder={
    "details": {
      "order":product
    }
  }

    const content= product.map((pro)=>{
      return <ShowCart name={pro.name} price={pro.price} id={pro.id} key={pro.id} />
    })
 
  async function handlePurchase(){
    console.log(product);


    const resp= await fetch('https://airbean.awesomo.dev/api/beans/order',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(takeOrder)
    
    
  }
  
  )
  const data= await resp.json()
  
  
  dispatch(addNr(data.orderNr))

 dispatch(reset())
 navigate ('/status')



  }

  return <ul className="cart">
    <h1>Din Beställning</h1>
  
  {content}

    <h3>Total : {total} Kr</h3>
    <p>inklusiv moms + leverans</p>
    <button onClick={handlePurchase} >take my money</button>

  
  

  </ul>
}
export default Cart