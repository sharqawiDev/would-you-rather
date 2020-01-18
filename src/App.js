import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Login from "./components/Login/Login"
import LoadingBar from 'react-redux-loading'
import { handleInitialUsers, handleInitialQuestions } from './actions/shared'
import Dashboard from './components/Dashboard/Dashboard';
import PollPage from './components/PollPage/PollPage';
import PageNotFound from './components/PageNotFound/PageNotFound';
import AddPoll from './components/AddPoll/AddPoll';
import Leaderboard from './components/Leaderboard/Leaderboard';

class App extends Component {
  componentDidMount() {
    this.props.dispatch((handleInitialUsers()))
    this.props.dispatch((handleInitialQuestions()))
  }
  render() {
    return (
      <Fragment>
        <LoadingBar />
        <div className="App">
          {
            this.props.authedUser === null
              ? <Route to="/login" component={Login} />
              : <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path='/questions/:question_id' component={PollPage} />
                <Route path='/add' exact component={AddPoll} />
                <Route path='/leaderboard' exact component={Leaderboard} />
                <Route component={PageNotFound} />
              </Switch>
          }
        </div>
      </Fragment>
    );
  }

}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)

