import React from 'react';
import classes from './Product.css';
import { useStateValue } from '../StateProvider/StateProvider';
const product =(props)=>{
   
   const [{basket},dispatch] = useStateValue();

   const addToBasket=()=>{
   //add item to basket
   dispatch({
    type:"ADD_TO_BASKET",
    item:{
       id:props.id,
       title:props.title,
       image:props.img,
       price:props.price,
       rating:props.rating
    }
   })
   }
 return (
   <div className={classes.Product}>
    <div className={classes.ProductInfo}>
        <strong>{props.title}</strong>
        <p className={classes.Price}>
           <small>$</small><strong>{props.price}</strong>
        </p>
        <div className={classes.Rating}>
        {
         Array(props.rating).fill().map(_=>{
          return<span>⭐</span>
         })}
        </div>
    </div>
     
     <img src={props.img} alt="product"/>
     <button onClick={addToBasket}>Add to cart</button>
    </div>
 );
}
export default product;