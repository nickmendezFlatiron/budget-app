import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Homepage = () => {
  return (
    
      <div className="bg-dark text-light">
        <Container>
          <Row className="pt-5" xs={1} md={2}>
            <Col>
              <h1>Budget App</h1>
              <br/>
              <h4>Improve your spending habits with 5 minutes a day</h4>
            </Col>
          </Row>
        </Container>
      </div>

  )
}

export default Homepage