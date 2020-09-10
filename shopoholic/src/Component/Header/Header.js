import React from 'react';
import classes from './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import BasketIcon from '@material-ui/icons/ShoppingBasket';

import {useStateValue} from '../StateProvider/StateProvider';
import { auth } from '../../Firbase';

const header = (props)=>{
   const [{basket,user}]=useStateValue();
   //console.log(basket);

   const login=()=>{
    
    if(user){
        let r=window.confirm("are you sure wanna log out?");
    if(r)
   {
        auth.signOut()
    }
}
   }
 return (<div  className={classes.Header}>
     
    <Link to="/"><img src="https://firebasestorage.googleapis.com/v0/b/shopoholic-a43c0.appspot.com/o/ProductImages%2Ff860aeef-8d9b-4911-8762-b121186039b4_200x200.png?alt=media&token=4aa21cc3-f253-4367-8800-d4662b0c932d" alt ="logo" className={classes.Logo}/></Link>

    <input type="text" className={classes.SearchInput}></input>
    <SearchIcon className={classes.SearchIcon}/>
     

<div className={classes.HeaderNav}>

       
    <Link className={classes.HeaderLink} to={!user && "/login"}>
        <div className={classes.HeaderOption} onClick={login}>
 <span className={classes.HeaderOption1}>Hello!{"  "}{user?user.email:null}</span>
 <span className={classes.HeaderOption2}>{user?"sign-out":"sign-IN"}</span>
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