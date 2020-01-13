import React, { Component } from 'react'
import { Container, Row, Col, Jumbotron, Button, Form, Image } from "react-bootstrap"
export default class Login extends Component {

    authorizeUser = (event) => {
        event.preventDefault();
        console.log(event.target)
    }

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
        const path = require("./profile.png")
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
                                    <Form.Control required as="select" defaultValue="">
                                        <option value="" disabled >Select a User</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
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
