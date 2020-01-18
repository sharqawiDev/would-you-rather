import React, { Component } from 'react'
import { Container, Row, Col, Jumbotron, Button, Form, Image } from "react-bootstrap"
import { connect } from 'react-redux'
import { setAuthedUser } from '../../actions/authedUser'
class Login extends Component {

    state = {
        selectedUser: null
    }

    authorizeUser = (event) => {
        event.preventDefault();

        const { selectedUser } = this.state
        const { setAuthedUser } = this.props
        setAuthedUser(selectedUser)
        this.props.history.push()
    }

    changeSelectedUser = (selectedUser) => this.setState({ selectedUser })

    render() {
        const styles = {
            jumbotron: {
                width: "70%",
                height: "100vh",
                margin: "auto",
                borderRadius: "10px",
                background: "linear-gradient(to bottom, rgba(181,189,200,1) 0%,rgba(130,140,149,1) 36%,rgba(40,52,59,1) 100%)"
            },
            button: {
                width: "20%",
                display: "block",
                margin: "auto"
            }
        }

        const { users } = this.props

        const path = this.state.selectedUser === null
            ? require("./profile.png")
            : users[this.state.selectedUser]["avatarURL"]
        return (
            <Jumbotron style={styles.jumbotron}>
                <Container>
                    <h1>Would You Rather? - Login Page</h1>
                    <Form onSubmit={this.authorizeUser}>
                        <Row>
                            <Col>
                                <Image src={path} alt="profile pic" roundedCircle width="100px" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Select a User to Login</Form.Label>
                                    <Form.Control
                                        required as="select"
                                        defaultValue=""
                                        onChange={(e) => this.changeSelectedUser(e.target.value)}>
                                        <option value="" disabled >Select a User</option>
                                        {
                                            users
                                                ? Object.keys(users).map(user =>
                                                    <option key={user} value={user}>
                                                        {user}
                                                    </option>)
                                                : null
                                        }
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button
                            variant="primary"
                            type="submit"
                            style={styles.button}
                        >Login</Button>
                    </Form>
                </Container>
            </Jumbotron>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setAuthedUser: (id) => {
            dispatch(setAuthedUser(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
