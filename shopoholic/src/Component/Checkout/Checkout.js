import React from 'react';
import classes from './Checkout.css';
 
import SubTotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../StateProvider/StateProvider';
const checkout =()=>{
 const [{basket}] = useStateValue();
 return(
  <div className={classes.Checkout}>
        <div className={classes.CheckoutLeft}> 
          <img className={classes.Add}
          src="https://firebasestorage.googleapis.com/v0/b/shopoholic-a43c0.appspot.com/o/ProductImages%2Fchanne.jpg?alt=media&token=ffe7bd0d-9486-43bd-bd40-c9a955011cc3" alt="product"></img>

         {basket.length===0?(
            <div>
              <h1>oooops!! nothing inside basket add some items to shop</h1>
            </div>):
            (<div>
              <h2 className={classes.CheckoutTitle}>Your shopping basket!!!!! </h2>
               {
                basket.map(item=>{
                console.log(item);
                   return <CheckoutProduct 
                           id={item.id}
                           title={item.title}
                           image={item.image}
                           price={item.price}
                           rating={item.rating}
                          />
                        })
                }
               </div>)}
        </div>
        <div className={classes.CheckoutRight}>
        <SubTotal/>
         
        </div> 
  
  </div>
 );
}
export default checkout;