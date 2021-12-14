import React from 'react';
import { Carousel, Nav } from 'react-bootstrap';
import banner1 from '../../images/banner/pr.jpg';
import banner2 from '../../images/banner/22.jpg';
import banner3 from '../../images/banner/pr2.jpg';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {

    return (
        <div >


            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <Nav.Link as={Link} to="/moreDrone">
                            <button className="btn btn-danger">More Drone</button></Nav.Link>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <Nav.Link as={Link} to="/moreDrone">
                            <button className="btn btn-danger">More Drone</button></Nav.Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <Nav.Link as={Link} to="/moreDrone">
                            <button className="btn btn-danger">More Drone</button></Nav.Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;