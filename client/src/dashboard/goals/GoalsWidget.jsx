import React from 'react'
import uuid from 'react-uuid'

const GoalsWidget = ({selectedCategory}) => {
  const goals =[
    {
      date: "11/06/2022",
      targetAmount: 200,
      currentAmount: 150,
      category: "auto",
      goalTitle: "New Car"
    } ,
    {
      date: "11/06/2022",
      targetAmount: 200,
      currentAmount: 150,
      category: "auto",
      goalTitle: "New Car"
    } ,
    {
      date: "11/06/2022",
      targetAmount: 200,
      currentAmount: 145.6,
      category: "auto",
      goalTitle: "New Car"
    } ,
    {
      date: "11/06/2022",
      targetAmount: 200,
      currentAmount: 150,
      category: "auto",
      goalTitle: "New Car"
    } ,
    {
      date: "11/06/2022",
      targetAmount: 200,
      currentAmount: 150,
      category: "auto",
      goalTitle: "New Car"
    } ,
    {
      date: "11/06/2022",
      targetAmount: 200,
      currentAmount: 150,
      category: "auto",
      goalTitle: "New Car"
    } ,

  ]

  const renderGoals = goals.map(goal=>{
    const {date, targetAmount, currentAmount, category, goalTitle} = goal
    return (
      <li className='goals px-3 ' key={uuid()}>
        <div className="d-flex justify-content-between py-2 col">
          <div className="row">
            {goalTitle}
          </div>
          <div>
          Target: ${targetAmount}
          </div>
          <div>
           {parseFloat(currentAmount/targetAmount)*100}%
          </div>
          <div>
            {date}
          </div>
        </div>
      </li>
    )
  })
  return (
    <div className="widget-margin-small  bg-black bg-opacity-25 rounded-3 ">
      <h4 className="text-center pt-3 pe-lg-3 text-lg-end text-warning text-capitalize">{selectedCategory} Goals</h4>
      <div className="dash-transaction-table ">
        <ul className="ps-0">
         {renderGoals}
        </ul>
      </div>
  </div>
  )
}

export default GoalsWidget