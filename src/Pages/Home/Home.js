import React from 'react';
import Banner from '../Banner/Banner';
import DroneMemories from '../DroneMemories/DroneMemories';
import Products from '../Products/Products';
import ShowReview from '../ShowReview/ShowReview';




// const data = [
//     {
//         name: "DJI Air 2S", price: 440, desc: "Drone photography allows images and audio/video to be captured that might not be otherwise possible for human photographers and videographers. That capacity can be enabled by the flight abilities of drones",
//         img: "https://i.ibb.co/3ChhByy/d1.jpg"
//     },
//     {
//         name: "Mavic 2 Zoom", price: 500, desc: "There are many different drone sizes and designs, including fixed-wing with propeller or jet engine, as well as many rotor-based designs. ",
//         img: "https://i.ibb.co/0QrwSGh/d2.jpg"
//     },
//     {
//         name: " Mini SE", price: 600, desc: "Fixed-wing craft often have an edge on altitude and endurance but lack the maneuverability of rotor-based craft. Because they are often chosen for military operations. ",
//         img: "https://i.ibb.co/xLK1TzD/d3.jpg"
//     },
//     {
//         name: "Autel EVO II", price: 360, desc: "For all intents and purposes, drones equipped with computer vision, face recognition, object recognition and other tracking technologies are flying robots. ",
//         img: "https://i.ibb.co/HNjdTnf/d4.jpg"
//     },
//     {
//         name: "PowerVision PowerEgg X", price: 890, desc: "Drone photography is used in surveillance to gain intelligence against enemy targets by government agencies in war and for competitive intelligence by businesses. ",
//         img: "https://i.ibb.co/Bcq7CGH/d5.jpg"
//     },
//     {
//         name: "Parrot Anafi FPV", price: 1200, desc: "It is used in journalism and also law enforcement, as well as spying. ",
//         img: "https://i.ibb.co/dbtWd6X/d6.jpg"
//     },
//     {
//         name: "DJI Phantom 4 Pro", price: 1560, desc: "Drone photography often enables a first-person view that would normally be impossible to achieve.",
//         img: "https://i.ibb.co/LJqWDt0/dag7.jpg"
//     },
//     {
//         name: "The Freefly Alta 8", price: 2000, desc: "Their increasing presence in the environment is enabled by the combination of networking, robotics and artificial intelligence ",
//         img: "https://i.ibb.co/zQ0N8V2/dag88.jpg"
//     },
//     {
//         name: "Yuneec Tornado H920", price: 3000, desc: "As long as drones are under 35kg, no special permits are required by private citizens looking to use drones non-commercially.",
//         img: "https://i.ibb.co/3CNGJtL/dag9.jpg"
//     },
//     {
//         name: "LanLan DJI S1000", price: 16000, desc: "For commercial purposes, the Federal Aviation Administration requires a certificate of authorization for drone use.",
//         img: "https://i.ibb.co/cb5mkdp/d10.jpg"
//     },
// ]


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ShowReview></ShowReview>
            <DroneMemories></DroneMemories>

        </div>
    );
};

export default Home;