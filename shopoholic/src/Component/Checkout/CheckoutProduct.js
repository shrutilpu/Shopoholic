import React from 'react';
import classes from './CheckoutProduct.css';
import {useStateValue} from '../StateProvider/StateProvider';
const checkoutProduct=(props)=>{
  const [{basket},dispatch]= useStateValue();
 const onRemoveHandler=()=>{
   //console.log(props.id);
  dispatch({
    type:"REMOVE_FROM_BASKET",
    id:props.id
  });
 }
 return (
 <div className={classes.CheckoutProduct}>
   <img src={props.image} alt="!!!" className={classes.img}/>
   <div className={classes.ProductInfo}>
       <strong className={classes.title}>{props.title}</strong>
       < div className={classes.price}> 
          <small>$</small>
          <strong>{props.price}</strong>
       </div>
       <div className={classes.Rating}>
        {
         Array(props.rating).fill().map(_ =>{
          return <span role="img" aria-labelledby="star">⭐</span>
         })
        }
       </div>
       <button className={classes.Remove}
       onClick={onRemoveHandler}>remove from basket</button>
   </div>
  </div>
 );
}
export default checkoutProduct;