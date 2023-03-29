import { useLocation,useNavigate} from "react-router-dom"
import { useState,useEffect } from "react"
import drone from './assets/drone.svg'
import { useSelector } from "react-redux"

function Status(){
  const [test,setTest]=useState()
  const navigate=useNavigate()
  const orderNr = useSelector(state => state.order.order)
  console.log(orderNr);


  useEffect(() => {

    async function checkStatus(){

      const resp= await fetch(`https://airbean.awesomo.dev/api/beans/order/status/${orderNr}`)
      const data= await resp.json()
     setTest(Object.values(data)[0])
    
    }
    checkStatus()
  },[])

 
  return <div className="status">
<h3>Tack för din beställning </h3>
<p>beställningsNr : <b> #{orderNr} </b></p>

<img src= {drone} alt="" />
  <div>{Number.isInteger(test) ? (
         <p> <b>{test} </b>minuter </p>
      ) : test}
      </div>
      <button onClick={()=>{navigate('/menu')}}>Ok ! cool</button>

  </div>
}
export default Status