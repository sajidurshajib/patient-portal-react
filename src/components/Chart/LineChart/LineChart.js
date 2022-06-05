import 'chart.js/auto'
import React from 'react'
import { Line } from 'react-chartjs-2'
import classes from './LineChart.module.css'

const LineChart = (props) => {
    return (
        <div className={classes.chartWrapper}>
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
