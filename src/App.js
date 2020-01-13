import React, { Component } from 'react';
import './App.css';
import Login from "./components/Login/Login"
import { connect } from 'react-redux'
import { handleInitialUsers } from './actions/shared'
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  componentDidMount() {
    this.props.dispatch((handleInitialUsers()))
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
    authedUser
  }
}

export default connect(mapStateToProps)(App)

