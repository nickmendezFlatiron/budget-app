import React, {useState} from 'react'

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


import { sampleData } from '../SampleData';

const Dashboard = () => {
  const [timeFrame, setTimeFrame] = useState("month")

  const handleTimeFrameChange = (val,e) => {
    setTimeFrame(e.target.value)
    console.log({timeFrame, val, e})
  }
  return (
    <div className='bg-dark text-light pb-5'>
      <Container className="">
        <Row sm={1} md={2} className="pt-3">
          <Col className="text-center text-md-end px-0"> 
            <ToggleButtonGroup type="checkbox" value={timeFrame} onChange={handleTimeFrameChange} className="">
              <ToggleButton id="week" value="week">
                Week
              </ToggleButton>
              <ToggleButton id="month" value="month">
                Month
              </ToggleButton>
              <ToggleButton id="custom" value="custom">
                Custom
              </ToggleButton>
            </ToggleButtonGroup>
          </Col>
          <Col className="text-center text-md-start order-md-first pt-2 pt-md-0  px-0"> 
            <h2>November 2022</h2>
          </Col>
        </Row>
        <Row className="pt-3 text-center" xs={1} md={2}>
          <Col className="rounded bg-light bg-opacity-25 p-3">
            <img src="https://via.placeholder.com/300" alt="Chart" className="rounded-circle"/>
          </Col>
          <Col className="rounded bg-light bg-opacity-25 p-3">
            <Row className="rounded bg-light bg-opacity-25 p-3 fs-4 m-2">
              <Col >
                <p className="text-warning">Total Expenses</p>
                <h3>$1300.24</h3>
              </Col>
              <Col>
                <p className="text-warning">Budget</p>
                <h3>$2000</h3>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard