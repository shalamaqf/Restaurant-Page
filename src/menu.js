// Import food images
import ramen from "./ramen.jpg";
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

// Create a function to render DOM elements for menu ramen
export function renderRamenMenu() {
    const ramenMenuContainer = document.createElement("div");
    const ramenInfoContainer = document.createElement("div");
    const ramenInfo = document.createElement("p");
    const bonusDrink = document.createElement("p");
    const ramenPictContainer = document.createElement("div");
    const ramenPict = document.createElement("img");

    ramenMenuContainer.className = "containerMenu";
    ramenInfoContainer.className = "container ramen";
    ramenInfo.className = "foodInfo ramen";
    bonusDrink.className = "bonusDrink";
    ramenPictContainer.className = "pict container";
    ramenPict.className = "pict ramen";
    ramenPict.src = ramen;

    ramenInfo.textContent = "Classic Ramen  . . . . . . . . . .  ¥500";
    bonusDrink.textContent = "+ Signature homemade green tea — on the house.";

    ramenInfoContainer.appendChild(ramenInfo);
    ramenInfoContainer.appendChild(bonusDrink);

    ramenPictContainer.appendChild(ramenPict);

    ramenMenuContainer.appendChild(ramenInfoContainer);
    ramenMenuContainer.appendChild(ramenPictContainer);

    return ramenMenuContainer;
}

