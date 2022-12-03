import React, {useState, useEffect} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';


const BudgetProgress = ({data, children}) => {
  const [percentage, setPercentage] = useState(0)

  useEffect(()=> {
    setPercentage(parseInt(((data?.expenses / data?.budget) * 100) ))
  },[])
  
  return (
    <div>
      {children}
      <ProgressBar 
        now={percentage} 
        label={`${percentage}%`}
        className='bg-dark bg-opacity-50 rounded'
      />
    </div>
  )
}

export default BudgetProgress