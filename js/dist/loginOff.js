'use strict';
//Importando Variables
import { formularioRegistrarse_JC,formularioSesion_JC ,nombreUsuario_JC ,nombreReal_JC ,apellido_JC ,telf_JC, cedula_JC , correo_JC, clave_JC, iniciarSesion_JC,registrarse_JC,RegistrarUsuario_JC,EvaluarIniciarSesion_JC,editCompletado_JC,errorCampos_JC,errorRegister_JC, errorLogin_JC } from "../function/loginRegister.js";



if (formularioRegistrarse_JC) {
  formularioRegistrarse_JC.addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log(nombreUsuario_JC.value ,nombreReal_JC.value, apellido_JC.value, telf_JC.value, correo_JC.value, clave_JC.value);
    RegistrarUsuario_JC(nombreUsuario_JC.value ,nombreReal_JC.value, apellido_JC.value, telf_JC.value, cedula_JC.value ,correo_JC.value, clave_JC.value,editCompletado_JC,errorCampos_JC,errorRegister_JC);
  
  formularioRegistrarse_JC.reset();

});
}

if (formularioSesion_JC) {
  formularioSesion_JC.addEventListener('submit',  (e)=> {
    e.preventDefault();
    EvaluarIniciarSesion_JC(nombreUsuario_JC.value, clave_JC.value,errorCampos_JC,errorLogin_JC);
  
    formularioSesion_JC.reset();

  
});
}  
