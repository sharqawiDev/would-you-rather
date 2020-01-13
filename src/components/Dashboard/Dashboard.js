import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from '../Poll/Poll'
import { Container, Row, Col, ButtonGroup, ToggleButton } from 'react-bootstrap'

class Dashboard extends Component {
    handleChange = (event) => {
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col style={{ margin: "10px" }}>
                        <ButtonGroup toggle onChange={this.handleChange}>
                            <ToggleButton type="radio" name="tab" value="Answered" variant="success">
                                Answered
                        </ToggleButton>
                            <ToggleButton type="radio" name="tab" value="Unanswered" variant="danger">
                                Unanswered
                        </ToggleButton>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    {
                        this.props.questionIds.map((id) => (
                            <Col md={4} style={{ marginBottom: "10px" }} key={id}>
                                <Poll key={id} id={id} />
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
