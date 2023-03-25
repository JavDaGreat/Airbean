const initialState = { 
  products: []
  

}
const reducer =(state = initialState, action) =>{
  switch(action.type){
    case'ADD': 
    return {...state, products: [...state.products, action.payload]}
    case'RESET':
    return initialState

    case'DELETE':
     return {
      ...state,
      products: state.products.filter((item, index) => index !== action.payload)
    }

    default:
    return state
  }
}
export default reducer


