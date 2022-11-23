import React, {useState} from 'react'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

const Transactions = () => {
  const [timeFrame, setTimeFrame] = useState("Month")

  const handleTimeFrameChange = (val,e) => {
    setTimeFrame(e.target.value)
  }

  return (
    <div className='bg-dark text-light pb-5'>
      <Container>
        <Row xs={1} sm={1} md={2} className="pt-3">
          <Col className="text-center text-md-start  py-2 py-md-0 px-0"> 
            <h2 className='text-uppercase fw-light'>TRANSACTIONS</h2>
          </Col>
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
        </Row>
      </Container>
    </div>
  )
}

export default Transactions