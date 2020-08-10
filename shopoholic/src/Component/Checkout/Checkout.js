import React from 'react';
import classes from './Checkout.css';
import { useStateValue } from '../StateProvider/StateProvider';
const checkout =()=>{
 const [{basket}] = useStateValue();
 return(
  <div className={classes.Checkout}>
   <img className={classes.add}
   src="" alt="product"></img>
  </div>
 );
}
export default checkout;