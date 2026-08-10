import { renderHero } from "./hero.js";
import { renderSearch } from "./search.js";

export function renderHome(games = []) {

    renderHero();

    renderSearch(games);

}