import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const GoalsCardChart = () => {
  const vals = {
    expenses: 1000,
    budget: 2000
  }

  const percentage = parseInt((vals.expenses / vals.budget) * 100)

  return (
    <div className="d-flex goals-card-chart justify-content-center">
      <div className="">
        <CircularProgressbar 
          value={percentage}
          text={`${percentage}%`} 
          styles={buildStyles({
            pathColor: `rgba(1, 150, 140, .8)`,
            textColor: '#fbc724',
            trailColor: `rgb(20, 20, 20)`
          })}
          />
      </div>
    </div>
  )
}

export default GoalsCardChart