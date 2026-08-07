export async function fetchGames() {
  try {
    const response = await fetch("http://localhost:3000/api/games");

    if (!response.ok) {
      throw new Error("Unable to fetch games.");
    }

    return await response.json();

  } catch (error) {

    console.error(error);

    return [];
  }
}