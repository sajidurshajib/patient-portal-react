import React from 'react'
import { MobileNav, Navbar, SidebarV2 } from '../Nav'
import classes from './Layout.module.css'

export default function Layout({ children, side }) {
    return (
        <div className={classes.layout}>
            <div>
                <Navbar />
                <MobileNav />
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
