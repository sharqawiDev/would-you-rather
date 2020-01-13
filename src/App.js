import React, { Component } from 'react';
import './App.css';
import Login from "./components/Login/Login"
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import Header from './components/Header/Header';
import Poll from './components/Poll/Poll';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  componentDidMount() {
    this.props.dispatch((handleInitialData()))
  }
  render() {
    return (
      <div className="App" >
        <Header />
        <Dashboard />
      </div>
    );
  }

}

export default connect()(App)
