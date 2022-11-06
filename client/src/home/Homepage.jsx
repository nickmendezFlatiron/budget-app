import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import SellingPoints from './SellingPoints'
import homepageImage from "../assets/homepage-image.png";
import textLogo from "../assets/text-logo.png";

const Homepage = () => {
  return (
    
      <div className="bg-dark text-light pb-5">
        <Container>
          <Row className="pt-5 justify-content-between" xs={1} md={2}>
            <Col className="pb-">
              <img src={textLogo} alt="Spend Better text logo" className='homepage-image'/>
              <br/>
              <br/>
              <h3>Create better spending habits with 5 minutes a day.</h3>
              <br/>
              <Button variant="warning" sz="lg" className="text-dark fw-bold">START BUDGETING TODAY</Button>
            </Col>
            <Col >
              <img src={homepageImage} alt="image" className='homepage-image'/>
            </Col>
          </Row>   
            <SellingPoints />
        </Container>
      </div>

  )
}

export default Homepage