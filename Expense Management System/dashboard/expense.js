var addedExpenseList = []
addedExpense = {}
var finalExpenses = [{item: "Clock" , amount: 250},{item: "nhy" , amount: 250},{item: "wah" , amount: 250}]


let addExpense = (event) => {
    event.preventDefault();
    addedExpenseList.push({"item" : document.getElementById("item").value , "amount": document.getElementById("amount").value});
    finalExpenses = addedExpenseList;

    console.log(addedExpenseList)
    // stringExpense = JSON.stringify(addedExpenseList);
    window.location.href = "expense.html"
    // expense()
}

let expensesList = () => {
    console.log("Wah")


    //body reference 
    var body = document.getElementsByTagName("body")[0];

    // create elements <table> and a <tbody>
    var tbl = document.getElementById("table");
    var tblBody = document.createElement("tbody");

    // cells creation
    for (var j = 0; j < finalExpenses.length ; j++) {
    // table row creation
    var row = document.createElement("tr");

        for (var i = 0; i < 2; i++) {
        // create element <td> and text node 
        //Make text node the contents of <td> element
        // put <td> at end of the table row
        var cell = document.createElement("td");
        // console.log(i)
        // cell.setAttribute("border","2")
        // if(i==0){
        //     textt = finalExpenses[j]["amount"]
        // }else{
// 
        // }
        i == 0 ? textt = finalExpenses[j]["item"] : textt = finalExpenses[j]["amount"];
        var cellText = document.createTextNode(textt);

        cell.appendChild(cellText);
        row.appendChild(cell);
        }

    //row added to end of table body
    tblBody.appendChild(row);

    }

    // append the <tbody> inside the <table>
    tbl.appendChild(tblBody);
    // put <table> in the <body>
    body.appendChild(tbl);
    return
    // tbl border attribute to 
    // tbl.setAttribute("border", "2");
    // tbl.setAttribute("align", "center");
}







    // var discography = finalExpenses
    // var options = {
    //     element: document.getElementById("table"),
    //     data: discography
    // };
    
    // var table = new Table(options);
    
    // table.view();
