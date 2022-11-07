import React, {useState} from 'react'
import CategorySelect from './CategorySelect';
import TransactionTable from './TransactionTable';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


import { sampleData } from '../SampleData';

const Dashboard = () => {
  const [timeFrame, setTimeFrame] = useState("Month")

  const handleTimeFrameChange = (val,e) => {
    setTimeFrame(e.target.value)
    console.log({timeFrame, val, e})
  }
  return (
    <div className='bg-dark text-light pb-5'>
      <Container >
        <Row xs={1} sm={1} md={2} className="pt-3">
          <Col className="text-center text-md-end px-0"> 
            <ToggleButtonGroup type="checkbox" value={timeFrame} onChange={handleTimeFrameChange} className="">
              <ToggleButton id="week" value="Week">
                Week
              </ToggleButton>
              <ToggleButton id="month" value="Month">
                Month
              </ToggleButton>
              <ToggleButton id="custom" value="Custom">
                Custom
              </ToggleButton>
            </ToggleButtonGroup>
          </Col>
          <Col className="text-center text-md-start order-md-first pt-2 pt-md-0  px-0"> 
            <h2>November 2022</h2>
          </Col>
        </Row>
        <Row className="pt-3" xs={1} md={2}>
          <Col className="rounded bg-black bg-opacity-25 text-center text-lg-start ">
            <img src="https://via.placeholder.com/300" alt="Chart" className="rounded-circle"/>
          </Col>
          <Col className="rounded bg-black pe-lg-0 bg-opacity-25 text-center text-lg-start mt-3 mt-lg-0 ">
            <div className=" rounded rounded-3 mb-3 d-flex row row-auto bg-light bg-opacity-25 max-content">  
              <CategorySelect />
            </div>
            <div className=" rounded rounded-3 mb-3 d-flex row row-auto bg-light bg-opacity-25 max-content p-2">  
              <Col xs={6} lg={`auto`}>
                <p className="text-warning text-center">Total Expenses</p>
                <h1>$1300.24</h1>
              </Col>
              <Col xs={6} lg={`auto`}>
                <p className="text-warning">{timeFrame === "Custom" ? timeFrame : `${timeFrame}ly`} Budget</p>
                <h1>$2000</h1>
              </Col>
            </div>
          </Col>
        </Row>
        <Row xs={1} md={2} className="border pb-5 mt-3">
          <Col className="border border-primary">
            <h4 className="text-center text-lg-start text-warning">Transactions</h4>
            <div className="dash-transaction-table">
              <TransactionTable /> 
            </div>
          </Col>
          <Col>
          
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard