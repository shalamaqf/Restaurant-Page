// Import css
import "./style.css";

// Import modules 
import { renderHomePage } from "./home";
import { renderMenuPage } from "./menu";
import { renderContactPage } from "./contact";

// Create a function to append a page to content container
function appendPage(page) {
    const contentPage = document.querySelector("#content");

    contentPage.appendChild(page);
}

// Create a function to prevent content duplicate
function isExist(page) {
    const contentPage = document.querySelector("#content");

    if (contentPage.contains(page)){
        return true;
    }

    return false;
}

// Create a function to clear content
function clearContent() {
    const contentPage = document.querySelector("#content");

    contentPage.innerHTML = "";
}

// Create a function to handle home button
function handleHomeButton() {
    const homeButton = document.querySelector(".button.home");
    const homePage = renderHomePage();

    // Attach an event listener
    homeButton.addEventListener('click', () => {
        if(isExist(homePage)) return;
        clearContent();
        appendPage(homePage);
    });
}

// Create a function to handle menu button
function handleMenuButton() {
    const menuButton = document.querySelector(".button.menu");
    const menuPage = renderMenuPage();

    // Attach an event listener
    menuButton.addEventListener('click', () => {
        if(isExist(menuPage)) return;
        clearContent();
        appendPage(menuPage);
    });
}

// Create a function to handle menu button
function handleContactButton() {
    const contactButton = document.querySelector(".button.contact");
    const contactPage = renderContactPage();

    // Attach an event listener
    contactButton.addEventListener('click', () => {
        if(isExist(contactPage)) return;
        clearContent();
        appendPage(contactPage);
    });
}

// Create a function to run the restaurant page
function runRestaurantPage() {
    const homePage = renderHomePage();
    appendPage(homePage);
    handleHomeButton();
    handleMenuButton();
    handleContactButton();
}

runRestaurantPage();

