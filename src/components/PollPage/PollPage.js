import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Container, Row, Col, Card,
    ListGroup, Jumbotron,
    Form, Button, Alert
} from "react-bootstrap"
import Header from '../Header/Header'

class PollPage extends Component {
    render() {
        const { optionOne, optionTwo } = this.props.question
        return (
            <Container>
                <Header />
                <Row className="justify-content-md-center">
                    <Col xs={6}>
                        <Jumbotron>
                            <Card>
                                <Card.Title style={{ margin: "10px 0 0 0" }}>
                                    Would You Rather?
                            </Card.Title>
                                <hr />
                                <Form>
                                    <Card.Body>
                                        <ListGroup variant="flush">
                                            {[optionOne, optionTwo].map(option => (
                                                <Alert key={option.text} variant="dark">
                                                    <Form.Check
                                                        type="radio"
                                                        label={option.text}
                                                        name={this.props.question.id}
                                                        id={option.text}
                                                    />
                                                </Alert>
                                            ))}
                                        </ListGroup>
                                    </Card.Body>
                                    <Button type="submit" style={{ margin: "0 0 10px 0" }}>Answer</Button>
                                </Form>
                            </Card>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }, props) {
    const { question_id } = props.match.params
    const question = questions[question_id]

    return {
        question_id,
        question,
        authedUser,
    }
}

export default connect(mapStateToProps)(PollPage)