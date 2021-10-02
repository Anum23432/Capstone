import React from 'react';
import logo1 from './images/hu1.png';
import logo2 from './images/hu2.jpg';
import logo3 from './images/hu3.jpg';
import logo4 from './images/hu4.jpg';
import {useHistory} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function Huawei() {
    let history = useHistory();
    return(
        <>
        <h2>Huawei Mobiles Reviews</h2>
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

export default Huawei;