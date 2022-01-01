import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ShowReview.css';

import ShowRating from '../ShowRating/ShowRating';
const ShowReview = () => {
    AOS.init({ duration: 2000 });
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://desolate-chamber-46728.herokuapp.com/showReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div data-aos="fade-up-left">
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