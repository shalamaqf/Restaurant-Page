// Import modules 
import { renderHomePage as homePage } from "./home";
import { renderMenuPage as menuPage } from "./menu";
import { renderContactPage as contactPage } from "./contact";

// Create a function to appen home page to content containers
function appendHomePage() {
    const contentPage = document.querySelector("#content");

    contentPage.appendChild(homePage());
}