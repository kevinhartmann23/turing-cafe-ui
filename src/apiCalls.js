const baseUrl = "http://localhost:3001/api/v1/reservations"

const apiCalls = {
  allReservations() {
    return fetch(baseUrl)
      .then(response => response.json())
      .catch(error => console.log(error))
  },

  addReservation(info) {
    const options = {
      method: "POST",
      body: JSON.stringify(info)
    }
    return fetch(baseUrl, options)
      .catch(error => console.log(error))
  }
}

export default apiCalls