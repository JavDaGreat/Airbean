function add(value){
  console.log(value);


return{
  type:'ADD',
  payload:value
}
}
function reset(){
  return{
  type:'RESET'
  
  }
}
function addNr(nr){
  return{
  type:'ADDNR',
  payload:{'order':nr}
}
}


export {add,reset,addNr}