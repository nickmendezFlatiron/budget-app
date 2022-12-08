import React from 'react';
import {useNavigate} from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import SellingPoints from './SellingPoints'
import homepageImage from "../assets/homepage-image.png";
import textLogo from "../assets/text-logo.png";

const Homepage = ({isAuthenticated}) => {
  const navigate = useNavigate()
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
              { !isAuthenticated && 
                <Col className="d-flex gap-3">
                  <Button onClick={() => navigate('/login')} variant="warning" sz="lg" className="text-dark fw-bold shadow">CREATE AN ACCOUNT</Button>
                  <Button onClick={() => navigate('/login')} variant="light" sz="lg" className="text-dark fw-bold">LOGIN</Button>
                </Col>
              }
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