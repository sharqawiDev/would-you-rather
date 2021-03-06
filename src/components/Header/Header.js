import React, { Component } from 'react'
import { Navbar, Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setAuthedUser } from "../../actions/authedUser"
class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <NavLink exact to='/'>
                        <Navbar.Brand>
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

                        <NavLink exact to="/leaderboard" style={{ marginRight: "10px" }}>Leaderboard</NavLink>
                        <NavLink exact to="/add" >New Poll</NavLink>

                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end" variant="dark">
                        <Navbar.Text style={{ marginRight: "10px" }}>
                            {this.props.authedUser}
                        </Navbar.Text>
                        <Image src={this.props.avatar} alt="profile pic" roundedCircle width="30px"
                            style={{ marginRight: "10px" }}
                        />
                        <NavLink exact to="/" onClick={() => { this.props.setAuthedUser(null) }}>Logout</NavLink>
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
