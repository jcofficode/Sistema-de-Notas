'use strict';

//IMPORTANDO VARIABLES Y FUNCIONES PARA CARGA DE NOTAS
import { filtrarPorMateria_JC,ordenarPorApellido_JC,crearFormularioTabla_JC } from "../function/app.js";

//DECLARACION DE VARIABLES

//Constante para la selección de la materia a cargar la nota
const listaMaterias_JC = document.getElementById("materias_JC");

//Constante para el evento click al cargar la nota de la materia seleccionada
const cargar_JC = document.getElementById("cargar");

//Constante para el evento click al guarda las notas de los alumnos de la materia seleccionada
let salvar_JC=document.getElementById('salvar');

//Constantes para MODAL
const materiaVacia_JC = document.getElementById("errorMaterias_JC");
const sesionCerrada_JC = document.getElementById("sesionCerrada");
const salvarMateriasError_JC = document.getElementById("errorSalvarMaterias_JC");
const notasGuardadas_JC = document.getElementById("notasGuardadas");
const errorNotas_JC = document.getElementById('errorNotas');
const textoNotas_JC = document.getElementById('textoNotas');
const sesionCerradaVision_JC = document.getElementById("sesionCerradaVision");



//Declaracion del objeto donde se encuentran los estudiantes registrados
const registroEstudiantes_JC = 
[{nombre:"Luis", apellido:"Andrade", ci:29518292, carrera:"computacion", materia:"programacion", semestre:1},
{nombre:"Jose", apellido:"Perez", ci:20513678, carrera:"Ing Electrica", materia:"circuitos", semestre:1},
{nombre:"Daniela", apellido:"Quintero", ci:18678889, carrera:"admin de empresas", materia:"contabilidad", semestre:1},
{nombre:"Ernesto", apellido:"Quinoa", ci:30165778, carrera:"psicologia", materia:"neuropsicologia", semestre:1},
{nombre:"Miguel", apellido:"Artariz", ci:19558862, carrera:"computacion", materia:"programacion", semestre:1},
{nombre:"Jose", apellido:"Sanchez", ci:20313578, carrera:"Ing Electrica", materia:"circuitos", semestre:1},
{nombre:"Eva", apellido:"Muller", ci:28675989, carrera:"admin de empresas", materia:"contabilidad", semestre:1},
{nombre:"Ernesto", apellido:"Ilarramendi", ci:25565878, carrera:"psicologia", materia:"neuropsicologia", semestre:1},
{nombre:"Luis", apellido:"Andrade", ci:29518292, carrera:"computacion", materia:"ciudadana", semestre:1},
{nombre:"Daniela", apellido:"Quintero", ci:18678889, carrera:"admin de empresas", materia:"ciudadana", semestre:1},
{nombre:"Luis", apellido:"Andrade", ci:29518292, carrera:"computacion", materia:"estadistica", semestre:1},
{nombre:"Daniela", apellido:"Quintero", ci:18678889, carrera:"admin de empresas", materia:"estadistica", semestre:1},
{nombre:"Samuel", apellido:"Contreras", ci:19518492, carrera:"computacion", materia:"electronica", semestre:4},
{nombre:"Ninoska", apellido:"Quintero", ci:17648889, carrera:"Ing Electrica", materia:"electronica", semestre:4},
{nombre:"Oscar", apellido:"Martinez", ci:10535792, carrera:"computacion", materia:"electronica", semestre:4},
{nombre:"Edwin", apellido:"Santos", ci:17388859, carrera:"Ing Electrica", materia:"electronica", semestre:4},
{nombre:"Valeria", apellido:"Pantoja", ci:13538492, carrera:"admin de empresas", materia:"liderazgo", semestre:3},
{nombre:"Hector", apellido:"Quintero", ci:18648889, carrera:"psicologia", materia:"liderazgo", semestre:3},
{nombre:"Diego", apellido:"Ramirez", ci:23565792, carrera:"admin de empresas", materia:"liderazgo", semestre:3},
{nombre:"Darwin", apellido:"Santos", ci:18378859, carrera:"psicologia", materia:"liderazgo", semestre:3},
{nombre:"Darwin", apellido:"Santos", ci:18378859, carrera:"psicologia", materia:"geropsicologia", semestre:3},
{nombre:"Maria", apellido:"Perez", ci:10878859, carrera:"psicologia", materia:"comunitaria", semestre:3},
{nombre:"Karoni", apellido:"Delgado", ci:10345719, carrera:"computacion", materia:"pasantia", semestre:4},
{nombre:"Karoni", apellido:"Delgado", ci:10345719, carrera:"computacion", materia:"frameworks", semestre:4},
{nombre:"Karoni", apellido:"Delgado", ci:10345719, carrera:"computacion", materia:"electronica", semestre:4},
{nombre:"Elizabeth", apellido:"Moreno", ci:11236789, carrera:"admin de empresa", materia:"comunitaria", semestre:3},
{nombre:"Elizabeth", apellido:"Moreno", ci:11236789, carrera:"admin de empresa", materia:"gestion", semestre:3},
{nombre:"Manuel", apellido:"Flores", ci:15123009, carrera:"psicologia", materia:"pasantia", semestre:4},
{nombre:"Manuel", apellido:"Flores", ci:15123009, carrera:"psicologia", materia:"GRH", semestre:4},
{nombre:"Manuel", apellido:"Flores", ci:15123009, carrera:"psicologia", materia:"terapia", semestre:4},
{nombre:"Jose", apellido:"Vilchez", ci:11230091, carrera:" Ing Electrica ", materia:"etica", semestre:2},
{nombre:"Jose", apellido:"Vilchez", ci:11230091, carrera:" Ing Electrica ", materia:"fisica", semestre:2},
{nombre:"Jose", apellido:"Vilchez", ci:11230091, carrera:" Ing Electrica ", materia:"ingles", semestre:2},
{nombre:"Adriana", apellido:"Peña", ci:12300900, carrera:"admin de empresas", materia:"etica", semestre:2},
{nombre:"Adriana", apellido:"Peña", ci:12300900, carrera:"admin de empresas", materia:"ingles", semestre:2},
{nombre:"Adriana", apellido:"Peña", ci:12300900, carrera:"admin de empresas", materia:"marketing", semestre:2},
{nombre:"Lourdes", apellido:"Garcia", ci:1311009, carrera:"Ing Electrica", materia:"ingles", semestre:2},
{nombre:"Rafael", apellido:"Perez", ci:10029312, carrera:"computacion", materia:"ingles", semestre:2},
{nombre:"Rafael", apellido:"Perez", ci:10029312, carrera:"computacion", materia:"base de datos", semestre:2},
{nombre:"Luis", apellido:"Garcia", ci:25123009, carrera:" Ing Electrica", materia:"ingles", semestre:2},
{nombre:"Maria", apellido:"Gomez", ci:21230109, carrera:"psicologia", materia:"ingles", semestre:2},
{nombre:"Maria", apellido:"Gomez", ci:21230109, carrera:"psicologia", materia:"etica", semestre:2},
{nombre:"Maria", apellido:"Gomez", ci:21230109, carrera:"psicologia", materia:"psicopatologia", semestre:2},
{nombre:"Mario", apellido:"Laguna", ci:12301091, carrera:"computacion", materia:"redes", semestre:3},
{nombre:"Mario", apellido:"Laguna ", ci: 12301091, carrera:"computacion", materia:"comunitaria", semestre:3},
{nombre:"Mario", apellido:"Laguna ", ci: 12301091, carrera:"computacion", materia:"robotica", semestre:3},
{nombre:"Juan", apellido:"Diaz", ci: 13010910, carrera:"Ing Electrica", materia:"robotica", semestre:3},
{nombre:"Juan", apellido:"Diaz", ci: 13010910, carrera:"Ing Electrica", materia:"comunitaria", semestre:3},
{nombre:"Juan", apellido:"Diaz", ci: 13010910, carrera:"Ing Electrica", materia:"microelectronica", semestre:3},
{nombre:"Andrea", apellido:"Castillo", ci: 30109100, carrera:"Ing Electrica", materia:"pasantia", semestre:4},
{nombre:"Andrea", apellido:"Castillo", ci: 30109100, carrera:"Ing Electrica", materia:"electronica", semestre:4},
{nombre:"Andrea", apellido:"Castillo", ci: 30109100, carrera:"Ing Electrica", materia:"microprocesadores", semestre:4},
{nombre:"Carlos", apellido:"Castillo", ci: 28109100, carrera:"admin de empresas", materia:"finanzas", semestre:4},
{nombre:"Carlos", apellido:"Castillo", ci: 28109100, carrera:"admin de empresas", materia:"pasantia", semestre:4},
{nombre:"Carlos", apellido:"Castillo", ci: 28109100, carrera:"admin de empresas", materia:"grh", semestre:4},

];

// CODIGO DEL SESSIONSTORAGE
// Se verifica si la variable sessionStorage existe si es el caso se le permite acceder a usuario a la carga de notas
//De lo contrario se le deniega el acceso a la carga de notas

// Obtención de los datos de la sesión
let session_string_JC = sessionStorage.getItem('Session');

let cerrarSesion_JC = document.getElementById("cerrar");

let cerrarSesionVision_JC= document.getElementById("cerrarvision")

// Si no hay sesión, redirigir al login
if (session_string_JC == null) {
    location.href = './views/registrarse.html';
  } else {
    // Botón para cerrar sesión
   
    //EVENTO que elimina la sesion
    if(cerrarSesion_JC){
    cerrarSesion_JC.addEventListener("click", e => {
      e.preventDefault();
      sessionStorage.removeItem("Session");
      sesionCerrada_JC.showModal();
      setTimeout(() => {
          sesionCerrada_JC.close();
          location.href = './views/IngresarLogin.html';
        }, 3500);
      
    });
  }
    if (cerrarSesionVision_JC){
    cerrarSesionVision_JC.addEventListener("click", e => {
      e.preventDefault();
      sessionStorage.removeItem("Session");
      sesionCerradaVision_JC.showModal();
      setTimeout(() => {
          sesionCerradaVision_JC.close();
          location.href = '../views/IngresarLogin.html';
        }, 3500);
      
    });
  }

  }

  // Llamar a la función de ordenamiento de burbuja por apellido
ordenarPorApellido_JC(registroEstudiantes_JC);
// Convertir el arreglo ordenado de estudiantes a formato JSON
const estudiantesLocal_JC = JSON.stringify(registroEstudiantes_JC);


// Almacenar el JSON resultante en el localStorage
localStorage.setItem('registroEstudiantesOrdenadoPorApellido', estudiantesLocal_JC);


const cargarVerificar_JC = () => {
  const materiaElegida_JC = listaMaterias_JC.value;
  if (materiaElegida_JC === "") {
    materiaVacia_JC.showModal();
    setTimeout(() => {
      materiaVacia_JC.close();
    }, 3500);
  } else {
    const estudiantesMateria_JC = filtrarPorMateria_JC(registroEstudiantes_JC, materiaElegida_JC);
    crearFormularioTabla_JC(estudiantesMateria_JC);
  }
}


//EVENTOS

// Evento al hacer clic en el botón "Cargar"
cargar_JC.addEventListener("click", (e) => {
  e.preventDefault();
  const materiaElegida_JC = listaMaterias_JC.value;
  if (materiaElegida_JC === "") {
    materiaVacia_JC.showModal();
    setTimeout(() => {
        materiaVacia_JC.close();
        
      }, 3500);
  } else {
    const estudiantesMateria_JC = filtrarPorMateria_JC(registroEstudiantes_JC, materiaElegida_JC);
   
    crearFormularioTabla_JC(estudiantesMateria_JC);
  }
});



// Evento al hacer clic en el botón "Salvar"
salvar_JC.addEventListener("click", (e) => {
  e.preventDefault();
  const materiaElegida_JC = listaMaterias_JC.value;
  if (materiaElegida_JC === "") {
    salvarMateriasError_JC.showModal();
    setTimeout(() => {
        salvarMateriasError_JC.close();
        
      }, 3500);
  } else {
    const estudiantesMateria_JC = filtrarPorMateria_JC(registroEstudiantes_JC, materiaElegida_JC);
   
    let sumaNotas_JC=0;
    let laNota_JC=0;
    let notainvalida_JC = false; // Variable para verificar si hay notas inválidas
    estudiantesMateria_JC.forEach((estudiante, index) => {
      for (let i = 1; i <= 4; i++) {
        const nota = document.getElementsByName(`Nota${i}[]`)[index].value;
        if(!isNaN(parseFloat(nota))){
          laNota_JC=parseFloat(nota);  
         }else{
           laNota_JC=0;
         }
         sumaNotas_JC+=laNota_JC;
         let acumulado_JC = sumaNotas_JC/4;
         console.log(`las notas ${sumaNotas_JC}`)
        console.log(acumulado_JC);
       
       
        //Validacion de las notas verifica si son mayores a 20 o menores a 0

        if ( laNota_JC < 0 || laNota_JC > 20) {
          notainvalida_JC = true;
          textoNotas_JC.innerHTML = `La nota ingresada para el estudiante es inválida. Por favor, ingrese notas entre 0 y 20.`;
          errorNotas_JC.showModal();
          setTimeout(() => {
            errorNotas_JC.close();
            
          }, 3500);
          nota =0;
          break; // Aqui Sale del bucle si se encuentra una nota inválida
        } else { //Muestra las notas y las guarda en el localstorage
          notainvalida_JC = false
          localStorage.setItem(`Nombre:${estudiante.nombre} Apellido:${estudiante.apellido} ci:${estudiante.ci} carrera:${estudiante.carrera} materia:${estudiante.materia} semestre: ${estudiante.semestre} Nota ${i}:`,  laNota_JC); // Guardar nota en localStorage
        }
      }
      
      localStorage.setItem(`Nombre:${estudiante.nombre} Apellido:${estudiante.apellido} ci:${estudiante.ci} carrera:${estudiante.carrera} materia:${estudiante.materia} semestre: ${estudiante.semestre} promedio:`, sumaNotas_JC/4); //Guardar promedio en localstorage
      //console.log(`La suma de las notas es Promedio_${estudiante.ci}_${estudiante.materia} y la nota es ${sumaNotas/4}`)
      localStorage.setItem(`Nombre:${estudiante.nombre} Apellido:${estudiante.apellido} ci:${estudiante.ci} carrera:${estudiante.carrera} materia:${estudiante.materia} semestre: ${estudiante.semestre} Nota Final:`,  Math.round(sumaNotas_JC / 4));
      sumaNotas_JC=0;
    
    }
    
  );//se muestra el modal de notas guardadas exitosamente
  if (notainvalida_JC === false) {
    cargarVerificar_JC();
    notasGuardadas_JC.showModal();
    setTimeout(() => {
        notasGuardadas_JC.close();
        
      }, 3500);
  }

  }
  
});