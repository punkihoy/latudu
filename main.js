const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("list-container");
function AddTask() {
  if (inputBox.value === "") {
    alert("Напишите что-нибудь😅");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listCont.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    inputBox.value = "";
  }
  saveData();
}

listCont.addEventListener(
  "click",
  function (x) {
    if (x.target.tagName === "LI") {
      x.target.classList.toggle("checked");
      saveData();
    } else if (x.target.tagName === "SPAN") {
      x.target.parentElement.remove();
      saveData();
    }
  },
  false
);

inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    AddTask();
  }
});

function saveData() {
  localStorage.setItem("data", listCont.innerHTML);
}

function showTask() {
  listCont.innerHTML = localStorage.getItem("data");
}

showTask();

const title = document.getElementById("title");
const character = document.getElementById("character");

title.addEventListener("click", () => {
  character.classList.add("show");

  setTimeout(() => {
    character.classList.remove("show");
  }, 3000);
});

character.addEventListener("click", () => {
  character.classList.remove("show");
});
