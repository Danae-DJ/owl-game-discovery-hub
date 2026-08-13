import { loadHeader } from "./header.js";
import { loadFooter } from "./footer.js";
import {
    getCollection,
    removeGame,
    alertMessage,
} from "../services/collection.js";
import {
    getComparison,
    addToComparison,
} from "../services/comparison.js";
import {
    renderGameCard,
    setupGameCardButtons,
} from "./gameCard.js";

function renderCollection() {
    const container = document.querySelector("#collection");

    const games = getCollection();

    container.innerHTML = `
        <section class="collection-section">

            <h2>My Collection</h2>

            <a
                href="/comparison/"
                class="comparison-link"
            >
                Go to Comparison
            </a>

            <div class="collection-grid">
                ${
                    games.length
                    ? games
                    .map(
                        (game) => `
                        <div class="collection-card">

                            ${renderGameCard(game)}

                            <button
                                class="compare-button"
                                data-id="${game.id}"
                            >
                                Add to Comparison
                            </button>

                            <button
                                class="remove-button"
                                data-id="${game.id}"
                                title="Remove"
                            >
                                🗑️❌
                            </button>

                        </div>
                    `
                    )
                    .join("")
                : `
                    <p class="empty-collection">
                        Your collection is empty.
                    </p>
                    `
                }
            </div>

        </section>
    `;

    if (games.length) {
        setupGameCardButtons();
        setupRemoveButtons();
        setupCompareButtons();
    }
}

function setupRemoveButtons() {
    const buttons = document.querySelectorAll(".remove-button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const gameId = Number(button.dataset.id);

            removeGame(gameId);
            console.log("The game was removed from My Collection.")
            //alertMessage("The game was removed from My Collection.");

            renderCollection();
        });
    });
}

function setupCompareButtons() {
    const buttons = document.querySelectorAll(".compare-button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const gameId = Number(button.dataset.id);

            const games = getCollection();
            const game = games.find((item) => item.id === gameId);

            if (!game) {
                return;
            }

            const comparison = getComparison();

            if (comparison.length >= 3) {
                console.log(
                    "You can compare a maximum of 3 games."
                );
                alertMessage("You can compare a maximum of 3 games.")
                return;
            }

            const updatedComparison = addToComparison(game);

            console.log(
                "Games selected for comparison:",
                updatedComparison
            );
            alertMessage("Games selected for comparison")
        });
    });
}

function initCollection() {
    loadHeader();
    loadFooter();
    renderCollection();
}

initCollection();