import React from 'react';
import './Project.css';
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap';
import luggage from '../../assets/images/luggage.png';
import snake from '../../assets/images/snake.ico';
import mor from '../../assets/images/mor.jpg';

export default class Projects extends React.Component {
    render() {
        return (
            <section className="projects-section container-fluid" id="projects">
                <h1 className="project-heading">Projects:</h1>
                <div className="card-div">
                
                <Card className="card" bg="light">
                    <Card.Img variant="top" className="card-image" src={luggage} />
                    <Card.Body>
                        <Card.Title>Travel4Brews</Card.Title>
                        <Card.Text>
                        This is a simple basic website on tours & travels ✈
                        </Card.Text>
                        <a href="https://ishangoyal13.github.io/Travel4Brews/"><Button variant="primary">Visit Website</Button></a>
                    </Card.Body>
                </Card>
        
                <Card className="card"  bg="light">
                    <Card.Img variant="top" src={snake} className="card-image" />
                    <Card.Body>
                        <Card.Title>Snake Game</Card.Title>
                        <Card.Text>
                            All time favourite Snake Game 🐍
                        </Card.Text>
                        <a href="https://ishangoyal13.github.io/Snake-Game/"><Button variant="primary">Play Game</Button></a>
                    </Card.Body>
                </Card>
                
                <Card className="card" bg="light">
                    <Card.Img variant="top" src={mor} style={{height:'16rem'}} />
                    <Card.Body>
                        <Card.Title>Sharks</Card.Title>
                        <Card.Text>
                        Created a mini project website based on shopping, music and entertainment stuff 😁
                        </Card.Text>
                        <a href="https://abhinandan323.github.io/Sharks/"><Button class="button">Visit Website</Button></a>
                    </Card.Body>
                </Card>
                
            </div>
                
            </section>
        );
    }
}