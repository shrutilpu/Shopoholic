import React from 'react';
import classes from './Home.css';
import Banner from '../../Images/offer.jpg'

import Product from '../Product/Product';
import Categories from '../Categories/Categories';
import Footer from  '../Footer/Footer';

const home = (props)=>{
 return(
  <div className={classes.Home}>
     {/*<img src={Banner} alt="banner?" className={classes.Banner} />
  {/*product id ,title,price,rating image*/}
       <Categories/>
     <div className={classes.Product}>
     <Product
      title="dress sgdh sgsadg ajdgj DGGDH sjDDDG "
      id = "1"
      img="https://firebasestorage.googleapis.com/v0/b/shopoholic-a43c0.appspot.com/o/ProductImages%2Fblueshoes.jpg?alt=media&token=46f11b6a-02d5-4ee3-b80f-586ab79d6332"
      price={50}
      rating={4}
     />
     <Product
      title="dress sgdh sgsadg ajdgj DGGDH sjDDDG "
      id = "2"
      img="https://firebasestorage.googleapis.com/v0/b/shopoholic-a43c0.appspot.com/o/ProductImages%2Fbridalsandal.jpg?alt=media&token=b0b1d42d-4232-4781-a992-527abb7be448"
      price={50}
      rating={4}
     />
     </div>
     <div className={classes.Product}>
     <Product
      title="dress sgdh sgsadg ajdgj DGGDH sjDDDG "
      id = "3"
      img="https://firebasestorage.googleapis.com/v0/b/shopoholic-a43c0.appspot.com/o/ProductImages%2Fgoldpump.jpg?alt=media&token=e8ac764b-c66c-4555-b1f7-4cca422fd95c"
      price={80}
      rating={4}
     />
     <Product
      title="dress sgdh sgsadg ajdgj DGGDH sjDDDG "
      id = "4"
      img="https://firebasestorage.googleapis.com/v0/b/shopoholic-a43c0.appspot.com/o/ProductImages%2Fgoldsandal.jpg?alt=media&token=70c4d55e-e0f3-4348-b4bc-15e1f767310e"
      price={50}
      rating={4}
     />
      <Product
      title="dress sgdh sgsadg ajdgj DGGDH sjDDDG "
      id = "5"
      img="https://firebasestorage.googleapis.com/v0/b/shopoholic-a43c0.appspot.com/o/ProductImages%2Fsportshoe.jpg?alt=media&token=ef872334-797a-40b1-84d1-247d3cc83104"
      price={50}
      rating={4}
     />
     </div>
     <div className={classes.Product}>
     <Product
      title="dress sgdh sgsadg ajdgj DGGDH sjDDDG "
      id = "6"
      img={Banner}
      price={50}
      rating={4}
     /></div>
     <Footer/>
  </div>
 );
}
export default home;