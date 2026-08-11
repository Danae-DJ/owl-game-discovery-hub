export async function fetchGames() {

    const response = await fetch("/api/games");

    if (!response.ok) {
        throw new Error("Unable to fetch games.");
    }

    return await response.json();

}

export async function fetchGameById(id) {
    const response = await fetch(`/api/games/${id}`);

    if (!response.ok) {
        throw new Error("Unable to fetch game details.");
    }

    return await response.json();
}