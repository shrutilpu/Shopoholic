import React from 'react';
import Currencyformat from "react-currency-format";
import {useStateValue}from '../StateProvider/StateProvider';
import classes from './Subtotal.css';
import { getBasketTotal } from '../../Reducer';


const subtotal =()=>{
const [{basket}]=useStateValue();
 return <div className={classes.Subtotal}>
   <Currencyformat 
         renderText = {(value)=>{
                 return (
                <div><p>Subtotal {basket.length} items:
                <strong>{value}</strong></p>
                <small className={classes.Subtotalgift}>
                <input type="checkbox"/>this order contains gift
                </small>
                </div>
                       ); }}
          decimalscale={2}
          value= {getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparater={true}
          prefix = {"$"}
         />
   <button className={classes.Button}>proceed to checkout</button>
 </div>
}
export default subtotal;