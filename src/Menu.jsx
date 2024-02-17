import { useState, useEffect } from "react";
import ShowMenu from "./ShowMenu";
import Cart from "./Cart";
import cartIcon from "./assets/cart-icon.svg";
import navIcon from "./assets/navicon.svg";
import close from "./assets/closev2.svg";
import { useNavigate } from "react-router-dom";

function Menu() {
  const [Menu, setMenu] = useState([]);
  const [counter, setCounter] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    const fetchmenu = async () => {
      try {
        const resp = await fetch("https://airbean.awesomo.dev/api/beans/");
        const { menu } = await resp.json();
        if (!menu || menu.length === 0) throw new Error("No data received");
        setMenu(menu);
      } catch (error) {
        console.error(error);
        const mockMenu = [
          {
            id: 1,
            title: "Coffee",
            desc: "error server offline ",
            price: 10,
          },
          {
            id: 2,
            title: "Latte",
            desc: "error server offline ",
            price: 20,
          },
          {
            id: 3,
            title: "Tea",
            desc: "error server offline ",
            price: 30,
          },
          {
            id: 4,
            title: "Hot Chocolate",
            desc: "error server offline ",
            price: 40,
          },
          {
            id: 5,
            title: "Espresso",
            desc: "error server offline ",
            price: 50,
          },
          {
            id: 6,
            title: "Cappuccino",
            desc: "error server offline ",
            price: 60,
          },
          {
            id: 7,
            title: "Mocha",
            desc: "error server offline ",
            price: 70,
          },
          {
            id: 8,
            title: "Macchiato",
            desc: "error server offline ",
            price: 80,
          },
          {
            id: 9,
            title: "Americano",
            desc: "error server offline ",
            price: 90,
          },
          {
            id: 10,
            title: "Flat White",
            desc: "error server offline 0",
            price: 100,
          },
        ];
        setMenu(mockMenu);
      }
    };

    fetchmenu();
  }, []);

  const menuProducts = Menu.map((product) => {
    return (
      <ShowMenu
        setCounter={setCounter}
        title={product.title}
        key={product.id}
        id={product.id}
        desc={product.desc}
        price={product.price}
      />
    );
  });

  const open = (
    <div className="cart-dropdown">
      <Cart number={setCounter} />
    </div>
  );

  let cardIcons = <img src={cartIcon} alt="" />;
  if (showCart) {
    cardIcons = <img src={close}></img>;
  }

  return (
    <div className="menu">
      <header className="header">
        <button
          className="nav-btn"
          onClick={() => {
            setShowNav(!showNav);
          }}>
          <img src={navIcon} alt="" />
        </button>
        <button
          className="cart-btn"
          onClick={() => {
            setShowCart(!showCart);
          }}>
          {cardIcons} <span className="counter">{counter}</span>
        </button>
      </header>
      {showCart && open}

      <nav className={showNav ? "show" : ""}>
        <ul className="nav-menu">
          <button
            onClick={() => {
              setShowNav(!showNav);
            }}>
            <img src={close} alt="" />{" "}
          </button>
          <li>
            <a
              onClick={() => {
                Navigate("/");
              }}>
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                Navigate("/status");
              }}>
              Status
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                Navigate("/menu");
              }}>
              Menu
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                Navigate("/about");
              }}>
              About
            </a>
          </li>
        </ul>
      </nav>
      <h2 className="h2-meny">Meny</h2>
      {menuProducts}
    </div>
  );
}

export default Menu;
