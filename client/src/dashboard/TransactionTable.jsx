import React from 'react'
import Table from 'react-bootstrap/Table'

const TransactionTable = () => {
  return (
   <>
    <Table hover variant='dark' className='transparent '>
      <tbody className='text-start'>
        <tr className="dash-transaction-td">
          <td>Nov 1</td>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr className="dash-transaction-td">
          <td>Nov 1</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr className="dash-transaction-td">
          <td>Nov 3</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
        <tr className="dash-transaction-td">
          <td>Nov 4</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
        <tr className="dash-transaction-td">
          <td>Nov 5</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
        <tr className="dash-transaction-td">
          <td>Nov 6</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
        <tr className="dash-transaction-td">
          <td>Nov 6</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
        <tr className="dash-transaction-td">
          <td>Nov 6</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
        <tr className="dash-transaction-td">
          <td>Nov 6</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
        <tr className="dash-transaction-td">
          <td>Nov 6</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
   </>
  )
}

export default TransactionTable