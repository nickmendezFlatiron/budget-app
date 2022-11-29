import React, {useState} from 'react'
import {useForm} from 'react-hook-form'

import TransactionTable from './TransactionTable';
import TitleDateRange from '../widgets/TitleDateRange'
import TransactionFilters from './TransactionFilters'
import ExpenseBudget from '../widgets/ExpenseBudget';
import FrequentPurchases from '../widgets/FrequentPurchases'
import BudgetProgress from '../widgets/BudgetProgress';
import BudgetDonutChart from '../BudgetDonutChart'

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
      <Container className="px-0">
        <TitleDateRange selectedCategory={selectedCategory} timeFrame={timeFrame} handleTimeFrameChange={handleTimeFrameChange}/>
        <Row className="bg-black bg-opacity-25 rounded py-2  mt-3" xs={1} lg={2}>
          <Col className="rounded" lg={8}>
            <Row xs={1} md={1} lg={2} className="p-0 pe-lg-3 ">
              <Col className="py-2">
                <TransactionFilters register={register} handleSubmit={handleSubmit} setSelectedCategory={setSelectedCategory}/>
              </Col>
              <Col className='bg-black rounded expense-budget'>
                <BudgetDonutChart />
              </Col>
            </Row>
            <Row>
              <Col className="p-0 pe-lg-3">
                <div className="transaction-table mt-3 ps-lg-3 bg-opacity-50 bg-black rounded">
                  <h4 className="text-center pt-3 ps-lg-2 text-lg-start text-warning text-capitalize">Transaction History</h4>
                  <TransactionTable /> 
                </div>              
              </Col>
            </Row>
          </Col>
          <Col className="bg-secondary bg-opacity-50 mt-3 mt-lg-0  rounded" lg={4}>
            <Row xs={1} md={2} lg={1}>
              <Col className='bg-black rounded expense-budget pt-3'>
                <BudgetProgress />
                <ExpenseBudget timeFrame={timeFrame} selectedCategory={selectedCategory}/>
              </Col>
              <Col>
                <FrequentPurchases />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Transactions