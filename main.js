let add = document.getElementById("add");
let updated = document.getElementById("update");
let complete = document.getElementById("complete");
let notComplete = document.getElementById("notComplete");
let delate = document.getElementById("delete");
let element = document.getElementsByClassName("first");
let neww = document.getElementById("neww");
let variable = document.getElementById("inbtn");
let buttn = document.getElementById("load");
let tasks = [];
add.addEventListener("click", addElement);
updated.addEventListener("click", updateElement);
delate.addEventListener("click", delateElement);
complete.addEventListener("click", completeElement);
function fillArray() {
  let date = new Date();
  let dateNow =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  let taskN = {
    title: variable.value,
    date: dateNow,
  };
  tasks.push(taskN);
}

function addElement() {
  variable.style.display = "block";
  buttn.style.display = "block";
  add.style.display = "none";
  console.log(0);
  buttn.onclick = function () {
    if (variable.value == "") {
      document.getElementById("model").style.display = "block";
    } else {
      document.getElementById("body").innerHTML = "";
      variable.style.display = "none";
      buttn.style.display = "none";
      add.style.display = "block";
      fillArray();
      for (task of tasks) {
        let content = `
        <div class="first" id="first">
                <div class="icons-div">
                  <i id="update" class="fa-solid fa-pen"></i>
                    <i id="complete" class="fa-solid fa-check"></i>
                    <i id="notComplete" class="fa-solid fa-xmark"></i>
                  <i id="delete" class="fa-solid fa-trash"></i>
                </div>
                <div class="task">
                  <p class="paragraph" id="paragraph">${task.title}</p>
                <div class="calender">
                <h5 id="date">${task.date}</h5>
                <i class="fa-solid fa-calendar-days"></i>
                </div>
                </div>
                </div>
                `;
        document.getElementById("body").innerHTML += content;
        variable.value = "";
        completeElement();
        delateElement();
        updateElement();
      }
    }
  };
}
// formatting task when completed
function completeElement() {
  let completed = document.getElementsByClassName("fa-check");
  let notCompleted = document.getElementsByClassName("fa-xmark");
  for (let i = 0; i < completed.length; i++) {
    completed[i].onclick = function () {
        element[i].classList.toggle("complete");
        console.log(element[i].getAttribute("id")!="complete");
        completed[i].style.display = "none";
        notCompleted[i].style.display = "block";
      }

    notCompleted[i].onclick = function () {
        element[i].classList.toggle("complete");
        completed[i].style.display = "block";
        notCompleted[i].style.display = "none";
      }
    };
  }

//deleting task from toDo tasks
function delateElement() {
  let deleters = document.getElementsByClassName("fa-trash");
  for (let i = 0; i < deleters.length; i++) {
    deleters[i].onclick = function () {
      element[i].style.display = "none";
      tasks.splice(i, 1);
    };
  }
}
//updating task from toDo tasks
function updateElement() {
  let updatrs = document.getElementsByClassName("fa-pen");
  let paragraphs = document.getElementsByClassName("paragraph");
  for (let i = 0; i < updatrs.length; i++) {
    updatrs[i].onclick = function () {
      variable.style.display = "block";
      buttn.style.display = "block";
      add.style.display = "none";
      variable.value = paragraphs[i].textContent;
      buttn.onclick = function () {
        if (variable.value == "") {
          document.getElementById("model").style.display = "block";
        } else {
          variable.style.display = "none";
          buttn.style.display = "none";
          add.style.display = "block";
          paragraphs[i].textContent = variable.value;
          variable.value="";
        }
      };
    };
  }
}

// disappear model
function model() {
  document.getElementById("model").style.display = "none";
}
