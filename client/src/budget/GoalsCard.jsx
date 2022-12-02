import React from 'react'
import GoalsCardChart from './GoalsCardChart';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const GoalsCard = ({goal}) => {

  const categoryText = <small className="text-muted">Category</small>
  return (
    <Col className="bg-dark rounded rounded-4 my-1 ">
        <Row className="p-1 ">
          <Col xs="auto" className="text-start">
            <GoalsCardChart/>
          </Col>
          <Col className="d-flex align-items-center">
            <Card.Title>
              Goal Name
                <br/>
                {categoryText}
            </Card.Title>
          </Col>
          <Col className="d-flex align-items-center justify-content-end text-end">
            <Card.Title>
              Goal Amount
                <br/>
              Goal Date
            </Card.Title>
          </Col>
        </Row>
    </Col>
  )
}

export default GoalsCard