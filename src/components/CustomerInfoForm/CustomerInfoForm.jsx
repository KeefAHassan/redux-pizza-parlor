import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import RadioButton from '../RadioButton/RadioButton';
import Header from '../Header/header';
import "./CustomerInfoForm.css";

function CustomerInfoForm (){

    const history = useHistory();
    const [customer_name, set_customer_name] = useState ('');
    const [street_address, set_street_address] = useState ('');
    const [city, setCity] = useState ('');
    const [zip, setZip] = useState ('');
    const [type, setType] = useState ('Pickup');
    

    const dispatch = useDispatch ();

    function handleChange(event) {
        console.log(event.target.value);
        setType(event.target.value);
      }

    return (
       <>
            <Header />
            <div className='CustomerInfo'>
            <h2>Step 2: Customer Information</h2>
            <form className='Form'>
            <input
                required
                placeholder = "Name"
                value = {customer_name}
                onChange = {(event) => set_customer_name(event.target.value)}
            /><br></br>
            <span><input
                required
                placeholder = "Street Address" 
                value = {street_address}
                onChange = {(event) => set_street_address(event.target.value)}
            /></span><br></br>
            <input
                required
                placeholder = "City"
                value = {city}
                onChange = {(event) => setCity(event.target.value)}
            /><br></br>
            <input
                required
                placeholder = "Zip" 
                value = {zip}
                onChange = {(event) => setZip(event.target.value)}
            /><br></br>
             <div>
            <RadioButton type={type} handleChange={handleChange}/>
            </div>
            <br></br>
            <div className='NextButtonSection'>
            <section className='NextButton'><button onClick={() => {
                dispatch({
                    type: "USERINFO_ADD",
                    payload: {customer_name, street_address, city, zip, type},
                });
                history.push('/checkout');
            }}>Next
            </button>
            </section>
            </div>

            </form>
            </div>

        </>
    );
}

export default CustomerInfoForm;
