import React, { useState, useEffect } from "react";
import {Route, Link, Switch } from 'react-router-dom'
import axios from 'axios';
import * as yup from 'yup';

import FormHome from "./components/FormHome";


const initalFormValues = {
  size: '',
sauce:'',
instructions:'',

sausage: false,
peperoni: false,
cheese: false,
onions: false,
mushrooms: false,
}

const initalFormErrors = {
  size: '',
  sauce:'',
  instructions:'',
  
}

const initalOrder = []
const initalDisabled = true



const App = () => {
const [orders, setOrders] = useState(initalOrder)
const [formValues, setFormValues] = useState(initalFormValues)
const [formErrors, setFormErrors] = useState(initalFormErrors)
const [disabled, setDisabled] = useState(initalDisabled)


  return (

    <div className='container'>
    <header><h1>Jonathan's Pizza Shack</h1></header>

    <FormHome
    values={formValues}
    errors={formErrors}
      
    />
      
      {
        orders.map(order => {
          return([])
        })
      }

   </div> 
  );
};
export default App;
