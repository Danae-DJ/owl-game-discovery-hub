const TWITCH_TOKEN_URL = "https://id.twitch.tv/oauth2/token";

let accessToken = null;

export async function getAccessToken() {
  if (accessToken) {
    return accessToken;
  }

  const response = await fetch(
    `${TWITCH_TOKEN_URL}?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
    {
      method: "POST",
    }
  );

  if (!response.ok) {
    const error = await response.text();
    console.log(error);

    throw new Error(error);
  }

  const data = await response.json();

  accessToken = data.access_token;

  return accessToken;
}

export async function getGames() {
  const token = await getAccessToken();

  const response = await fetch("https://api.igdb.com/v4/games", {
    method: "POST",
    headers: {
      "Client-ID": process.env.TWITCH_CLIENT_ID,
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },

    body: `
      fields
        name,
        rating,
        cover.image_id,
        genres.name,
        platforms.name;

      limit 10;
    `,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return await response.json();
}