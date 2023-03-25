function add(value){
  console.log(value);

return{
  type:'ADD',
  payload:{"name":value.name,"price":value.price,"id":value.id}
}
}
function reset(){
  return{
  type:'RESET'
  }
}


export {add,reset}