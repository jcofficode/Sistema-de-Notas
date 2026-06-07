<div align="center">

# 🎓 Sistema de Carga de Notas — Tecnológico Jean Coffi (TJC)

Aplicación web del lado del cliente para que el profesorado registre, valide, calcule y persista las calificaciones de sus estudiantes por materia.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES_Modules-F7DF1E?style=flat&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white)
![License](https://img.shields.io/badge/licencia-MIT-blue?style=flat)

</div>

---

## 📑 Tabla de contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Demo del flujo](#-demo-del-flujo)
- [Stack tecnológico](#-stack-tecnológico)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Instalación y ejecución](#-instalación-y-ejecución)
- [Cómo funciona](#-cómo-funciona)
- [Modelo de datos](#-modelo-de-datos)
- [Licencia](#-licencia)

---

## 📖 Descripción

**Sistema de Carga de Notas** es una *Single Page-style* web app construida íntegramente con **HTML, CSS y JavaScript vanilla** (sin frameworks ni backend). Está pensada como herramienta de gestión académica para que los docentes del *Tecnológico Jean Coffi* puedan:

1. Registrarse e iniciar sesión.
2. Seleccionar una materia de un catálogo de más de 25 asignaturas.
3. Visualizar de forma automática a los estudiantes inscritos en esa materia.
4. Cargar hasta **cuatro evaluaciones** por estudiante.
5. Obtener el **promedio** y la **nota final** calculados en tiempo real.
6. Persistir toda la información en el navegador mediante `localStorage`.

El proyecto demuestra el manejo de módulos ES, manipulación del DOM, validaciones, almacenamiento del navegador y diseño responsivo.

---

## ✨ Características

| Categoría | Detalle |
|-----------|---------|
| 🔐 **Autenticación** | Registro de usuarios con validación de campos y control de duplicados (usuario, correo y cédula). Login contra credenciales almacenadas. |
| 🛡️ **Control de sesión** | Guardia de ruta: si no existe una sesión activa en `sessionStorage`, se redirige automáticamente al registro. Cierre de sesión con confirmación visual. |
| 📚 **Gestión por materia** | Catálogo de 25+ asignaturas. Filtrado dinámico de estudiantes según la materia seleccionada. |
| 🔤 **Ordenamiento** | Estudiantes ordenados alfabéticamente por apellido mediante un algoritmo de **ordenamiento burbuja** implementado a mano. |
| 📝 **Carga de notas** | Tabla generada dinámicamente con 4 evaluaciones editables por alumno, más promedio y nota final de solo lectura. |
| ✅ **Validación** | Las notas deben estar en el rango **0–20** (acepta decimales). Se notifica al usuario ante valores inválidos. |
| 💾 **Persistencia** | Promedios, notas y notas finales se guardan en `localStorage` y se recuperan al recargar. |
| 📱 **Responsive** | Menú adaptativo con **jQuery** + **Headroom.js** (oculta/muestra la barra al hacer scroll). |
| 🪟 **Feedback UI** | Diálogos nativos `<dialog>` para todos los estados: errores, confirmaciones y avisos. |

---

## 🎬 Demo del flujo

```
┌──────────────┐     ┌──────────────┐     ┌────────────────────┐
│  Registro    │ ──▶ │ Iniciar      │ ──▶ │  Carga de Notas    │
│ registrarse  │     │ sesión       │     │  (index.html)      │
│  .html       │     │ IngresarLogin│     │                    │
└──────────────┘     └──────────────┘     └────────────────────┘
        │                   │                       │
   localStorage        sessionStorage          1. Selecciona materia
   guarda usuario      guarda sesión           2. Carga estudiantes
                                               3. Ingresa notas (0–20)
                                               4. Salva → localStorage
```

> **Página adicional:** `views/vision.html` describe el propósito y alcance del sistema.

---

## 🛠️ Stack tecnológico

- **HTML5** — estructura semántica y elementos nativos `<dialog>`.
- **CSS3** — hojas de estilo separadas por vista (`main`, `login`, `vision`).
- **JavaScript (ES Modules)** — lógica de negocio con `import` / `export` nativos.
- **jQuery** — utilidades del menú responsivo.
- **Headroom.js** — comportamiento del header al hacer scroll.
- **Font Awesome** — iconografía (vía CDN Kit).
- **Web Storage API** — `localStorage` (datos) y `sessionStorage` (sesión).

---

## 📂 Estructura del proyecto

```
proyectoTec_OFF_JC/
├── index.html                 # Página principal — carga de notas
├── README.md
├── .vscode/
│   └── settings.json          # Live Server en el puerto 5501
├── css/
│   ├── main.css               # Estilos de la carga de notas
│   ├── login.css              # Estilos de login / registro
│   └── vision.css             # Estilos de la página de visión
├── img/                       # Imágenes, GIFs e iconos
├── js/
│   ├── dist/
│   │   ├── main.js            # Orquestador: sesión + eventos de carga/salvar
│   │   └── loginOff.js        # Listeners de los formularios de auth
│   ├── function/
│   │   ├── app.js             # filtrar · ordenar (burbuja) · construir tabla
│   │   └── loginRegister.js   # registrar usuario · evaluar inicio de sesión
│   └── js_Menu/
│       ├── headroom.min.js    # Librería del header dinámico
│       ├── jquery.min.js      # jQuery
│       └── menu.js            # Lógica del menú responsivo
└── views/
    ├── IngresarLogin.html     # Inicio de sesión
    ├── registrarse.html       # Registro de usuario
    └── vision.html            # Visión y alcance del proyecto
```

---

## 🚀 Instalación y ejecución

> El proyecto usa **ES Modules** (`import` / `export`), por lo que **debe servirse desde un servidor HTTP**. Abrir el `index.html` con `file://` directamente provocará errores de CORS en los módulos.

### Opción A — Live Server (recomendada)

El repositorio ya viene configurado para la extensión *Live Server* de VS Code en el puerto **5501**:

1. Abre la carpeta del proyecto en **VS Code**.
2. Instala la extensión **Live Server**.
3. Haz clic derecho sobre `views/registrarse.html` → **Open with Live Server**.

### Opción B — Servidor estático con Python

```bash
cd proyectoTec_OFF_JC
python3 -m http.server 5501
# Abre http://localhost:5501/views/registrarse.html
```

### Opción C — Servidor estático con Node

```bash
cd proyectoTec_OFF_JC
npx serve -l 5501
# o
npx http-server -p 5501
```

> **Primer paso de uso:** como aún no hay usuarios, comienza en `views/registrarse.html`, crea una cuenta y luego inicia sesión.

---

## ⚙️ Cómo funciona

### Autenticación (`loginRegister.js` + `loginOff.js`)
- **Registro:** valida que todos los campos estén completos, comprueba que el usuario, correo o cédula no existan previamente y, si todo es correcto, persiste el usuario en `localStorage` bajo la clave `datos`.
- **Login:** recupera los usuarios, busca una coincidencia exacta de usuario + clave y, de hallarla, crea la sesión en `sessionStorage` bajo la clave `Session` y redirige a `index.html`.

### Control de sesión (`main.js`)
- Al cargar la página principal se comprueba `sessionStorage.getItem('Session')`. Si es `null`, se redirige al registro.
- El botón **Cerrar sesión** elimina la sesión, muestra un modal de despedida y vuelve al login.

### Carga y cálculo de notas (`app.js` + `main.js`)
1. `filtrarPorMateria_JC` devuelve solo los estudiantes de la materia elegida.
2. `ordenarPorApellido_JC` aplica **ordenamiento burbuja** sobre el listado.
3. `crearFormularioTabla_JC` genera dinámicamente la tabla con inputs por estudiante.
4. Al **Salvar**, se recorren las evaluaciones, se valida el rango `0–20`, se calcula el promedio y la nota final (redondeada) y se guardan en `localStorage`.

---

## 🗃️ Modelo de datos

Cada estudiante del dataset embebido (`registroEstudiantes_JC` en `main.js`) tiene la forma:

```js
{
  nombre:   "Luis",
  apellido: "Andrade",
  ci:       29518292,
  carrera:  "computacion",
  materia:  "programacion",
  semestre: 1
}
```

Las notas se persisten en `localStorage` usando claves descriptivas que combinan los datos del estudiante, por ejemplo:

```
Nombre:Luis Apellido:Andrade ci:29518292 carrera:computacion materia:programacion semestre: 1 Nota 1:
Nombre:Luis Apellido:Andrade ci:29518292 ... promedio:
Nombre:Luis Apellido:Andrade ci:29518292 ... Nota Final:
```

---

## 📄 Licencia

Distribuido bajo licencia **MIT**.

<div align="center">

Hecho con ❤️ y JavaScript vanilla

</div>
