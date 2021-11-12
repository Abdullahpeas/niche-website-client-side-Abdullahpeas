import React, { useEffect, useState } from 'react';
import './ShowReview.css';

import ShowRating from '../ShowRating/ShowRating';
const ShowReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://desolate-chamber-46728.herokuapp.com/showReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h3 className="mt-5 fw-bold">Customer <span className="review-style">Reviews</span></h3>
            <div className="row row-cols-1 row-cols-md-2 g-4 container mx-auto">
                {
                    reviews.map(review => <ShowRating
                        review={review}
                    ></ShowRating>)
                }
            </div>
        </div>
    );
};

export default ShowReview;