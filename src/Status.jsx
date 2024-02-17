import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import drone from "./assets/drone.svg";
import { useSelector } from "react-redux";
import { Fragment } from "react";

function Status() {
  const [test, setTest] = useState();
  const navigate = useNavigate();
  const orderNr = useSelector((state) => state.order.order);

  const notOrdered = (
    <div className="status">
      <h3>Du har inte beställt något </h3>
      <img src={drone} alt="" />
      <button
        onClick={() => {
          navigate("/menu");
        }}>
        Back to Menu
      </button>
    </div>
  );

  const ordered = (
    <div className="status">
      <h3>Tack för din beställning </h3>
      {orderNr >= 0 && orderNr < 100 && <p>Server is offline</p>}
      <p>
        beställningsNr : <b> #{orderNr} </b>
      </p>
      <img src={drone} alt="" />
      <div>
        {Number.isInteger(test) ? (
          <p>
            {" "}
            <b>{test} </b>minuter{" "}
          </p>
        ) : (
          test
        )}
      </div>
      <button
        onClick={() => {
          navigate("/menu");
        }}>
        Ok ! cool
      </button>
    </div>
  );

  let content = null;

  if (orderNr) {
    content = ordered;
    useEffect(() => {
      async function checkStatus() {
        const resp = await fetch(
          `https://airbean.awesomo.dev/api/beans/order/status/${orderNr}`
        );
        const data = await resp.json();
        setTest(Object.values(data)[0]);
      }
      checkStatus();
    }, []);
  } else {
    content = notOrdered;
  }

  return <Fragment>{content}</Fragment>;
}
export default Status;
