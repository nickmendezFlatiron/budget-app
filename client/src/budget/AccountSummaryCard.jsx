import React from 'react'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const AccountSummaryCard = () => {
  return (
    <Col>
      <div class='credit-card'>
        <div class='top-block'>
          <span class='card-name'>
            Institution Name
          </span>
        </div>
          <div class='card-number'>
            <p>5459 xxxx xxxx 7203</p>
          </div>
        <div class='bottom-block d-flex justify-content-between'>
          <div class='balance'>
            <div>Balance</div>
            <div class='card-balance'>
              $ 8619.98
            </div>
          </div>
          <div class='balance'>
            <div>Expenses</div>
            <div class='card-balance'>
              $ 8619.98
            </div>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default AccountSummaryCard