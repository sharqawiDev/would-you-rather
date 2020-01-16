import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialQuestions } from "../../actions/shared"
import Poll from '../Poll/Poll'
import { Container, Row, Col, ButtonGroup, ToggleButton } from 'react-bootstrap'
import Header from '../Header/Header'

class Dashboard extends Component {
    state = {
        showAnswered: false
    }
    componentDidMount() {
        this.props.dispatch(handleInitialQuestions())
    }
    render() {
        const { answeredQuestions, unansweredQuestions } = this.props
        const [value, variant] = this.state.showAnswered
            ? ["Answered", "success"]
            : ["Unanswered", "danger"];
        return (
            <Container>
                <Header />
                <Row>
                    <Col style={{ margin: "10px" }}>
                        <ButtonGroup toggle onChange={() => {
                            this.setState(prevState => ({
                                showAnswered: !prevState.showAnswered
                            }))
                        }}>
                            <ToggleButton type="radio" name="tab" value={value} variant={variant}>
                                {value}
                            </ToggleButton>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    {
                        this.state.showAnswered
                            ? answeredQuestions.map((id) => (
                                <Col md={4} style={{ marginBottom: "10px" }} key={id}>
                                    <Poll key={id} id={id} />
                                </Col>
                            ))
                            : unansweredQuestions.map((id) => (
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


function mapStateToProps({ questions, authedUser, users }) {
    const user = users[authedUser]

    const answeredQuestions = Object.keys(questions).length !== 0
        ? Object.keys(user.answers)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
        : []

    const unansweredQuestions = Object.keys(questions).length !== 0
        ? Object.keys(questions)
            .filter(questionid => !answeredQuestions.includes(questionid))
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
        : []

    return {
        answeredQuestions,
        unansweredQuestions,
    }
}

export default connect(mapStateToProps)(Dashboard)