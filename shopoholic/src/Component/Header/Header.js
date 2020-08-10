import React from 'react';
import classes from './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import BasketIcon from '@material-ui/icons/ShoppingBasket';

import {useStateValue} from '../StateProvider/StateProvider';
import logo from '../../Images/Free_Sample_By_Wix.jpeg';

const header = (props)=>{
   const [{basket}]=useStateValue();
   console.log(basket);
 return (<div  className={classes.Header}>
     
    <Link to="/"><img src={logo} alt ="logo" className={classes.Logo}/></Link>

    <input type="text" className={classes.SearchInput}></input>
    <SearchIcon className={classes.SearchIcon}/>
     

<div className={classes.HeaderNav}>

       
    <Link className={classes.HeaderLink} to="/login">
        <div className={classes.HeaderOption}>
          <span className={classes.HeaderOption1}>Hello!</span>
          <span className={classes.HeaderOption2}>signUp!</span>
        </div>
    </Link>

        
    <Link className={classes.HeaderLink} to="/">
        <div className={classes.HeaderOption}>
            <span className={classes.HeaderOption1}>returns</span>
            <span className={classes.HeaderOption2}>Orders</span>
        </div>
    </Link>
      
       
    <Link className={classes.HeaderLink} to="/">
        <div className={classes.HeaderOption}>
            <span className={classes.HeaderOption1}>Your</span>
            <span className={classes.HeaderOption2}>prime</span>
        </div>
    </Link>

</div>
     
    <Link to="/checkout" className={classes.HeaderLink}>
        <div className={classes.HeaderOption2}>
            <BasketIcon/>
 <span className={classes.BasketCount}>{basket.length}</span>
        </div>
    </Link>

</div>);
}
export default header;