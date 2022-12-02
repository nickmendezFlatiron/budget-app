import React from 'react'
import GoalsCard from './GoalsCard';
import TransactionFilters from '../transactions/TransactionFilters';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'react-circular-progressbar/dist/styles.css';

const Budget = () => {
  return (
    <div className='bg-dark text-light vh-85'>
      <Container className='py-4'>
        <Row className="bg-black p-2 rounded text-center">
          <Col  className='bg-dark mx-2'>
            PIE CHART HERE 
          </Col>
          <Col  className='bg-dark mx-2'>
            <h1>Budget: </h1>
            <Row>Expenses:</Row>
            <Row>Expenses:</Row>
            <Row>Expenses:</Row>
          </Col>
        </Row>
        <Row xs={1} lg={2} className='bg-black mt-2 py-2'>
          <Col>
            col
          </Col>
          <div>
          <h2 className='text-warning'>Goals</h2>
          <Col className="goal-container">
            <GoalsCard />
            <GoalsCard />
            <GoalsCard />
            <GoalsCard />
            <GoalsCard />
            <GoalsCard />
            <GoalsCard />
          </Col>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Budget