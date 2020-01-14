import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Container, Row, Col, Card,
    ListGroup, Jumbotron,
    Form, Button, Alert,
    Image
} from "react-bootstrap"
import { timestampToDate } from '../../utils/api'
import Header from '../Header/Header'

class PollPage extends Component {
    render() {
        const { avatar, author } = this.props
        const { optionOne, optionTwo, timestamp } = this.props.question
        return (
            <Container>
                <Header />
                <Row className="justify-content-md-center">
                    <Col xs={6}>
                        <Jumbotron>
                            <Card>
                                <Card.Title style={{ margin: "10px 0 10px 0" }}>
                                    Would You Rather?
                            </Card.Title>
                                <Container>
                                    <Row className="justify-content-md-center">
                                        <Col>
                                            <Image src={avatar} alt="question author" roundedCircle width="30px"
                                            />
                                            <h6>{author}</h6>
                                            <span>{timestampToDate(timestamp)}</span>
                                        </Col>
                                    </Row>
                                </Container>
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

function mapStateToProps({ questions, users }, props) {
    const { question_id } = props.match.params;
    const question = questions[question_id];
    const avatar = users[question.author].avatarURL;
    const author = question.author;

    return {
        avatar,
        author,
        question_id,
        question,
    }
}

export default connect(mapStateToProps)(PollPage)