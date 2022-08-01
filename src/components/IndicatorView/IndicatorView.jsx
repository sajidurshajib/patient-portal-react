import React from 'react'
import { useState } from 'react'
import { Bp, Rbs, Weight, Pulse } from '../Indicators'
import classes from './IndicatorView.module.css'

export default function IndicatorView() {
    const [select, setSelect] = useState(1)
    return (
        <div className={classes.wrapper}>
            <p>Select Indicators</p>
            <select onChange={(e) => setSelect(parseInt(e.target.value))}>
                <option value="1">Blood Pressure</option>
                <option value="2">Diabetes</option>
                <option value="3">Weight</option>
                <option value="4">Pulse</option>
            </select>
            <div className={classes.grid}>
                {select === 1 ? <Bp /> : ''}
                {select === 2 ? <Rbs /> : ''}
                {select === 3 ? <Weight /> : ''}
                {select === 4 ? <Pulse /> : ''}
            </div>
        </div>
    )
}
