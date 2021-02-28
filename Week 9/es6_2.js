
// Non premitive variables
var studentNames = ["Abid","Raza","Naqvi"];
var a = studentNames;

a.push("Syed");


console.log("a : " , a)
console.log("student Names : " , studentNames)

// Vanilla JavaScript

var infoVanilla = {name:"Abid" , standard:"university"}
var c = Object.assign({infoVanilla:"Wah wah"},infoVanilla)
console.log("info Vanilla : " ,infoVanilla)
console.log("c : " ,c)


// Spread Operator (ES6)

var info = {name:"Abid" , standard:"university"}

var b = {...info , grade:"A1"}  // b mn as it is info uth kr ajayega or agar ham ab edit bhi karen b ko to info per koi effect nhy parega

console.log("info : " ,info)
console.log("b : ",b)

