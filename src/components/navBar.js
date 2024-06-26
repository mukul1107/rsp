function createNav() {
    const nav = document.createElement("nav");
    nav.classList.add("nav")

    // nav divs
    const divLeft = document.createElement("div")
    divLeft.classList.add("left")
    const divRight = document.createElement("div")
    divRight.classList.add("right")



    // left div title
    const h1 = document.createElement("h1");
    h1.innerText = "RSP Cafe"
    divLeft.append(h1)

    // Right div buttons

    const home = document.createElement("a")
    const about = document.createElement("a")
    const contact = document.createElement("a")

    // Content for right div's span
    home.innerText = "Home";
    home.href = "index.html"

    about.innerText = "About";
    about.href = "about.html";

    contact.innerText = "Contact";
    contact.href = "contact.html"
    // adding the spans in the right div
    // divRight.appendChild(home)
    // divRight.appendChild(about)
    // divRight.appendChild(contact)
    divRight.append(home,about,contact)

    // left and right append into nav

    nav.appendChild(divLeft);
    nav.appendChild(divRight);

    // Return the nav

    return nav;
}

export default createNav;