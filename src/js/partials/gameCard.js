export function renderGameCard(game) {

    const image = game.cover
        ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`
        : "/images/owl-logo.ico";

    const genre =
        game.genres && game.genres.length
            ? game.genres[0].name
            : "Unknown";

    return `
        <article class="game-card">

            <img
                src="${image}"
                alt="${game.name}"
            >

            <h3>${game.name}</h3>

            <p>${genre}</p>

            <button
                class="details-button"
                data-id="${game.id}"
            >
                <span class="details-button-style">
                 View Details
                </span>
            </button>

        </article>
    `;
}

export function setupGameCardButtons() {
    document.addEventListener("click", (event) => {
        const button = event.target.closest(".details-button");

        if (!button) {
            return;
        }

        const gameId = button.dataset.id;

        window.location.href = `/game/?id=${gameId}`;
    });
}