import { loadHeader } from "./partials/header.js";
import { loadFooter } from "./partials/footer.js";
import { renderHome } from "./partials/home.js";
import { fetchGames } from "./services/api.js";
import { renderFeaturedGames, renderFeaturedGamesError } from "./partials/featuredGames.js";

async function init() {
    loadHeader();
    loadFooter();

    try {
        const games = await fetchGames();

        console.log(games);

        renderHome(games);
        renderFeaturedGames(games);
    } catch (error) {
        console.error(error);

        renderHome([]);
        renderFeaturedGamesError();
    }
}

init();

console.log("🦉 OWL has started!");