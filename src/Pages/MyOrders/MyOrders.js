import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`https://desolate-chamber-46728.herokuapp.com/myOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])


    const handleDelete = (id) => {

        fetch(`https://desolate-chamber-46728.herokuapp.com/deleteOrder/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Are you sure to delete this order!')
                    const remainingOrders = orders.filter(order => order._id !== id);
                    setOrders(remainingOrders);

                }

            })


    }

    return (
        <div>
            <h3 className="text-white">Your Order:{orders.length}</h3>
            {
                orders.map(order => <div className="col container">
                    <div className="card mx-auto mt-3 rounded mb-5">
                        <div className="card-body">
                            <h5 className="card-title">{order?.name}</h5>
                            <h5>${order?.price}</h5>
                            <p className="card-text">Desc:{order?.desc}</p>
                            <p className="card-text">Email:{order?.email}</p>
                            <p className="card-text">Phone:{order?.phone}</p>
                            <p className="card-text">Address:{order?.address}</p>
                            <p className="card-text">Status:{order?.status}</p>

                            <button onClick={() => handleDelete(order._id)} className="btn btn-warning m-2 mx-auto w-10">Cancel Order</button>

                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyOrders;