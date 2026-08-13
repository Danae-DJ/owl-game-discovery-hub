const COLLECTION_KEY = "owl-collection";

export function getCollection() {
    const collection = localStorage.getItem(COLLECTION_KEY);

    return collection ? JSON.parse(collection) : [];
}

export function saveGame(game) {
    const collection = getCollection();

    const alreadySaved = collection.some(
        (savedGame) => savedGame.id === game.id
    );

    if (alreadySaved) {
    return {
        collection,
        added: false,
        };
    }

    collection.push(game);

    localStorage.setItem(COLLECTION_KEY, JSON.stringify(collection));

    return {
        collection,
        added: true,
    };

}

export function removeGame(gameId) {
    const collection = getCollection();

    const updatedCollection = collection.filter(
        (game) => game.id !== gameId
    );

    localStorage.setItem(
        COLLECTION_KEY,
        JSON.stringify(updatedCollection)
    );

    return updatedCollection;
}

export function alertMessage(message, scroll = true) {
    const mainElement = document.querySelector("main");

    if (!mainElement) {
        return;
    }

    const alertElement = document.createElement("div");
    alertElement.classList.add("alert");

    const exitElement = document.createElement("span");
    exitElement.classList.add("alert-exit");
    exitElement.textContent = "×";

    alertElement.append(message);
    alertElement.append(exitElement);

    mainElement.prepend(alertElement);

    if (scroll) {
        alertElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    exitElement.addEventListener("click", () => {
        alertElement.remove();
    });
}