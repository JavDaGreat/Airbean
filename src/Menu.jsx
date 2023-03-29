import { useState,useEffect } from "react"
import ShowMenu from "./ShowMenu"
import Cart from "./Cart"
import cartIcon from './assets/cart-icon.svg'
import navIcon from './assets/navicon.svg'
import close from './assets/closev2.svg'
import { useNavigate } from "react-router-dom"


function Menu() {
  const[Menu,setMenu]=useState([])
  const [counter,setCounter]=useState(0)
  const[showNav,setShowNav]=useState(false)
  const[showCart,setShowCart]= useState(false)
  const Navigate=useNavigate()

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
  return <ShowMenu setCounter={setCounter} title={product.title} key={product.id} id={product.id} desc={product.desc} price={product.price}/>
})

const open= <div className= 'cart-dropdown'>
<Cart  />
</div>



  return <div className="menu">
    <header className="header">
      <button className='nav-btn' onClick={()=>{setShowNav(!showNav)}}> <img src={navIcon} alt="" /></button>
      <button className="cart-btn" onClick={()=>{setShowCart(!showCart)}}> <img src={cartIcon} alt="" /> <span>{counter}</span></button>
    </header>
    {showCart && open}

<nav className={showNav ? 'show':''}>
  <ul className="nav-menu">
    <button onClick={()=>{setShowNav(!showNav)}}> <img src={close} alt="" /> </button>
    <li><a onClick={()=>{Navigate('/')}}>Home</a></li>
    <li><a onClick={()=>{Navigate('/status')}}>Status</a></li>
    <li><a onClick={()=>{Navigate('/menu')}}>Menu</a></li>
    <li><a onClick={()=>{Navigate('/about')}}>About</a></li>

  </ul>
</nav>
<h2 className="h2-meny">Meny</h2>
{menuProducts} 

  </div>
}


export default Menu