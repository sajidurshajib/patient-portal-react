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
                    scales: {
                        x: {
                            grid: {
                                borderDash: [1, 20],
                                color: 'grey',
                            },
                        },

                        y: {
                            grid: {
                                color: 'rgba(0, 0, 0, 0)',
                            },
                        },
                    },
                }}
            />
        </div>
    )
}

export default LineChart
