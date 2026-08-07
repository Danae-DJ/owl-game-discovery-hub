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

            <button>
                View Details
            </button>

        </article>
    `;
}