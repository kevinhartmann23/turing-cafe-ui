import React from 'react'

export default function Confirm({name, onClick}) {
  return (
    <div className="resy-modal">
      <article>
        <h2>You have made a reservation for...<br/>{name}!</h2>
        <button className="ok-button" onClick={onClick}>OK!</button>
      </article>
    </div>
  )
}