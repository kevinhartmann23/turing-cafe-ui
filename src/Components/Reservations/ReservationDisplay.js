import React from 'react'
import Reservation from './Reservation'

const ReservationDisplay = ({data, handleClick}) => {
  const reservationInfo = data.map(reservation => {
    return <Reservation props={reservation} handleClick={handleClick} key={reservation.id}/>
  })
  
  return (
    <section className="reservation-display">
      {reservationInfo}
    </section>
  )
}

export default ReservationDisplay;