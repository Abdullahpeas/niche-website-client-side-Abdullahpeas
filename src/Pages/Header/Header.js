import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';


const Header = () => {
    const { user, handleLogout } = useAuth();
    return (
        <div>

            <Navbar variant="light" bg="dark" collapseOnSelect expand="lg" sticky="top">
                <Container>

                    <Navbar.Brand >
                        <h4 class="text-white">Flying <span className="logo">Zone</span></h4>
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link style={{ color: "white" }} as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link style={{ color: "white" }} as={Link} to="/moreDrone">Explore More</Nav.Link>

                        {
                            user?.email && <Nav.Link style={{ color: "white" }} as={Link} to="/dashboard">Dashboard</Nav.Link>
                        }

                        {
                            user?.email && <span> {user?.displayName}</span>
                        }

                        {user?.email ?
                            <button className="btn btn-danger text-center" onClick={handleLogout} >Log out</button> :
                            <Nav.Link style={{ color: "white" }} as={Link} to="/register">Sing up</Nav.Link>}





                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
};

export default Header;