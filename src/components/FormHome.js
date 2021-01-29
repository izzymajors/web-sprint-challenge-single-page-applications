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

      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
      const onChange = evt => {
        /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
      }


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
   
          
          
          <label>size
              <select
              onChange={onChange}
              //value={value.size}
              name='size'
              >
                  <option value=''>--select an option</option>
                  <option value=''>small</option>
                  <option value=''>medium</option>
                  <option value=''>Large</option>
                </select>
              </label>

             

             <div className='form-group checkboxes'>
                 <h4>Toppings</h4>

                 <label>sausage
                     <input
                     type='checkbox'
                     name='sausage'
                    // checked={value.sausage}
                     onChange={onChange}
                     />

                 </label>

                 <label>sausage
                     <input
                     type='checkbox'
                     name='sausage'
                    // checked={value.sausage}
                     onChange={onChange}
                     />

                 </label>

                 <label>peperoni
                     <input
                     type='checkbox'
                     name='peperoni'
                    // checked={value.sausage}
                     onChange={onChange}
                     />

                 </label>

                 <label>cheese
                     <input
                     type='checkbox'
                     name='sausage'
                    // checked={value.sausage}
                     onChange={onChange}
                     />

                 </label>

                 <label>onions
                     <input
                     type='checkbox'
                     name='onions'
                    // checked={value.sausage}
                     onChange={onChange}
                     />

                 </label>


             </div>
               </div>
    )

}