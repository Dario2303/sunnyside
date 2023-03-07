const button = document.querySelector("#button")
const menu = document.querySelector(".menu-mobile")

let valor = 0

/*open and close menu by pressing the button*/
OpenMenu()

function OpenMenu () {
    button.addEventListener("click", abrirMenu);
}

    function abrirMenu () {
        if (valor === 0 && window.innerWidth <= "375") {
            menu.style.height = "30.5rem";
            valor = 1;
            return;
        }
        if (valor !== 0) {
            menu.style.height = "0";
            valor = 0;
        }
    }

    /*close menu in desktop mode*/
closeMenu()
    function closeMenu () {
        addEventListener("resize", cerrar)
    }
    function cerrar () {
        if ( window.innerWidth > "375" && valor === 1) {
            menu.style.height = "0";
            valor = 0;
        }
    }