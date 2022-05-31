// Funcion para calcular las notas
const calcular = () => {

    // input del estudiante para cada variable
    let quimica = document.querySelector("#quimica").value;
    let ingles = document.querySelector("#ingles").value;
    let matematica = document.querySelector("#matematica").value;
    let fisica = document.querySelector("#fisica").value;
    let notas = "";
    
    let totalNotas =
        parseFloat(quimica) +
        parseFloat(ingles) +
        parseFloat(matematica) +
        parseFloat(fisica);

    // Funcion para que la nota del estudiante se valore en un porcentaje
    let porcentaje = (totalNotas / 400) * 100;
    if (porcentaje <= 100 && porcentaje >= 80) {
        notas = "Alta";
    } else if (porcentaje <= 79 && porcentaje >= 60) {
        notas = "Media";
    } else if (porcentaje <= 59 && porcentaje >= 40) {
        notas = "Baja";
    } else {
        notas = "Desaprobado";
    }
  
    // Checkeo por datos vacios
    if (quimica == "" || ingles == ""
                || matematica == "" || fisica == "") {
        document.querySelector("#mostrarDatos").innerHTML
            = "Ingrese datos correctos";
    } else {
    
        // Checkear si la condicion pasa o falla
        if (porcentaje >= 39.5) {
        document.querySelector(
            "#mostrarDatos"
        ).innerHTML =
            ` De un total de 400 es ${totalNotas}
            y el porcentaje es ${porcentaje}%. <br>
            Tu nota es ${notas}. Aprobaste. `;
        } else {
        document.querySelector(
            "#mostrarDatos"
        ).innerHTML =
            ` De un total de 400 es ${totalNotas}
            y el porcentaje es  ${porcentaje}%. <br>
            Tu nota es ${notas}. Desaprobaste. `;
        }
    }
    };
    