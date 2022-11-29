import React from 'react'
import BudgetProgress from './BudgetProgress';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';



const ExpenseBudget = ({selectedCategory, timeFrame}) => {
  const displayTime = timeFrame === "Custom" ? timeFrame : `${timeFrame}ly`;
  const vals = {
    expenses: 1300.24,
    budget: 2000
  }


  return (
      <Row className="bg-black rounded expense-budget pt-2">
        <Col >
          <p className="text-warning text-center text-capitalize">Expenses</p>
          <h1 className='text-center'>${vals.expenses}</h1>
        </Col>
        <Col>
          <p className="text-warning text-capitalize text-center">Budget</p>
          <h1 className='text-center'>${vals.budget}</h1>
        </Col>
      </Row>
    
  )
}

export default ExpenseBudget