import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/d1.jpg';
// import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

function Details() {
  
    return(
<>
<h1 style={{marginLeft:"40%"}}>REVIEWS</h1>

<div className="details" style={{marginLeft:'20%'}}>
    
<Card style={{width:'750px',display:'flex',justifyContent:'center',alignItem:"center",boxShadow:'0 0 4.5px 0 grey'}}>
   <img src={logo} style={{width:'699px',height:'350px'}} alt="phone" fluid/><hr/>
    <Card.Body>
        <Card.Title>Samsung Galaxy Z Flip3 5G</Card.Title><hr/>
      <Card.Text>
     <h6> NETWORK :</h6><p>GSM / CDMA / HSPA / EVDO / LTE / 5G</p>
     <h6>BATTERY Type :</h6> <p>Li-Po 3300 mAh, non-removable </p>
     <h6>Colors :</h6><p>Phantom Black, Green, Lavender, Cream, White, Pink, Gray</p>
     <h6>Price :</h6><p>Rs. 194,999.00</p>
      </Card.Text>
    </Card.Body>
  </Card><br/>
  
  <FloatingLabel controlId="floatingTextarea" label="Email" className="mb-3" style={{width:'750px',boxShadow:'0 0 4.5px 0 grey'}}>
    <Form.Control as="textarea" placeholder="Email" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingTextarea2" label="Comments" style={{width:'750px',boxShadow:'0 0 4.5px 0 grey'}}>
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
  </FloatingLabel><br/>
  <Button style={{marginLeft:'32%'}} variant="primary">Submit</Button>


</div><br/>
</>
    )
}

export default Details;