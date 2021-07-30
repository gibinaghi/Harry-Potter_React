import React from 'react';
import Card from 'react-bootstrap/Card';
import './personaje.css';

const Personaje = ({index, personaje}) => {
    return(
        <Card className="text-center" border="danger" style={{ width: '15rem' }} key={index} >
            <Card.Img className="imagen" variant="top" src={personaje.image} />
            <Card.Body>
                <Card.Title className="titulo">{personaje.name}</Card.Title>
                <Card.Text className="texto1">{personaje.house}</Card.Text>
            </Card.Body>
        </Card>
        
    );
}

export default Personaje;
