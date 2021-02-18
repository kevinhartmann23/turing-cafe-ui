const baseUrl = 'http://localhost:3000'

describe('Turing Cafe', () => {
  it('should display all current reservations on page load', () => {
    cy.visit(baseUrl)
      .get('.app-title').should('have.text', 'Turing Cafe Reservations')
     cy.get('.reservation-display article:first')
        .get('h3:first').should('have.text', 'Christie')
        .get('.date').should('contain', 'Date:' )
        .get('.time').should('contain', 'Time:')
        .get('.number').should('contain', 'Guests:')
        .get('button[class=cancel-button]').should('contain', 'Cancel')
  })

  it('should have a form to make a new reservation', () => {
    cy.get('.reservation-form').children().should('have.length', 5)
      .get('input[name=name]').should('have.attr', 'placeholder').should('include', 'name')
      .get('input[name=date]').should('have.attr', 'placeholder').should('include', 'date')
      .get('input[name=time]').should('have.attr', 'placeholder').should('include', 'time')
      .get('input[name=number]').should('have.attr', 'placeholder').should('include', 'number of guests')
      .get('button[class=make-reservation]').should('have.text', 'Make Reservation')
  })
})

describe('Reservation Form', () => {
  it('should be able to make a new reservation', () => {
    cy.intercept(baseUrl, { fixture: 'ressyData'})
    cy
      .get('input[name=name]').type('Kevin Hartmann')
      .get('input[name=date]').type('05/23')
      .get('input[name=time]').type('7:00')
      .get('input[name=number]').type('14')
      .get('button[class=make-reservation]').click()
  })
  
  it('should prompt a notification', () => {
    cy
      .get('.resy-modal h2').should('have.text', 'You have made a reservation for...Kevin Hartmann!')
      .get('button[class=ok-button]').click()
  })

  it('should display new reservation', () => {
    const newReservation = (area) => {
      return `.reservation-card:last ${area}`}
    cy
      .get(newReservation('h3')).should('have.text', 'Kevin Hartmann')
      .get(newReservation('p[class=date]')).should('have.text', 'Date: 05/23')
      .get(newReservation('p[class=time]')).should('have.text', 'Time: 7:00 pm')
      .get(newReservation('p[class=number]')).should('have.text', 'Guests: 14')
  })
})

describe('Delete Current Reservation', () => {
  it('should be able to delete a reservation from the screen and server', () => {
    const resCount = Cypress.$('.reservation-display').children().length
    cy.intercept(`${baseUrl}/23`)
    cy
      .get('.cancel-button:last').click()
      .get('.reservation-display').children().should('have.length', (resCount - 1))
    })
})