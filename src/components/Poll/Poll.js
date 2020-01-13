import React, { Component } from 'react'
import { Card, ListGroup } from "react-bootstrap"
export default class Poll extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Title>Would You Rather?</Card.Title>
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Do This</ListGroup.Item>
                            <ListGroup.Item>Do That</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
