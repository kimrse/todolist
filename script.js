let taskList = document.getElementById("task-list");

showItem();

function del(index) {
    let getLocalStorage = localStorage.getItem("newTask");
    listArray = JSON.parse(getLocalStorage);
    listArray.splice(index, 1);
    localStorage.setItem("newTask", JSON.stringify(listArray));
    showItem();
}

function newItem() {
    let userData = document.getElementById("input-task").value;
    let getLocalStorage = localStorage.getItem("newTask");
    if (getLocalStorage == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalStorage);
    }
    if (userData == "") {
        alert("The text field can't be empty");
    } else {
        listArray.push(userData);
        localStorage.setItem("newTask", JSON.stringify(listArray));
        showItem();
    }
}

function showItem(){
    let getLocalStorageData = localStorage.getItem("newTask");
    if(getLocalStorageData == null){
        listArray = [];
    }else{
        listArray = JSON.parse(getLocalStorageData);
    }
    let newLi = "";
    listArray.forEach((element, index) => {
        newLi += `
           <li><input type="checkbox"><span class="task">${element}</span><button class="delete-btn" onclick="del(${index})"></button></li>`;
    });

    taskList.innerHTML = newLi;
    document.getElementById("input-task").value = "";
}

document.getElementById("add-task-button").addEventListener("click", newItem)


