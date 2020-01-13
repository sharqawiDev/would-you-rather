import React, { Component } from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setAuthedUser } from "../../actions/authedUser"
class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <NavLink exact to='/'>
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
                    </NavLink>

                    <Navbar.Collapse id="basic-navbar-nav">

                        <NavLink exact to="/leaderboard">Leaderboard</NavLink>
                        <NavLink exact to="/add">New Poll</NavLink>
                        {/* <Nav.Link href="#link">New Poll</Nav.Link> */}

                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end" variant="dark">
                        <Navbar.Text style={{ marginRight: "10px" }}>
                            {this.props.authedUser}
                        </Navbar.Text>
                        <Image src={this.props.avatar} alt="profile pic" roundedCircle width="30px" />
                        <Nav.Link href="#logout" onClick={() => { this.props.setAuthedUser(null) }}>Logout</Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    const avatar = users[authedUser]["avatarURL"]
    return {
        authedUser,
        avatar
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setAuthedUser: (id) => {
            dispatch(setAuthedUser(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
