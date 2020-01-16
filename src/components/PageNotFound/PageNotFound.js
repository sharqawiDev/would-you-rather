import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PageNotFound() {
    return (
        <div>
            <h1>404 Page Not Found</h1>
            <p>The page you requested does not exist.</p>
            <p>
                <NavLink to='/'>Click here</NavLink> to go back to home page.
            </p>
        </div>
    )
}