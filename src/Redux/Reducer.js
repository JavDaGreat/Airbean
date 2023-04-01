const initialState = { 
  order:'',
  products: []
  
}


const reducer =(state = initialState, action) =>{
  switch(action.type){
    case'ADD': 
    if (state.products.find(obj =>obj.id === action.payload.id) ){
       const newID=Math.floor(Math.random()*999)
       action.payload.id=newID
      return{
        ...state, products: [...state.products, action.payload]

      }
    }
      return {
        ...state, products: [...state.products, action.payload]
      
      }

    case'RESET':
      return {...state, products:[]}

  
    case 'ADDNR': 
      return {...state, order: action.payload }
    
    case 'DELETE':
      return{...state,products:state.products.filter(obj=>obj.id !== action.payload)}

    default:
      return state
  }
}
export default reducer


