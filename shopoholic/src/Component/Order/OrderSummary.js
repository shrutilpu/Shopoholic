import React from 'react'
import classes from './OrderSummary.css';
import {useStateValue} from '../StateProvider/StateProvider';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import {Link } from 'react-router-dom';

function OrderSummary() {
 const [{basket,user},dispatch] = useStateValue();
 return (
  <div className={classes.OrderSummary}>

    <div className={classes.OrderSummaryContainer}>
        <h1>
            Checkout(<Link to ="/checkout">{basket.length} items</Link>)
        </h1>
   {/*############################################################################### */}
   <div className={classes.Section}>
    <div className={classes.Title}>
     <h3>Delivery Address</h3>
    </div>
    <div className={classes.Address}>
    <p>{user?user.email:null}</p>
    <p>lovely professional University</p>
    <p>phagwara,punjab 144411</p>
    </div>
   </div>

   {/*################################################################################ */}
   <div className={classes.Section}>
    <div className={classes.Title}>
     <h3>review items and proceed</h3>
    </div>
    <div className={classes.Items}>
    {basket.map(item=>{
     return <CheckoutProduct key={item.id}
         id={item.id} 
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}
     />
    })}
    </div>
   </div>
   {/* ######################################################################################### */}
   <div className={classes.Section}>
    <div className={classes.Title}><h3>Paymet Method</h3></div>
   </div>
  </div>
  </div>
 )
}
export default OrderSummary ;
