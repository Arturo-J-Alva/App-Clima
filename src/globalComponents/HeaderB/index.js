import React/* , { useState }  */from 'react'
import { Navbar, Nav/* , Form, FormControl, Button */ } from 'react-bootstrap'
import './index.css'
import { Link } from 'react-router-dom'


const HeaderB = (props) => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" >
            <Link to="/" className='text-light margen1'>APP CLIMA</Link>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="margen2">
                    <Link to="/ciudad" className='text-light mr-4 '>POR CIUDAD</Link>
                    <Link to="/map" className='text-light mr-4 '>POR MAPA</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default HeaderB
