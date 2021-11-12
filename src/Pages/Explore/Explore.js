import React, { useEffect, useState } from 'react';
import ExploreProduct from '../ExploreProduct/ExploreProduct';

const Explore = () => {
    const [explore, setExplore] = useState([]);
    useEffect(() => {
        fetch('https://desolate-chamber-46728.herokuapp.com/explore')
            .then(res => res.json())
            .then(data => setExplore(data))
    }, [])
    return (
        <div className="container">

            <h3 className="m-3">All Drone Collection</h3>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    explore.map(exp => <ExploreProduct
                        key={exp._id}
                        exp={exp}
                    ></ExploreProduct>)
                }
            </div>
        </div>
    );
};

export default Explore;