let all_flights = []
const tbody =  document.querySelector('tbody')
const showAllFlightsBtn = document.querySelector('#show-all-flights-btn')
const applyFiltersBtn = document.querySelector('#apply-filters-btn')
const cityInput = document.querySelector('#City')
const countryInput = document.querySelector('#country')
const regionInput = document.querySelector('#region')


async function loadFlights(){
    const res = await fetch("./flights.json")
    const {flights} = await res.json()
    all_flights = flights
}

// flight 35443 take of at 11:00 on MON heading to Algiers

await loadFlights()

showAllFlightsBtn.addEventListener('click', ()=> displayFlights(all_flights))
applyFiltersBtn.addEventListener('click', filterByCity)

// true && true ---> true
// true && false ---> false
// false && true ---> false
// false && false  ---> false

// true  || true ---> true 
// false || true ---> true 
// true  || false---> true 
// false || false---> false


// console.log("2" == 2);
// console.log("2" === 2);


function filterByCity(){
    
    let filtered = all_flights.filter(flight =>{
        console.log(regionInput.value);
        console.log(flight.destination.region);
        return  (cityInput.value == ""  || flight.destination.city === cityInput.value) && 
                (countryInput.value == "" || flight.destination.country === countryInput.value ) && 
                (regionInput.value == "" || flight.destination.region == regionInput.value ) 
       
    })
    displayFlights(filtered)
}

function displayFlights(flights){
    let str = ""
    flights.forEach(flight =>{
        str += displayFlight(flight)
    })
    tbody.innerHTML = str
}

function displayFlight(flight){
    const {flightNumber, dayOfWeek, departureTime, destination : {code, city, country, region}, pilot, copilot} = flight

    return `    <tr>
                    <td>${flightNumber}</td>
                    <td>${dayOfWeek}</td>
                    <td>${departureTime}</td>
                    <td>${code}(${city},${country}), region= ${region}</td>
                    <td>pilot</td>
                    <td>copilot</td>
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