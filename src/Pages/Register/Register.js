import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import './Register.css';



const Register = () => {
    const { handleUserRegister } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory();


    const onSubmit = (data) => {
        handleUserRegister(data.email, data.password, data.name, history);
        reset()
        console.log(data);
    };
    return (
        <div className="register-section">
            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    className="input-field"
                    name="name"
                    placeholder="Name"
                    {...register("name", { required: true })}
                />
                <br />

                <input
                    className="input-field"
                    name="email"
                    placeholder="Email"
                    type="email"
                    {...register("email", { required: true })}
                /><br />

                <input
                    className="input-field"
                    name="password"
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                />
                <br />

                <input
                    className="submit-btn btn btn-success mt-3"
                    type="submit"
                    value="Register"
                />
            </form><br />
            <Link className="link-style" to="/login">
                Already register?Please login
            </Link>
        </div >
    );
};

export default Register;