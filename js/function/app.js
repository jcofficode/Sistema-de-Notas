'use strict';

//FUNCIONES

// Función para filtrar estudiantes por materia
const filtrarPorMateria_JC = (estudiantes, materia) => {
  return estudiantes.filter(estudiante => estudiante.materia === materia);
};

// Función para ordenar estudiantes por apellido usando el método de ordenamiento burbuja
const ordenarPorApellido_JC = (estudiantes) => {
  for (let i = 0; i < estudiantes.length - 1; i++) {
      for (let j = 0; j < estudiantes.length - i - 1; j++) {
          if (estudiantes[j].apellido.localeCompare(estudiantes[j + 1].apellido) > 0) {
              // Intercambiar estudiantes
              let temp = estudiantes[j];
              estudiantes[j] = estudiantes[j + 1];
              estudiantes[j + 1] = temp;
          }
      }
  }
};




// Función para crear la tabla de estudiantes
const crearFormularioTabla_JC = (estudiantes) => {
  const tablaOff_JC = document.getElementById("inputsTable");
  tablaOff_JC.innerHTML = ''; // Limpiar el contenido anterior

  let nuevaFila_JC = tablaOff_JC.insertRow();

// Crea una celda `th` para "nombre"
let thNombre_JC = document.createElement("th");
thNombre_JC.textContent = "Nombre";

// Crea una celda `th` para "apellido"
let thApellido_JC = document.createElement("th");
thApellido_JC.textContent = "Apellido";

// Crea una celda `th` para "cédula"
let thCedula_JC = document.createElement("th");
thCedula_JC.textContent = "Cédula";
// Crea una celda `th` para "carrera"
let thCarrera_JC = document.createElement("th");
thCarrera_JC.textContent = "Carrera";
// Crea una celda `th` para "materia"
let thMateria_JC = document.createElement("th");
thMateria_JC.textContent = "Materia";
// Crea una celda `th` para "semestre"
let thSemestre_JC = document.createElement("th");
thSemestre_JC.textContent = "Semestre";
// Crea una celda `th` para "Primera Evaluacion"
let thPrimeraNota_JC = document.createElement("th");
thPrimeraNota_JC.textContent = "Evaluación Nro1";

// Crea una celda `th` para "Segunda evaluacion"
let thSegundaNota_JC = document.createElement("th");
thSegundaNota_JC.textContent = "Evaluación Nro2";

// Crea una celda `th` para "Tercera evaluacion"
let thTerceraNota_JC = document.createElement("th");
thTerceraNota_JC.textContent = "Evaluación Nro3";

// Crea una celda `th` para Cuarta evaluacion"
let thCuartaNota_JC = document.createElement("th");
thCuartaNota_JC.textContent = "Evaluación Nro4";

// Crea una celda `th` para Mostrar el promedio"
let acumuladoDeNotas_JC = document.createElement("th");
acumuladoDeNotas_JC.textContent = "Promedio";

// Crea una celda `th` para mostrar la nota final"
let notaFinal_JC = document.createElement("th");
notaFinal_JC.textContent = "Nota Final";


// Agrega las celdas `th` a la fila
nuevaFila_JC.appendChild(thNombre_JC);
nuevaFila_JC.appendChild(thApellido_JC);
nuevaFila_JC.appendChild(thCedula_JC);
nuevaFila_JC.appendChild(thCarrera_JC);
nuevaFila_JC.appendChild(thMateria_JC);
nuevaFila_JC.appendChild(thSemestre_JC);
nuevaFila_JC.appendChild(thPrimeraNota_JC);  
nuevaFila_JC.appendChild(thSegundaNota_JC);
nuevaFila_JC.appendChild(thTerceraNota_JC);
nuevaFila_JC.appendChild(thCuartaNota_JC);  
nuevaFila_JC.appendChild(acumuladoDeNotas_JC);
nuevaFila_JC.appendChild(notaFinal_JC);
  estudiantes.forEach((estudiante, index) => {
    let nuevaFila_JC = tablaOff_JC.insertRow();

    for (const propiedad in estudiante) {
      if (estudiante.hasOwnProperty(propiedad)) {
        let celda_JC = nuevaFila_JC.insertCell();
        let input_JC = document.createElement("input");
        input_JC.type = "text";
        input_JC.name = propiedad + "[]";
        input_JC.placeholder = `Por favor coloque ${propiedad}`;
        input_JC.value = estudiante[propiedad];
        celda_JC.appendChild(input_JC);
      }
    }

    

    // Agregar inputs de notas y cargar desde localStorage
    for (let i = 1; i <= 6; i++) {
      let celdaNota_JC = nuevaFila_JC.insertCell();
      let inputNota_JC = document.createElement("input");
      inputNota_JC.type = "number";
      inputNota_JC.name = `Nota${i}[]`;
      inputNota_JC.placeholder = `Nota ${i}`;
      
      inputNota_JC.step = "any";
      
      inputNota_JC.required = true;
      if(i==5){
        inputNota_JC.setAttribute("readonly", "readonly");
        let valorPromedio_JC = localStorage.getItem(`Nombre:${estudiante.nombre} Apellido:${estudiante.apellido} ci:${estudiante.ci} carrera:${estudiante.carrera} materia:${estudiante.materia} semestre: ${estudiante.semestre} promedio:`);
        if(valorPromedio_JC){
          inputNota_JC.value = valorPromedio_JC;
        }  
      }
      
      if(i==6){
        inputNota_JC.setAttribute("readonly", "readonly");
        let valorNotaFinal_JC = localStorage.getItem(`Nombre:${estudiante.nombre} Apellido:${estudiante.apellido} ci:${estudiante.ci} carrera:${estudiante.carrera} materia:${estudiante.materia} semestre: ${estudiante.semestre} Nota Final:`);
        if(valorNotaFinal_JC){
          inputNota_JC.value = Math.round(valorNotaFinal_JC);
        }  
      }

     
    
      // Obtener y establecer el valor almacenado en localStorage si existe
      let notaAlmacenada_JC = localStorage.getItem(`Nota${i}_${estudiante.ci}_${estudiante.materia}`);
      if (notaAlmacenada_JC) {
        inputNota_JC.value = notaAlmacenada_JC;
      }

      
        

      // Agregar evento para guardar en localStorage al cambiar el valor
    

      inputNota_JC.addEventListener('change', () => {
        localStorage.setItem(`Nota${i}_${estudiante.ci}_${estudiante.materia}`, inputNota_JC.value);
      });

      
      celdaNota_JC.appendChild(inputNota_JC);
    }
  });
}


//Exportación de las variables y funciones para ser utilizadas en otro archivo js
export{filtrarPorMateria_JC,ordenarPorApellido_JC,crearFormularioTabla_JC};