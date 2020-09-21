import React from 'react';
import Currencyformat from "react-currency-format";
import {useStateValue}from '../StateProvider/StateProvider';
import classes from './Subtotal.css';
import { getBasketTotal } from '../../Reducer';
import { useHistory } from 'react-router-dom';


const subtotal =()=>{
  const history = useHistory();
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
   <button className={classes.Button} onClick={e=>history.push('/OrderSummary')}>proceed to checkout</button>
 </div>
}
export default subtotal;