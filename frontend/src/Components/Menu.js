import React from 'react'
import { Link } from 'react-router-dom';

//import elements from React Bootstap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Menu = () => {
    return (

    //NAVBAR MENU
        <Navbar bg="light" expand="xl" style= {{ paddingLeft: 15 }} id="navbar">
            <Navbar.Brand href="#home">ITUNES SEARCH APP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link to="/"> 
                    <Nav.Link href="/">Home</Nav.Link>
                    </Link>
                <Link to="/myFavourites"> 
                    <Nav.Link href="/myFavourites">Favourites</Nav.Link>
                    </Link>
                 </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu