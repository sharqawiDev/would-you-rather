import React, { Component, Fragment } from 'react'
import { Container, Table, Row, Col } from 'react-bootstrap'
import Header from "../Header/Header"
import { connect } from 'react-redux'


class Leaderboard extends Component {
    render() {
        const { rows } = this.props;
        return (
            <Fragment>
                <Header />
                <Container style={{ padding: "100px 0" }}>
                    <Row >
                        <Col>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Username</th>
                                        <th>Polls Created</th>
                                        <th>Polls Answered</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((row, index) => (
                                        <tr key={row.userID}>
                                            <td>{index + 1}</td>
                                            <td>{row.userID}</td>
                                            <td>{row.pollsCreated}</td>
                                            <td>{row.pollsAnswered}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ users }) => (
    {
        rows: Object.keys(users).map(userID => ({
            userID,
            pollsCreated: users[userID].questions.length,
            pollsAnswered: Object.keys(users[userID].answers).length
        })).sort((a, b) => (b.pollsCreated + b.pollsAnswered) - (a.pollsCreated + a.pollsAnswered))
    }
)

export default connect(mapStateToProps)(Leaderboard)