import React from 'react';
import classes from './Product.css';
const product =(props)=>{
 return (
   <div className={classes.Product}>
    <div className={classes.ProductInfo}>
        <p>{props.title}</p>
        <p className={classes.Price}>
           <small>$</small><strong>{props.price}</strong>
        </p>
        <div className={classes.Rating}>
        {
         Array(props.rating).fill().map((_)=>{
          return<p>⭐</p>
         })}
        </div>
    </div>
     
     <img src={props.img} alt="product"/>
     <button>Add to cart</button>
    </div>
 );
}
export default product;