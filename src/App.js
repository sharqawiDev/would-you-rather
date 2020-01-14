import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Login from "./components/Login/Login"
import { handleInitialUsers } from './actions/shared'
import Dashboard from './components/Dashboard/Dashboard';
import PollPage from './components/PollPage/PollPage';

class App extends Component {
  componentDidMount() {
    this.props.dispatch((handleInitialUsers()))
  }
  render() {
    return (
      <Router>
        <div className="App">
          {
            this.props.authedUser === null
              ? <Route path='/' exact component={Login} />
              :
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path='/questions/:question_id' component={PollPage} />
                <Route path='/add' exact component={null} />
                <Route path='/leaderboard' exact component={null} />
                {/* <Route component={null} /> PageNotFound */}
              </Switch>
          }
        </div>
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

