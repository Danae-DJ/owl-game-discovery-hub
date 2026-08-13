export function loadHeader() {
  const header = document.getElementById("header");

  header.innerHTML = `
    <header class="site-header">

      <div class="logo">
        <a href="/">
        <img src="/images/owl-logo.ico" alt="OWL logo" title="Home">
        </a>
        <h1>OWL</h1>
      </div>

      <!-- Hamburger button (only visible on small screens via CSS)) -->
      <button class="hamburger-btn" id="hamburgerBtn" aria-label="Open menú">
        ☰
      </button>

      <nav class="menu" id="navMenu">
        <a href="/index.html#search">
          <button id="searchBtn">🔍 Search</button>
        </a>

        <a href="/comparison/">
          <button id="comparasionBtn">Comparasion</button>
        </a>

        <a href="/collection/">
          <button id="collectionBtn">
            <img src="/images/owl-collection.ico" alt="mycollection" title="My Collection">
          </button>
        </a>
      </nav>

    </header>
  `;

  // Logic to open/close the menu on click
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");

  hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}
