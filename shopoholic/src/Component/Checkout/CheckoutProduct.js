import React from 'react';
import classes from './CheckoutProduct.css';
const checkoutProduct=(props)=>{
 const onRemoveHandler=()=>{
  
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
          return <span>⭐</span>
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