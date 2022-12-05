import React,{useRef, useState, useEffect} from 'react'
import { Doughnut } from 'react-chartjs-2';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
  const chartRef = useRef()
  const [isLabels, toggleLabels] = useState(true)
  const [labelOpacity, setLabelOpacity] =useState('0.8')

  ChartJS.register(ArcElement, Tooltip, ChartDataLabels);   
  
  useEffect(()=>{
    isLabels? setLabelOpacity('0.8'): setLabelOpacity('0'); 
  },[isLabels])

  return (
    <div >
      <Row xs={1} className="justify-content-center">
        <Col className='donut-chart px-0 glow rounded-circle'>   
          <Doughnut 
            ref={chartRef}
            data={data} 
            options={{
              plugins: {
                  datalabels: {
                      formatter: function(value, context) {
                          return (
                            context.chart.data.labels[context.dataIndex]
                            );
                      },
                      color: `rgba(255, 255, 255, ${labelOpacity})`,
                      font: {
                        weight: 'bold',
                        size: '15px'
                      }
                  }
              }}
          }
          />
        </Col>
        {/* <Col md="auto" >
          <div className="pointer-cursor">
            <input type="checkbox" id="toggle-labels" className="pointer-cursor" checked={isLabels} onChange={()=>{toggleLabels(!isLabels)}}/>
            <label htmlFor="toggle-labels" value="Labels" className='ms-1 fs-5 '>Labels</label>
          </div>
        </Col> */}
      </Row>
    </div>
  )
}

export default BudgetDonutChart