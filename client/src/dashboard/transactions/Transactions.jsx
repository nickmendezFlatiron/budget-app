import React, {useState} from 'react'

import TransactionTable from './TransactionTable';
import TitleDateRange from '../widgets/TitleDateRange'
import TransactionFilters from './TransactionFilters'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'


const Transactions = () => {
  const [timeFrame, setTimeFrame] = useState("Month")
  const [selectedOption, setSelectedOption] = useState("all")
  const handleTimeFrameChange = (val,e) => {
    setTimeFrame(e.target.value)
  }

  return (
    <div className='bg-dark text-light pb-5'>
      <Container>
        <TitleDateRange timeFrame={timeFrame} handleTimeFrameChange={handleTimeFrameChange}/>
        <Row className="bg-black bg-opacity-25 rounded py-2 mt-3" xs={1} md={2}>
          <Col className="bg-secondary bg-opacity-50 rounded" md={8}>
            <Row xs={1} md={2}>
              <Col className="p-2 bg-black bg-opacity-50 rounded">
                <TransactionFilters selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
              </Col>
              <Col  className="p-2 bg-black bg-opacity-50 rounded">
                
              </Col>
            </Row>
            <Row>
              <div className="dash-transaction-table mt-3 ps-lg-3 bg-opacity-50 bg-dark rounded">
                <TransactionTable /> 
              </div>              
            </Row>
          </Col>
          <Col className="bg-secondary bg-opacity-50 rounded" md={4}>
            Hello
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Transactions