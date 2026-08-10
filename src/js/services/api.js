export async function fetchGames() {

    const response = await fetch("/api/games");

    if (!response.ok) {
        throw new Error("Unable to fetch games.");
    }

    return await response.json();

}