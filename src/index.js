// Import modules 
import { renderHomePage as homePage } from "./home";
import { renderMenuPage as menuPage } from "./menu";
import { renderContactPage as contactPage } from "./contact";

// Create a function to append home page to content containers
function appendHomePage() {
    const contentPage = document.querySelector("#content");

    contentPage.appendChild(homePage());
}


// Create a function to append menu page to content containers
function appendMenuPage() {
    const contentPage = document.querySelector("#content");

    contentPage.appendChild(menuPage());
}