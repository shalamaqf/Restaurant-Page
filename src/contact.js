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

// Create a class to create an object person
class Person {
    constructor(pos, number, email) {
        this.pos = pos;
        this.number = number;
        this.email = email;
    }

    // Create a function to render contact
    renderPersonContact() {
    const contactContainer = document.createElement("div");
    const contactInfo = document.createElement("h2");
    const contactNumber = document.createElement("p");
    const contactEmail = document.createElement("p");

    contactContainer.className = "contactContainer";
    contactInfo.className = "contactInfo";
    contactNumber.className = "contactNumber";
    contactEmail.className = "contactEmail";

    contactInfo.textContent = this.pos;
    contactNumber.textContent = this.number;
    contactEmail.textContent = this.email;

    contactContainer.appendChild(contactInfo);
    contactContainer.appendChild(contactNumber);
    contactContainer.appendChild(contactEmail);

    return contactContainer; 

    }
}

// Create a function to create manager contact
export function renderManagerContact() {
    const manager = new Person("Manager", "03-3421-7890", "kaerimasuManager@gmail.com");
    const renderManagerContact = manager.renderPersonContact();

    return renderManagerContact;
}

