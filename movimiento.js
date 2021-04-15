// Botones de navegación
const movPag = document.querySelector(".movPag");
const btn_adelante1 = document.querySelector(".sigPag");
const btn_atras1 = document.querySelector(".volver-pag1");
const btn_adelante2 = document.querySelector(".adelante-pag3");
const btn_atras2 = document.querySelector(".volver-pag2");
const btn_adelante3 = document.querySelector(".adelante-pag4");
const btn_atras3 = document.querySelector(".volver-pag3");
const btn_final = document.querySelector(".fin");
//Barra de progreso
const progressText = document.querySelectorAll(".paso p");
const progressCheck = document.querySelectorAll(".paso .check");
const num = document.querySelectorAll(".paso .num");
//Conteo de pasos del formulario
let max = 3;
let cont = 1;

btn_adelante1.addEventListener("click", function(e) {
    e.preventDefault();
    movPag.style.marginLeft = "-25%";
    num[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active"); //Agrega una nueva clase al elemento del [index]
    cont += 1;
})

btn_adelante2.addEventListener("click", function(e) {
    e.preventDefault();
    movPag.style.marginLeft = "-50%";
    progressText[cont - 1].classList.add("active");
    num[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    cont += 1;
})

btn_adelante3.addEventListener("click", function(e) {
    e.preventDefault();
    movPag.style.marginLeft = "-75%";
    num[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    num[cont].classList.add("active");
    progressCheck[cont].classList.add("active");
    progressText[cont - 1].classList.add("active");
    progressText[cont].classList.add("active");
    cont += 1;
})

btn_final.addEventListener("click", function(e) {
    e.preventDefault();
    movPag.style.marginLeft = "0%";

    num[0].classList.remove("active");
    progressCheck[0].classList.remove("active");
    progressText[0].classList.remove("active");

    num[1].classList.remove("active");
    progressCheck[1].classList.remove("active");
    progressText[1].classList.remove("active");

    num[2].classList.remove("active");
    progressCheck[2].classList.remove("active");
    progressText[2].classList.remove("active");

    num[3].classList.remove("active");
    progressCheck[3].classList.remove("active");
    progressText[3].classList.remove("active");
})


btn_atras1.addEventListener("click", function(e) {
    e.preventDefault();
    num[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    cont -= 1;
    movPag.style.marginLeft = "0%";
})

btn_atras2.addEventListener("click", function(e) {
    e.preventDefault();
    num[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    cont -= 1;
    movPag.style.marginLeft = "-25%";
})

btn_atras3.addEventListener("click", function(e) {
    e.preventDefault();
    num[cont - 2].classList.remove("active");
    movPag.style.marginLeft = "-50%";
    progressCheck[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    cont -= 1;
})

var mes = document.getElementById("mes");
var tipoVivienda = document.getElementById("tipoVivienda");
var interior = document.getElementById("interior");
var metros = document.getElementById("metrosCuadrados");
var numHab = document.getElementById("numHab");
var edad = document.getElementById("edad");
var genero = document.getElementById("genero");
var aseo = 0;
var gim = 0;
var admin = 0;


if (tipoVivienda == "Casa") {
    admin = (parseInt(metros) * 1500) + 100000
} else {
    admin = (parseInt(metros) * 1500) + 50000;
};
aseoCalculo();

function aseoCalculo() {
    let porcentAdmin = (admin * 10) / 100;
    aseo = (metros * 1000) + porcentAdmin;
};

while (i = 0, i <= edad, i++) {
    if (parseInt(genero) == 1) {
        switch (edad) {
            case edad < 10:
                gim = 0;
                break;
            case edad < 18:
                gim = 15000;
                break;
            case edad < 35:
                gim = 12000;
                break;
            case edad < 55:
                gim = 8000;
                break;
            case edad >= 55:
                gim = 0;
                break;
            default:
                ;

        };
        else if (parseInt(genero) == 0) {
            switch (edad) {
                case edad < 10:
                    gim = 0;
                    break;
                case edad < 20:
                    gim = 20000;
                    break;
                case edad < 40:
                    gim = 15000;
                    break;
                case edad < 60:
                    gim = 10000;
                    break;
                case edad >= 60:
                    gim = 0;
                    break;
                default:
                    ;
            }
        }
    }
};


var total = admin + aseo + gim;