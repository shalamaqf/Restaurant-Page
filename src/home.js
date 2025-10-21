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







