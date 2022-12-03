import React, {useState, useEffect} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';


const BudgetProgress = () => {
  const [percentage, setPercentage] = useState(0)

  useEffect(()=> {
    setPercentage(40)
  },[])
  
  return (
    <div>
      <h2 className='text-warning'>Budget</h2>
      <ProgressBar 
        now={percentage} 
        label={`${percentage}%`}
        className='bg-dark bg-opacity-50 rounded'
      />
    </div>
  )
}

export default BudgetProgress