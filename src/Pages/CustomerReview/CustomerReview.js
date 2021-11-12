import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
const CustomerReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const [reviews, setReviews] = useState('');
    const { user } = useAuth();

    const onSubmit = data => {

        fetch('https://desolate-chamber-46728.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                reset()
            })
        console.log(data)
    }

    return (
        <div>
            <h3 className="mt-5">Give your review</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                {user?.email && <input className="d-flex m-3 mx-auto" defaultValue={user?.email} {...register("email", { required: true })} />}


                {user?.displayName && <input className="d-flex m-3 mx-auto" defaultValue={user?.displayName} {...register("displayName", { required: true })} />}

                <input type="number" placeholder='type number 0-5' className="d-flex m-3 mx-auto"  {...register("rating", { required: true })} />

                <textarea className="d-flex m-3 mx-auto" placeholder='Give your feedback'  {...register("reviews", { required: true })} />

                <input className="btn btn-success" type="submit" />

            </form>

        </div>
    );
};

export default CustomerReview;