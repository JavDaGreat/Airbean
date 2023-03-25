import { useState,useEffect } from "react"
import ShowMenu from "./ShowMenu"
import Cart from "./Cart"


function Menu() {
  const[Menu,setMenu]=useState([])

  useEffect(() => {
 const fetchmenu= async ()=>{
  const resp=  await fetch('https://airbean.awesomo.dev/api/beans/')
  const {menu}= await resp.json()
  setMenu(menu)

 }
    
  
    fetchmenu()
      .catch(console.error);
  }, [])
  

const menuProducts=Menu.map((product)=>{
  return <ShowMenu  title={product.title} key={product.id} id={product.id} desc={product.desc} price={product.price}/>
})



 


  return <div>
    {menuProducts}
    <Cart />
  </div>
}


export default Menu