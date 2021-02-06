function sum(){
    var name = prompt("Enter name: ");
    alert(name);
    return name;
}
var output = sum()
document.write(output)


function addition(num1,num2){
    return num1+num2
}
var additionResult = addition(3,6)


function printName(firstName,lastName){
    var fullName = firstName + " " + lastName;
    alert(fullName); 
}

function showName(){
    var nameFirst = prompt("Enter first Name: ");
    var nameLast = prompt("Enter Last Name: ");
    printName(nameFirst,nameLast);
}

showName()


// CALLBACK FUNCTION

function printNewName(firstName,lastName){
    var fullName = firstName + " " + lastName;
    return fullName;
}

function showNewName(callback){
    // alert(callback);
    
}

showNewName(printNewName);



















