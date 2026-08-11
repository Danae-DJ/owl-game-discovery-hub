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

      <nav>

        <button id="searchBtn">
          🔍 Search
        </button>

        <button id="collectionBtn">
          <img src="/images/owl-collection.ico" alt="mycollection" title="My Collection">
        </button>

      </nav>

    </header>
  `;
}

