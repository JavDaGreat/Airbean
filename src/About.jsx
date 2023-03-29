import { useState } from "react"
import navIcon from './assets/navicon.svg'
import close from './assets/closev2.svg'
import image from'./assets/eva-cortado.jpg'
import { useNavigate } from "react-router-dom"


function About(){
  const[showNav,setShowNav]=useState(false)
  const Navigate= useNavigate()

  return <div className="about">
    <header><button className='nav-btn' onClick={()=>{setShowNav(!showNav)}}> <img src={navIcon} alt="" /></button>
</header>
<nav className={showNav ? 'show':''}>
  <ul className="nav-menu">
    <button onClick={()=>{setShowNav(!showNav)}}> <img src={close} alt="" /> </button>
    <li><a onClick={()=>{Navigate('/')}}>Home</a></li>
    <li><a onClick={()=>{Navigate('/status')}}>Status</a></li>
    <li><a onClick={()=>{Navigate('/menu')}}>Menu</a></li>
    <li><a onClick={()=>{Navigate('/about')}}>About</a></li>

  </ul>
</nav>
<h2 style={{textAlign:'center'}}>Vårt Kaffe</h2>
<h5>Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.

</h5>
 <p className="text-about">Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.

Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.
</p>
<div className="vd">
<img src={image} alt="" />
<h3>Eva Cortedo</h3>
<p>VD& Grundare</p>
</div>
     </div>
}
export default About