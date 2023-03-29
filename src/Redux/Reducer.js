const initialState = { 
  order:'',
  products: []
  
}

const reducer =(state = initialState, action) =>{
  switch(action.type){
    case'ADD': 
      return {...state, products: [...state.products, action.payload]}

    case'RESET':
      return {...state, products:[]}

  
    case 'ADDNR': 
      return {...state, order: action.payload }


    default:
      return state
  }
}
export default reducer


