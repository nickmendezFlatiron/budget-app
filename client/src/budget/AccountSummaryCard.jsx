import React from 'react'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const AccountSummaryCard = () => {
  return (
    <Col>
      <div className='credit-card'>
        <div className='top-block'>
          <span className='card-name'>
            Institution Name
          </span>
        </div>
          <div className='card-number'>
            <p>5459 xxxx xxxx 7203</p>
          </div>
        <div className='bottom-block d-flex justify-content-between'>
          <div className='balance'>
            <div>Balance</div>
            <div className='card-balance'>
              $ 8619.98
            </div>
          </div>
          <div className='balance'>
            <div>Expenses</div>
            <div className='card-balance'>
              $ 8619.98
            </div>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default AccountSummaryCard