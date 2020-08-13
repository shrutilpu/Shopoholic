import React from 'react';
import classes from './Home.css';
import Banner from '../../Images/12-12-sale-BG-Blue-Purple.jpg'

import Product from '../Product/Product';
const home = (props)=>{
 return(
  <div className={classes.Home}>
     <img src={Banner} alt="banner?" className={classes.Banner} />
  {/*product id ,title,price,rating image*/}
     <div className={classes.Product}>
     <Product
      title="dress sgdh sgsadg ajdgj DGGDH sjDDDG "
      id = "1"
      img={Banner}
      price={50}
      rating={4}
     />
     <Product
      title="dress sgdh sgsadg ajdgj DGGDH sjDDDG "
      id = "2"
      img={Banner}
      price={50}
      rating={4}
     />
     </div>
     <div className={classes.Product}>
     <Product
      title="dress sgdh sgsadg ajdgj DGGDH sjDDDG "
      id = "3"
      img={Banner}
      price={80}
      rating={4}
     />
     <Product
      title="dress sgdh sgsadg ajdgj DGGDH sjDDDG "
      id = "4"
      img={Banner}
      price={50}
      rating={4}
     />
      <Product
      title="dress sgdh sgsadg ajdgj DGGDH sjDDDG "
      id = "5"
      img={Banner}
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
  </div>
 );
}
export default home;