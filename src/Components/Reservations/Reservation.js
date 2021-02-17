import React from 'react'
import './Reservation.css'

const Reservations = ({ props }) => {
  const { id, name, date, time, number, key } = props
  return (
    <article className="reservation-card" id={id} key={key}>
      <h3 className="reservation-name">{name}</h3>
      <div className="info-wrapper">
        <p className="date"><span>Date: </span>{date}</p>
        <p className="time"><span>Time: </span>{time} pm</p>
        <p className="number"><span>Guests: </span>{number}</p>
      </div>
      <button className="cancel-button">Cancel</button>
    </article>
  )
}

export default Reservations