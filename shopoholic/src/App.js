import React, { useEffect } from 'react';
import classes from './App.css';
import {BrowserRouter,Switch,Link,Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Checkout from './Component/Checkout/Checkout';
import Login from './Component/Login/Login';
import { useStateValue } from './Component/StateProvider/StateProvider';
import {auth} from './Firbase';
const App =()=> {

    const [{user},dispatch]= useStateValue();
  //useeffect
  useEffect(()=>{
 const unsubscribed = auth.onAuthStateChanged((authuser)=>{
  if(authuser)
  {
  //loggedin
  dispatch({
    type:"SET_USER",
    user:authuser
  })
  }
  else{
    //loggedout
    dispatch({
      type:"SET_USER",
      user:null
    })
  }});

  return()=>{
    unsubscribed();
  };
  },[]);
console.log(user);
    return (
    <BrowserRouter>
      <div className={classes.App}>
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
            </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter> 
      
    );
    
  }
export default App;
