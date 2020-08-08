import React from 'react';
import classes from './Header.css';
import logo from '../../Images/Free_sample_By_Wix.jpeg';

const header = (props)=>{
 return (<div  className={classes.Header}>
     {/*logo-left*/}
<img src={logo} alt ="logo" className={classes.Logo}/>
     {/*search-box*/}
     {/*3 Links*/}
     {/*Basket with no*/}
 </div>);
}
export default header;