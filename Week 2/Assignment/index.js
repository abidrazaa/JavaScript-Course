var num = prompt("enter number: ");
if(num%2==0){
    console.log(num + "is Even");
}else{
    console.log(num + "is odd");
}


var day = prompt("enter day number: ");
console.log(day);
if(day==1){
    console.log("Monday");
}else if(day==2){
    console.log("Tuesday");
}else if(day==3){
    console.log("Wednesday");
}else if(day==4){
    console.log("Thursday");
}else if(day==5){
    console.log("Friday");
}else if(day==6){
    console.log("Saturday");
}else if(day==7){
    console.log("Sunday");
}else{
    console.error("Enter valid number");
}




var number = 9;
var i;
for(i=1; i<11;i++){
    console.log(number +"*"+ i +" = "+ number*i);
}



alert("Welcome To Farenheit/Celcius Convertor");
var userInput = prompt("1.Fahrenheit to Celcius "+"\n"+"2.Celcius to Fahrenheit");
var temperature = prompt("enter temperature:");

if(userInput==1){
    var temp = temperature * (9/5) + 32;
}else if(userInput == 2){
    var temp = (temperature-32)*(5/9);
}else{
    console.error("enter valid number in conversion choice");
}


