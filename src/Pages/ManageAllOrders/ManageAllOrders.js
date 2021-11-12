import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [manageAllOrders, setManageAllOrders] = useState([]);
    useEffect(() => {
        fetch("https://desolate-chamber-46728.herokuapp.com/allOrders")
            .then(res => res.json())
            .then(data => setManageAllOrders(data))
    }, [manageAllOrders])



    const handleApprovedBtn = id => {
        fetch(`https://desolate-chamber-46728.herokuapp.com/status/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(manageAllOrders)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    alert('Order has been Shipped')
                }
            })
    }



    const handleDeleteBtn = id => {
        fetch(`https://desolate-chamber-46728.herokuapp.com/orderDelete/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Are you sure to delete this Order!')
                    const remainingOrder = manageAllOrders.filter(manageAllOrder => manageAllOrder._id !== id);
                    setManageAllOrders(remainingOrder);

                }
            });

    };

    return (
        <div>
            <h3>All Orders : {manageAllOrders.length}</h3>

            {
                manageAllOrders.map(manageAllOrder => <div className="card w-75 mx-auto mt-3 rounded mb-5">

                    <h3>Name:{manageAllOrder?.name}</h3>
                    <h3>Price:{manageAllOrder?.price}</h3>
                    <p>Desc:{manageAllOrder?.desc}</p>
                    <p>Email:{manageAllOrder?.email}</p>
                    <p>Username:{manageAllOrder?.displayName}</p>
                    <p>Address:{manageAllOrder?.address}</p>
                    <p>Phone:{manageAllOrder?.phone}</p>
                    <p>Status:{manageAllOrder?.status}</p>

                    <button onClick={() => handleApprovedBtn(`${manageAllOrder?._id}`)} className="btn btn-danger m-2 mx-auto w-10">Approved</button>

                    <button onClick={() => handleDeleteBtn(manageAllOrder?._id)} className="btn btn-danger m-2 mx-auto w-10">Delete</button><br />

                </div>
                )
            }
        </div>
    );
};

export default ManageAllOrders;