import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Product.css';



const Product = (props) => {
    AOS.init({ duration: 2000 });
    const { _id, name, img, desc, price } = props.product;

    const history = useHistory();

    const handleBuyNow = () => {

        history.push('/detail')


    }

    return (
        <div>
            <div data-aos="zoom-in-down" className="card card-style mx-auto w-100" style={{ width: " 18rem" }}>
                <img src={img} className="card-img-top" height="270" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h5 className="card-title">{price}</h5>
                    <p className="card-text">{desc}</p>
                </div>


                <Link to={`/detail/${_id}`}>
                    <button onClick={handleBuyNow} className="btn btn-primary mb-5 ">Buy Now</button></Link>
            </div>
        </div>
    );
};

export default Product;

