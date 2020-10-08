// armar una funcion que segun que boton de mas informacion se clickea 
// cargue en el informacion.html la informacion de esa card clickeada


// datos del objeto persona
// imagen
// Fecha de Desaparicion,
// nombre, apellido, localidad, provincia, edad,
// genero, ojos, cabello, tez, contextura, estatura, observaciones

const persona1 = document.querySelector('#persona1');

const elegirPersona = () => {
}

const objPersona1 = {
    nombre: 'Oscar',
    apellido: 'Oscar',
    fechaDesaparicion: '01/01/1990',
    localidad: 'Rosario',
    provincia: 'Santa Fe',
    edad: '30',
    genero: 'Masculino',
    colorOjos: 'Marron',
    colorPelo: 'Negro',
    tez: 'trigueno',
    contextura: 'Mediana',
    estatura: '1.80 mts',
    observaciones: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ad officia? Placeat, similique! Expedita, ex quaerat quibusdam praesentium numquam blanditiis enim placeat fuga hic, non quidem, eaque doloremque alias provident.`
}

const objPersona2 = {
    nombre: 'Oscar',
    apellido: 'Oscar',
    fechaDesaparicion: '01/01/1990',
    localidad: 'Rosario',
    provincia: 'Santa Fe',
    edad: '30',
    genero: 'Masculino',
    colorOjos: 'Marron',
    colorPelo: 'Negro',
    tez: 'trigueno',
    contextura: 'Mediana',
    estatura: '1.80 mts',
    observaciones: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ad officia? Placeat, similique! Expedita, ex quaerat quibusdam praesentium numquam blanditiis enim placeat fuga hic, non quidem, eaque doloremque alias provident.`
}

const imprimir = () => {
    const vista = `
    <figure class="card-imagen">
                        <img src="img/foto1.jpg" alt="">
                    </figure>
                    <h3 class="card-titulo">Fecha de desaparición: </h3>
                    <p class="card-nombre">Nombre: </p>
                    <p class="card-apellido">Apellido: </p>
                    <p class="card-localidad">Localidad: </p>
                    <p class="card-provincia">Provincia: </p>
                    <p class="card-edad">Edad: </p>
                    <p class="card-genero">Género: </p>
                    <p class="color-ojos">Color de ojos: </p>
                    <p class="color-cabello">Color de cabello:</p>
                    <p class="tez">Tez: </p>
                    <p class="contextura">Contextura: </p>
                    <p class="estatura">Estatura: </p>
                    <p class="descripcion">Observaciones: </p>
    `;
    return vista;
}


const traerEventos = () => {
    persona1.addEventListener('click', imprimir);
}