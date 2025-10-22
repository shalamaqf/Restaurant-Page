// Import food images
import ramen from "./ramen.jpg";
import sushi from "./sushi.jpg";
import curry from "./curry.jpg";

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

// Create a function to render DOM elements for ramen menu
function renderRamenMenu() {
    const ramenMenuContainer = document.createElement("div");
    const ramenInfoContainer = document.createElement("div");
    const ramenInfo = document.createElement("p");
    const menuDesc = document.createElement("p");
    const ramenPictContainer = document.createElement("div");
    const ramenPict = document.createElement("img");

    ramenMenuContainer.className = "containerMenu";
    ramenInfoContainer.className = "container ramen";
    ramenInfo.className = "foodInfo ramen";
    menuDesc.className = "menuDesc ramen";
    ramenPictContainer.className = "containerPict";
    ramenPict.className = "pict ramen";
    ramenPict.src = ramen;

    ramenInfo.textContent = "Classic Ramen  . . . . . . . . . .  ¥500";
    menuDesc.textContent = "Classic ramen with a soft-boiled egg, tender meat slices (chicken, beef, or pork), mushrooms, crispy nori, and other toppings that pair perfectly with the broth. + Signature homemade green tea — on the house.";

    ramenInfoContainer.appendChild(ramenInfo);
    ramenInfoContainer.appendChild(menuDesc);

    ramenPictContainer.appendChild(ramenPict);

    ramenMenuContainer.appendChild(ramenInfoContainer);
    ramenMenuContainer.appendChild(ramenPictContainer);

    return ramenMenuContainer;
}

// Create a function to render DOM elements for sushi menu
function renderSushiMenu() {
    const sushiMenuContainer = document.createElement("div");
    const sushiInfoContainer = document.createElement("div");
    const sushiInfo = document.createElement("p");
    const menuDesc = document.createElement("p");
    const sushiPictContainer = document.createElement("div");
    const sushiPict = document.createElement("img");

    sushiMenuContainer.className = "containerMenu";
    sushiInfoContainer.className = "container sushi";
    sushiInfo.className = "foodInfo sushi";
    menuDesc.className = "menuDesc sushi";
    sushiPictContainer.className = "containerPict";
    sushiPict.className = "pict sushi";
    sushiPict.src = sushi;

    sushiInfo.textContent = "Homestyle Sushi  . . . . . . . . . .  ¥900";
    menuDesc.textContent = "A complete plate of homemade sushi rolls, accompanied by assorted side dishes. + Signature homemade green tea — on the house."

    sushiInfoContainer.appendChild(sushiInfo);
    sushiInfoContainer.appendChild(menuDesc);

    sushiPictContainer.appendChild(sushiPict);

    sushiMenuContainer.appendChild(sushiInfoContainer);
    sushiMenuContainer.appendChild(sushiPictContainer);

    return sushiMenuContainer;
}

// Create a function to render DOM elements for curry menu
export function renderCurryMenu() {
    const curryMenuContainer = document.createElement("div");
    const curryInfoContainer = document.createElement("div");
    const curryInfo = document.createElement("p");
    const menuDesc = document.createElement("p");
    const curryPictContainer = document.createElement("div");
    const curryPict = document.createElement("img");

    curryMenuContainer.className = "containerMenu";
    curryInfoContainer.className = "container currys";
    curryInfo.className = "foodInfo curry";
    menuDesc.className = "menuDesc curry";
    curryPictContainer.className = "containerPict";
    curryPict.className = "pict curry";
    curryPict.src = curry;

    curryInfo.textContent = "Special Curry  . . . . . . . . . .  ¥900";
    menuDesc.textContent = "A warm bowl of curry featuring special spices, paired with steamed rice, and crispy tender meat (chicken, beef, or pork). + Signature homemade green tea — on the house."

    curryInfoContainer.appendChild(curryInfo);
    curryInfoContainer.appendChild(menuDesc);

    curryPictContainer.appendChild(curryPict);

    curryMenuContainer.appendChild(curryInfoContainer);
    curryMenuContainer.appendChild(curryPictContainer);

    return curryMenuContainer;
}


