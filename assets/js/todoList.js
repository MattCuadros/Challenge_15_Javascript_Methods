let arrayTareas = [
  { 
    id: Date.now() + 1, 
    nombreTarea: "Estudiar Métodos", 
    statusTarea: false, 
  },
  {
    id: Date.now() + 2,
    nombreTarea: "Estudiar para el Desafío",
    statusTarea: false,
  },
  {
    id: Date.now() + 3,
    nombreTarea: "Subir el Desafío a la Plataforma",
    statusTarea: false,
  },
];
const tbodyTareas = document.querySelector("#tbodyTareas");
const inptTarea = document.querySelector("#inptTarea");
const btnTarea = document.querySelector("#btnTarea");
const html = document.querySelector("#html");
const spanTotal = document.querySelector("#spanTotal");
const spanFinalizadas = document.querySelector("#spanFinalizadas");

const taskFinished = () => {
  arrayFinalizadas = arrayTareas.filter((task) => task.statusTarea !== false);
  return arrayFinalizadas.length;
};

function render() {
  tbodyTareas.innerHTML = "";
  spanTotal.innerHTML = `${arrayTareas.length}`;
  spanFinalizadas.innerHTML = taskFinished();

  if (arrayTareas.length === 0) {
    tbodyTareas.innerHTML = `<tr><td></td><td>No hay tareas</td><td></td><td></td></tr>`;
  } else {
    arrayTareas.forEach((task) => {
      if (task.statusTarea === false) {
        tbodyTareas.innerHTML += `<tr><td>${task.id}</td><td>${task.nombreTarea} </td><td> <input type="date"> </td><td><input type="checkbox" name="" onclick="tareaRealizar(${task.id})" id="${task.id}" ><span class="m-3" onclick="borrarTarea(${task.id})" id="${task.id}"><i class="fa-regular fa-trash-can"></i></span></td></tr>`;
      } else {
        tbodyTareas.innerHTML += `<tr><td>${task.id}</td><td><del>${task.nombreTarea} </del></td><td> <input type="date"> </td><td> <input type="checkbox" checked name="" onclick="tareaRealizar(${task.id})" id="${task.id}" ><span class="m-3" onclick="borrarTarea(${task.id})" id="${task.id}"><i class="fa-regular fa-trash-can"></i></span></td></tr>`;
      }
    });
  }
}
render();
const arrayTareasNombre = arrayTareas.map((objeto) => {
  return objeto.nombreTarea;
});
btnTarea.addEventListener("click", () => {
  let nuevaTarea = inptTarea.value;
  if (nuevaTarea === "") {
    alert("Debe escribir una tarea");
  } else if (arrayTareasNombre.includes(nuevaTarea) === true) {
    alert("La tarea que quieres ingresar, ya existe, prueba con otra.");
    return;
  } else {
    arrayTareas.push({
      id: Date.now(),
      nombreTarea: `${nuevaTarea}`,
      statusTarea: false,
    });
    nuevaTarea = "";
    return render();
  }
});

const borrarTarea = (identificador) => {
  let respuestaPrompt = prompt(`¿Está seguro de Borrar la Tarea? 
  Escribe "S" para Borrar la tarea.  
 `);
  if (respuestaPrompt.toUpperCase() === "S") {
    arrayTareas = arrayTareas.filter((task) => task.id !== identificador);
    render();
  } else {
    return;
  }
};

const tareaRealizar = (identificador) => {
  arrayTareas.forEach((task) => {
    if (task.id === identificador) {
      if (task.statusTarea === false) {
        task.statusTarea = true;
        render();
      } else {
        task.statusTarea = false;
        render();
      }
    }
  });
};
