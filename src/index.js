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
