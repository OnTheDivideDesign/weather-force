import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
export default class Home extends Component {
    render(){
        return(
            <Container>
                <Jumbotron>
                    <h1>Welcome to WxForce.io</h1>
                    <p>This is a simple ReactJS web app to grab and display basic NWS weather information from an API!</p>
                </Jumbotron>
                <Link to="/about">
                    <Button bsStyle="primary">About</Button>
                </Link>
            </Container>
        )
    }
}