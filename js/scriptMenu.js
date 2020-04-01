document.getElementById("btnMenu").addEventListener('click', menuDeroulant);

function menuDeroulant() {

    let menuHamburger = document.getElementById("myTopnav");

    if (menuHamburger.className === "topnav") {
        menuHamburger.className += " responsive";
    } 
    else {
        menuHamburger.className = "topnav";
    }

}