import React, { Component } from 'react';
import classes from './App.css';
import {BrowserRouter,Switch,Link,Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Checkout from './Component/Checkout/Checkout';
class App extends Component {
  
  render() {
    return (
    <BrowserRouter>
      <div className={classes.App}>
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
            </Route>
          <Route path="/login">
            
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
}
export default App;
