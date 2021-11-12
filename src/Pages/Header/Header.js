import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';


const Header = () => {
    const { user, handleLogout } = useAuth();
    return (
        <div>

            <Navbar variant="light" bg="light" collapseOnSelect expand="lg" sticky="top">
                <Container>

                    <Navbar.Brand >
                        <h4>Flying <span className="logo">Zone</span></h4>
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/moreDrone">More Drone</Nav.Link>

                        {
                            user?.email && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        }

                        {
                            user?.email && <span> {user?.displayName}</span>
                        }

                        {user?.email ?
                            <button className="btn btn-danger" onClick={handleLogout}>Log out</button> :
                            <Nav.Link as={Link} to="/register">Sing up</Nav.Link>}





                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
};

export default Header;