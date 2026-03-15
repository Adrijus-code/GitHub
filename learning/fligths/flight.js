async function loadFlights(){
    const res = await fetch("./flights.json")
    const {flights} = await res.json()
    console.log(flights);
    
    flights.filter(flight =>{
        return flight.dayOfWeek === "Mon"
    })
    .forEach(flight =>{
        console.log(`Flight ${flight.flightNumber} takes of at 
        ${flight.departureTime} on ${flight.dayOfWeek} heading to ${flight.destination.city}`)
    })
}

// flight 35443 take of at 11:00 on MON heading to Algiers

loadFlights()

