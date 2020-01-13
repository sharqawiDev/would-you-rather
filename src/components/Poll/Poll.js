import React, { Component } from 'react'
import { Card, ListGroup } from "react-bootstrap"
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
class Poll extends Component {
    render() {
        const { question, id } = this.props
        const { optionOne, optionTwo } = question
        return (
            <div>
                <Card>
                    <Link to={`/questions/${id}`}>
                        <Card.Title>Would You Rather?</Card.Title>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>{optionOne.text}</ListGroup.Item>
                                <ListGroup.Item>{optionTwo.text}</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Link>

                </Card>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions }, { id }) {
    const question = questions[id]

    return {
        authedUser,
        question,
        id
    }
}

export default connect(mapStateToProps)(Poll)
