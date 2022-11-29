import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BudgetProgress = () => {
  const vals = {
    expenses: 1300.24,
    budget: 2000
  }

  const percentage = parseInt((vals.expenses / vals.budget) * 100)

  return (
    <div className="d-flex justify-content-center">
      <div className="budget-progress-chart">
        <CircularProgressbar 
          value={percentage}
          text={`${percentage}%`} 
          styles={buildStyles({
            pathColor: `rgba(1, 150, 140, ${percentage / 100})`,
            textColor: '#fbc724',
            trailColor: `rgb(20, 20, 20)`
          })}
          />
      </div>
    </div>
  )
}

export default BudgetProgress

// rgba(251, 199, 36, 1)