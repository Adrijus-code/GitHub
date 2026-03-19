let all_flights = []
const tbody =  document.querySelector('tbody')

async function loadFlights(){
    const res = await fetch("./flights.json")
    const {flights} = await res.json()
    all_flights = flights
}

// flight 35443 take of at 11:00 on MON heading to Algiers

await loadFlights()




console.log(all_flights[0]);


function displayFlights(flights){
    let str = ""
    flights.forEach(flight =>{
        str += displayFlight(flight)
    })
    tbody.innerHTML = str
}

displayFlights(all_flights)


function displayFlight(flight){
    const {flightNumber, dayOfWeek, departureTime, destination : {code, city, country, region}, pilot, copilot} = flight

    return `    <tr>
                    <td>${flightNumber}</td>
                    <td>${dayOfWeek}</td>
                    <td>${departureTime}</td>
                    <td>${code}(${city},${country}), region= ${region}</td>
                    <td>${pilot}</td>
                    <td>${copilot}</td>
                    </tr>`
                }
                
                // <td>${destination.code}(${destination.city},${destination.country}), region= ${destination.region}</td>
// {
//     "flightNumber": "QR213",
//     "dayOfWeek": "Tue",
//     "departureTime": 1750,
//     "destination": {
//         "code": "ALG",
//         "city": "Algiers",
//         "country": "Algeria",
//         "region": 2
//     },
//     "pilot": {
//         "id": 10133,
//         "lastName": "Sherwood",
//         "firstName": "Joseph K."
//     },
//     "copilot": {
//         "id": 10175,
//         "lastName": "Litchfield",
//         "firstName": "Thomas R."
//     }
// },