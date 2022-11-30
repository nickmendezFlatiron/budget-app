import React, {useState} from 'react'
import {useForm} from 'react-hook-form'

import TransactionTable from './TransactionTable';
import TitleDateRange from '../dashboard/widgets/TitleDateRange'
import TransactionFilters from './TransactionFilters'
import ExpenseBudget from '../dashboard/widgets/ExpenseBudget';
import FrequentPurchases from '../dashboard/widgets/FrequentPurchases'
import BudgetProgress from '../dashboard/widgets/BudgetProgress';
import BudgetDonutChart from '../dashboard/BudgetDonutChart'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'


const Transactions = () => {

  const [timeFrame, setTimeFrame] = useState("Month")
  const [selectedCategory, setSelectedCategory] = useState('all');
  console.lo
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
      <Container > 
        <TitleDateRange selectedCategory={selectedCategory} timeFrame={timeFrame} handleTimeFrameChange={handleTimeFrameChange}/>
        <TransactionFilters register={register} handleSubmit={handleSubmit} setSelectedCategory={setSelectedCategory}/>
        <Row className="rounded mt-2" xs={1} md={2} lg={3} >
          <Col xs={{order: 1, span: 12}} md={{order: 3, span: 12}} lg={{order: 4, span: 12}} className="p-0">
            <div className="transaction-table mt-0 mt-md-2 bg-opacity-75 bg-black rounded">
              <h4 className="text-center ps-lg-3 pt-3 text-lg-start text-warning text-capitalize">Transaction History</h4>
              <div className="dash-transaction-table ps-lg-3">
                <TransactionTable /> 
              </div>
            </div>              
          </Col>
          <Col xs={{order: 3}} md={{order: 1}} className='bg-black bg-opacity-75 rounded'>
              <FrequentPurchases />
          </Col>
          <Col   xs={{order: 2}} className='bg-black rounded py-2'>
            <BudgetDonutChart />
          </Col>
          <Col xs={{order: 4}} md={{order: 3}} className='bg-black rounded pt-3'>
            <BudgetProgress />
            <ExpenseBudget timeFrame={timeFrame} selectedCategory={selectedCategory}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Transactions