
const watchlist_display_div = document.getElementById('watchlist-display-div');

function init() {
    const savedIds = JSON.parse(localStorage.getItem('watchlist')) || [];

    if (savedIds.length > 0) {
        renderWatchlist(savedIds);
    } else {
        if (watchlist_display_div) {
            watchlist_display_div.innerHTML = `<p class="empty-msg">Your watchlist is looking a bit empty...</p>`;
        }
    }
}

async function renderWatchlist(ids) {
    if (!watchlist_display_div) return;

    try {
        const moviePromises = ids.map(async (id) => {
            const response = await fetch(`https://www.omdbapi.com/?apikey=${MOVIE_WATCHLIST_API_KEY}&i=${id}`);
            return await response.json();
        });

        const watchlistMovies = await Promise.all(moviePromises);
        
        watchlist_display_div.innerHTML = displayMovies(watchlistMovies, true);
    } catch (error) {
        console.error("Fetch failed:", error);
    }
}

function displayMovies(movies, isWatchlistPage = false) {
    return movies.map(movie => {
        const buttonHtml = isWatchlistPage 
            ? `<button class="remove-btn" data-imdbid="${movie.imdbID}">Remove</button>`
            : `<button class="add-to-watchlist-btn" data-imdbid="${movie.imdbID}">Watchlist</button>`;

        const poster = movie.Poster === "N/A" ? "placeholder.png" : movie.Poster;

        return `
            <div class="movie">
                <div class="movie-poster-div">
                    <img src="${poster}" class="movie-poster">
                </div>
                <div class="movie-info-div">
                    <div class="movie-title-rating-div">
                        <h2 class="movie-title">${movie.Title}</h2>
                        <p class="movie-rating">⭐ ${movie.imdbRating}</p>
                    </div>
                    <div class="movie-meta">
                        <span>${movie.Runtime}</span>
                        <span>${movie.Genre}</span>
                        ${buttonHtml}
                    </div>
                    <p class="movie-plot">${movie.Plot}</p>
                </div>
            </div>
        `;
    }).join('');
}

watchlist_display_div.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
        const idToRemove = e.target.dataset.imdbid;
        let currentWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
        
        currentWatchlist = currentWatchlist.filter(id => id !== idToRemove);
        localStorage.setItem('watchlist', JSON.stringify(currentWatchlist));

        if (currentWatchlist.length === 0) {
            watchlist_display_div.innerHTML = `<p>Your watchlist is looking a bit empty...</p>`;
        } else {
            renderWatchlist(currentWatchlist);
        }
    }
});

init();