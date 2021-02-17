import React, { Component } from 'react';
import apiCalls from '../../apiCalls'
import ReservationDisplay from '../Reservations/ReservationDisplay'
import ResForm from '../ResForm/ResForm'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      reservations: []
    }
  }
  updateReservations = () => {
    apiCalls.allReservations()
      .then(data => this.setState({ reservations: data }))
  }

  componentDidMount = () => {
   apiCalls.allReservations()
     .then(data => this.setState({reservations: data}))
  }
  
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ResForm onClick={this.updateReservations}/>
        </div>
        <div className='resy-container'>
          <ReservationDisplay data={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
