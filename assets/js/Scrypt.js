let taskList = [
  {
    id: 1,
    titulo: "Comprar cosas",
    descripcion: "ir al mall a comprar ropa",
    qwerty: false,
  },
  {
    id: 2,
    titulo: "Comprar frutas",
    descripcion: "ir a la feria a comprar ",
    qwerty: false,
  },
  {
    id: 3,
    titulo: "Conquistar el mundo",
    descripcion: "con pinky y cerebro",
    qwerty: false,
  },
];

const totalTask = document.querySelector("#totalToDo");
const leftTask = document.querySelector("#leftToDo");
const print = document.querySelector("#ToDo");
const titleTask = document.querySelector("#ToDoTitle");
const descriptionTask = document.querySelector("#whatToDo");
const addTask = document.querySelector("#addToDo");
const deleteTask = document.querySelector("#deleteToDo");

let newTaskList = () => {
  let title = titleTask.value;
  let description = descriptionTask.value;

  if (!title || !description) {
    alert("Debes ingresar informacion");
    return;
  }
  let newID = taskList[taskList.length - 1];
  let addTaskList = {
    id: newID ? newID.id + 1 : 1,
    titulo: title,
    descripcion: description,
    qwerty: false,
  };
  taskList.push(addTaskList);
  showTask();

  titleTask.value = "";
  descriptionTask.value = "";
};

let statusChck = (id) => {
  let taskListShowId = taskList.findIndex((listId) => listId.id === id);
  if (taskList[taskListShowId].qwerty == false) {
    let reChck = {
      id: taskList[taskListShowId].id,
      titulo: taskList[taskListShowId].titulo,
      descripcion: taskList[taskListShowId].descripcion,
      qwerty: true,
    };
    taskList.splice(taskListShowId, 1, reChck);
  } else {
    let reChck = {
      id: taskList[taskListShowId].id,
      titulo: taskList[taskListShowId].titulo,
      descripcion: taskList[taskListShowId].descripcion,
      qwerty: false,
    };
    taskList.splice(taskListShowId, 1, reChck);
  }
  showTask();
};

let erraseById = (id) => {
  let taskListShowId = taskList.findIndex((listId) => listId.id === id);
  taskList.splice(taskListShowId, 1);
  showTask();
};

const showTask = () => {
  let html = "";
  let statusChecked = "";
  let taskCount = [];
  taskList.forEach((listId) => {
    statusChecked = listId.qwerty
      ? `   <li class="green">
                <div>
                    <div class="clmTxt">
                        <h3 id="liTitle">${listId.titulo}</h3>
                        <h3>Tarea N°<span id="idToDo">${listId.id}</span></h3>
                    </div>
                        <p id="liDescription">${listId.descripcion}</p>
                    </div>
                    <div id="bttnToDo">
                        <button onclick="erraseById(${listId.id})" id="deleteToDo" class="bttnList"><i class="fa-solid fa-trash-can fa-2xl" style="color: #f5f111;"> eliminar </i>
                    </button>

                    <div class="chckbox" onclick="statusChck(${listId.id})" id="bttnchck"><span>¿Realizaste la tarea?</span></div>                         
                </div>
            </li>
        `
      : `   <li class="blue">
                <div>
                    <div class="clmTxt">
                        <h3 id="liTitle">${listId.titulo}</h3>
                        <h3>Tarea N°<span id="idToDo">${listId.id}</span></h3>
                    </div>
                        <p id="liDescription">${listId.descripcion}</p>
                    </div>
                    <div id="bttnToDo">
                        <button onclick="erraseById(${listId.id})" id="deleteToDo" class="bttnList"><i class="fa-solid fa-trash-can fa-2xl" style="color: #f5f111;"> eliminar </i>
                    </button>

                    <div class="chckbox" onclick="statusChck(${listId.id})" id="bttnchck"><span>¿Realizaste la tarea?</span></div>                         
                </div>
            </li>
        `;

    html += `
       ${statusChecked}
        `;
    if (listId.qwerty === true) {
      taskCount.push(listId);
    }
  });

  print.innerHTML = html;
  totalTask.innerHTML = taskList.length;
  leftTask.innerHTML = taskCount.length;
};

showTask();

addTask.addEventListener("click", newTaskList);

// extrañamente si en crhome agrego esto
// addTask.addEventListener("click", () => {
//   newTaskList();
//   titleTask.value = "";
//   descriptionTask.value = "";
// });

// no lo reconoce pero mozilla si ...tiene que ver con que la consola de mozila es multilinea?? o es por el navegador en si? ...y si trate de hacerlo asi en su momento
