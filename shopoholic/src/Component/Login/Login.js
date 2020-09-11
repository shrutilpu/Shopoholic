import React, { useState } from 'react';
import classes from './Login.css'
import {Link,useHistory} from 'react-router-dom';
import {auth} from '../../Firbase';

const login =()=>{
 const history = useHistory();
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

 const loginShop=(event)=>{
  event.preventDefault();
  auth.signInWithEmailAndPassword(email,password).then((auth)=>{
   history.push("/");
  }).catch(e=>alert(e.message));
 }

 const register=(event)=>{
  event.preventDefault();
  auth.createUserWithEmailAndPassword(email,password).then(auth=>{

  }).catch(e=>alert(e.message));
 }
 return (
  <div className={classes.Login}>
   <Link to="/">
     <img src="https://firebasestorage.googleapis.com/v0/b/shopoholic-a43c0.appspot.com/o/ProductImages%2Ff860aeef-8d9b-4911-8762-b121186039b4_200x200.png?alt=media&token=4aa21cc3-f253-4367-8800-d4662b0c932d"
      alt="logo" className={classes.logo}></img>
   </Link>

   <div className={classes.Container}>
    <h1>sign in</h1>
    <form>
     <input type="text" placeholder="E-mail"
  value={email} onChange ={event=>setEmail(event.target.value)}/>
    
     <input type="password" placeholder="password" 
 value={password} onChange={event=>setPassword(event.target.value)}/>
     <button className={classes.Signin} onClick={loginShop}>sign in</button>
 
     <p>by signing in you agree to 
      shopohlic's terms and conditions
      please read privacy and policy file before signing in</p>

     <button className={classes.CreateAccount} onClick={register}>create shopohlic account</button>
    </form>
   </div>
  </div>
 );
}
export default login;