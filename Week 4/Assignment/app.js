 // Question 1

var numbers=[1,3,4,6,8,9]
function filterFunction(number){
    if(number%2==0){
        return number
    }
}
var evenNumbers = numbers.filter(filterFunction)
document.write(evenNumbers)


document.write("<br>")

 // Question 3

var cabs = ["careem", "uber", "bykea"]

for(i=0;i<cabs.length;i++){
    for(j=0;j<cabs.length;j++){
        if(cabs[i]!=cabs[j]){
            document.write(cabs[i]+" and "+cabs[j]+" are good services" + "<br>")

        }   

    }
}
document.write("<br>")


 // Question 4
var Array = ["cake", "apple pie", "cookie", "chips", "patties"]
var value = prompt("Enter value you want to search: ")
var toLower = value.toLowerCase()
// document.write(toLower)
document.write(Array.includes(toLower))

document.write("<br>")
document.write("<br>")
 
 
  // QUESTION NO 5

var inputName = prompt("Enter name: ")
var convertToLower = inputName.toLowerCase()
alert(convertToLower)

document.write("<br>")
document.write("<br>")


 // QUESTION NO 6

var a = "Hyderabad"
document.write(a.replace("Hyder","Islam"))


  //QUESTION 7
var a = prompt("Enter First number: ")
var b = prompt("Enter Second number: ")


function minus(a,b){
    return(document.write(a-b));  
}
function Add(a,b){
    var c = parseInt(a) + parseInt(b)
    document.write(c)
}
function product(a,b){
    return(document.write(a*b));  
}
function divide(a,b){
    return(document.write(a/b));  
}