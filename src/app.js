//Variables

//camelCase
//declarar variables, funciones



const edad = 25;//No puede cambiar
let nombre  = "Mario";//Puede cambiar

//Tipos de datos



//Strings o cadena de texto
let apellido = 'Bros';

//CONTACTENACIÓN
//Cuando uno de los valores es un string, se concatena

//1era forma
const nombreCompleto = nombre + " " + apellido;

//2nda forma
const nombreCompletoDos = `Juan ${nombre} ${apellido}`;


//Number
//Integer
let vidas = 6

//Float
let monedas = 300.5 

//Arrays
//Tienden a ser vistos como listas

//                  1         2      3         4
//                  0         1      2         3
let personajes = ["Mario", "Luigi", "Peach", "Bowser"]


//Objeto
const personaje = {
    //clave  valor
    nombre: "Homer",
    apellido: "Simpson", 
    salario : 2000
}


//Boolean

//Operadores aritmeticos

//+ - / % * //Matematicos


//Operadores de asignación

// = += -=




//Operadores comparativos

//resultados en booleanos

// ==  --> igual en valor

//=== --> igual en valor y tipo

// != --> diferente a, en valor

// !== --> diferente a, en valor y tipo

// > --> mayor que
// < --> menor que

// >= ---> mayor o igual que
// <= ---> menor o igual que
const numero = 5

//undefined es null

//0 es false
//[] es false
//"" es false

//{} es true


const departamentos = ["Montevideo", "Maldonado", "Artigas", "Salto", "Colonia"]

const randomIndex = Math.floor(Math.random() * departamentos.length)

console.log(departamentos[randomIndex])


