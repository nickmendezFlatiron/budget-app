import React, {useState} from 'react'
// Widgets
import CategorySelect from './CategorySelect';
import TransactionTable from './transactions/TransactionTable';
import BudgetDonutChart from './BudgetDonutChart';
import GoalsWidget from './goals/GoalsWidget';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

const Dashboard = () => {
  const [timeFrame, setTimeFrame] = useState("Month")
  const [selectedOption, setSelectedOption] = useState('all');

  const handleTimeFrameChange = (val,e) => {
    setTimeFrame(e.target.value)
  }
  const renderDate = () => {
    const d = new Date(Date())
    const options = {month: 'long', year: 'numeric'};
    return new Intl.DateTimeFormat('en-US', options).format(d)
  }

  const displayTime = timeFrame === "Custom" ? timeFrame : `${timeFrame}ly`;

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
          <Col className="text-center text-md-start order-md-first pt-2 pt-md-0 px-0"> 
            <h2 className='text-uppercase fw-light '>{renderDate()}</h2>
          </Col>
        </Row>
        <Row className="pt-3" xs={1} md={2} >
          <Col className="rounded bg-black bg-opacity-25 text-center text-lg-start">
            <BudgetDonutChart />
          </Col>
          <Col className="rounded bg-black pe-lg-0 bg-opacity-25 text-center text-lg-start mt-4 mt-md-0 ">
            <div className="glow rounded rounded-3 mb-3 d-flex row row-auto bg-light bg-opacity-25 max-content">  
              <CategorySelect selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
            </div>
            <div className="glow rounded rounded-3 mb-3 d-flex row row-auto bg-light bg-opacity-25 max-content p-2">  
              <Col xs={6} lg={`auto`}>
                <p className="text-warning text-center text-capitalize">{selectedOption} Expenses</p>
                <h1>$1300.24</h1>
              </Col>
              <Col xs={6} lg={`auto`}>
                <p className="text-warning text-capitalize">{displayTime} Budget</p>
                <h1>$2000</h1>
              </Col>
            </div>
            <div className="glow rounded rounded-3 mb-3 d-flex row row-auto bg-light bg-opacity-25 max-content p-2">  
              <Col xs={6} lg={`auto`}>
                <p className="text-warning text-center">{displayTime} Savings</p>
                <h1>$1300.24</h1>
              </Col>
              <Col xs={6} lg={`auto`}>
                <p className="text-warning text-capitalize">{displayTime} Income</p>
                <h1>$2000</h1>
              </Col>
            </div>
          </Col>
        </Row>
        <Row xs={1} lg={2} className=" pb-5 mt-4">
          <Col className="ps-lg-0">
            <div className="widget-margin-small  bg-black bg-opacity-25 rounded-3 ">
              <h4 className="text-center pt-3 ps-lg-3  text-lg-start text-warning text-capitalize">{selectedOption} Transactions</h4>
              <div className="dash-transaction-table ps-lg-3">
                <TransactionTable /> 
              </div>
            </div>
          </Col>
          <Col  className="mt-4 mt-lg-0 pe-lg-0">
            <GoalsWidget selectedOption={selectedOption}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard