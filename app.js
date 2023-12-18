/* Objeto de usuario */
var persona = {
    nombre: "",
    edad: "",
    familia: "",
    cualidades: "",
    linaje: "",
    casa: "",
    animalPatronus: "",
    clase: "",
    profesorClase: ""
}

var profesoresClases = {

    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesor Maria Umbridge",
    pociones: "Profesor Liliana McGonagall",
    encantamientos: "Profesora Jackie",
    defensaContraLasArtesOscuras: "Profesor Robinson Snape",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout"

}

/* Funcion para ingresar el sonido */
document.addEventListener('DOMContentLoaded', function() {
    var sonido = document.getElementById('sonido');
    var reproducir = document.getElementById('reproducir');

    reproducir.addEventListener('click', function() {
        sonido.play();
    });
});

/* Funcion para ocultar el inicio */
function ocultar(){
    document.getElementById("inicio").classList.add('display-none')
    document.querySelector(`#contenido`).style.display = `block`
}


/* funcion para pasar a punto tres */
function prueba(){
/* Formulario */
    let edad1 = parseInt(document.getElementById("edad2").value)
    persona.edad = edad1
    document.getElementById("edad2").value = ""

    var nombre1 = document.getElementById("nombre").value
    persona.nombre = nombre1
    document.getElementById("nombre").value = ""

    var familia1 = document.getElementById("familia").value
     persona.familia = familia1
    document.getElementById("familia").value = ""

    var cualidades1 = document.getElementById("seleccion_cualidades").value
    persona.cualidades = cualidades1;
    document.getElementById("seleccion_cualidades").value = ""

    var linaje1 = document.getElementById("seleccion_linaje").value
    persona.linaje = linaje1
    document.getElementById("seleccion_linaje").value = ""

    if(persona.edad < 11){
        alert("No tiene la edad necesaria para ingresar a Hogwarts")
    }
    else if(persona.edad >= 11){
        alert(`Bienvenido/a a Hogwarts ${persona.nombre} !`)
        document.querySelector(`#contenido`).style.display = `none`
        document.querySelector(`#sombrero`).style.display = `block`
    }

    document.getElementById("bienvenida").innerText = `Bienvenido/a a Hogwarts ${persona.nombre}!`

    if(persona.cualidades == "Valor, fuerza, audacia"){
        document.getElementById("casa").innerText = `Gryffindor`
        persona.casa = "Gryffindor"
        document.getElementById('div_casa').innerHTML = `<img id="imagen_casa" src="img/Gryffindor-Logo.png" class="imagen_casa" alt="">`
    }

    else if(persona.cualidades == "Justicia, Lealtad, Paciencia" && persona.linaje == "mastizo" || persona.linaje == "muggle"){
        document.getElementById("casa").innerText = `Hufflepuff`
        persona.casa = "Hufflepuff"
        document.getElementById('div_casa').innerHTML = `<img id="imagen_casa" src="img/hufflepuff.png" class="imagen_casa" alt="">`
    }

    else if(persona.cualidades == "Creatividad, Erudición, Inteligencia"){
        document.getElementById("casa").innerText = `Ravenclaw`
        persona.casa = "Ravenclaw"
        document.getElementById('div_casa').innerHTML = `<img id="imagen_casa" src="img/ravenclaw.png" class="imagen_casa" alt="">`
    }

    else if(persona.cualidades == "Ambición, Determinación, Astucia" && persona.linaje == "sangre pura"){
        document.getElementById("casa").innerText = `Slytherin`
        persona.casa = "Slytherin"
        document.getElementById('div_casa').innerHTML = `<img id="imagen_casa" src="img/slytherin.png" class="imagen_casa" alt="">`
    }
    
    else{
        document.getElementById("casa").innerText = `No tienes casa, no eres digno`
        persona.casa = "No eres digno, no perteneces a ninguna casa"
        document.getElementById('div_casa').innerHTML = `<img id="imagen_casa" src="img/else.png" class="imagen_casa" alt="">`
    }
}

function punto4(){
    document.querySelector(`#sombrero`).style.display = `none`
    document.querySelector(`#clases`).style.display = `block`
}   


document.addEventListener('DOMContentLoaded', function() {
    var gritos = document.getElementById('gritos');
    var escuchar = document.getElementById('escuchar');
    
    escuchar.addEventListener('click', function() {
        gritos.play();
    });
});

function scream1(){
    document.getElementById('clases').innerHTML = `<img src="img/jhoan.gif" class="scream" alt=""> <button type="button" onclick="perdio()" id="muerto" class="btn btn-danger died">Has muerto 💀</button>`
    persona.animalPatronus = "Quimera"
    persona.clase = "Transformaciones"
    persona.profesorClase = profesoresClases.transformaciones
}
function scream2(){
    document.getElementById('clases').innerHTML = `<img src="img/jhoan.gif" class="scream" alt=""> <button type="button" onclick="perdio()" id="muerto" class="btn btn-danger died">Has muerto 💀</button>`
    persona.animalPatronus = "Fenix"
    persona.clase = "Pociones"
    persona.profesorClase = profesoresClases.encantamientos
}
function scream3(){
    document.getElementById('clases').innerHTML = `<img src="img/jhoan.gif" class="scream" alt=""> <button type="button" onclick="perdio()" id="muerto" class="btn btn-danger died">Has muerto 💀</button>`
    persona.animalPatronus = "Occamy"
    persona.clase = "Encantamientos"
    persona.profesorClase = profesoresClases.encantamientos
}
function scream4(){
    document.getElementById('clases').innerHTML = `<img src="img/jhoan.gif" class="scream" alt=""> <button type="button" onclick="perdio()" id="muerto" class="btn btn-danger died">Has muerto 💀</button>`
    persona.animalPatronus = "Thestral"
    persona.clase = "Animales Magicos"
    persona.profesorClase = profesoresClases.animalesMagicos
}
function scream5(){
    document.getElementById('clases').innerHTML = `<img src="img/jhoan.gif" class="scream" alt=""> <button type="button" onclick="perdio()" id="muerto" class="btn btn-danger died">Has muerto 💀</button>`
    
    persona.animalPatronus = "Basilisco"
    persona.clase = "Herbologias"
    persona.profesorClase = profesoresClases.herbologia
}
function scream6(){
    document.getElementById('clases').innerHTML = `<img src="img/jhoan.gif" class="scream" alt=""> <button type="button" onclick="gano()" id="gano" class="btn btn-success gano">Usar encantamiento Riddikulus! 🧙‍♂️</button>`
    persona.animalPatronus = "Demiguise"
    persona.clase = "Defensa Contra Las Artes Oscuras"
    persona.profesorClase = profesoresClases.defensaContraLasArtesOscuras
}
function scream7(){
    document.getElementById('clases').innerHTML = `<img src="img/jhoan.gif" class="scream" alt=""> <button type="button" onclick="perdio()" id="muerto" class="btn btn-danger died">Has muerto 💀</button>`
    persona.animalPatronus = "Graphorn"
    persona.clase = "historia De La Magia"
    persona.profesorClase = profesoresClases.historiaDeMagia
}

function gano(){
    document.querySelector(`#clases`).style.display = `none`
    document.querySelector(`#winer`).style.display = `block`

    document.getElementById('nombre_2').innerText = persona.nombre
    document.getElementById('familia_2').innerText = persona.familia
    document.getElementById('edad_2').innerText = persona.edad
    document.getElementById('cualidades_2').innerText = persona.cualidades
    document.getElementById('linaje_2').innerText = persona.linaje
    document.getElementById('casa_2').innerText = persona.casa
    document.getElementById('animal_2').innerText = persona.animalPatronus
    document.getElementById('clase_2').innerText = persona.clase
    document.getElementById('profesor_2').innerText = persona.profesorClase
}   

function perdio(){
    document.querySelector(`#clases`).style.display = `none`
    document.querySelector(`#loser`).style.display = `block`

    document.getElementById('nombre_1').innerText = persona.nombre
    document.getElementById('familia_1').innerText = persona.familia
    document.getElementById('edad_1').innerText = persona.edad
    document.getElementById('cualidades_1').innerText = persona.cualidades
    document.getElementById('linaje_1').innerText = persona.linaje
    document.getElementById('casa_1').innerText = persona.casa
    document.getElementById('animal_1').innerText = persona.animalPatronus
    document.getElementById('clase_1').innerText = persona.clase
    document.getElementById('profesor_1').innerText = persona.profesorClase
}
