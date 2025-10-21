// Create a function to render DOM elements for restaurant's title
function renderTitle() {
    const titleContainer = document.createElement("div");
    const title = document.createElement("h1");

    titleContainer.className = "titleContainer";
    title.id = "title";

    title.textContent = "Kaerimasu 帰ります";

    titleContainer.appendChild(title);

    return titleContainer;
}

// Create a function to render DOM elements for restaurant's description
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

// Create a function to render DOM elements for restaurant's open time information
function renderOpenTime() {
    const openTimeContainer = document.createElement("div");
    const openTimeHeader = document.createElement("h3");
    const timeInfo = document.createElement("p");

    openTimeContainer.className = "container openTime";
    openTimeHeader.className = "header openTime";
    timeInfo.className = "timeInfo";

    openTimeHeader.textContent = "Open At";
    timeInfo.textContent = "Tuesday - Sunday: 10AM - 10PM";

    openTimeContainer.appendChild(openTimeHeader);
    openTimeContainer.appendChild(timeInfo);

    return openTimeContainer;
}

// Create a function to render DOM elements for restaurant's location
function renderLocation() {
    const locationContainer = document.createElement("div");
    const locationHeader = document.createElement("h3");
    const location = document.createElement("p");

    locationContainer.className = "container location";
    locationHeader.className = "header location";
    location.className = "location";

    locationHeader.textContent = "Location";
    location.textContent = "5 Chome-17-3 Shimokitazawa, Setagaya City, Tokyo 155-0031, Japan";

    locationContainer.appendChild(locationHeader);
    locationContainer.appendChild(location);

    return locationContainer;
}

// Create a function to render the home page
export function renderHomePage() {
    const homeContainer = document.createElement("div");
    homeContainer.className = "homeContainer";

    // Call functions to render the other parts
    const title = renderTitle();
    const about = renderAbout();
    const openTime = renderOpenTime();
    const location = renderLocation();

    // Append to the home page container
    homeContainer.appendChild(title);
    homeContainer.appendChild(about);
    homeContainer.appendChild(openTime);
    homeContainer.appendChild(location);

    return homeContainer;    
}






