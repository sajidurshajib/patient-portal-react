import React from 'react'
import { Navbar, SidebarV2 } from '../Nav'
import classes from './Layout.module.css'

export default function Layout({ children }) {
    return (
        <div className={classes.layout}>
            <div>
                <Navbar />
            </div>
            <div className={classes.container}>
                <div>
                    <SidebarV2 />
                </div>
                <div>{children}</div>
            </div>
        </div>
    )
}
