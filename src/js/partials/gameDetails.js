import { loadHeader } from "./header.js";
import { loadFooter } from "./footer.js";
import { fetchGameById } from "../services/api.js";

function getGameId() {
    const params = new URLSearchParams(window.location.search);

    return params.get("id");
}

function renderGameDetails(game) {
    const container = document.getElementById("game-details");

    const image = game.cover
        ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`
        : "/images/owl-logo.ico";

    const genre =
        game.genres && game.genres.length
            ? game.genres.map((genre) => genre.name).join(", ")
            : "Unknown";

    const platforms =
        game.platforms && game.platforms.length
            ? game.platforms.map((platform) => platform.name).join(", ")
            : "Unknown";

    container.innerHTML = `
        <article class="game-details-card">

            <img
                class="game-details-image"
                src="${image}"
                alt="${game.name}"
            >

            <div class="game-details-content">

                <h1>${game.name}</h1>

                <p>
                    <strong>Genre:</strong> ${genre}
                </p>

                <p>
                    <strong>Platforms:</strong> ${platforms}
                </p>

                <p>
                    <strong>Rating:</strong>
                    ${game.rating ? game.rating.toFixed(1) : "Not rated"}
                </p>

                <p>
                    <strong>Description:</strong>
                    ${game.summary || "No description available."}
                </p>

                <button
                    class="collection-button"
                    id="add-to-collection"
                    data-game-id="${game.id}"
                >
                    Add to Collection
                </button>

            </div>

        </article>
    `;
}

function setupCollectionButton() {
    const button = document.getElementById("add-to-collection");

    if (!button) {
        return;
    }

    button.addEventListener("click", () => {
        const gameId = button.dataset.gameId;

        console.log("Game selected for collection:", gameId);
    });
}

async function initGameDetails() {
    loadHeader();
    loadFooter();

    const gameId = getGameId();

    console.log("Game ID:", gameId);

    if (!gameId) {
        console.error("No game ID was provided.");
        return;
    }

    try {
        const game = await fetchGameById(gameId);

        console.log("Game details:", game);

        renderGameDetails(game);
        setupCollectionButton();
    } catch (error) {
        console.error(error);

        const container = document.getElementById("game-details");

        container.innerHTML = `
            <p class="error-message">
                Unable to load game details.
                Please try again later.
            </p>
        `;
    }
}

initGameDetails();