/* CREAMOS UN EVENTO JUNTO CON SU TRIGGER */


/* DECLARAMOS PERSINAJES DE LA OBRA */
var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");


function animateBars() {
    console.log("Clicked!");
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");

    var menuList = document.getElementById(`menuList`);

    console.log(menuList);

    if (menuList.classList.contains(`active`)) {
        menuList.classList.remove(`active`)
    } else {
        menuList.classList.add(`active`);
    }
}

var barsMenu = document.querySelector(".bars__menu")

barsMenu.addEventListener("click", animateBars);

/* 
    var ??? = (si a == b)? cambiar a `???` : sino a `???`

    Operador ternario, que dicta que var next color = (si current es igual a original) ? entonces cambiar el valor al color blanco, de lo contrario : cambiar al original 

*/

document.addEventListener(`keyup`, e => {

    if (e.target.matches(`#buscador`)) {
        document.querySelectorAll(`.wire-elements`).forEach(element => {

            element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ? element.classList.remove(`filtro`)
            : element.classList.add(`filtro`)
        })
    }
})
