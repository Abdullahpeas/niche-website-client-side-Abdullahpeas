import React from 'react';
import Rating from 'react-rating';
import './ShowRating.css';
const ShowRating = (props) => {
    const { displayName, email, reviews, rating } = props.review;
    return (
        <div>
            <div className="col">
                <div className="card mt-3 custom-style">
                    <div className="card-body">

                        <h5 className="card-title">{displayName}</h5>
                        <h5 className="card-title">{email}</h5>
                        <h5 className="card-title">feedback:{reviews}</h5>

                        <Rating
                            initialRating={rating}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly></Rating>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ShowRating;