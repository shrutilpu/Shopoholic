import React from 'react'
import Styles from './Masonary.css';
import {products} from './ProdData';
import Product from '../Product/Product';

function Masonary() {
    return (
        <div className={Styles.Container}>
            {
                products.map(item=>{
                  return <Product
                  title ={item.title}
                  id={item.id}
                  img={item.img}
                  price={item.price}
                  rating={item.rating}
                  key={item.id}
                  />
                
                })
            }
        </div>
    )
}

export default Masonary
