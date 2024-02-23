import React from "react";
import { useState } from 'react';
import "./RadioButton.css";


function RadioButton (props){
  

   return(
    <div>
      <label>
        <input type="radio" value="Pickup" checked={props.type === 'Pickup'} onChange={props.handleChange} />
        Pickup
      </label>
      <br />
      <label>
        <input type="radio" value="Delivery" checked={props.type === 'Delivery'} onChange={props.handleChange} />
        Delivery
      </label>
    </div>
    )
    
   }


export default RadioButton