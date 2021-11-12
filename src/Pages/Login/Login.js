import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';


const Login = () => {
    const { handleUserLogin, isLoading, setIsLoading } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const location = useLocation();
    const history = useHistory();

    const onSubmit = (data) => {
        handleUserLogin(data.email, data.password, location, history);

        reset()
        console.log(data);
    };

    return (
        <div className='login-section'>
            <form onSubmit={handleSubmit(onSubmit)}>


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
                    value="Login"
                />
            </form><br />
            <Link className="link-style" to="/register">
                New to website?Please register
            </Link>
        </div>
    );
};

export default Login;