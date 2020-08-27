import React from 'react';
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <Navbar className="nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">PUDEMY</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">PUDEMY for business</Nav.Link>
                        <Nav.Link href="#pricing">Teach on PUDEMY</Nav.Link>
                        <NavDropdown title="Catagories" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Web Development</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Finance</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Design</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">All Courses</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <input className="input" type="search" placeholder="Search for anything.." name="" id="" />
                        <Button variant="success"> Search </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;