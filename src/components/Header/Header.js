import React, { Component } from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap'
export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" cla>
                    <Navbar.Brand href="#home">
                        <img
                            alt="app logo"
                            src={require('./icon.png')}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Would You Rather?
                </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav.Link href="#leaderboard">Leaderboard</Nav.Link>
                        <Nav.Link href="#link">New Poll</Nav.Link>

                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end" variant="dark">
                        <Navbar.Text>
                            Authed
                        </Navbar.Text>
                        {' '}
                        <img
                            alt="profile pic"
                            src={require('./icon.png')}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        <Nav.Link href="#leaderboard">Logout</Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
