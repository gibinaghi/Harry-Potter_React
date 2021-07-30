import React from 'react';
import icon from './icon.jpg';
import './intro.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Intro = ({titulo}) => {
    return (
    <header>
        <Container>
            <Row>
                <Col xs={12} sm={4}>
                    <img className="icon" src={icon}></img>
                </Col>
                <Col className="texto" xs={12} sm={8}>
                    <h1> {titulo} </h1>
                    <p className="texto1"> Math teacher - Web developer </p>
                </Col>
            </Row>
        </Container> 
    </header>
    )
}

export default Intro; 