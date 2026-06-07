'use strict';
// Declaración de Variables
const formularioRegistrarse_JC = document.getElementById("formRegistro");
const formularioSesion_JC = document.getElementById("formIngreso");
let nombreUsuario_JC = document.getElementById("usuario");
let nombreReal_JC = document.getElementById("nombre");
let apellido_JC = document.getElementById("apellido");
let telf_JC = document.getElementById("numero");
let cedula_JC = document.getElementById("cedula");
let correo_JC = document.getElementById("correo");
let clave_JC = document.getElementById("clave");
const iniciarSesion_JC = document.getElementById("iniciar");
const registrarse_JC = document.getElementById("registrarse");
const editCompletado_JC = document.getElementById('editConfirmado_JC');
const errorCampos_JC = document.getElementById('errorCampos_JC');
const errorRegister_JC = document.getElementById('registerror_JC');
const errorLogin_JC = document.getElementById('errorDatos_JC');
// Declaración de objeto para guardar los datos del usuario

const listaDatosUsers_JC=[];

// Declaración de la función Registrar datos del usuario
const RegistrarUsuario_JC = (nombreUsuario_JC ,nombreReal_JC, apellido_JC, telf_JC, cedula_JC ,correo_JC, clave_JC,editCompletado_JC,errorCampos_JC,errorRegister_JC) => {


  
  if (nombreUsuario_JC === "" || nombreReal_JC === "" || apellido_JC === "" || telf_JC === ""|| cedula_JC ===""||correo_JC === "" || clave_JC ==="") {

    errorCampos_JC.showModal();
  setTimeout(() => {
      errorCampos_JC.close();
      
    }, 3500);

  } else {
  
    let nombreModif_JC = nombreReal_JC.toLowerCase().trim();
  
  const verificarDatos_JC = listaDatosUsers_JC.filter((datos)=>{ return datos.usuario===nombreUsuario_JC || datos.correo==correo_JC || datos.cedula==cedula_JC;})
  console.log(verificarDatos_JC);
  if ( verificarDatos_JC.length > 0) {
    errorRegister_JC.showModal();
    setTimeout(() => {
      errorRegister_JC.close();
      
    }, 3500);
  }else{
  listaDatosUsers_JC.push({correo:correo_JC, nombre:nombreModif_JC, apellido:apellido_JC, telefono:telf_JC,cedula:cedula_JC ,clave:clave_JC, usuario:nombreUsuario_JC });
  
  localStorage.setItem('datos', JSON.stringify(listaDatosUsers_JC));
  editCompletado_JC.showModal();
  setTimeout(() => {
      editCompletado_JC.close();
      
     
    }, 2500);

  }
}};



 // Declaración de la función Inicio Sesión donde se verifica si los datos coinciden o no 
  const EvaluarIniciarSesion_JC = (nombreUsuario_JC, clave_JC,errorCampos_JC,errorLogin_JC) => {

    if (nombreUsuario_JC === "" || clave_JC === "") {
      errorCampos_JC.showModal();
      setTimeout(() => {
          errorCampos_JC.close();
          
        }, 3500);
    } else {
      let convertirInfoString_JC = localStorage.getItem('datos');
      let infoAVerificar_JC = JSON.parse(convertirInfoString_JC)
      console.log(infoAVerificar_JC);
      const busqueda_JC = infoAVerificar_JC.filter((datos) => {
        return datos.usuario === nombreUsuario_JC &&  datos.clave === clave_JC;
      });
      console.log("busqueda", busqueda_JC, busqueda_JC.length, "<---");
     if (busqueda_JC.length === 1) {
        console.log("entro");
        sessionStorage.setItem('Session', JSON.stringify(busqueda_JC));
        location.href = "../index.html";   
      } else {
        errorLogin_JC.showModal();
        setTimeout(() => {
            errorLogin_JC.close();
            
          }, 3500);
      }
    }
    };
    



//Exportación de las variables y funciones para ser utilizadas en otro archivo js
export {formularioRegistrarse_JC ,formularioSesion_JC,nombreUsuario_JC ,nombreReal_JC ,apellido_JC ,telf_JC, cedula_JC ,correo_JC, clave_JC, iniciarSesion_JC,registrarse_JC,RegistrarUsuario_JC, EvaluarIniciarSesion_JC,editCompletado_JC,errorCampos_JC,errorRegister_JC,errorLogin_JC };


