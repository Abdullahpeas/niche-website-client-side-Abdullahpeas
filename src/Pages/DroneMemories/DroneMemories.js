import React from 'react';
import image from '../../images/extrasection/extra.jpg';
import './DroneMemories.css';
const DroneMemories = () => {
    return (
        <>
            <div className="row mt-5 container mx-auto">
                <h2>Get special memories with <span className="dron-spane">Drone</span></h2>
                <div className="col-md-6 mt-5">
                    <img className="img-fluid memories-img" src={image} alt="" />
                </div>
                <div className="col-md-6 mt-5">
                    <p>We will never get to the flying car era.We will get to the era where we get flying drones that haul people, though.The Iranians have shot down drones.They tried to destroy the Saudi oil fields.They tried to storm our embassy.So, when my Democratic friends say we need appeasement, well appeasement hasn't worked. And I think that we've learned, with respect to Iran, that weakness invites the wolves.The use of drones is rapidly transforming the way we go to war.On the battlefield, a squad leader can receive real-time data from a drone that enables him to view the landscape for miles in every direction, dramatically expanding the capabilities of what would normally have been a small and isolated unit.</p>
                </div>
            </div>
        </>
    );
};

export default DroneMemories;