import React, {Component} from 'react'
import apiCalls from '../../apiCalls'
import './ResForm.css'

export default class ResForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      date: '',
      time: '',
      number:'',
    }
  }
  
  updateForm = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitReservation = event => {
    const postRes = {
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number
    }
    apiCalls.addReservation(postRes)
    this.props.updateReservations()
  }

  render() {
    const { name, date, time, number} = this.state
    return (
      <form className="reservation-form">
        <input 
          name="name"
          type="text"
          placeholder="name"
          value={name}
          onChange={this.updateForm}
        />
        <input 
          name="date"
          type="text"
          placeholder="date (mm/dd)"
          value={date}
          onChange={this.updateForm}
        />
        <input 
          name="time"
          type="text"
          placeholder="time"
          value={time}
          onChange={this.updateForm}
        />
        <input 
          name="number"
          type="text"
          placeholder="number of guests"
          value={number}
          onChange={this.updateForm}
        />
        <button className="make-reservation" onClick={this.submitReservation}>Make Reservation</button>
      </form>
    )
  }
}