import { renderGameCard } from "./gameCard.js"; //1) import

let allGames = [];

export function renderSearch(games = []) {
    allGames = games;

    const search = document.querySelector(".search-section");

    search.innerHTML = `
        <div class="search-container">

            <h3>Search Games</h3>

            <input
                type="text"
                id="search-input"
                placeholder="Search by title..."
            >

            <select id="genre-filter">
                <option value="">All Genres</option>
            </select>

            <select id="platform-filter">
                <option value="">All Platforms</option>
            </select>

            <select id="sort-filter">
                <option value="">Sort By</option>
                <option value="name-asc">Name: A-Z</option>
                <option value="name-desc">Name: Z-A</option>
                <option value="rating-desc">Rating: Highest</option>
                <option value="rating-asc">Rating: Lowest</option>
            </select>

        </div>
    `;

    populateGenres(games);
    populatePlatforms(games);
    setupSearchEvents();
}

// genres
function populateGenres(games) {
    const genreFilter = document.querySelector("#genre-filter");

    const genres = [];

    games.forEach((game) => {
        game.genres?.forEach((genre) => {
            if (!genres.some((item) => item.id === genre.id)) {
                genres.push(genre);
            }
        });
    });

    genres.sort((a, b) => a.name.localeCompare(b.name));

    genres.forEach((genre) => {
        genreFilter.innerHTML += `
            <option value="${genre.id}">
                ${genre.name}
            </option>
        `;
    });
}

//platforms
function populatePlatforms(games) {
    const platformFilter = document.querySelector("#platform-filter");

    const platforms = [];

    games.forEach((game) => {
        game.platforms?.forEach((platform) => {
            if (!platforms.some((item) => item.id === platform.id)) {
                platforms.push(platform);
            }
        });
    });

    platforms.sort((a, b) => a.name.localeCompare(b.name));

    platforms.forEach((platform) => {
        platformFilter.innerHTML += `
            <option value="${platform.id}">
                ${platform.name}
            </option>
        `;
    });
}


//2) currently events of search 
function setupSearchEvents() {
    const searchInput = document.querySelector("#search-input");
    const genreFilter = document.querySelector("#genre-filter");
    const platformFilter = document.querySelector("#platform-filter");
    const sortFilter = document.querySelector("#sort-filter");

    searchInput.addEventListener("input", applyFilters);
    genreFilter.addEventListener("change", applyFilters);
    platformFilter.addEventListener("change", applyFilters);
    sortFilter.addEventListener("change", applyFilters);
}

//3) apply the filters
function applyFilters() {
    const searchInput = document.querySelector("#search-input");
    const genreFilter = document.querySelector("#genre-filter");
    const platformFilter = document.querySelector("#platform-filter");
    const sortFilter = document.querySelector("#sort-filter");

    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedGenre = genreFilter.value;
    const selectedPlatform = platformFilter.value;
    const selectedSort = sortFilter.value;

    let filteredGames = allGames.filter((game) => {
        const matchesSearch = game.name
            .toLowerCase()
            .includes(searchTerm);

        const matchesGenre =
            !selectedGenre ||
            game.genres?.some(
                (genre) => String(genre.id) === selectedGenre
            );

        const matchesPlatform =
            !selectedPlatform ||
            game.platforms?.some(
                (platform) => String(platform.id) === selectedPlatform
            );

        return (
            matchesSearch &&
            matchesGenre &&
            matchesPlatform
        );
    });

    filteredGames = sortGames(filteredGames, selectedSort);

    renderFilteredGames(filteredGames);
}

//4) ordering the games by sort
function sortGames(games, sortType) {
    const sortedGames = [...games]; //copy

    switch (sortType) {
        case "name-asc":
            return sortedGames.sort((a, b) =>
                a.name.localeCompare(b.name)
            );

        case "name-desc":
            return sortedGames.sort((a, b) =>
                b.name.localeCompare(a.name)
            );

        case "rating-desc":
            return sortedGames.sort(
                (a, b) => (b.rating || 0) - (a.rating || 0)
            );

        case "rating-asc":
            return sortedGames.sort(
                (a, b) => (a.rating || 0) - (b.rating || 0)
            );

        default:
            return sortedGames;
    }
}

//Show filtered results
function renderFilteredGames(games) {
    const featuredGames = document.querySelector(".featured-games");

    if (!games.length) {
        featuredGames.innerHTML = `
            <h2>Featured Games</h2>

            <p class="error-message">
                No games found.
            </p>
        `;

        return;
    }

    featuredGames.innerHTML = `
        <h2>Featured Games</h2>

        <div class="games-grid">
            ${games.map(renderGameCard).join("")}
        </div>
    `;
}