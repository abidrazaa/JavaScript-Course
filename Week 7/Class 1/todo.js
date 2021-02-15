// created
// modified
// completed

var todoList = [];
var obj;
var serial = 1;
var length;


function add(){
    var todoAdd = document.getElementById("text").value;
    document.getElementById("text").value="";

    date = new Date().getDate().toString()
    month = new Date().getMonth().toString()
    year = new Date().getFullYear().toString()
    dated =  date + "/" + month + "/" + year;
    

    obj = {title : todoAdd , createdAt : dated , isCompleted : false };
    todoList.push(obj);
    length = todoList.length;
    
    var listt = document.createElement("LI");
    var textt = document.createTextNode(todoAdd);
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "DELETE"
    deleteButton.setAttribute("id","del")
    // deleteButton.onclick(deleteTask())
    // deleteButton.setAttribute("onclick",deleteTask)
    listt.appendChild(textt);
    listt.appendChild(deleteButton);

    document.getElementById("mylist").appendChild(listt);


}

function deleteTask(){
    console.log("Delete Task...");
    
    // var index = document.querySelectorAll("#del");
    // index[i].onclick = function(){
    //     todoList.splice(index,1);
    //     console.log(todoList)
    // }

    // var listItem=this.parentNode;
    // var ul=listItem.parentNode;
    // //Remove the parent list item from the ul.
    // ul.removeChild(listItem);
}


















function display(){
    for(i=0;i<length;i++){

        document.write("<li>" + i + ". " +todoList[i]["title"]+ "</li>" )
        
        // var cell0 = row.insertCell(0);
        // var cell1 = row.insertCell(1);
        // var cell2 = row.insertCell(2);
        // // var cell3 = row.insertCell(3);
        // // console.log(todoList[i]["title"]);
        // var object = todoList[i]
        // cell0.innerHTML = object["title"];
        // cell1.innerHTML = object["createdAt"];
        // cell2.innerHTML = object["isCompleted"];
    }
}
function deleted(){
    var index = parseInt(prompt("Enter index to delete : "));
    function deleteIndex(index){
        todoList.splice(index,1);
        document.getElementById("myTable").deleteRow(index);

    }
    deleteIndex(index);
}

function checked(){
    var index = parseInt(prompt("Enter index that is completed : "));
    function completed(index){
        todoList[index]["isCompleted"] = true
        console.log(todoList);
    }
    completed(index);
}
// function deleteRow(){
    // document.getElementById("myTable").deleteRow(length);
    // todoList.pop()

// }





function isCompleted(){
    isCompleted = true
}


function myFunction() {
    
  }



// add()