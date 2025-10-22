// Create a function to render contact header
function renderContactHeader() {
    const contactHeaderContainer = document.createElement("div");
    const contactHeader = document.createElement("h1");

    contactHeaderContainer.className = "container contactHeader";
    contactHeader.id = "contactHeader";

    contactHeader.textContent = "Contact Us";

    contactHeaderContainer.appendChild(contactHeader);

    return contactHeaderContainer;
}