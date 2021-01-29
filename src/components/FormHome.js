import React from "react";
import { useHistory } from 'react-router-dom';



export default function FormHome(props) {

    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props

    const history = useHistory();

    const routeToShop = () => {
        console.log(history);
        history.push("/order-pizza");
    };

    return (

         <div className= 'home-wrapper'>
             <img
             className="home-image"
             src= "https://cheeseboardcollective.coop/wp-content/uploads/2016/11/banner-pizza.jpg"
             alt=""
             />
        
        <button onClick={routeToShop} className= "md-button shop button">
           Place Order Here
        </button>
          </div>


    )

}