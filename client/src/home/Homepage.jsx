import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import homepageImage from "../assets/homepage-image.png";
import textLogo from "../assets/text-logo.png";

const Homepage = () => {
  return (
    
      <div className="bg-dark text-light">
        <Container>
          <Row className="pt-5" xs={1} md={2}>
            <Col>
              <img src={textLogo} alt="Spend Better text logo" className='homepage-image'/>
              <br/>
              <h4>Improve your spending habits with 5 minutes a day</h4>
            </Col>
            <Col>
              <img src={homepageImage} alt="image" className='homepage-image'/>
            </Col>
          </Row>
        </Container>
      </div>

  )
}

export default Homepage