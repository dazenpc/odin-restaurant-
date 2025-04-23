function aboutPage(){
    document.innerHTML = '';
    const welcomeBoard = document.createElement("div");
    const content = document.querySelector("#content");
    
    content.innerHTML = '';

    content.setAttribute("style", "background-color: teal;");


    welcomeBoard.innerHTML = 
    `
    <section id="about">
    <h2>About Us</h2>
    <p>Welcome to Chicken World! We're passionate about serving delicious, mouth-watering chicken dishes from around the globe.</p>
    <p>Founded in 2020 by a group of food enthusiasts, our mission is to bring people together over the love of crispy, juicy, flavorful chicken.</p>
    <p>Whether you're craving something spicy, savory, or sweet, we've got something for every chicken lover out there!</p>
    </section>
    `
    welcomeBoard.innerHTML += "<br><br>"

    welcomeBoard.setAttribute("style", "font-weight: 1rem; font-size: 25px")

    content.appendChild(welcomeBoard);  

}

export {aboutPage};