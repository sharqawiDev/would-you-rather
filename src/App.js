import React, { Component } from 'react';
import './App.css';
import Login from "./components/Login/Login"
import { connect } from 'react-redux'
import { setAuthedUser } from './actions/authedUser'
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  componentDidMount() {
    const AUTHED = null;
    this.props.dispatch((setAuthedUser(AUTHED)))
  }
  render() {
    return (
      <div className="App">
        {this.props.authedUser === null
          ? <Login />
          : <Dashboard />
        }
      </div>
    );
  }

}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)

