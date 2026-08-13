export function renderHero() {

    const hero = document.querySelector(".hero");

    hero.innerHTML = `
        <div class="hero-content">

            <h2>Discover Your Next Adventure</h2>

            <p>
                Explore thousands of games by genre,
                platform, popularity, developers,
                ratings, and more.
            </p>

            <div class="stars"></div>
            <div class="shooting-star"></div>
            <div class="shooting-star"></div>
            <div class="shooting-star"></div>
            <div class="shooting-star"></div>
            <div class="shooting-star"></div>

        </div>
    `;

}