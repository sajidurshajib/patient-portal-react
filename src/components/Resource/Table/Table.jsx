import React from 'react'
import classes from './Table.module.css'

export default function Table({ children }) {
    return (
        <div className={classes.tableList}>
            <table className={classes.tableMain}>{children}</table>
        </div>
    )
}
