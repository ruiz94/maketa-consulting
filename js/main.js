AOS.init();
let ubicacionPrincial = window.pageYOffset;

window.addEventListener("scroll", ()=>{
    let desplazamientoActual = window.pageYOffset;
    // console.log(nav);
    let nav = document.querySelector("nav");
    if(ubicacionPrincial >= desplazamientoActual){
        nav.style.top = "0";
    }else{
        nav.style.top = "-100px";
    }
    ubicacionPrincial = desplazamientoActual;
        
})

/** Menú */
let enlacesHeader = document.querySelector(".enlaces-header");
let semaforo = true;

document.querySelector('.hamburguesa').addEventListener("click", () => {
    if(semaforo){
        document.querySelector('.hamburguesa').style.color = "#fff";
        semaforo = false;
    }else{
        document.querySelector('.hamburguesa').style.color = "#000";
        semaforo = true;

    }
    enlacesHeader.classList.toggle("menudos")
})