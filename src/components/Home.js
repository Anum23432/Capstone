import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from './images/ap1.jpg';
import logo2 from './images/ap5.jpg';
import logo3 from './images/ap7.jpg';
import logo4 from './images/ap2.jpg';
import {useHistory} from "react-router-dom";
import Animation from './Animation';




function Home() {
    let history = useHistory();
    return(
        <>
        <h2>Before Buy Check..</h2><br/><br/>
        <div className="carousel"style={{width:'50%',marginLeft:'26%'}}>
<Carousel fade >
  <Carousel.Item>
     <img
      className="d-block w-100"
       src={logo1}
      alt="First slide"
      
    /> 
    <Carousel.Caption>
      <h3 onClick = {() => history.push('/Apple')}>Apple Mobiles Reviews</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo2}
      alt="Second slide"
     
    />

    <Carousel.Caption>
      <h3  onClick = {() => history.push('/Huawei')}>Huawei Mobiles Reviews</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo3}
      alt="Third slide"
      
    />

    <Carousel.Caption>
      <h3 onClick = {() => history.push('/Oppo')}>Oppo Mobiles Reviews</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo4}
      alt="fourth slide"
      
    />

    <Carousel.Caption>
      <h3 onClick = {() => history.push('/Samsung')}>Samsung Mobiles Reviews</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
<Animation/>

</>
    )
}

export default Home;