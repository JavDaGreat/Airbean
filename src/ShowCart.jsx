import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, add } from "./Redux/Action";
import addIcon from "./assets/add.svg";
import deleteIcon from "./assets/closev2.svg";

function ShowCart({ name, price, id }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const count = products.filter((product) => product.name === name).length;

  function handleDelete() {
    dispatch(deleteOrder(id));
  }

  function handleAdd() {
    dispatch(add({ name, price, id }));
  }

  return (
    <li className="list-cart">
      <button onClick={handleAdd}>
        <img src={addIcon} alt="" />
      </button>
      <h4>{name} </h4>
      <p>{count}</p>
      <p>{price} Kr</p>
      <button onClick={handleDelete}>
        <img src={deleteIcon} alt="" />
      </button>
    </li>
  );
}

export default ShowCart;
