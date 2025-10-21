// Create a function to create DOM elements for restaurant's title
function renderTitle() {
    const titleContainer = document.createElement("div");
    const title = document.createElement("h1");

    titleContainer.className = "titleContainer";
    title.className = "title";

    title.textContent = "Kaerimasu 帰ります";

    titleContainer.appendChild(title);

    return titleContainer;
}

// Create a function to create DOM elements for restaurant's description
function renderAbout () {
    const aboutContainer = document.createElement("div");
    const aboutHeader = document.createElement("h3");
    const description = document.createElement("p");

    aboutContainer.className = "container about";
    aboutHeader.className = "header about";
    description.className = "description";

    aboutHeader.textContent = "About"
    description.textContent = "A restaurant that offers home-style cooking in a warm, relaxed setting — creating the comforting feeling of coming home."

    aboutContainer.appendChild(aboutHeader);
    aboutContainer.appendChild(description);

    return aboutContainer;
}






