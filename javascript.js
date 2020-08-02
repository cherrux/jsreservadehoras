
function mensajeReserva() {
    const rut = document.getElementById("rut").value;
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;

    const edad = document.getElementById("edad").value;

    const correo = document.getElementById("correo").value;
    const especialidades = document.getElementById("especialidades").value;

    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;


    // crea el mensaje tanto como alert como html
    let resultadoReservar = `Estimado(a) ${nombre} ${apellidos} , su hora para ${especialidades} ha sido reservada para el día ${fecha} a las ${hora}. Además, se le envió un mensaje a su correo ${correo} con el detalle de su cita. Gracias por preferirnos.`;
    alert(`Estimado(a) ${nombre} ${apellidos} , su hora para ${especialidades} ha sido reservada para el día ${fecha} a las ${hora}. Además, se le envió un mensaje a su correo ${correo} con el detalle de su cita. Gracias por preferirnos.`);

    console.log(resultadoReservar);

    //pasar resultado reserva a HTML en id resultado
    document.getElementById("resultado").innerHTML = resultadoReservar;
    return false;

}
function validar() {
    const rut = document.getElementById("rut").value;
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;

    const edad = document.getElementById("edad").value;

    const correo = document.getElementById("correo").value;
    const especialidades = document.getElementById("especialidades").value;

    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    //expresiones regulares y validaciones
    const rutExp = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/gim;
    let validaRut = rutExp.test(rut);
    console.log(validaRut);

    const nombreExp = /^[a-zA-Z\ üÜ'áéíóúÁÉÍÓÚñÑ\s]*$/;
    let validaNombre = nombreExp.test(nombre);
    console.log(validaNombre);

    let validaApellidos = nombreExp.test(apellidos);
    console.log(validaApellidos);


    const edadExp = /^[0-9]{1,3}$/;
    let validaEdad = edadExp.test(edad);
    console.log(validaEdad);

    const correoExp = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
    let validaCorreo = correoExp.test(correo);
    console.log(validaCorreo);

    const fechaClExp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    let validaFecha = fechaClExp.test(fecha);
    console.log(validaFecha);

    const horaExp = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    let validaHora = horaExp.test(hora);
    console.log(validaHora);

    // validaciones de obligatoriedad 

    if ((rut === "") || (nombre === "") || (apellidos === "") || (edad === "") || (correo === "") || (especialidades === "") || (fecha === "") || (hora === "")) {
        alert("todos los campos son obligatorios, completar!");
        return false;
    }
    // mensajes de validaciones de formatos con expresiones regulares 
    else if (validaRut !== true) {
        alert("formato de rut erroneo, correguir!");
        return false;
    }
    else if (validaNombre !== true) {
        alert("solo debe tener letras en nombre y caracteres validos");
        return false;
    }
    else if (validaApellidos !== true) {
        alert("solo debe tener letras en apellidos  y caracteres validos");
        return false;
    }
    else if (validaEdad !== true) {
        alert("solo debe tener numeros la edad");
        return false;
    }
    else if (validaCorreo !== true) {
        alert("Ingresar formato correo valido xxx@yyy.xx");
        return false;
    }
    else if (validaFecha !== true) {
        alert("Ingresar una fecha valida");
        return false;
    }
    else if (validaHora !== true) {
        alert("Ingresar una Hora valida");
        return false;
    }
    else {
        mensajeReserva();
        return false;
    }

}
