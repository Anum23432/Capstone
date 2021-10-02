import React from 'react';
import logo1 from './images/sam2.jpg';
import logo2 from './images/sam3.jpg';
import logo3 from './images/sam4.png';
import logo4 from './images/sam5.jpg';
import {useHistory} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Samsung() {
    let history = useHistory();
    return(
        <>
        <h2>Samsung Mobile's Reviews</h2>
        <div className="cardItems"><br/>
        
        
  <Card style={{ width: '16rem',boxShadow:'0 0 4.5px 0 grey' }}>
  <Card.Img variant="top" src={logo1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button onClick = {() => history.push('/Details')} variant="primary">View More!!</Button>
  </Card.Body>
</Card><br/>
  <Card style={{ width: '16rem',boxShadow:'0 0 4.5px 0 grey' }}>
  <Card.Img variant="top" src={logo2} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button onClick = {() => history.push('/Details')} variant="primary">View More!!</Button>
  </Card.Body>
</Card> <br/>
<Card style={{ width: '16rem',boxShadow:'0 0 4.5px 0 grey' }}>
  <Card.Img variant="top" src={logo3} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button onClick = {() => history.push('/Details')} variant="primary">View More!!</Button>
  </Card.Body>
</Card><br/>
<Card style={{ width: '16rem',boxShadow:'0 0 4.5px 0 grey' }}>
  <Card.Img variant="top" src={logo4} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button onClick = {() => history.push('/Details')} variant="primary">View More!!</Button>
  </Card.Body>
</Card>
</div>
        <Button style={{marginLeft:"46%"}} onClick = {() => history.push('/Home')}>Back to Home</Button>
        </>
    )
}

export default Samsung;