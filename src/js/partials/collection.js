import { loadHeader } from "./header.js";
import { loadFooter } from "./footer.js";
import {
    getCollection,
    removeGame,
    alertMessage,
} from "../services/collection.js";
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

            <div class="collection-grid">
                ${
                    games.length
                    ? games
                    .map(
                        (game) => `
                        <div class="collection-card">
                            ${renderGameCard(game)}

                            <button
                                class="remove-button"
                                data-id="${game.id}"
                            >
                                Remove from Collection
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

function initCollection() {
    loadHeader();
    loadFooter();
    renderCollection();
}

initCollection();