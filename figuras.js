//Código del cuadrado
console.group("Cuadrados");
//const ladroCuadrado = 5;
//console.log("Los lados del cuadrado miden: "+ladroCuadrado+" cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("El perímetro del cuadrado es: "+perimetroCuadrado+" cm");

//const areaCuadrado = ladroCuadrado * ladroCuadrado;
//console.log("El area del cuadrado es: "+areaCuadrado+" cm^2");
function areaCuadrado (lado){
    return lado * lado;
}
console.groupEnd();

//Código del Triángulo

function perimetroTriangulo(lado1, lado2, base) {
    return (lado1+ lado2 + base);
}
function calcularAlturaIsosceles (lados, base)
{
    const alturaIsosceles = Math.sqrt((lados*lados)+((base*base)/4));
    return alturaIsosceles;

}




function diametroCirculo (radio)
{
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo (radio){
    return (radio * radio) * PI;
}



//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


function calcularPerimetroTriangulo(){
    const lado1Triangulo = document.getElementById("lado1Triangulo");
    const lado2Triangulo = document.getElementById("lado2Triangulo");
    const baseTriangulo = document.getElementById("baseTriangulo");
    const valueLado1Triangulo = Number(lado1Triangulo.value);
    const valueLado2Triangulo = Number(lado2Triangulo.value);
    const valueBaseTriangulo = Number(baseTriangulo.value);
    const perimetroTrian = perimetroTriangulo(valueLado1Triangulo,valueLado2Triangulo,valueBaseTriangulo);
    alert(perimetroTrian);
}
function calcularAreaTriangulo(){
    const baseTriangulo = document.getElementById("baseTriangulo");
    const alturaTriangulo = document.getElementById("alturaTriangulo");
    const valueBaseTriangulo = Number(baseTriangulo.value);
    const valueAlturaTriangulo = Number(alturaTriangulo.value);
    console.log(valueAlturaTriangulo);
    console.log(valueBaseTriangulo);

    const areaTrian = areaTriangulo(valueBaseTriangulo, valueAlturaTriangulo);
    alert(areaTrian);
}


function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("RadioCirculo");
    const valueRadio = inputRadio.value;

    const perimetroCir = perimetroCirculo(valueRadio);
    alert(perimetroCir);
}

function calcularAreaCirculo(){
    const inputRadio = document.getElementById("RadioCirculo");
    const valueRadio = inputRadio.value;

    const areaCir = areaCirculo(valueRadio);
    alert(areaCir);
}

function trianguloIsosceles(){
    const baseTrian = document.getElementById("baseTrian");
    const ladosTrian = document.getElementById("ladosTriangulo");
    const valueBase = Number(baseTrian.value);
    const valueLados = Number(ladosTrian.value);

    const alturaIso = calcularAlturaIsosceles (valueLados,valueBase);
    const areaIso = ((valueBase * alturaIso) / 2);
    alert(areaIso);
}
/*
console.group("Triangulos");

const ladroTriangulo1 = 6;
const ladroTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "Los lados del triángulo miden: "+ladroTriangulo1
    +" cm," 
    + ladroTriangulo2
    +" cm,"
    +baseTriangulo
    +" cm"
);
console.log("La altura del triángulo es de " + alturaTriangulo+" cm");


const perimetroTriangulo = ladroTriangulo1 + ladroTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es de:"+perimetroTriangulo + " cm");


const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es de: " + areaTriangulo + "cm^2");
console.groupEnd();

//Código del círculo
console.group("Círculos");

// Radio
const radioCirculo = 4;
console.log("El radio del Círculo es: "+radioCirculo+" cm");
// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El Diámetro del Círculo es: "+diametroCirculo+" cm");
// Pi
const PI = Math.PI;
console.log("PI es: " +PI)
// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es: " +perimetroCirculo+ " cm")
// Area
const areaCirculo = PI * (radioCirculo * radioCirculo);
console.log("El área del círculo es: "+areaCirculo);
console.groupEnd; */