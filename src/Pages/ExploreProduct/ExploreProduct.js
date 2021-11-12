import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './ExploreProduct.css';

const ExploreProduct = (props) => {
    const { _id, name, img, desc, price } = props.exp;

    const history = useHistory();

    const handleBuyNow = () => {

        history.push('/detail')


    }
    return (
        <div>
            <div className="col container">
                <div className="card explore-style">
                    <img src={img} height='300px' alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h5>${price}</h5>
                        <p className="card-text">{desc}</p>
                        <Link to={`/detail/${_id}`}>
                            <button onClick={handleBuyNow} className="btn btn-primary">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreProduct;