// Import modules 
import { renderHomePage } from "./home";
import { renderMenuPage } from "./menu";
import { renderContactPage } from "./contact";

// Create a function to append a page to content container
function appendPage(page) {
    const contentPage = document.querySelector("#content");

    contentPage.appendChild(page);
}
