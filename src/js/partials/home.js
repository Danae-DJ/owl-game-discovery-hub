import { renderGameCard } from "./gameCard.js";

export function renderHome(games) {
  const hero = document.querySelector(".hero");

    hero.innerHTML = `
      <div class="hero-content">

        <h2>Discover Your Next Adventure</h2>

        <p>
          Explore thousands of games by genre,
          platform, popularity, developers,
          ratings, and more.
        </p>

        <button class="hero-button">
          Search Games
        </button>

      </div>
    `;

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

                <option value="">Genre</option>

            </select>

            <select id="platform-filter">

                <option value="">Platform</option>

            </select>

            <select id="sort-filter">

                <option value="">Sort By</option>

            </select>

        </div>
    `;

  const featuredGames = document.querySelector(".featured-games");

    featuredGames.innerHTML = `
      <h2>Featured Games</h2>

      <div class="games-grid">

        ${games.map(renderGameCard).join("")}  

      </div>

    `;

}