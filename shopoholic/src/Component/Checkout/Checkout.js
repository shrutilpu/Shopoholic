import React from 'react';
import classes from './Checkout.css';

import CheckoutProduct from './CheckoutProduct';
import Add from '../../Images/laura-chouette-fPL339HWo68-unsplash.jpg';
import { useStateValue } from '../StateProvider/StateProvider';
const checkout =()=>{
 const [{basket}] = useStateValue();
 return(
  <div className={classes.Checkout}>
   <img className={classes.Add}
   src={Add} alt="product"></img>

  {basket.length===0?(
  <div>
  <h1>oooops!! nothing inside basket add some items to shop</h1>
  </div>):
  (<div>
  <h2 className={classes.CheckoutTitle}>Your shopping basket!!!!! </h2>
   {
    basket.map(item=>{
     return <CheckoutProduct 
             item={item.id}
             title={item.title}
             image={item.image}
             price={item.price}
             rating={item.rating}
             />
    })
   }
  </div>)}
  
  </div>
 );
}
export default checkout;