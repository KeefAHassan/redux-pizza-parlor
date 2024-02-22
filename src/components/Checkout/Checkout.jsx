import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from 'react-router-dom';

function Checkout() {
    const history = useHistory();
    const dispatch = useDispatch();
    const userInfo = useSelector(store => store.userInfo);
    const cart = useSelector(store => store.cart);

    const checkout = () => {
        let total = 0; // TODO: Figure out how to do the total
        let newOrder = {...userInfo, total};
        let pizzaArray = cart.map(pizza => {return {id: pizza.id, quantity: 1};} );
        newOrder.pizzas = pizzaArray;
        axios({
            method: 'POST',
            url: '/api/order',
            data: newOrder
        }).then(response => {
            // clear reducers
            dispatch({type: 'CART_CLEAR'});
            dispatch({type: 'USERINFO_CLEAR'});
            // navigate user back to home page
            history.push('/');
        }).catch(error => {
            console.log('Error sending order', error);
        });
    }

    return (<>
        <h2>Step 3: Checkout</h2>
        {/* Display user info */}
        <p>{userInfo.customer_name}</p>
        <p>{userInfo.street_address}</p>
        <p>{userInfo.city} {userInfo.zip}</p>
        <p>{userInfo.type}</p>
        {/* Display pizzas */}
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(pizza => (<tr key={pizza.id}><th>{pizza.name}</th><th>{pizza.price}</th></tr>))}
            </tbody>
        </table>
        {/* TODO: Figure out how to do the total */}
        <h3>Total: </h3>
        <button onClick={checkout}>Checkout</button>
    </>);
}

export default Checkout;