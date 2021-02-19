let image = document.querySelector(".display-image");
let header = document.querySelector(".headline");
let description = document.querySelector(".desc");
let img = document.querySelector(".display-image");

let headers = ["Discover innovative ways to decorate","We are available all across the globe", "Manufactured with the best materials"];
let descriptions = [
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
]
let imgsource = ["images/desktop-image-hero-1.jpg", "images/desktop-image-hero-2.jpg", "images/desktop-image-hero-3.jpg"]

var counter = 0;

function rightArrow() {
    counter++;
    if(counter > 2) {
        counter = 0;
    }

    if(counter < 3) {
        header.innerHTML = headers[counter];
        description.innerHTML = descriptions[counter];
        img.src = imgsource[counter];
    }
}

function leftArrow() {
    counter--;
    if(counter < 0) {
        counter = 2;
    }

    if(counter > -1) {
        header.innerHTML = headers[counter];
        description.innerHTML = descriptions[counter];
        img.src = imgsource[counter];
    }
}




let menuIcon = document.querySelector("#menu");
let logo = document.querySelector(".logo-header");
let nav = document.querySelector("#header-navigation-mobile");
let links = document.querySelector(".links");

function showMenu() {

    if (logo.style.display === "none") {
        
        logo.style.display = "block";
        nav.style.position = "absolute";
        nav.style.background = "none";
        links.style.display = "none";
        menuIcon.style.backgroundImage =  "url(images/icon-hamburger.svg)"
        
      } else {

        logo.style.display = "none";
        nav.style.position = "relative";
        nav.style.background = "white";
        links.style.display = "flex";
        menuIcon.style.backgroundImage = "url(images/icon-close.svg)"
      }
}