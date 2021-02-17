import React from 'react'
import Reservation from './Reservation'

const ReservationDisplay = ({data}) => {
  const reservationInfo = data.map(reservation => {
    return <Reservation props={reservation} key={reservation.id}/>
  })
  
  return (
    <section className="reservation-display">
      {reservationInfo}
    </section>
  )
}

export default ReservationDisplay;