import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from '../Poll/Poll'
import { Container, Row, Col } from 'react-bootstrap'

class Dashboard extends Component {
    render() {
        return (
            <Container>
                <Row>
                    Headers
            </Row>
                <Row>
                    {
                        this.props.questionIds.map((id) => (
                            <Col md={4} style={{ marginBottom: "10px" }}>
                                <Poll key={id} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        )
    }
}


function mapStateToProps({ questions }) {
    return {
        questionIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}
export default connect(mapStateToProps)(Dashboard)
