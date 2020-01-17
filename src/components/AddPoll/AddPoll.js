import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from "../../actions/shared"
import { Redirect } from 'react-router-dom'
import Header from "../Header/Header"
import { Container, Card, ListGroup, Form } from "react-bootstrap"
import { Button } from 'react-bootstrap'

class AddPoll extends Component {
    state = {
        optionOne: "",
        optionTwo: "",
        submitted: false
    }

    handleChangeOp1 = (event) => {
        this.setState({ optionOne: event.target.value });

    }
    handleChangeOp2 = (event) => {
        this.setState({ optionTwo: event.target.value });

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { optionOne, optionTwo } = this.state;
        console.log(optionOne, optionTwo)
        const { addQuestion } = this.props;
        addQuestion(optionOne, optionTwo);
        this.setState({ submitted: true })

    }

    render() {
        return this.state.submitted
            ? <Redirect to='/' />
            : (
                <Fragment>
                    <Header />
                    <Container>
                        <Card>
                            <Card.Title>Would You Rather?</Card.Title>
                            <Card.Body>
                                <Form onSubmit={this.handleSubmit}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <Form.Group controlId="option1">
                                                <Form.Label>Option One</Form.Label>
                                                <Form.Control
                                                    required
                                                    onChange={this.handleChangeOp1}
                                                    type="text"
                                                    name="option1"
                                                    placeholder="Option 1" />
                                            </Form.Group>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Form.Group controlId="option2">
                                                <Form.Label>Option Two</Form.Label>
                                                <Form.Control
                                                    required
                                                    onChange={this.handleChangeOp2}
                                                    type="text"
                                                    name="option2"
                                                    placeholder="Option 2" />
                                            </Form.Group>
                                        </ListGroup.Item>
                                    </ListGroup>
                                    <Button
                                        variant="primary"
                                        type="submit">
                                        Submit
                            </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Container>
                </Fragment>

            )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addQuestion: (optionOne, optionTwo) => {
            dispatch(handleAddQuestion(optionOne, optionTwo))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddPoll)
