import React, { Component } from 'react';
import classes from './App.css';
import {BrowserRouter,Switch,Link,Route} from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
      <div className={classes.App}>
       <Switch>
         <Route path="/checkout"><h1>checkout page!!</h1></Route>
         <Route path="/login"><h1>login page!!</h1></Route>
         <Route path="/"><h1>home Page!!</h1></Route>
       </Switch>
      </div>
      </BrowserRouter> 
      
    );
    
  }
}
export default App;
