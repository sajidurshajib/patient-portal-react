import 'chart.js/auto'
import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = (props) => {
    return (
        <div style={{ height: '250px' }}>
            <Line
                data={props.data}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                }}
            />
        </div>
    )
}

export default LineChart
