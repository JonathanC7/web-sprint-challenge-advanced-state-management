import React, { Component } from "react";
import "./App.css";

import { connect } from 'react-redux';
import { fetchSmurfsData } from '../actions/index';
import SmurfForm from './SmurfForm';
import AddSmurf from './AddSmurf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Get Smurfs</h1>
        <button className='fetch-smurfs' onClick={() => this.props.fetchSmurfsData()}>Fetch Smurf Data</button>
        {this.props.error.length > 0 ? <p>{this.props.error}</p> : ''}
        <AddSmurf />
        {this.props.smurfs.map(smurf => {
          return <SmurfForm smurf={smurf} key={smurf.id}/>
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    isFetching: state.isFetching
  }
}

export default connect(
  mapStateToProps,
  {
    fetchSmurfsData
  }
)(App);

/* <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */