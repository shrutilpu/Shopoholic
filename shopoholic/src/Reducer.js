import product from './Images/laura-chouette-f-fYv8Tnaro-unsplash.jpg'
export const initialState={
 basket:[{
    title:"dress sgdh sgsadg ajdgj DGGDH sjDDDG ",
    id : "3f3562",
    image:product,
    price:"500",
    rating:5
 }]
}

const reducer = (state,action)=>{
    console.log(action);
 switch(action.type){
  case 'ADD_TO_BASKET':
   //logic for adding
   return{
       ...state,
       basket:[...state.basket, action.item]
   }
  case 'REMOVE_FROM_BASKET':
   //logic for remove
   break;
  default:
     return state;
 }
}
export default reducer;