import axios from "axios";
import { useState, useEffect } from "react";

function Admin() {
    const [orderList, setOrderList] = useState([]);

    const fetchOrders = () => {
        axios({
            method: 'GET',
            url: '/api/order'
        }).then(response => {
            setOrderList(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log('Error getting orders', error);
        });
    }

    useEffect(fetchOrders, []);

    return (<table>
        <thead><tr><th>Name</th><th>Time Order Placed</th><th>Type</th><th>Cost</th></tr></thead>
        <tbody>
            {orderList.map(order => <tr key={order.id}><td>{order.customer_name}</td><td>{order.time}</td><td>{order.type}</td><td>{order.total}</td></tr>)}
        </tbody>
    </table>);
}

export default Admin;