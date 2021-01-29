import React, { useState, useEffect } from "react";
import {Route, Link, Switch } from 'react-router-dom'

import FormHome from "./components/FormHome";

const App = () => {
  return (

    <div className='container'>
    <header><h1>Friends App</h1></header>

    <FormHome
      
    />
      





     {/* <div className="App">
    <nav>
      <h1 className="store-header">Pizza to go</h1>
    <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/order-pizza">Order here</Link>

    </div>
    </nav>

    <Switch>
      <Route path={"/components/FormHome"}>
      
      </Route>
   </Switch>  */}

   </div> 
  );
};
export default App;
