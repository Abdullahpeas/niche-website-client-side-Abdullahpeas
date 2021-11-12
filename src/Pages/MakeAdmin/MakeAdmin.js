import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css';
const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const [email, setEmail] = useState('');

    const onSubmit = data => {
        const user = email;
        fetch("https://desolate-chamber-46728.herokuapp.com/users/admin", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                setEmail(data)
                reset()
            })
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-3 mb-3">
                <input
                    className="input-field"
                    name="email"
                    placeholder="Email"
                    type="email"
                    {...register("email", { required: true })}
                />
                <br />

                <input
                    className="submit-btn btn btn-danger mt-3"
                    type="submit"
                    value="Make Admin"
                />
            </form>
        </div>
    );
};

export default MakeAdmin;