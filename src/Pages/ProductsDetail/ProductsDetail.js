import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const ProductsDetail = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [detail, setDetail] = useState({});
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        const url = `https://desolate-chamber-46728.herokuapp.com/detail/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [])



    const onSubmit = data => {
        data.status = "Pending";
        const url = 'https://desolate-chamber-46728.herokuapp.com/detail';
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    alert('Order Processed successfully')
                    reset();
                }
            })

        console.log(data)
    }



    return (
        <div className="container">
            <h2 className="my-3">Order Place</h2>
            <div className="row">

                <div className="col-md-6">
                    <div className="col container">
                        <div className="card">
                            <img src={detail?.img} className="img-fluid img-style" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{detail?.name}</h5>
                                <h5>${detail?.price}</h5>
                                <p className="card-text">{detail?.desc}</p>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-6">


                    <form onSubmit={handleSubmit(onSubmit)}>



                        {user?.email && <input className="d-flex m-3 mx-auto" defaultValue={user?.email} {...register("email", { required: true })} />}


                        {user?.displayName && <input className="d-flex m-3 mx-auto" defaultValue={user?.displayName} {...register("displayName", { required: true })} />}


                        {detail?.name && <input className="d-flex m-3  mx-auto" defaultValue={detail?.name} {...register("name")} />}

                        {detail?.desc && <input className="d-flex m-3 mx-auto p-3 " defaultValue={detail?.desc} {...register("desc")} />}

                        {detail?.price && <input className="d-flex m-3 mx-auto" defaultValue={detail?.price} {...register("price")} />}

                        <input required="true" className="d-flex m-3 mx-auto" placeholder="phone" {...register("phone")} />


                        <input required="true" className="d-flex m-3 mx-auto" placeholder="addrress" {...register("address")} />


                        <input className="btn btn-success" type="submit" />

                    </form>


                </div>
            </div>
        </div>
    );
};

export default ProductsDetail;