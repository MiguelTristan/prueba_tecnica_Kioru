/*var layer1 = document.getElementById('layer1')
scroll = window.pageYOffset;
document.addEventListener('scroll', function(e){
    var offset = window.pageYOffset;
    scroll = offset;
    layer1.style.width = (100 + scroll) + '%'
})


var layer2 = document.getElementById('layer2')
scroll = window.pageYOffset;
document.addEventListener('scroll', function(e){
    var offset = window.pageYOffset;
    scroll = offset;
    layer2.style.width = (100 + scroll/5) + '%'
    layer2.style.left = scroll/50 + '%'
})

var text = document.getElementById('text')
scroll = window.pageYOffset;
document.addEventListener('scroll', function(e){
    var offset = window.pageYOffset;
    scroll = offset;
    text.style.top = - scroll/20 + '%'
})*/


// Codigo del piedra,   papel    o   tijera
var opciones = [0,        1,           2]
var maquinaelije
var puntos_tu = 0
var puntos_pc = 0

function ocultar_msj() {
    setTimeout(function () {
        $('#cont-resultado').fadeOut()
    },1000)
}

document.getElementById('puntos-tu').innerHTML = puntos_tu;
document.getElementById('puntos-pc').innerHTML = puntos_pc;

// Funcion para obtener el rango entre 0 y 2 -- [0,1,2] -- que seran las opciones de la maquina 
function indicealeatorio(minimo, maximo) {
    var indice = Math.floor(Math.random() * (maximo - minimo+1) + minimo)
    return indice
}

// Funcion que determina que indice tiene el usuario el valor de la pc ya lo retorna la funcion 'indicealeatorio'
function usuario(elijiousuario) {
    elijiousuario = parseInt(elijiousuario)
    maquinaelije = indicealeatorio(0,2)

    // Condiciones para determinar quien gano (usuario o maquina(PC))
    if (elijiousuario == 2) { // indice 2 es tijera
        document.getElementById('tu-eleccion').innerHTML = 'Tijera';
        if (opciones[maquinaelije] == 0) { // indice 0 es piedra
            console.log("perdiste la maquina es piedra y tu tijera");
            setTimeout(function () {
                $('#cont-resultado').fadeIn(ocultar_msj());
            }, 100)
            document.getElementById('resultado').innerHTML = 'PERDISTE';
            document.getElementById('pc-eleccion').innerHTML = 'Piedra';
            puntos_pc++;
            document.getElementById('puntos-pc').innerHTML = puntos_pc;
        }
        else if (opciones[maquinaelije] == 1) { // papel
            console.log("ganaste la maquina elijio papel y tu tijera")
            setTimeout(function () {
                $('#cont-resultado').fadeIn(ocultar_msj());
            }, 100)
            document.getElementById('resultado').innerHTML = 'GANASTE';
            document.getElementById('pc-eleccion').innerHTML = 'Papel';
            puntos_tu++;
            document.getElementById('puntos-tu').innerHTML = puntos_tu;
        }
        else if (opciones[maquinaelije] == 2) { // tijera
            console.log("empate ambos son tijera")
            setTimeout(function () {
                $('#cont-resultado').fadeIn(ocultar_msj());
            }, 100)
            document.getElementById('resultado').innerHTML = 'EMPATE';
            document.getElementById('pc-eleccion').innerHTML = 'Tijera';
        }
    }

    else if (elijiousuario == 1) { // papel
        document.getElementById('tu-eleccion').innerHTML = 'Papel';
        if (opciones[maquinaelije] == 0) { // piedra
            console.log("ganaste elejiste papel y la maquina piedra")
            setTimeout(function () {
                $('#cont-resultado').fadeIn(ocultar_msj());
            }, 100)
            document.getElementById('resultado').innerHTML = 'GANASTE';
            document.getElementById('pc-eleccion').innerHTML = 'Piedra';
            puntos_tu++;
            document.getElementById('puntos-tu').innerHTML = puntos_tu;
        }
        else if (opciones[maquinaelije] == 1) { // papel
            console.log("empate ambos son papel")
            setTimeout(function () {
                $('#cont-resultado').fadeIn(ocultar_msj());
            }, 100)
            document.getElementById('resultado').innerHTML = 'EMPATE';
            document.getElementById('pc-eleccion').innerHTML = 'Papel';
        }
        else if (opciones[maquinaelije] == 2) { // tijera
            console.log("perdiste la maquina elijio tijera y tu papel")
            setTimeout(function () {
                $('#cont-resultado').fadeIn(ocultar_msj());
            }, 100)
            document.getElementById('resultado').innerHTML = 'PERDISTE';
            document.getElementById('pc-eleccion').innerHTML = 'Tijera';
            puntos_pc++;
            document.getElementById('puntos-pc').innerHTML = puntos_pc;
        }
    }

    else if (elijiousuario == 0) { // piedra
        document.getElementById('tu-eleccion').innerHTML = 'Piedra';
        if (opciones[maquinaelije] == 0) {
            console.log("empate ambos son piedra")
            setTimeout(function () {
                $('#cont-resultado').fadeIn(ocultar_msj());
            }, 100)
            document.getElementById('resultado').innerHTML = 'EMPATE';
            document.getElementById('pc-eleccion').innerHTML = 'Piedra';
        }
        else if (opciones[maquinaelije] == 1) {
            console.log("perdiste la maquina elijio papel y tu piedra")
            setTimeout(function () {
                $('#cont-resultado').fadeIn(ocultar_msj());
            }, 100)
            document.getElementById('resultado').innerHTML = 'PERDISTE';
            document.getElementById('pc-eleccion').innerHTML = 'Papel';
            puntos_pc++;
            document.getElementById('puntos-pc').innerHTML = puntos_pc;
        }
        else if (opciones[maquinaelije] == 2) {
            console.log("ganaste elejiste piedra y la maquina tijera")
            setTimeout(function () {
                $('#cont-resultado').fadeIn(ocultar_msj());
            }, 100)
            document.getElementById('resultado').innerHTML = 'GANASTE';
            document.getElementById('pc-eleccion').innerHTML = 'Tijera';
            puntos_tu++;
            document.getElementById('puntos-tu').innerHTML = puntos_tu;
        }
    }
}