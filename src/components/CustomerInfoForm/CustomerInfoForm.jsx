import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function CustomerInfoForm (){

    const history = useHistory();
    const [customer_name, set_customer_name] = useState ('');
    const [street_address, set_street_address] = useState ('');
    const [city, setCity] = useState ('');
    const [zip, setZip] = useState ('');
    const [type, setType] = useState ('Pickup');
    

    const dispatch = useDispatch ();


    return (
        <>
        <section>
            <h2>Step 2: Customer Information</h2>
            <form>
            <input
                required
                placeholder = "Name"
                value = {customer_name}
                onChange = {(event) => set_customer_name(event.target.value)}
            />
            <input
                required
                placeholder = "Street Address" 
                value = {street_address}
                onChange = {(event) => set_street_address(event.target.value)}
            />
            <input
                required
                placeholder = "City"
                value = {city}
                onChange = {(event) => setCity(event.target.value)}
            />
            <input
                required
                placeholder = "Zip" 
                value = {zip}
                onChange = {(event) => setZip(event.target.value)}
            />
            <input
                required
                placeholder = "Pickup" //Need to update with radio button format
                value = {type}
                onChange = {(event) => setType(event.target.value)}
            
            />

            <button onClick={() => {
                dispatch({
                    type: "USERINFO_ADD",
                    payload: {customer_name, street_address, city, zip, type},
                });
                history.push('/checkout');
            }}>Next
            </button>

            </form>
            </section>

            <section>
                <div className = "radio">
                    <label>
                        <input type="radio" value="Pickup" checked={true} />
                            Pickup
                    </label>
                </div>
                <div className = "radio">
                    <label>
                        <input type="radio" value="Delivery"/>
                            Delivery
                    </label>
                </div>
            </section>
        </>
    );
}

export default CustomerInfoForm;
