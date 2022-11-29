import React, {useState} from 'react'
import {useForm} from 'react-hook-form'

import TransactionTable from './TransactionTable';
import TitleDateRange from '../widgets/TitleDateRange'
import TransactionFilters from './TransactionFilters'
import ExpenseBudget from '../widgets/ExpenseBudget';
import FrequentPurchases from '../widgets/FrequentPurchases'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'


const Transactions = () => {

  const [timeFrame, setTimeFrame] = useState("Month")
  const [selectedCategory, setSelectedCategory] = useState('all');

  const { register, handleSubmit } = useForm({
    defaultValues: {
      searchbar: "",
      selectedOption: "all"
    }
  });

  const handleTimeFrameChange = (val,e) => {
    setTimeFrame(e.target.value)
  }

  return (
    <div className='bg-dark text-light pb-5'>
      <Container>
        <TitleDateRange timeFrame={timeFrame} handleTimeFrameChange={handleTimeFrameChange}/>
        <Row className="bg-black bg-opacity-25 rounded py-2 mt-3" xs={1} md={2}>
          <Col className="rounded" md={8}>
            <Row xs={1} md={2}>
              <Col className="bg-black bg-opacity-50 rounded">
                <TransactionFilters register={register} handleSubmit={handleSubmit} setSelectedCategory={setSelectedCategory}/>
              </Col>
              <Col>
                <ExpenseBudget timeFrame={timeFrame} selectedCategory={selectedCategory}/>
              </Col>
            </Row>
            <Row>
              <div className="dash-transaction-table mt-3 ps-lg-3 bg-opacity-50 bg-black rounded">
                <h4 className="text-center pt-3 ps-lg-2  text-lg-start text-warning text-capitalize">{selectedCategory} Transactions</h4>
                <TransactionTable /> 
              </div>              
            </Row>
          </Col>
          <Col className="bg-secondary bg-opacity-50 rounded" md={4}>
            <Row className="transaction-donut-chart bg-black rounded mx-2">
              Donut Chart
            </Row>
            <Row>
              <FrequentPurchases />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Transactions