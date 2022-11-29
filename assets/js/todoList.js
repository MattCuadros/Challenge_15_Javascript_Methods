let arrayTasks = [
  { id: Date.now() + 1, nameTask: "Lavar mi ropa", statusTask: false },
  { id: Date.now() + 2, nameTask: "Pasear a Terry", statusTask: false },
  {
    id: Date.now() + 3,
    nameTask: "Estudiar para el Desafío",
    statusTask: false,
  },
];
const tbodyRender = document.querySelector("#tbodyRender");
const inptTask = document.querySelector("#inptTask");
const btnTask = document.querySelector("#btnTask");
const html = document.querySelector("#html");
const spanTotal=document.querySelector("#spanTotal");
const spanFinished=document.querySelector("#spanFinished");

const taskFinished = ()=>{
    arrayFinished=arrayTasks.filter((task)=>task.statusTask!==false);
    return arrayFinished.length};
    
function render() {
  tbodyRender.innerHTML = "";
  spanTotal.innerHTML=`${arrayTasks.length}`;
  spanFinished.innerHTML=taskFinished();

  if (arrayTasks.length === 0) {
    tbodyRender.innerHTML = `<tr><td></td><td>No hay tareas</td><td></td></tr>`;
  } else {
    arrayTasks.forEach((task) => {
      if (task.statusTask === false) {
        tbodyRender.innerHTML += `<tr><td>${task.id}</td><td>${task.nameTask} </td><td> <input type="checkbox" name="" onclick="doneTask(${task.id})" id="${task.id}" ><span onclick="deleteTask(${task.id})" id="${task.id}">❌</span></td></tr>`;
      } else {
        tbodyRender.innerHTML += `<tr><td>${task.id}</td><td><del>${task.nameTask} </del></td><td> <input type="checkbox" checked name="" onclick="doneTask(${task.id})" id="${task.id}" ><span onclick="deleteTask(${task.id})" id="${task.id}">❌</span></td></tr>`;
      }
    });
  }
}
render();

btnTask.addEventListener("click", () => {
  if (inptTask.value === "") {
    alert("Debe escribir una tarea");
  } else {
    arrayTasks.push({
      id: Date.now(),
      nameTask: `${inptTask.value}`,
      statusTask: false,
    });
    inptTask.value = "";
    return render();
  }
});

const deleteTask = (identificador) => {
  arrayTasks = arrayTasks.filter((task) => task.id !== identificador);
  render();
  console.log(arrayTasks);
};

const doneTask = (identificador) => {
  arrayTasks.forEach((task) => {
    if (task.id === identificador) {
      if (task.statusTask === false) {
        task.statusTask = true;
        render();
      } else {
        task.statusTask = false;
        render();
      }
    }
  });
};


