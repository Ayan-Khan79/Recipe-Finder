function createHeaderContent() {
  const header = document.querySelector(".header");
  if (header) {
    header.innerHTML = `
      <div class="header-info">
          <p>
            Find Your Perfect Recipe | Explore thousands of delicious recipes curated just for you. 
           <a href="#" class="discover-more">Discover more</a>
         </p>
          <button class="header-info-button">&times;</button>
      </div>
      <nav>
        <div class="nav-logo-cat-input">
          <h1><a class="logo-link ingreedy" href="index.html"> Ingreedy </a></h1>
          <div class="dropdown">
              <select>
                  <option value="" selected disabled>Categories</option>
                  <option value="popular" class="recipe-link">💗 Popular</option>
                  <option value="cheap" class="recipe-link">💲Cheap</option>
                  <option value="vegetarian" class="recipe-link">🍅 Vegetarian</option>
                  <option value="gluten free" class="recipe-link">🥗 Gluten free</option>
              </select>
          </div>
          <input class="search" placeholder="Start searching...." />
        </div>
      <div class="nav-links"> 
        <a href="#" class="nav-healthy-recipies nav-link"> Healthy recipes </a>
        <a href="#" class="nav-seasonal nav-link"> Seasonal </a>
        <a href="#" class="nav-ingredients nav-link"> Ingredients </a>
      </div>        
      </nav>
      
      `;
  }
}

createHeaderContent();

function inputFocus() {
  const searchInput = document.querySelector(".search");

  document.addEventListener("DOMContentLoaded", () => {
    searchInput.focus();
  });
}

inputFocus();

module.exports = { createHeaderContent, inputFocus };
