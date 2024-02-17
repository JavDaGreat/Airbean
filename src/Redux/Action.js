function add(value) {
  return {
    type: "ADD",
    payload: value,
  };
}
function reset() {
  return {
    type: "RESET",
  };
}
function addNr(nr) {
  return {
    type: "ADDNR",
    payload: { order: nr },
  };
}
function deleteOrder(value) {
  return {
    type: "DELETE",
    payload: value,
  };
}

export { add, reset, addNr, deleteOrder };
