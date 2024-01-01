import React from 'react'
import './Saving.css'
import { PieChart } from '@mui/x-charts/PieChart';
function Saving() {
  return (
    <div className="saving">

      <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Stocks' },
            { id: 1, value: 15, label: 'deposits' },
            { id: 2, value: 40, label: 'Mutual Funds' },
            { id: 3, value: 20, label: 'Gold' },
            
          ],
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      width={300}
      height={400}
      slotProps={{
        legend: {
          direction: 'row',
          position: { vertical: 'top', horizontal: 'middle' },
          padding: 0,
        },
      }}
    margin={{top:100,right:0,bottom:100}}
    />
    </div>
  )
}

export default Saving