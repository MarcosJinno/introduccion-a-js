function crearUsuario(cantidadIntegrantes) {

    for (let i = 0; i < cantidadIntegrantes; i++) {

        const $integrantes = document.querySelector('#integrantes');

        const $label = document.createElement('label');
        const textoLabel = (document.createTextNode('Edad del integrante # ' + (i + 1)));
        $label.appendChild(textoLabel);

        const $input = document.createElement('input'); //Creo el tag input
        $input.type = "number";
        $input.className = "Edades"

        $integrantes.appendChild($label);
        $integrantes.appendChild($input); //Al elemento "$integrantes" le agrego el elemento hijo "$input"   

    }

}
function mayorEdad() {
    let maxEdad = 0;
    let edades = document.querySelectorAll(".Edades");
    for (let i = 0; i < edades.length; i++) {
        if (edades[i].value > maxEdad) { //Mayor Edades
            maxEdad = Number(edades[i].value);
        }
    }
    return maxEdad;
}

function menorEdad() {
    let minEdad = 200;
    let edades = document.querySelectorAll(".Edades");
    for (let i = 0; i < edades.length; i++) {
        if (edades[i].value < minEdad) { //Menor Edades
            minEdad = Number(edades[i].value);
        }
    }
    return minEdad;
}

function promEdad() {
    let sum = 0;

    let edades = document.querySelectorAll(".Edades");
    for (let i = 0; i < edades.length; i++) {
        sum += Number(edades[i].value);
    }
    return ((sum / edades.length));

}
