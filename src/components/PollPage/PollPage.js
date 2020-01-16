import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Container, Row, Col, Card,
    ListGroup, Jumbotron,
    Form, Button, Alert,
    Image, ProgressBar
} from "react-bootstrap"

import { timestampToDate } from '../../utils/api'
import { handleSaveQuestionAnswer } from '../../actions/shared'
import Header from '../Header/Header'
import { FaCheck } from 'react-icons/fa';


class PollPage extends Component {
    state = {
        selectedAnswer: null
    }
    componentDidMount() {
        if (this.props.authedUserAnswer) {
            this.setState({
                selectedAnswer: this.props.authedUserAnswer
            })
        }
    }

    submitAnswer = (e) => {
        e.preventDefault();
        const form = e.target;
        const { question, saveQuestionAnswer } = this.props
        const answer = form.elements[question.id].value;
        this.setState({
            selectedAnswer: answer
        })
        saveQuestionAnswer(answer)
    }


    render() {
        const {
            avatar, author,
            optionOne, optionTwo,
            timestamp,
            authedUser, users
        } = this.props;
        const selectedAnswer = this.state.selectedAnswer;
        const disabledVal = this.state.selectedAnswer ? true : false;
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
                                <Form onSubmit={this.submitAnswer}>
                                    <Card.Body>
                                        <ListGroup variant="flush">
                                            {[optionOne, optionTwo].map(option => {
                                                const votes = option.votes;
                                                const percentage = ((votes.length / Object.keys(users).length) * 100).toFixed(2);
                                                const value = ["optionOne", "optionTwo"][[optionOne, optionTwo].indexOf(option)]
                                                return (
                                                    <div key={option.text} style={{ marginBottom: "10px" }}>
                                                        <Alert variant="dark" style={{ marginBottom: 0 }}>
                                                            <Form.Check
                                                                required
                                                                disabled={disabledVal}
                                                                type="radio"
                                                                style={{ display: "inline" }}
                                                                label={option.text}
                                                                name={this.props.question.id}
                                                                value={value}
                                                            />
                                                            {
                                                                votes.includes(authedUser)
                                                                && <FaCheck style={{ marginLeft: "10px" }} />
                                                            }
                                                        </Alert>
                                                        {selectedAnswer && (<ProgressBar
                                                            now={percentage}
                                                            label={`${votes.length} votes (${percentage}%)`} />)}

                                                    </div>
                                                )
                                            })}
                                        </ListGroup>
                                    </Card.Body>
                                    <Button
                                        type="submit"
                                        style={{ margin: "0 0 10px 0" }}
                                        disabled={disabledVal}
                                    >Answer</Button>
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
    const { question_id } = props.match.params;
    const question = questions[question_id];
    const avatar = users[question.author].avatarURL;
    const author = question.author;
    const optionOne = question.optionOne;
    const optionTwo = question.optionTwo;
    const { timestamp } = question;
    const authedUserAnswer =
        question.optionOne.votes.includes(authedUser)
            ? "optionOne"
            : question.optionTwo.votes.includes(authedUser)
                ? "optionTwo"
                : null;

    return {
        authedUser,
        authedUserAnswer,
        users,
        timestamp,
        avatar,
        author,
        question_id,
        question,
        optionOne,
        optionTwo,
    }
}

function mapDispatchToProps(dispatch, props) {
    const { question_id } = props.match.params;
    return {
        saveQuestionAnswer: (answer) => {
            dispatch(handleSaveQuestionAnswer(question_id, answer))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PollPage)