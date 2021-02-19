var todoList = [];
var obj;
var serial = 1;
var length;
var reInitializeGUI;

function add(){

    var todoAdd = document.getElementById("text").value;
    document.getElementById("text").value="";

    date = new Date().getDate().toString()
    month = new Date().getMonth().toString()
    year = new Date().getFullYear().toString()
    dated =  date + "/" + month + "/" + year;
    

    obj = {title : todoAdd , createdAt : dated , isCompleted : false };
    todoList.push(obj);

    reInitializeGUI = document.querySelector(".mylist")
    
    renderKarao()

}

function renderKarao(){
    // document.getElementById("mylist") = "";
    // reInitializeGUI.innerHTML = "";
    $('ol').empty();
    todoList.map((todo,index) => {

        var listt = document.createElement("LI")
        var deleteButton = document.createElement("button");
        deleteButton.onclick = () => deleteTask(index);
        var textt = document.createTextNode(todo.title);
        deleteButton.innerText = "DELETE"
        listt.appendChild(textt);
        listt.appendChild(deleteButton);
        document.getElementById("mylist").appendChild(listt);


    })


    

}


function deleteTask(index){

    todoList.splice(index,1)
    renderKarao()
    console.log("Delete Task...");

}














