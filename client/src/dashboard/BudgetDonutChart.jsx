import React,{useEffect} from 'react'
import { Doughnut } from 'react-chartjs-2';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';



export const data = {
  labels: ['Auto', 'Entertainment', 'Rent', 'Restaurant', 'Groceries', 'Utilities'],
  datasets: [
    {
      datasetIdKey:'budget-chart',
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.3)',
        'rgba(54, 162, 235, 0.3)',
        'rgba(255, 206, 86, 0.3)',
        'rgba(75, 192, 192, 0.3)',
        'rgba(153, 102, 255, 0.3)',
        'rgba(255, 159, 64, 0.3)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1.5,
    },
  ],
};

const BudgetDonutChart = () => {
  
  ChartJS.register(ArcElement, Tooltip, ChartDataLabels);   
  useEffect(()=>{

    return () =>{
      // ChartJS.destroy()
      // ChartJS.unregister(ArcElement, Tooltip, ChartDataLabels)
    }
  },[])

  return (
    <div className='donut-chart'>
      <Doughnut 
        data={data} 
        options={{
          plugins: {
              datalabels: {
                  formatter: function(value, context) {
                      return context.chart.data.labels[context.dataIndex];
                  },
                  color: "white",
                  font: {
                    weight: 'bold',
                    size: '15px'
                  }
              }
          }}
      }
      />
    </div>
  )
}

export default BudgetDonutChart