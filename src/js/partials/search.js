export function renderSearch() {

    const search = document.querySelector(".search-section");

    search.innerHTML = `
        <div class="search-container">

            <h3>Search Games</h3>

            <input
                type="text"
                id="search-input"
                placeholder="Search by title..."
            >

            <select id="genre-filter">
                <option value="">Genre</option>
            </select>

            <select id="platform-filter">
                <option value="">Platform</option>
            </select>

            <select id="sort-filter">
                <option value="">Sort By</option>
            </select>

        </div>
    `;

}