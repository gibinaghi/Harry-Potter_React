import React from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
import './navbar.css';

const Menu = () => (
    <Navbar className="navbar" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/"></Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/contacto">Characters</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
)
export default Menu; 