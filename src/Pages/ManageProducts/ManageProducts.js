import React, { useEffect, useState } from 'react';


const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://desolate-chamber-46728.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])


    const handleDeleteBtn = id => {
        fetch(`https://desolate-chamber-46728.herokuapp.com/deleteProducts/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Are you sure to delete this Product!')
                    const remainingOrder = products.filter(product => product._id !== id);
                    setProducts(remainingOrder);

                }
            });

    };

    return (
        <div>

            {
                products.map(pd => <div class="card mx-auto mt-5 w-75 mb-5" style={{ width: " 18rem" }} >
                    <img src={pd?.img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{pd?.name}</h5>
                        <p class="card-text">{pd?.desc}</p>
                    </div>



                    <button onClick={() => handleDeleteBtn(pd?._id)} className="btn btn-danger m-2 mx-auto w-10">Delete</button><br />
                </div>
                )
            }
        </div>
    );
};

export default ManageProducts;
