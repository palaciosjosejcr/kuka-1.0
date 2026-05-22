async function iniciarProceso(){

    let bloque = document.getElementById("bloque");
    let brazo = document.querySelector(".brazo");

    bloque.style.left = "0px";

    // Avanza hasta sensor de orden
    await moverBloque(150);

    console.log("Sensor de orden OK");

    // Avanza hasta sensor color
    await moverBloque(400);

    console.log("Leyendo color...");

    let color = ["rojo","azul","verde"][Math.floor(Math.random()*3)];

    if(Math.random()<0.2){

        // Descarte
        bloque.style.transition="1s";
        bloque.style.transform="translateY(80px)";

        return;
    }

    // Robot toma pieza
    brazo.style.transition="1s";
    brazo.style.transform="rotate(-45deg)";

    await esperar(1000);

    bloque.style.display="none";

    brazo.style.transform="rotate(45deg)";

    console.log("Pieza colocada en contenedor " + color);
}

function moverBloque(destino){

    return new Promise(resolve=>{

        let bloque=document.getElementById("bloque");

        bloque.style.transition="3s";
        bloque.style.left=destino+"px";

        setTimeout(resolve,3000);
    });
}

function esperar(ms){
    return new Promise(r=>setTimeout(r,ms));
}
