import { loadHeader } from "./partials/header.js";
import { loadFooter } from "./partials/footer.js";
import { renderHome } from "./partials/home.js";
import { fetchGames } from "./services/api.js";

async function init() {
    loadHeader();

    loadFooter();

    const games = await fetchGames();
    
    console.log(games);
    renderHome(games);
}

init();

console.log("🦉 OWL has started!");