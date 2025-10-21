// Import food images
import ramenPict from "./ramen.jpg";
import sushiPict from "./sushi.jpg";
import curryPict from "./curry.jpg";

// Create a function to render DOM elements for menu as header
function renderMenuHeader() {
    const menuHeaderContainer = document.createElement("div");
    const menuHeader = document.createElement("h1");

    menuHeaderContainer.className = "container menuHeader";
    menuHeader.id = "menu"

    menuHeader.textContent = "Menu";

    menuHeaderContainer.appendChild(menuHeader);

    return menuHeaderContainer;
}
