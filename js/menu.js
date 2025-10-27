/**
 * Menu JavaScript för Street Bites publika webbplats
 * Hanterar laddning och visning av meny från API
 */

class MenuManager {
  constructor() {
    this.apiBaseUrl = "https://dt207g-moment5.onrender.com/api"; // Backend API URL
    this.menuCategories = [];
    this.init();
  }

  init() {
    this.loadMenu();
  }

  async loadMenu() {
    try {
      // Ladda kategorier
      const categoriesResponse = await fetch(
        `${this.apiBaseUrl}/menu/categories`
      );
      const categoriesData = await categoriesResponse.json();

      if (categoriesData.success) {
        this.menuCategories = categoriesData.data;
        await this.loadMenuItems();
        this.renderMenu();
      } else {
        this.showError("Kunde inte ladda meny-kategorier");
      }
    } catch (error) {
      console.error("Fel vid laddning av meny:", error);
      this.showError("Kunde inte ladda meny. Försök igen senare.");
    }
  }

  async loadMenuItems() {
    try {
      // Ladda alla maträtter först
      const itemsResponse = await fetch(`${this.apiBaseUrl}/menu/items`);
      const itemsData = await itemsResponse.json();

      if (itemsData.success) {
        const allItems = itemsData.data.filter((item) => item.isAvailable);

        // Gruppera maträtter per kategori
        this.menuCategories.forEach((category) => {
          category.items = allItems.filter(
            (item) => item.categoryId === category._id
          );
          console.log(
            `Kategori "${category.name}" (${category._id}):`,
            category.items.length,
            "maträtter"
          );
        });
      } else {
        // Om API-anropet misslyckas, sätt tomma items
        this.menuCategories.forEach((category) => {
          category.items = [];
        });
      }
    } catch (error) {
      console.error("Fel vid laddning av maträtter:", error);
      // Fortsätt med tomma items
      this.menuCategories.forEach((category) => {
        category.items = [];
      });
    }
  }

  renderMenu() {
    const menuContainer = document.getElementById("menuCategories");

    if (this.menuCategories.length === 0) {
      menuContainer.innerHTML = `
                <div class="no-menu">
                    <h3>Ingen meny tillgänglig</h3>
                    <p>Vår meny laddas in. Kom tillbaka senare!</p>
                </div>
            `;
      return;
    }

    const menuHTML = this.menuCategories
      .filter((category) => category.isActive && category.items.length > 0)
      .sort((a, b) => a.displayOrder - b.displayOrder)
      .map((category) => this.renderCategory(category))
      .join("");

    menuContainer.innerHTML = menuHTML;
  }

  renderCategory(category) {
    const itemsHTML = category.items
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((item) => this.renderMenuItem(item))
      .join("");

    return `
            <div class="category-card">
                <h3 class="category-title">${category.name}</h3>
                ${
                  category.description
                    ? `<p class="category-description">${category.description}</p>`
                    : ""
                }
                <div class="menu-items">
                    ${itemsHTML}
                </div>
            </div>
        `;
  }

  renderMenuItem(item) {
    const allergensHTML =
      item.allergens && item.allergens.length > 0
        ? `<span class="allergens">Allergener: ${item.allergens.join(
            ", "
          )}</span>`
        : "";

    const prepTimeHTML = item.preparationTime
      ? `<span class="prep-time">⏱️ ${item.preparationTime} min</span>`
      : "";

    const imageHTML = item.image
      ? `<div class="menu-item-image">
           <img src="${item.image}" alt="${item.name}" loading="lazy" />
         </div>`
      : "";

    return `
            <div class="menu-item ${item.image ? "has-image" : "no-image"}">
                ${imageHTML}
                <div class="menu-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.description}</p>
                    ${allergensHTML}
                    ${prepTimeHTML}
                </div>
                <div class="menu-item-price">
                    ${item.price} kr
                </div>
            </div>
        `;
  }

  showError(message) {
    const menuContainer = document.getElementById("menuCategories");
    menuContainer.innerHTML = `
            <div class="error-message">
                <h3>⚠️ ${message}</h3>
                <p>Vår meny är för närvarande inte tillgänglig. Kontakta oss för mer information.</p>
            </div>
        `;
  }
}

// Initialize menu manager when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new MenuManager();
});
