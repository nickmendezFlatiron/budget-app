import React, { useState } from 'react';

import BudgetProgress from './BudgetProgress';
import AccountSummaryCard from './AccountSummaryCard';
import GoalForm from './GoalForm';

import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';


function ControlledTabsExample({data, timeFrame}) {
  const [key, setKey] = useState('budget');

  return (
    <Tabs
      id="budget-tabs"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="budget" title="Budget">
      <BudgetProgress data={data}>
        <div className='d-flex justify-content-between align-items-center'>
          <h2 className='text-warning'>
            Budget 
            <small className='text-secondary fw-light '> {timeFrame}</small>
            </h2>
          <Button 
            className='ms-auto mt-1 mb-3 me-1'
            variant='outline-primary'  
            size="sm"
          >
              Edit
          </Button>
          <h3 className='text-secondary'>${data.budget}</h3>
        </div>
      </BudgetProgress>
        <div className='d-flex justify-content-between align-items-center mt-1'>
          <h2 className='text-warning'>Expenses</h2>
          <h3 className='text-secondary'>${data.expenses}</h3>
        </div>
        <div className='d-flex justify-content-between align-items-center mt-1'>
          <h2 className='text-warning'>Savings</h2>
          <h3 className='text-secondary'>${data.budget - data.expenses}</h3>
        </div>
      </Tab>
      <Tab eventKey="linked-accounts" title="Linked Accounts" >
        <Row xs={1} lg={2} className="g-2 credit-card-container">
          <AccountSummaryCard />
          <AccountSummaryCard />
          <AccountSummaryCard />
          <AccountSummaryCard />
          <AccountSummaryCard />
          <AccountSummaryCard />
        </Row>
      </Tab>
      <Tab eventKey="goals" title="Goals" >
        <GoalForm />
      </Tab>
    </Tabs>
  );
}

export default ControlledTabsExample;