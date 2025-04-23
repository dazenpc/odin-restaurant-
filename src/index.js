// Main page load in index.js

import "./styles.css"

function homePage(){
    const welcomeBoard = document.createElement("div");
    const content = document.querySelector("#content");

    content.setAttribute("style", "background-color: teal;");

    welcomeBoard.innerHTML = 
    `Welcome to <span>Varutha Kozhi Kadai</span>, your ultimate destination for authentic South Indian-style fried chicken! Here, every piece of chicken is marinated with traditional spices, deep-fried to golden perfection, and served with the warmth and flavor of home. “Varutha Kozhi” isn’t just a dish—it’s an emotion, a celebration of bold flavors and time-honored recipes that have been loved for generations. Whether you're craving a spicy snack or a hearty meal, our kadai is always sizzling and ready. Come, take a seat, and let your taste buds travel through the streets of South India—**one crispy bite at a time!** 🍗🔥🌿`;

    welcomeBoard.innerHTML += "<br><br>"

    welcomeBoard.innerHTML += 
    "At Varutha Kozhi Kadai, we believe that great food isn’t just about taste—it’s about experience, connection, and creating moments to remember. Our kitchen is a celebration of South India’s vibrant food culture, where every spice has a story, and every recipe is rooted in tradition. Whether it’s the fiery crunch of our signature fried chicken, the comforting layers of a freshly made parotta, or the aromatic steam rising from a perfectly spiced biryani, every dish is crafted with passion, precision, and a whole lot of love. We use only the freshest ingredients, grind our own masalas, and cook everything the traditional way—slow, soulful, and straight from the heart. Whether you're here for a family dinner, a quick bite with friends, or just to satisfy that irresistible craving, we’re here to make you feel right at home. So sit back, relax, and let us take you on a flavorful journey—one sizzling plate at a time. Welcome again to Varutha Kozhi Kadai, where the kadai never cools down and the flavors never hold back! 🍗🔥🍛🌿";

    welcomeBoard.setAttribute("style", "font-weight: 1rem; font-size: 25px")

    content.appendChild(welcomeBoard);  


    const timingBoard = document.createElement("div");
    const timing = document.createElement("div");

    timing.innerText = 
    `
    TIMING:::
    Monday    ---    10:00-12:00
    Tuesday    ---    10:00-14:00
    Wednesday  ---    10:00-12:00
    Thursday   ---    10:00-14:00
    Friday     ---    10:00-16:00
    Saturday   ---    10:00-11:00
    Sunday     ---    ***LEAVE***
    `

    timing.setAttribute("style", "font-style: italic; font-weight: bold; border: 1px solid black; padding: 1px")
    timingBoard.appendChild(timing);
    timingBoard.setAttribute("style", "margin: 0 auto;");

    content.appendChild(timingBoard);

    const contactBoard = document.createElement("div");

    contactBoard.innerText = 
    `Fake Contact Details:
    Address: 123 Spice Street, Chennai, Tamil Nadu, India

    Phone: +91 44 1234 5678

    Email: contact@varuthakozhikadai.com

    Follow Us on Social Media:

    Instagram: @VaruthaKozhiKadai

    Facebook: /VaruthaKozhiKadai`;

    content.appendChild(contactBoard);
}


homePage();