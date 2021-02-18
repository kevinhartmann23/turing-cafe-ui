import React from 'react'
import './Reservation.css'


const Reservations = ({ props, handleClick }) => {
  const cancelRes = (event) => {
    console.log(event.target.closest('article').id)
    return handleClick(event.target.closest('article').id)
  }

  const { id, name, date, time, number } = props
  return (
    <article className="reservation-card" id={id} key={id}>
      <h3 className="reservation-name">{name}</h3>
      <div className="info-wrapper">
        <p className="date"><span>Date: </span>{date}</p>
        <p className="time"><span>Time: </span>{time} pm</p>
        <p className="number"><span>Guests: </span>{number}</p>
      </div>
      <button className="cancel-button" onClick={cancelRes}>Cancel</button>
    </article>
  )
}

export default Reservations