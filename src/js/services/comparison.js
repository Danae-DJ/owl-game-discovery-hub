const COMPARISON_KEY = "owl-comparison";

export function getComparison() {
    const comparison = localStorage.getItem(COMPARISON_KEY);

    return comparison ? JSON.parse(comparison) : [];
}

export function addToComparison(game) {
    const comparison = getComparison();

    const alreadySelected = comparison.some(
        (selectedGame) => selectedGame.id === game.id
    );

    if (alreadySelected) {
        return comparison;
    }

    comparison.push(game);

    localStorage.setItem(
        COMPARISON_KEY,
        JSON.stringify(comparison)
    );

    return comparison;
}

export function removeFromComparison(gameId) {
    const comparison = getComparison();

    const updatedComparison = comparison.filter(
        (game) => game.id !== gameId
    );

    localStorage.setItem(
        COMPARISON_KEY,
        JSON.stringify(updatedComparison)
    );

    return updatedComparison;
}

export function clearComparison() {
    localStorage.removeItem(COMPARISON_KEY);
}