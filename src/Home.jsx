import { useNavigate } from "react-router-dom"
function Home(){
  const navigate= useNavigate()
 function handleClick(){
  navigate('/menu')
 }
  return <div className="home">
    <button onClick={handleClick}>MENU</button>
    <h1>AirBean</h1>
    <h4>Drone Delivered Kaffe</h4>
  </div>
}
export default Home