
export const getBasketTotal = (basket)=> basket.reduce((amount,item)=>amount+item.price,0)

export const initialState={
 basket:[],
 user:null
}

const reducer = (state,action)=>{
    console.log(action);
 switch(action.type){
  case "SET_USER":
     return {
        ...state,user:action.user
     }
  case 'ADD_TO_BASKET':
    return{
       ...state,
       basket:[...state.basket, action.item]
   }
  case 'REMOVE_FROM_BASKET':
      let newBasket =[...state.basket];
      const index= state.basket.findIndex(basketItem=>{
         return basketItem.id === action.id;
      });
      if(index>=0){
      newBasket.splice(index,1);
      }else{
          console.warn("Cant remove product id");
      }
    return {...state,basket:newBasket};
  default:
     return state;
 }
}
export default reducer;