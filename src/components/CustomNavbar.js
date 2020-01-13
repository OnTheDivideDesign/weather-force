import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import { Link } from 'react-router-dom';

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">WeatherForce</Link>
                        </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} to="/">
                            Home
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} to="/about">
                            About
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} to="/weather">
                            Weather
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} to="/contact">
                            Contact
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}