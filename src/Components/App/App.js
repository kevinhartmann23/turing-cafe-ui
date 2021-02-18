import React, { Component } from 'react';
import apiCalls from '../../apiCalls'
import ReservationDisplay from '../Reservations/ReservationDisplay'
import ResForm from '../ResForm/ResForm'
import Confirm from '../ResForm/Confirm'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      reservations: [],
      confirmDisplay: false,
    }
  }
 
  handleClick = (info) => {
     apiCalls.addReservation(info)
      .then(response => response.json())
       .then(data => this.setState({ reservations: [...this.state.reservations, data], confirmDisplay: true  }))
      .catch(error => console.log(error))
  }

  resetModal = () => {
    this.setState({confirmDisplay: false})
  }

  handleCancel = (id) => {
    apiCalls.deleteReservation(id)
      .then(response => response.json())
      .then(data => {
        this.setState({ reservations: data})
      })
      .catch(error => console.log(error))
  }

  componentDidMount = () => {
   apiCalls.allReservations()
     .then(data => this.setState({reservations: data}))
     .catch(error => console.log(error))
  }
  
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        {this.state.confirmDisplay && <Confirm onClick={this.resetModal}name={this.state.reservations[this.state.reservations.length - 1].name}/>}
        <div className='resy-form'>
          <ResForm handleClick={this.handleClick}/>
        </div>
        <div className='resy-container'>
          <ReservationDisplay data={this.state.reservations} handleClick={this.handleCancel}/>
        </div>
      </div>
    )
  }
}

export default App;
