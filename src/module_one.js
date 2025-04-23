function menuPage(){
    document.innerHTML = '';
    const welcomeBoard = document.createElement("div");
    const content = document.querySelector("#content");
    
    content.innerHTML = '';

    content.setAttribute("style", "background-color: teal;");


    welcomeBoard.innerHTML = 
    `    <h1>Delicious Chicken Dishes</h1>
        <ul>
            <li>Grilled Chicken Breast</li>
            <li>Chicken Alfredo</li>
            <li>Chicken Tikka Masala</li>
            <li>Buffalo Chicken Wings</li>
            <li>Chicken Parmesan</li>
            <li>Lemon Herb Roasted Chicken</li>
            <li>Honey Garlic Chicken</li>
            <li>Chicken and Waffles</li>
            <li>Teriyaki Chicken</li>
            <li>Chicken Fajitas</li>
        </ul>`
    welcomeBoard.innerHTML += "<br><br>"

    welcomeBoard.setAttribute("style", "font-weight: 1rem; font-size: 25px")

    content.appendChild(welcomeBoard);  

}

export {menuPage};