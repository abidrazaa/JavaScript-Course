var getName = function () {
    return "ABID"
}

console.log("name : ", getName())


// Arrow function

var getNameByArrow = () => {
    return "Abid"
}

// if function is one liner

var shortestArrowFunction = () => "Abid"
console.log("name by Shortest arrow: ", shortestArrowFunction())

console.log("name by arrow: ", getNameByArrow())



// Arrow function with parameters

var getUniversityName = (uniName) => uniName;

console.log("University name :", getUniversityName("NED "))


var fullName = (firstName,lastName) => {
    return `My name is ${firstName} ${lastName} using back ticks`     // back ticks
}

console.log(fullName("Syed","Abid"))




// objects

studentsData = {
        name:"abid",
        classCode: "Ex-MS-11"
    };


var {name, classCode} = studentsData;
// var {name , class } =studentsData;

studentNames = ["Abid","Tajammul","Bhai"];

var [name1,name2,name3] = studentNames;

console.log("first name" , name1)
console.log("Second name" , name2)
console.log("Third name" , name3)

