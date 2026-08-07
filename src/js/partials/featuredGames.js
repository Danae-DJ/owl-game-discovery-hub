import { renderGameCard } from "./gameCard.js";

export function renderFeaturedGames(games) {

    const featuredGames = document.querySelector(".featured-games");

    featuredGames.innerHTML = `
        <h2>Featured Games</h2>

        <div class="games-grid">

            ${games.map(renderGameCard).join("")}

        </div>
    `;
}

export function renderFeaturedGamesError() {

    const featuredGames = document.querySelector(".featured-games");

    featuredGames.innerHTML = `
        <h2>Featured Games</h2>

        <p class="error-message">
            Unable to load games.
            Please try again later.
        </p>
    `;

}