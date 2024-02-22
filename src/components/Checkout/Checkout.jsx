import { useSelector } from "react-redux";

function Checkout() {
    const userInfo = useSelector(store => store.userInfo);
    const cart = useSelector(store => store.cart);

    const checkout = () => {
        
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
                {cart.map(pizza => (<tr><th>{pizza.name}</th><th>{pizza.price}</th></tr>))}
            </tbody>
        </table>
        {/* TODO: Figure out how to do the total */}
        <h3>Total: </h3>
        <button onClick={checkout}>Checkout</button>
    </>);
}

export default Checkout;