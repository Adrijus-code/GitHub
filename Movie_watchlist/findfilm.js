
const search_btn = document.querySelector('#search-btn')
const search_input = document.querySelector('#search-input')
const movie_display_div = document.querySelector('#movie-display-div')
const add_to_watchlist_btn = document.querySelectorAll('.add-to-watchlist-btn')

search_btn.addEventListener('click', getData)
movie_display_div.addEventListener('click', saveToLocalStorage)

let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

async function getData(){
    const search_input_value = search_input.value.split(' ').join('+')

    const request = await fetch(`http://www.omdbapi.com/?apikey=${MOVIE_WATCHLIST_API_KEY}&s=${search_input_value}`)
    const data = await request.json()
    console.log(data)

    if (data.Search){
        
        const detailPromises = data.Search.map(async (movie) =>{
            const detailResponse = await fetch(`https://www.omdbapi.com/?apikey=${MOVIE_WATCHLIST_API_KEY}&i=${movie.imdbID}`)
            return await detailResponse.json()
        })
        console.log(detailPromises)

        const detailedMovies = await Promise.all(detailPromises)
        console.log(detailedMovies)

        movie_display_div.innerHTML = displayMovies(detailedMovies);
    }else{
        movie_display_div.innerHTML = `<p class="error-msg">Unable to find what you’re looking for. Please try another search.</p>`
    }
}

function saveToLocalStorage(e){
    if(e.target.classList.contains('add-to-watchlist-btn')){
        const movieId = e.target.dataset.imdbid;
        if(!watchlist.includes(movieId)){
            watchlist.push(movieId)
            localStorage.setItem('watchlist', JSON.stringify(watchlist))

            console.log(`Added ${movieId} to watchlist!`)
            e.target.innerText = "Added!"
        }else{
            console.log("Movie already in watchlist")
        }
    }
}

function displayMovies(movies){
    const films = movies.map(movie =>{
        return `<div class="movie">
                        <div class="movie-poster-div">
                            <img src="${movie.Poster === "N/A" ? "./images/placeholder.png" : movie.Poster}" class="movie-poster">
                        </div>
                        <div class="movie-info-div">
                            <div class="movie-title-rating-div">
                                <h2 class="movie-title">${movie.Title}</h2>
                                <div class="movie-rating-div">
                                    <div class="movie-rating-icon-div">
                                        <img src="./images/star.png" class="movie-rating-icon">
                                    </div>
                                    <p class="movie-rating">${movie.imdbRating}</p>
                                </div>
                            </div>
                            <div class="movie-length-genre-div">
                            <p class="movie-length">${movie.Runtime}</p>
                            <p class="movie-genre">${movie.Genre}</p>
                            <div class="add-to-watchlist-div">
                                <div class="plus-icon-div">
                                    <img src="./images/plus.png" class="plus-icon">
                                </div>
                                <button class="add-to-watchlist-btn" onclick=saveToLocalStorage data-imdbid="${movie.imdbID}">Watchlist</button>
                            </div>
                        </div>
                        <p class="movie-plot-p">${movie.Plot}</p>
                        </div>
                    </div>
`
    })
    return films.join('')
}