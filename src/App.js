import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Login from "./components/Login/Login"
import LoadingBar from 'react-redux-loading'
import { handleInitialUsers } from './actions/shared'
import Dashboard from './components/Dashboard/Dashboard';
import PollPage from './components/PollPage/PollPage';
import PageNotFound from './components/PageNotFound/PageNotFound';
import AddPoll from './components/AddPoll/AddPoll';

class App extends Component {
  componentDidMount() {
    this.props.dispatch((handleInitialUsers()))
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="App">
            <Switch>
              {
                this.props.authedUser === null
                  ? <Route path='/' exact component={Login} />
                  :
                  <Fragment>
                    <Route path="/" exact component={Dashboard} />
                    <Route path='/questions/:question_id' component={PollPage} />
                    <Route path='/add' exact component={AddPoll} />
                    <Route path='/leaderboard' exact component={null} />
                  </Fragment>
              }
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Fragment>
      </Router>

    );
  }

}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)

