import React from 'react'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'
const FrequentPurchases = () => {
  
  return (
      <Row className="text-center bg-black rounded">
        <h4 className=' text-warning'>Frequent Purchases</h4>
        <div className="frequent-purchases overflow-auto">
          <Table hover variant='dark' className='transparent text-start '>
            <thead >
                <td className='ps-2'>Name</td>
                <td className='ps-2'>Count</td>
                <td className='ps-2'>Total</td>
            </thead>
            <tbody>
              <tr className="dash-transaction-td">
                <td>Starbucks</td>
                <td>4</td>
                <td>$20</td>
              </tr>
              <tr className="dash-transaction-td">
                <td>Starbucks</td>
                <td>4</td>
                <td>$20</td>
              </tr>
              <tr className="dash-transaction-td">
                <td>Starbucks</td>
                <td>4</td>
                <td>$20</td>
              </tr>
              <tr className="dash-transaction-td">
                <td>Starbucks</td>
                <td>4</td>
                <td>$20</td>
              </tr>
              <tr className="dash-transaction-td ">
                <td>Starbucks</td>
                <td>4</td>
                <td>$20</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Row>
  )
}

export default FrequentPurchases