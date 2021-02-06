var total = 0;
for(i=0;i<101;i++){
    var total = total + i;
}
document.write("Total Sum = "+total);   

document.write("<br>")

var sum = 0;
document.write("Counting = ")

for(i=1;i<16;i++){
    
    document.write(i+",")
}

document.write("<br>")


var sum = 0;
document.write("Reverse counting = ")

for(i=10;i>0;i--){
    
    document.write(i+",")
}


document.write("<br>")

var sum = 0;
document.write("Even = ")

for(i=0;i<21;i=i+2){
    
    document.write(i+",")
}


document.write("<br>")

var sum = 0;
document.write("Odd = ")

for(i=1;i<21;i=i+2){
    
    document.write(i+",")
}

document.write("<br>")
document.write("<br>")

var name = prompt("Enter name to convert in upper case: ")
var upperCase = name.toUpperCase();
document.write("Upper Case : " + upperCase);


document.write("<br>")
document.write("<br>")

var colorList = ["red","green","blue","yellow","orange"]
var beginning = prompt("Enter color to add at the beginning : ")
colorList.unshift(beginning);
alert(colorList);

var end = prompt("Enter color to add at the end : ")
colorList.push(end);
alert(colorList);

colorList.push("pink");
colorList.push("purple");
alert(colorList);

colorList.shift();
alert(colorList);

colorList.pop();
alert(colorList);

var colorIndex = prompt("color index: ")
var colorName = prompt("color name: ")
colorList.splice(colorIndex,0,colorName);
alert(colorList);


var colorIndex = prompt("color index to delete: ")
var colorName = prompt("how many: ")
colorList.splice(colorIndex,colorName);
alert(colorList);


