import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';

const ExpenseBudget = ({selectedCategory, timeFrame}) => {
  const displayTime = timeFrame === "Custom" ? timeFrame : `${timeFrame}ly`;

  return (
    <div className="rounded rounded-3 bg-black bg-opacity-50 text-center">  
      <Row>
        <Col className='max-content'>
          <p className="text-warning text-center text-capitalize">Expenses</p>
          <h1 className='text-center'>$1300.24</h1>
        </Col>
        <Col className='max-content'>
          <p className="text-warning text-capitalize text-center">Budget</p>
          <h1 className='text-center'>$2000</h1>
        </Col>
      </Row>
    </div>
  )
}

export default ExpenseBudget