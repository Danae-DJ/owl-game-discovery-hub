import { loadHeader } from "./header.js";
import { loadFooter } from "./footer.js";
import {
    getComparison,
    removeFromComparison,
    clearComparison,
} from "../services/comparison.js";

function renderComparison() {
    const container = document.querySelector("#comparison");

    const games = getComparison();

    container.innerHTML = `
        <section class="comparison-section">

            <h1>Game Comparison</h1>

            ${
                games.length
                    ? `
                    <div class="comparison-grid">

                        ${games
                            .map(
                                (game) => `
                                <article class="comparison-card">

                                    <h2>${game.name}</h2>

                                    <p>
                                        <strong>Genre:</strong>
                                        ${
                                            game.genres?.length
                                                ? game.genres
                                                      .map(
                                                          (genre) =>
                                                              genre.name
                                                      )
                                                      .join(", ")
                                                : "Unknown"
                                        }
                                    </p>

                                    <p>
                                        <strong>Platforms:</strong>
                                        ${
                                            game.platforms?.length
                                                ? game.platforms
                                                      .map(
                                                          (platform) =>
                                                              platform.name
                                                      )
                                                      .join(", ")
                                                : "Unknown"
                                        }
                                    </p>

                                    <p>
                                        <strong>Rating:</strong>
                                        ${
                                            game.rating
                                                ? game.rating.toFixed(1)
                                                : "Not rated"
                                        }
                                    </p>

                                    <p>
                                        <strong>Description:</strong>
                                        ${
                                            game.summary || "No description available."}
                                    </p>

                                    <button
                                        class="remove-comparison-button"
                                        data-id="${game.id}"
                                    >
                                        Remove
                                    </button>

                                </article>
                            `
                            )
                            .join("")}

                    </div>

                    <button
                        class="clear-comparison-button"
                        id="clear-comparison"
                    >
                        Clear Comparison
                    </button>
                    `
                    : `
                    <p class="empty-comparison">
                        No games selected for comparison.
                    </p>
                    `
            }

        </section>
    `;

    setupComparisonButtons();
}

function setupComparisonButtons() {
    const removeButtons = document.querySelectorAll(
        ".remove-comparison-button"
    );

    removeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const gameId = Number(button.dataset.id);

            removeFromComparison(gameId);
            console.log("The game was removed from Comparison.")
            renderComparison();
        });
    });

    const clearButton = document.querySelector("#clear-comparison");

    if (clearButton) {
        clearButton.addEventListener("click", () => {
            clearComparison();
            console.log("The Comparison is clean.")
            renderComparison();
        });
    }
}

function initComparison() {
    loadHeader();
    loadFooter();
    renderComparison();
}

initComparison();